# AP2 Lernplan – Industriekaufmann/-frau (Neuordnung)

Eine interaktive Lern-Website zur Vorbereitung auf die **Abschlussprüfung
Teil 2 (AP2)** für Industriekaufleute nach der **neuen Ausbildungsordnung
(IndKflAusbV, in Kraft seit 01.08.2024)**.

## Inhaltliche Grundlage

AP2 besteht aus drei Prüfungsbereichen (Lernfelder 8–13 des KMK-Rahmenlehrplans):

1. **Marketing, Vertrieb, Personalwesen & kaufmännische Steuerung und Kontrolle**
   (150 Min, 35 %) – LF 8, 9, 10, 12
2. **Wirtschafts- und Sozialkunde** (60 Min, 10 %) – LF 11
3. **Fachaufgabe im Einsatzgebiet** (Dokumentation, Präsentation & Fachgespräch,
   30 %) – LF 13

> Beschaffung/Produktion/Logistik gehören zu **Teil 1** und sind hier nicht
> enthalten. Inhalte sind eine Orientierungshilfe – maßgeblich sind die aktuelle
> Ausbildungsordnung, der Rahmenlehrplan und der IHK-Prüfungskatalog.

## Funktionen

- **Übersicht** – Dashboard mit Fortschritt, Prüfungsbereichen und einer Liste
  der **heute zur Wiederholung fälligen** Einheiten.
- **Lehrplan** – 22 Lerneinheiten mit **echtem Lernstoff** (Erklärungen,
  Formeln, Beispiele, Merksätze), Kurzüberblick und einem Prüfungshinweis. Jede
  Einheit schließt mit einer **Inhaltsabfrage im Prüfungsstil** ab. Pro Einheit
  gibt es einen Pool von **12 Fragen** (264 insgesamt); je Durchgang werden 6
  davon **rotierend** gezeigt, Fragen- und Antwortreihenfolge werden gemischt.
  Bestehen ab 60 % markiert die Einheit als gelernt.
- **Phasenplan** – drei Phasen über ~10 Monate: Grundlagen → Vertiefen &
  Wiederholen → Prüfungssimulation.
- **Prüfungsfragen verstehen** – Operatoren nach Anforderungsbereich (I/II/III),
  Strategie-Tipps und ein Mini-Quiz.
- **Terminplaner** – erste Einheit Fr 05.06.2026 (2 h), danach 2×/Woche à 2 h.
  Einheiten per Drag & Drop oder Button zuordnen; Auto-Vorschlag bündelt zu
  2-Stunden-Slots.

### Wiederholung (Spaced Repetition)

Bestandene Einheiten werden nach wachsenden Intervallen (3 → 7 → 16 → 35 → 90 →
180 Tage) wieder als „fällig" markiert, damit der Stoff bis zur Prüfung sitzt.
Fortschritt und Plan werden lokal im Browser (localStorage) gespeichert.

## Starten

`index.html` im Browser öffnen – kein Build, keine Abhängigkeiten. Alternativ:

```bash
python3 -m http.server 8000   # dann http://localhost:8000
```

## Dateien

| Datei        | Inhalt                                              |
| ------------ | --------------------------------------------------- |
| `index.html` | Seitenstruktur & Ansichten                          |
| `styles.css` | Design + Animationen + Lerntext-/Phasen-Styles      |
| `app.js`     | Logik: Navigation, Quiz, Spaced Repetition, Planer  |
| `data.js`    | Lehrplan-Inhalte, Quizfragen, Phasen, Operatoren    |
