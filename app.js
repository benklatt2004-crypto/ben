/* ====================================================================
   AP2 Lernplan – App-Logik
   Reines Vanilla-JS, Speicherung via localStorage.
   Schwerpunkt: viel Bewegung & Interaktivität.
   ==================================================================== */

const STORE_KEY = "ap2-lernplan-v1";

// ---- State ----------------------------------------------------------
const defaultState = () => ({
  done: {}, // lessonId -> true
  reps: {}, // lessonId -> Anzahl absolvierter Wiederholungen der Inhaltsabfrage
  best: {}, // lessonId -> beste Quote (Anzahl richtig) der Inhaltsabfrage
  lastPass: {}, // lessonId -> Zeitstempel (ms) des letzten Bestehens (für Spaced Repetition)
  stats: {}, // lessonId -> { answered, wrong } für die Fehler-Auswertung
  sessions: [], // { id, date, hours, lessons: [lessonId] }
  reduceMotion: false,
});

// Spaced Repetition: Wiederholungsintervall (Tage) wächst mit der Anzahl Wiederholungen
function reviewIntervalDays(reps) {
  const steps = [3, 7, 16, 35, 90, 180];
  return steps[Math.min(reps, steps.length - 1)];
}
// Fällig, wenn bestanden, aber das Intervall seit dem letzten Bestehen abgelaufen ist
function isDue(id) {
  if (!state.done[id]) return false;
  const last = state.lastPass[id];
  if (!last) return false;
  const days = reviewIntervalDays(state.reps[id] || 0);
  return Date.now() >= last + days * 86400000;
}
function dueLessons() {
  return allLessons().filter((l) => isDue(l.id));
}

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return { ...defaultState(), ...JSON.parse(raw) };
  } catch (e) {
    console.warn("State konnte nicht geladen werden", e);
  }
  return defaultState();
}
function saveState() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("State konnte nicht gespeichert werden", e);
  }
}

// ---- Helpers --------------------------------------------------------
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const allLessons = () =>
  CURRICULUM.flatMap((a) => a.lessons.map((l) => ({ ...l, area: a })));
const lessonById = (id) => allLessons().find((l) => l.id === id);
const prefersReduced =
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const motionOn = () => !prefersReduced && !state.reduceMotion;

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}

// ---- Animated number counter ---------------------------------------
function animateNumber(node, to, { suffix = "", duration = 900 } = {}) {
  if (!motionOn()) {
    node.textContent = to + suffix;
    return;
  }
  const from = 0;
  const start = performance.now();
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  function frame(now) {
    const p = Math.min((now - start) / duration, 1);
    node.textContent = Math.round(from + (to - from) * ease(p)) + suffix;
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

// ---- Scroll reveal (stagger) ---------------------------------------
const revealObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              entry.target.style.transitionDelay =
                (entry.target.dataset.delay || 0) + "ms";
              entry.target.classList.add("revealed");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 }
      )
    : null;

function reveal(nodes) {
  nodes.forEach((n, i) => {
    n.classList.add("reveal");
    n.dataset.delay = motionOn() ? (i % 8) * 55 : 0;
    if (revealObserver && motionOn()) revealObserver.observe(n);
    else n.classList.add("revealed");
  });
}

// ---- Confetti -------------------------------------------------------
function confettiBurst(x, y) {
  if (!motionOn()) return;
  const colors = ["#2563eb", "#7c3aed", "#059669", "#d97706", "#dc2626", "#22c55e"];
  const n = 28;
  for (let i = 0; i < n; i++) {
    const p = el("span", "confetti");
    const c = colors[i % colors.length];
    p.style.background = c;
    p.style.left = x + "px";
    p.style.top = y + "px";
    const ang = (Math.PI * 2 * i) / n + Math.random();
    const dist = 60 + Math.random() * 120;
    const dx = Math.cos(ang) * dist;
    const dy = Math.sin(ang) * dist - 40;
    p.style.setProperty("--dx", dx + "px");
    p.style.setProperty("--dy", dy + "px");
    p.style.setProperty("--rot", Math.random() * 720 - 360 + "deg");
    document.body.appendChild(p);
    p.addEventListener("animationend", () => p.remove());
  }
}

// ---- Toast ----------------------------------------------------------
let toastTimer;
function toast(msg) {
  let t = $("#toast");
  if (!t) {
    t = el("div", "toast");
    t.id = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

// ---- Ripple on buttons ---------------------------------------------
function attachRipples(root = document) {
  $$(".btn, .quiz-opt, .area-card", root).forEach((b) => {
    if (b.dataset.ripple) return;
    b.dataset.ripple = "1";
    b.addEventListener("click", (e) => {
      if (!motionOn()) return;
      const r = b.getBoundingClientRect();
      const span = el("span", "ripple");
      const size = Math.max(r.width, r.height);
      span.style.width = span.style.height = size + "px";
      span.style.left = e.clientX - r.left - size / 2 + "px";
      span.style.top = e.clientY - r.top - size / 2 + "px";
      b.appendChild(span);
      span.addEventListener("animationend", () => span.remove());
    });
  });
}

/* ====================================================================
   NAVIGATION
   ==================================================================== */
function switchView(name) {
  $$(".tab").forEach((t) => t.classList.toggle("active", t.dataset.view === name));
  $$(".view").forEach((v) => v.classList.remove("active"));
  const target = $("#view-" + name);
  target.classList.add("active");
  window.scrollTo({ top: 0, behavior: motionOn() ? "smooth" : "auto" });

  if (name === "dashboard") renderDashboard();
  if (name === "lehrplan") renderLehrplan();
  if (name === "phasen") renderPhasen();
  if (name === "auswertung") renderAuswertung();
  if (name === "fragen") renderFragen();
  if (name === "planer") renderPlaner();
}

/* ====================================================================
   PHASENPLAN
   ==================================================================== */
function renderPhasen() {
  const wrap = $("#phasen-content");
  if (!wrap) return;
  wrap.innerHTML = "";
  PHASES.forEach((p) => {
    const card = el("div", "phase-card");
    card.style.borderTopColor = p.color;
    card.innerHTML = `
      <div class="phase-nr" style="background:${p.color}">${p.nr}</div>
      <h3>${p.title}</h3>
      <div class="phase-period">${p.period}</div>
      <p class="phase-goal"><strong>Ziel:</strong> ${p.goal}</p>
      <ul class="phase-tasks">${p.tasks.map((t) => `<li>${t}</li>`).join("")}</ul>`;
    wrap.appendChild(card);
  });
  reveal($$(".phase-card", wrap));
}

$("#tabs").addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (tab) switchView(tab.dataset.view);
});

/* ====================================================================
   DASHBOARD
   ==================================================================== */
function renderDashboard() {
  // Schedule banner
  const banner = $("#schedule-banner");
  banner.innerHTML = "";
  [SESSION_RULE.startInfo, SESSION_RULE.rhythm, SESSION_RULE.note].forEach((s) => {
    banner.appendChild(el("span", null, s));
  });

  const lessons = allLessons();
  const total = lessons.length;
  const doneCount = lessons.filter((l) => state.done[l.id]).length;
  const totalHours = lessons.reduce((s, l) => s + (l.hours || 0), 0);
  const plannedHours = state.sessions.reduce((s, x) => s + Number(x.hours || 0), 0);
  const pct = total ? Math.round((doneCount / total) * 100) : 0;

  const totalReps = Object.values(state.reps || {}).reduce((s, n) => s + Number(n || 0), 0);
  const stats = [
    { num: doneCount, of: total, label: "Einheiten bestanden", suffix: "" },
    { num: pct, label: "Fortschritt", suffix: "%" },
    { num: totalReps, label: "Abfrage-Wiederholungen", suffix: "" },
    { num: totalHours, label: "Lernstunden / Durchgang", suffix: " h" },
  ];
  const grid = $("#stat-grid");
  grid.innerHTML = "";
  stats.forEach((s) => {
    const card = el("div", "stat");
    const num = el("div", "num", "0");
    card.appendChild(num);
    card.appendChild(
      el("div", "label", s.of ? `${s.label} (von ${s.of})` : s.label)
    );
    grid.appendChild(card);
    animateNumber(num, s.num, { suffix: s.suffix });
  });

  // Area cards
  const ag = $("#area-grid");
  ag.innerHTML = "";
  CURRICULUM.forEach((a) => {
    const aDone = a.lessons.filter((l) => state.done[l.id]).length;
    const aPct = a.lessons.length ? Math.round((aDone / a.lessons.length) * 100) : 0;
    const card = el("div", "area-card");
    card.style.borderLeftColor = a.color;
    card.innerHTML = `
      <div class="code">${a.code}</div>
      <h4>${a.title}</h4>
      <div class="form">${a.form}</div>
      <div class="mini-progress"><div style="width:0;background:${a.color}"></div></div>
      <div class="mini-label">${aDone}/${a.lessons.length} Einheiten · ${aPct}%</div>`;
    card.addEventListener("click", () => {
      switchView("lehrplan");
      setTimeout(() => {
        const block = $("#area-" + a.id);
        if (block) {
          block.scrollIntoView({ behavior: "smooth", block: "start" });
          block.classList.add("flash");
          setTimeout(() => block.classList.remove("flash"), 1200);
        }
      }, 120);
    });
    ag.appendChild(card);
    requestAnimationFrame(() => {
      setTimeout(() => {
        const bar = $(".mini-progress > div", card);
        if (bar) bar.style.width = aPct + "%";
      }, 200);
    });
  });

  // Next up
  const nextWrap = $("#next-up-content");
  nextWrap.innerHTML = "";
  const next = lessons.filter((l) => !state.done[l.id]).slice(0, 4);
  if (next.length === 0) {
    nextWrap.innerHTML = `<p class="muted">🎉 Alle Einheiten abgeschlossen – stark! Wiederhole gezielt deine Schwachstellen.</p>`;
  } else {
    next.forEach((l) => {
      const row = el("div", "next-lesson");
      row.innerHTML = `
        <span class="dot" style="background:${l.area.color}"></span>
        <div class="meta"><strong>${l.title}</strong><span>${l.area.title} · ${l.hours} h</span></div>`;
      row.style.cursor = "pointer";
      row.addEventListener("click", () => switchView("lehrplan"));
      nextWrap.appendChild(row);
    });
  }

  // Heute fällige Wiederholungen (Spaced Repetition)
  const dueWrap = $("#due-section");
  if (dueWrap) {
    const due = dueLessons();
    if (due.length === 0) {
      dueWrap.hidden = true;
      dueWrap.innerHTML = "";
    } else {
      dueWrap.hidden = false;
      dueWrap.innerHTML = `<h3>🔁 Heute zur Wiederholung fällig (${due.length})</h3>`;
      due.forEach((l) => {
        const row = el("div", "next-lesson");
        row.innerHTML = `
          <span class="dot" style="background:${l.area.color}"></span>
          <div class="meta"><strong>${l.title}</strong><span>${l.area.title} · ${(state.reps[l.id] || 0)}× wiederholt</span></div>
          <span class="due-tag">fällig</span>`;
        row.style.cursor = "pointer";
        row.addEventListener("click", () => {
          switchView("lehrplan");
          setTimeout(() => {
            const ln = $("#lesson-" + l.id);
            if (ln) {
              ln.classList.add("open");
              ln.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 140);
        });
        dueWrap.appendChild(row);
      });
    }
  }

  reveal($$(".stat, .area-card", $("#view-dashboard")));
  attachRipples($("#view-dashboard"));
}

/* ====================================================================
   AUSWERTUNG (eigener Tab)
   ==================================================================== */
function renderAuswertung() {
  const wrap = $("#auswertung-content");
  if (!wrap) return;

  const entries = allLessons()
    .map((l) => ({ l, s: state.stats[l.id] }))
    .filter((e) => e.s && e.s.answered > 0);

  if (entries.length === 0) {
    wrap.innerHTML =
      `<div class="card"><p class="muted">Noch keine Inhaltsabfragen beantwortet. Sobald du im Lehrplan Fragen löst, siehst du hier, wo du am häufigsten danebenliegst – insgesamt, pro Prüfungsbereich und pro Einheit.</p></div>`;
    return;
  }

  const totalAns = entries.reduce((s, e) => s + e.s.answered, 0);
  const totalWrong = entries.reduce((s, e) => s + e.s.wrong, 0);
  const totalRate = totalAns ? Math.round((totalWrong / totalAns) * 100) : 0;
  const lessonsTried = entries.length;

  // KPI-Karten
  let html =
    `<div class="eval-head"><h3 style="margin:0">📊 Überblick</h3>` +
    `<button class="btn ghost small" id="eval-reset">Statistik zurücksetzen</button></div>` +
    `<div class="eval-summary">` +
    `<div class="eval-kpi"><span class="num">${totalWrong}</span><span class="lbl">Fehler gesamt</span></div>` +
    `<div class="eval-kpi"><span class="num">${totalAns}</span><span class="lbl">beantwortete Fragen</span></div>` +
    `<div class="eval-kpi"><span class="num">${totalRate}%</span><span class="lbl">Fehlerquote</span></div>` +
    `<div class="eval-kpi"><span class="num">${lessonsTried}</span><span class="lbl">bearbeitete Einheiten</span></div>` +
    `</div>`;

  // Aufschlüsselung pro Prüfungsbereich
  html += `<h3 class="section-title">Pro Prüfungsbereich</h3><div class="eval-list">`;
  CURRICULUM.forEach((a) => {
    let aAns = 0;
    let aWrong = 0;
    a.lessons.forEach((l) => {
      const s = state.stats[l.id];
      if (s) {
        aAns += s.answered;
        aWrong += s.wrong;
      }
    });
    if (aAns === 0) return;
    const rate = Math.round((aWrong / aAns) * 100);
    html +=
      `<div class="eval-row">` +
      `<span class="dot" style="background:${a.color}"></span>` +
      `<span class="eval-name">${a.title}</span>` +
      `<span class="eval-bartrack"><span class="eval-bar" style="width:${rate}%;background:${a.color}"></span></span>` +
      `<span class="eval-count">${aWrong} / ${aAns} falsch · ${rate}%</span>` +
      `</div>`;
  });
  html += `</div>`;

  // Alle bearbeiteten Einheiten, nach Fehlerquote sortiert
  const ranked = entries
    .slice()
    .sort(
      (a, b) =>
        b.s.wrong / b.s.answered - a.s.wrong / a.s.answered || b.s.wrong - a.s.wrong
    );
  html += `<h3 class="section-title">Pro Einheit (nach Fehlerquote)</h3><div class="eval-list">`;
  ranked.forEach(({ l, s }) => {
    const rate = Math.round((s.wrong / s.answered) * 100);
    const clean = s.wrong === 0;
    html +=
      `<div class="eval-row" data-id="${l.id}">` +
      `<span class="dot" style="background:${l.area.color}"></span>` +
      `<span class="eval-name">${l.title}${clean ? ' <span class="eval-clean">✓ fehlerfrei</span>' : ""}</span>` +
      `<span class="eval-bartrack"><span class="eval-bar" style="width:${rate}%;background:${rate === 0 ? "#16a34a" : l.area.color}"></span></span>` +
      `<span class="eval-count">${s.wrong}× falsch · ${rate}%</span>` +
      `</div>`;
  });
  html += `</div>`;

  wrap.innerHTML = html;

  // Klick auf eine Einheit-Zeile springt zur Einheit im Lehrplan
  $$(".eval-row[data-id]", wrap).forEach((row) => {
    row.style.cursor = "pointer";
    row.addEventListener("click", () => {
      const id = row.dataset.id;
      switchView("lehrplan");
      setTimeout(() => {
        const ln = $("#lesson-" + id);
        if (ln) {
          ln.classList.add("open");
          ln.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 140);
    });
  });

  const resetBtn = $("#eval-reset", wrap);
  if (resetBtn)
    resetBtn.addEventListener("click", () => {
      if (confirm("Fehler-Statistik wirklich zurücksetzen?")) {
        state.stats = {};
        saveState();
        renderAuswertung();
        toast("Fehler-Statistik zurückgesetzt.");
      }
    });

  reveal($$(".eval-kpi, .eval-row", wrap));
  attachRipples(wrap);
}

/* ====================================================================
   LEHRPLAN
   ==================================================================== */
function renderLehrplan() {
  const wrap = $("#lehrplan-content");
  wrap.innerHTML = "";

  CURRICULUM.forEach((a) => {
    const block = el("div", "area-block");
    block.id = "area-" + a.id;

    const head = el("div", "area-head");
    head.innerHTML = `
      <div class="bar" style="background:${a.color}"></div>
      <div>
        <h3>${a.title}</h3>
        <div class="form">${a.code} · ${a.form}</div>
      </div>`;
    block.appendChild(head);
    block.appendChild(el("div", "area-intro", a.intro));

    a.lessons.forEach((l) => {
      const done = !!state.done[l.id];
      const reps = state.reps[l.id] || 0;
      const wrong = (state.stats[l.id] && state.stats[l.id].wrong) || 0;
      const quiz = lessonQuiz(l);
      const dueNow = isDue(l.id);
      const lesson = el("div", "lesson" + (done ? " done" : "") + (dueNow ? " due" : ""));
      lesson.id = "lesson-" + l.id;
      lesson.innerHTML = `
        <div class="lesson-head">
          <div class="lesson-check" role="checkbox" aria-checked="${done}" tabindex="0">✓</div>
          <div class="lesson-title">${l.title}</div>
          <span class="due-badge" ${dueNow ? "" : "hidden"}>🔁 Wiederholung fällig</span>
          <span class="wrong-badge" ${wrong ? "" : "hidden"} title="bisher falsch beantwortet">✗ ${wrong}</span>
          <span class="rep-badge" ${reps ? "" : "hidden"}>${reps}× wiederholt</span>
          <div class="lesson-hours">${l.hours} h</div>
          <div class="chev">▶</div>
        </div>
        <div class="lesson-body">
          <div class="learn">${l.learn || ""}</div>
          <div class="kurz"><h5>Kurzüberblick</h5><ul>${l.topics.map((t) => `<li>${t}</li>`).join("")}</ul></div>
          <div class="exam-focus"><strong>So wird's geprüft:</strong> ${l.examFocus}</div>
          <div class="lesson-quiz">
            <div class="lq-head">📝 Inhaltsabfrage <span class="lq-score"></span></div>
            <div class="lq-body"></div>
            <div class="lq-foot"></div>
          </div>
        </div>`;

      const headEl = $(".lesson-head", lesson);
      const check = $(".lesson-check", lesson);

      headEl.addEventListener("click", (e) => {
        if (e.target === check) return;
        lesson.classList.toggle("open");
      });
      const setDone = (nowDone, fromQuiz) => {
        if (nowDone) {
          state.done[l.id] = true;
          if (!fromQuiz) {
            const r = check.getBoundingClientRect();
            confettiBurst(r.left + r.width / 2, r.top + r.height / 2);
            toast(`„${l.title}" abgehakt – weiter so!`);
          }
        } else {
          delete state.done[l.id];
        }
        lesson.classList.toggle("done", nowDone);
        check.setAttribute("aria-checked", String(nowDone));
        saveState();
        updateLehrplanProgress();
      };
      const toggleDone = (e) => {
        e.stopPropagation();
        setDone(!state.done[l.id], false);
      };
      check.addEventListener("click", toggleDone);
      check.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") toggleDone(e);
      });

      // Inhaltsabfrage aufbauen
      if (quiz.length) {
        renderLessonQuiz(lesson, l, quiz, setDone);
      } else {
        $(".lesson-quiz", lesson).hidden = true;
      }

      block.appendChild(lesson);
    });

    wrap.appendChild(block);
  });

  updateLehrplanProgress();
  reveal($$(".lesson", wrap));
}

function updateLehrplanProgress() {
  const lessons = allLessons();
  const done = lessons.filter((l) => state.done[l.id]).length;
  const pct = lessons.length ? Math.round((done / lessons.length) * 100) : 0;
  const fill = $("#lehrplan-progress");
  if (fill) fill.style.width = pct + "%";
  const label = $("#lehrplan-progress-label");
  if (label) label.textContent = `${done}/${lessons.length} · ${pct}%`;
}

// Vollständiger Fragenpool einer Einheit: Basisfragen + optionale Zusatzfragen
function lessonQuiz(l) {
  const extra = (typeof EXTRA_QUIZ !== "undefined" && EXTRA_QUIZ[l.id]) || [];
  return (l.quiz || []).concat(extra);
}

// Wie viele Fragen je Durchgang gezeigt werden
const QUIZ_PER_ROUND = 6;

// Aus dem Pool die Fragen für den aktuellen Durchgang wählen (rotierend nach reps).
// So sieht man bei Wiederholungen andere Fragen, bis der Pool durch ist.
function pickRoundQuestions(pool, reps) {
  const show = QUIZ_PER_ROUND;
  if (pool.length <= show) return pool.slice();
  const rounds = Math.ceil(pool.length / show);
  const start = ((reps % rounds) + rounds) % rounds * show;
  let sel = pool.slice(start, start + show);
  if (sel.length < show) sel = sel.concat(pool.slice(0, show - sel.length));
  return sel;
}

// Array mischen (Fisher–Yates) – ohne Original zu verändern
function shuffled(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Einen Durchgang aufbauen: Fragenreihenfolge und Antwortoptionen mischen,
// damit Wiederholungen nicht zum Auswendiglernen von Positionen werden.
function makeQuizRound(quiz) {
  return shuffled(quiz).map((q) => {
    const order = shuffled(q.opts.map((text, idx) => ({ text, idx })));
    return {
      q: q.q,
      fb: q.fb,
      opts: order.map((o) => o.text),
      correct: order.findIndex((o) => o.idx === q.correct),
    };
  });
}

// Inhaltsabfrage einer Lerneinheit aufbauen (frischer, gemischter Durchgang)
function renderLessonQuiz(lesson, l, quiz, setDone) {
  const body = $(".lq-body", lesson);
  const foot = $(".lq-foot", lesson);
  const scoreEl = $(".lq-score", lesson);
  const repBadge = $(".rep-badge", lesson);
  const reps = state.reps[l.id] || 0;
  const round = makeQuizRound(pickRoundQuestions(quiz, reps));
  const pass = Math.ceil(round.length * 0.6); // ab 60 % gilt als bestanden

  // Hinweis, welcher Fragensatz aus dem Pool gerade läuft
  const head = $(".lq-head", lesson);
  if (head) {
    let info = $(".lq-round", head);
    if (!info) {
      info = el("span", "lq-round");
      head.appendChild(info);
    }
    if (quiz.length > QUIZ_PER_ROUND) {
      const rounds = Math.ceil(quiz.length / QUIZ_PER_ROUND);
      info.textContent = `Satz ${(reps % rounds) + 1}/${rounds} · ${quiz.length} Fragen im Pool`;
    } else {
      info.textContent = "";
    }
  }

  body.innerHTML = "";
  foot.innerHTML = "";
  scoreEl.textContent = "";

  let answered = 0;
  let correct = 0;

  round.forEach((q, qi) => {
    const item = el("div", "lq-q");
    const opts = q.opts
      .map((o, oi) => `<button class="lq-opt" data-o="${oi}">${o}</button>`)
      .join("");
    item.innerHTML = `
      <div class="lq-frage">${qi + 1}. ${q.q}</div>
      <div class="lq-opts">${opts}</div>
      <div class="lq-fb">${q.fb}</div>`;
    body.appendChild(item);

    $$(".lq-opt", item).forEach((btn) => {
      btn.addEventListener("click", () => {
        if (item.classList.contains("answered")) return;
        item.classList.add("answered");
        const chosen = +btn.dataset.o;
        $$(".lq-opt", item).forEach((b) => {
          const bo = +b.dataset.o;
          if (bo === q.correct) b.classList.add("correct");
          else if (b === btn) b.classList.add("wrong");
        });
        answered++;
        const st = (state.stats[l.id] = state.stats[l.id] || { answered: 0, wrong: 0 });
        st.answered++;
        if (chosen === q.correct) correct++;
        else st.wrong++;
        saveState();

        if (answered === round.length) finishQuiz();
      });
    });
  });

  function finishQuiz() {
    scoreEl.textContent = `${correct}/${quiz.length} richtig`;
    scoreEl.className = "lq-score " + (correct >= pass ? "ok" : "fail");

    // beste Quote merken
    if ((state.best[l.id] || 0) < correct) state.best[l.id] = correct;

    foot.innerHTML = "";
    const msg = el(
      "div",
      "lq-msg",
      correct >= pass
        ? `✅ Bestanden! ${correct}/${quiz.length} richtig.`
        : `🔁 Noch nicht sicher (${correct}/${quiz.length}). Inhalt nochmal ansehen und wiederholen.`
    );
    foot.appendChild(msg);

    const retry = el("button", "btn ghost lq-retry", "↻ Abfrage wiederholen");
    retry.addEventListener("click", () => {
      state.reps[l.id] = (state.reps[l.id] || 0) + 1;
      if (repBadge) {
        repBadge.hidden = false;
        repBadge.textContent = `${state.reps[l.id]}× wiederholt`;
      }
      saveState();
      renderLessonQuiz(lesson, l, quiz, setDone); // frischer Durchgang
    });
    foot.appendChild(retry);

    if (correct >= pass) {
      // Bestanden: Zeitstempel für Spaced Repetition setzen, Fälligkeit aufheben
      const wasDone = !!state.done[l.id];
      state.lastPass[l.id] = Date.now();
      lesson.classList.remove("due");
      const dueB = $(".due-badge", lesson);
      if (dueB) dueB.hidden = true;
      if (!wasDone) {
        setDone(true, true);
        const r = scoreEl.getBoundingClientRect();
        confettiBurst(r.left + r.width / 2, r.top + r.height / 2);
        toast(`Inhaltsabfrage „${l.title}" bestanden! ✅`);
      } else {
        toast(`Wiederholung „${l.title}" geschafft – nächste Auffrischung in ${reviewIntervalDays(state.reps[l.id] || 0)} Tagen.`);
      }
    }
    saveState();
  }
}

/* ====================================================================
   PRÜFUNGSFRAGEN VERSTEHEN
   ==================================================================== */
function renderFragen() {
  const opWrap = $("#operatoren-content");
  opWrap.innerHTML = "";
  OPERATOREN.forEach((g) => {
    const block = el("div", "op-block");
    const head = el("div", "op-head");
    head.style.background = g.color;
    head.innerHTML = `<h4>${g.bereich}</h4><p>${g.desc}</p>`;
    block.appendChild(head);
    const table = el("div", "op-table");
    g.items.forEach((it) => {
      const row = el("div", "op-row");
      row.innerHTML = `
        <div class="op-cell op-name">${it.op}</div>
        <div class="op-cell op-detail">
          <span class="erkl">${it.erklaerung}</span>
          <span class="tipp">${it.tipp}</span>
        </div>`;
      table.appendChild(row);
    });
    block.appendChild(table);
    opWrap.appendChild(block);
  });

  const tipWrap = $("#tipp-content");
  tipWrap.innerHTML = "";
  STRATEGIE_TIPPS.forEach((t) => {
    tipWrap.appendChild(el("div", "tipp", `<h4>${t.titel}</h4><p>${t.text}</p>`));
  });

  renderQuiz();

  reveal($$(".op-block, .tipp", $("#view-fragen")));
  attachRipples($("#view-fragen"));
}

const QUIZ = [
  {
    frage: "„Beurteilen Sie, ob das Unternehmen den Zusatzauftrag annehmen sollte.\"",
    opts: ["Reproduktion (I)", "Transfer (II)", "Bewertung (III)"],
    correct: 2,
    fb: "„Beurteilen\" verlangt ein begründetes Urteil mit Abwägung und Fazit – Anforderungsbereich III.",
  },
  {
    frage: "„Nennen Sie drei Aufgaben der Personalabteilung.\"",
    opts: ["Reproduktion (I)", "Transfer (II)", "Bewertung (III)"],
    correct: 0,
    fb: "„Nennen\" ist reines Wiedergeben von Wissen – Anforderungsbereich I. Genau 3 nennen!",
  },
  {
    frage: "„Berechnen Sie den Deckungsbeitrag und erläutern Sie das Ergebnis.\"",
    opts: ["Reproduktion (I)", "Transfer (II)", "Bewertung (III)"],
    correct: 1,
    fb: "Berechnen + Erläutern = Anwenden/Übertragen → Anforderungsbereich II. Rechenweg zeigen, dann interpretieren.",
  },
  {
    frage: "„Entwickeln Sie eine Marketingmaßnahme für das Fallunternehmen.\"",
    opts: ["Reproduktion (I)", "Transfer (II)", "Bewertung (III)"],
    correct: 2,
    fb: "Eine eigene Lösung erstellen und auf den Fall beziehen – Anforderungsbereich III.",
  },
];

function renderQuiz() {
  const wrap = $("#quiz-content");
  wrap.innerHTML = "";
  QUIZ.forEach((q, qi) => {
    const item = el("div", "quiz-q");
    const opts = q.opts
      .map((o, oi) => `<button class="quiz-opt" data-q="${qi}" data-o="${oi}">${o}</button>`)
      .join("");
    item.innerHTML = `
      <div class="frage">${q.frage}</div>
      <div class="quiz-opts">${opts}</div>
      <div class="quiz-feedback">${q.fb}</div>`;
    wrap.appendChild(item);
  });

  $$(".quiz-opt", wrap).forEach((btn) => {
    btn.addEventListener("click", () => {
      const qi = +btn.dataset.q;
      const oi = +btn.dataset.o;
      const q = QUIZ[qi];
      const item = btn.closest(".quiz-q");
      if (item.classList.contains("answered")) return;
      item.classList.add("answered");
      $$(".quiz-opt", item).forEach((b) => {
        const bo = +b.dataset.o;
        if (bo === q.correct) b.classList.add("correct");
        else if (b === btn) b.classList.add("wrong");
      });
      if (oi === q.correct) {
        const r = btn.getBoundingClientRect();
        confettiBurst(r.left + r.width / 2, r.top + r.height / 2);
      }
    });
  });
}

/* ====================================================================
   TERMINPLANER
   ==================================================================== */

// Datum lokal als YYYY-MM-DD (kein UTC-Versatz)
function toISODate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// Erste Einheit: Freitag 05.06.2026; danach 2x/Woche (Di & Fr) je 2h
function suggestedDates(count) {
  const dates = [];
  dates.push(new Date(2026, 5, 5)); // 05.06.2026 (Freitag)
  // ab Folgewoche: Dienstag & Freitag
  let cursor = new Date(2026, 5, 9); // Dienstag 09.06.2026
  while (dates.length < count) {
    dates.push(new Date(cursor));
    // wechsel Di -> Fr (+3) -> Di (+4)
    const day = cursor.getDay();
    cursor.setDate(cursor.getDate() + (day === 2 ? 3 : 4));
  }
  return dates.slice(0, count).map(toISODate);
}

function ensureInitialSessions() {
  if (state.sessions.length === 0) {
    const dates = suggestedDates(allLessons().length);
    state.sessions = dates.slice(0, 1).map((date, i) => ({
      id: "s" + Date.now() + i,
      date,
      hours: 2,
      lessons: [],
    }));
    saveState();
  }
}

function formatDate(iso) {
  if (!iso) return "Datum wählen";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function renderPlaner() {
  ensureInitialSessions();
  const wrap = $("#planer-sessions");
  wrap.innerHTML = "";

  state.sessions
    .slice()
    .sort((a, b) => (a.date || "").localeCompare(b.date || ""))
    .forEach((s, idx) => {
      const sessNode = buildSession(s, idx);
      wrap.appendChild(sessNode);
    });

  renderPool();
  reveal($$(".session", wrap));
  attachRipples($("#view-planer"));
}

function buildSession(s, idx) {
  const node = el("div", "session");
  node.dataset.id = s.id;
  const lessonHours = s.lessons.reduce(
    (sum, id) => sum + (lessonById(id)?.hours || 0),
    0
  );
  const cap = Number(s.hours) || 0;
  let loadCls = "load-ok";
  let loadTxt = `${lessonHours} / ${cap} h`;
  if (lessonHours > cap) loadCls = "load-over";
  else if (lessonHours < cap) loadCls = "load-under";

  node.innerHTML = `
    <div class="session-head">
      <div class="idx">${idx + 1}</div>
      <input type="date" value="${s.date || ""}" />
      <div class="hours-wrap">Dauer:
        <input type="number" min="0.5" step="0.5" value="${s.hours}" style="width:62px" /> h
      </div>
      <div class="spacer"></div>
      <span class="session-load ${loadCls}">${loadTxt}</span>
      <button class="session-del" title="Slot löschen">✕</button>
    </div>
    <div class="session-body"></div>`;

  const body = $(".session-body", node);
  if (s.lessons.length === 0) {
    body.appendChild(el("div", "session-empty", "Noch leer – Einheit hierher ziehen oder unten mit + hinzufügen."));
  } else {
    s.lessons.forEach((id, idx) => {
      const l = lessonById(id);
      if (!l) return;
      const chip = el("div", "chip");
      chip.style.borderLeftColor = l.area.color;
      chip.innerHTML = `
        <span class="chip-title">${l.title}</span>
        <span class="chip-h">${l.hours} h</span>
        <button class="chip-x" title="Entfernen">✕</button>`;
      $(".chip-x", chip).addEventListener("click", () => {
        s.lessons.splice(idx, 1); // nur diese eine Zuordnung entfernen
        saveState();
        renderPlaner();
      });
      body.appendChild(chip);
    });
  }

  // Date / hours edit
  $('input[type="date"]', node).addEventListener("change", (e) => {
    s.date = e.target.value;
    saveState();
    renderPlaner();
  });
  $('input[type="number"]', node).addEventListener("change", (e) => {
    s.hours = Math.max(0.5, Number(e.target.value) || 0.5);
    saveState();
    renderPlaner();
  });
  $(".session-del", node).addEventListener("click", () => {
    state.sessions = state.sessions.filter((x) => x.id !== s.id);
    saveState();
    renderPlaner();
  });

  // Drag & drop target
  node.addEventListener("dragover", (e) => {
    e.preventDefault();
    node.classList.add("drag-over");
  });
  node.addEventListener("dragleave", () => node.classList.remove("drag-over"));
  node.addEventListener("drop", (e) => {
    e.preventDefault();
    node.classList.remove("drag-over");
    const id = e.dataTransfer.getData("text/plain");
    if (id) assignLesson(id, s.id);
  });

  return node;
}

function plannedCounts() {
  const map = {};
  state.sessions.forEach((s) => s.lessons.forEach((id) => (map[id] = (map[id] || 0) + 1)));
  return map;
}

function renderPool() {
  const pool = $("#lesson-pool");
  pool.innerHTML = "";
  const counts = plannedCounts();
  // Alle Einheiten bleiben verfügbar – jede kann mehrfach eingeplant werden.
  // Noch nicht eingeplante zuerst.
  const lessons = allLessons()
    .slice()
    .sort((a, b) => (counts[a.id] || 0) - (counts[b.id] || 0));

  lessons.forEach((l) => {
    const cnt = counts[l.id] || 0;
    const item = el("div", "pool-item" + (cnt ? " is-planned" : ""));
    item.draggable = true;
    item.dataset.id = l.id;
    item.innerHTML = `
      <span class="pi-area" style="background:${l.area.color}"></span>
      <span class="pi-title">${l.title} <span class="muted small">· ${l.hours} h</span></span>
      ${cnt ? `<span class="pi-count" title="bereits eingeplant">${cnt}×</span>` : ""}
      <button class="pi-add" title="Zu einem Slot hinzufügen">+</button>`;

    item.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", l.id);
      e.dataTransfer.effectAllowed = "copy";
      item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", () => (item.style.opacity = "1"));

    $(".pi-add", item).addEventListener("click", () => openAssignModal(l.id));

    pool.appendChild(item);
  });
}

function assignLesson(lessonId, sessionId) {
  // Einheit dem Ziel-Slot hinzufügen – Mehrfachzuordnung ist erlaubt
  // (gleiche Einheit in mehreren Slots oder mehrmals in einem Slot, z. B. für 2 h)
  const target = state.sessions.find((s) => s.id === sessionId);
  if (target) {
    target.lessons.push(lessonId);
    const l = lessonById(lessonId);
    toast(`„${l?.title}" eingeplant.`);
  }
  saveState();
  renderPlaner();
}

// Modal: choose session
function openAssignModal(lessonId) {
  const l = lessonById(lessonId);
  $("#modal-title").textContent = `„${l.title}" zuordnen`;
  const body = $("#modal-body");
  body.innerHTML = "";
  if (state.sessions.length === 0) {
    body.innerHTML = `<p class="muted">Noch keine Slots vorhanden. Lege zuerst einen Lern-Slot an.</p>`;
  } else {
    state.sessions
      .slice()
      .sort((a, b) => (a.date || "").localeCompare(b.date || ""))
      .forEach((s, i) => {
        const lessonHours = s.lessons.reduce(
          (sum, id) => sum + (lessonById(id)?.hours || 0),
          0
        );
        const item = el("div", "pool-item");
        item.innerHTML = `
          <span class="pi-area" style="background:var(--primary)"></span>
          <span class="pi-title">${formatDate(s.date)} <span class="muted small">· ${lessonHours}/${s.hours} h belegt</span></span>
          <button class="pi-add">+</button>`;
        item.addEventListener("click", () => {
          assignLesson(lessonId, s.id);
          closeModal();
        });
        body.appendChild(item);
      });
  }
  $("#modal-backdrop").hidden = false;
}
function closeModal() {
  $("#modal-backdrop").hidden = true;
}
$("#modal-close").addEventListener("click", closeModal);
$("#modal-backdrop").addEventListener("click", (e) => {
  if (e.target.id === "modal-backdrop") closeModal();
});

// Planer buttons
$("#add-session").addEventListener("click", () => {
  const dates = suggestedDates(state.sessions.length + 1);
  const next = dates[state.sessions.length] || "";
  state.sessions.push({
    id: "s" + Date.now(),
    date: next,
    hours: 2,
    lessons: [],
  });
  saveState();
  renderPlaner();
  toast("Neuer Lern-Slot hinzugefügt.");
});

$("#autofill").addEventListener("click", () => {
  const lessons = allLessons();
  // Einheiten in 2-Stunden-Slots bündeln (Slot voll = 2 h erreicht/überschritten)
  const groups = [];
  let cur = [];
  let curH = 0;
  lessons.forEach((l) => {
    cur.push(l.id);
    curH += l.hours || 0;
    if (curH >= 2) {
      groups.push(cur);
      cur = [];
      curH = 0;
    }
  });
  if (cur.length) groups.push(cur);

  const dates = suggestedDates(groups.length);
  state.sessions = groups.map((ids, i) => ({
    id: "s" + Date.now() + "_" + i,
    date: dates[i] || "",
    hours: 2,
    lessons: ids,
  }));
  saveState();
  renderPlaner();
  toast(`Vorschlag erstellt – ${groups.length} Termine à 2 h.`);
});

$("#reset-plan").addEventListener("click", () => {
  if (confirm("Möchtest du den kompletten Terminplan zurücksetzen?")) {
    state.sessions = [];
    saveState();
    ensureInitialSessions();
    renderPlaner();
    toast("Plan zurückgesetzt.");
  }
});

/* ====================================================================
   INIT
   ==================================================================== */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

switchView("dashboard");
attachRipples();
