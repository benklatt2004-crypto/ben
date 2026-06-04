// Lehrplan-Daten: Industriekaufmann/-frau – Abschlussprüfung Teil 2 (AP2)
// Grundlage: Neuordnung der Berufsausbildung (gestreckte Abschlussprüfung).
// Die Inhalte sind als Orientierung gegliedert nach den Prüfungsbereichen der AP2.

const CURRICULUM = [
  {
    id: "gp",
    code: "Prüfungsbereich 1",
    title: "Geschäftsprozesse der Industrie",
    form: "Schriftlich · gebundene & offene Aufgaben",
    color: "#2563eb",
    intro:
      "Betriebliche Leistungserstellung über die gesamte Wertschöpfungskette: Beschaffung, Produktion, Marketing/Absatz, Personal und Logistik – jeweils mit Bezug zu betrieblichen Kennzahlen und Prozessen.",
    lessons: [
      {
        id: "gp-1",
        title: "Beschaffung & Materialwirtschaft",
        hours: 2,
        topics: [
          "Bedarfsermittlung (programm-/verbrauchsgesteuert, ABC-/XYZ-Analyse)",
          "Bezugsquellenermittlung & Angebotsvergleich (quantitativ/qualitativ)",
          "Bestellrechnung, Bestellpunkt-/Bestellrhythmusverfahren",
          "Optimale Bestellmenge, Meldebestand, Sicherheitsbestand",
          "Lagerkennziffern (Umschlagshäufigkeit, durchschn. Lagerbestand, Lagerdauer)",
        ],
        examFocus:
          "Klassiker für Rechenaufgaben (Angebotsvergleich, Bezugskalkulation, Lagerkennziffern). Achte auf den Operator: 'berechne' verlangt Lösungsweg + Einheit, 'beurteile' verlangt anschließend eine begründete Entscheidung.",
      },
      {
        id: "gp-2",
        title: "Produktions- & Leistungserstellung",
        hours: 2,
        topics: [
          "Fertigungsverfahren (Einzel-, Serien-, Massenfertigung)",
          "Fertigungsorganisation (Werkstatt-, Fließ-, Gruppenfertigung)",
          "Produktionsplanung und -steuerung (PPS)",
          "Just-in-Time / Just-in-Sequence, Kanban",
          "Industrie 4.0 & Digitalisierung der Produktion",
        ],
        examFocus:
          "Häufig als Fallbeispiel: Du sollst ein Verfahren zur Situation des Modellunternehmens 'auswählen und begründen'. Verbinde Merkmale des Verfahrens mit den Angaben im Aufgabentext.",
      },
      {
        id: "gp-3",
        title: "Marketing & Absatz",
        hours: 2,
        topics: [
          "Marktforschung & Marktanalyse (primär/sekundär)",
          "Marketing-Mix: Produkt-, Preis-, Distributions-, Kommunikationspolitik",
          "Preisbildung, Preisstrategien, Rabatt-/Konditionenpolitik",
          "Absatzwege & Vertriebsformen",
          "Kundenbindung & CRM",
        ],
        examFocus:
          "Oft Zuordnungsaufgaben (Instrument → Marketing-Mix-Bereich) plus eine offene 'Erläutere'-Aufgabe. Bei 'Entwickeln Sie eine Maßnahme' immer konkret werden und auf das Fallunternehmen beziehen.",
      },
      {
        id: "gp-4",
        title: "Logistik & Supply Chain",
        hours: 2,
        topics: [
          "Beschaffungs-, Produktions-, Distributionslogistik",
          "Lagerarten & Lagerhaltungssysteme",
          "Transport & Verpackung, Incoterms (Grundzüge)",
          "Supply-Chain-Management, Lieferketten & Risiken",
          "Nachhaltigkeit in der Logistik",
        ],
        examFocus:
          "Aktuell stark gefragt: Nachhaltigkeit/Resilienz von Lieferketten. Hier wird häufig 'beurteilen' oder 'Stellung nehmen' verlangt – also Pro/Contra-Struktur mit abschließendem Fazit.",
      },
      {
        id: "gp-5",
        title: "Personalwirtschaft",
        hours: 2,
        topics: [
          "Personalbedarfsplanung & -beschaffung",
          "Personalauswahl & Einstellung (rechtlicher Rahmen)",
          "Personalentwicklung & Qualifizierung",
          "Entgeltformen (Zeit-, Akkord-, Prämienlohn)",
          "Arbeitszeitmodelle & Mitarbeiterbindung",
        ],
        examFocus:
          "Verzahnt mit WiSo (Arbeitsrecht). Entgeltberechnungen (Akkord, Prämie) sind typische Rechenaufgaben – Formel kennen und Schritte sauber zeigen.",
      },
    ],
  },
  {
    id: "we",
    code: "Prüfungsbereich 2",
    title: "Betriebliche Werteströme & deren Steuerung",
    form: "Schriftlich · Schwerpunkt Rechnen & Auswerten",
    color: "#7c3aed",
    intro:
      "Kaufmännische Steuerung und Kontrolle: Finanzbuchhaltung, Kosten- und Leistungsrechnung, Kalkulation, Controlling sowie Investition und Finanzierung. Der rechenintensivste Prüfungsbereich.",
    lessons: [
      {
        id: "we-1",
        title: "Finanzbuchhaltung & Jahresabschluss",
        hours: 2,
        topics: [
          "Buchungssätze, Konten, Kontenrahmen (IKR)",
          "Umsatzsteuer in der Buchführung",
          "Abschreibungen (linear/degressiv), Anlagenwirtschaft",
          "Bestandsveränderungen & Rechnungsabgrenzung",
          "Bilanz & GuV – Aufbau und Aussage",
        ],
        examFocus:
          "Buchungssätze müssen sitzen (Soll an Haben). Bei 'bilde den Buchungssatz' wird der vollständige Satz mit Konten und Beträgen erwartet – Teilpunkte für richtige Konten.",
      },
      {
        id: "we-2",
        title: "Kosten- & Leistungsrechnung (KLR)",
        hours: 2,
        topics: [
          "Abgrenzung Aufwand/Kosten, Ertrag/Leistung",
          "Kostenartenrechnung",
          "Kostenstellenrechnung (BAB – Betriebsabrechnungsbogen)",
          "Kostenträgerrechnung",
          "Voll- vs. Teilkostenrechnung",
        ],
        examFocus:
          "Der BAB ist ein Dauerbrenner. Übe das Schema bis es sitzt; achte auf Verteilungsschlüssel und Gemeinkostenzuschlagssätze.",
      },
      {
        id: "we-3",
        title: "Kalkulation",
        hours: 2,
        topics: [
          "Zuschlagskalkulation (Vor-/Nachkalkulation)",
          "Handelskalkulation (Bezugs-, Selbstkosten-, Verkaufskalkulation)",
          "Maschinenstundensatzrechnung",
          "Deckungsbeitragsrechnung",
          "Break-even-Analyse",
        ],
        examFocus:
          "Deckungsbeitrag & Break-even gehören zu den wichtigsten Rechentypen. 'Berechnen Sie' + 'Beurteilen Sie' kombiniert: erst Zahl, dann Entscheidung (z. B. Zusatzauftrag annehmen?).",
      },
      {
        id: "we-4",
        title: "Controlling & Kennzahlen",
        hours: 2,
        topics: [
          "Kennzahlensysteme (Rentabilität, Liquidität, Produktivität, Wirtschaftlichkeit)",
          "Soll-Ist-Vergleich & Abweichungsanalyse",
          "Bilanzanalyse (Eigenkapitalquote, Cashflow, Anlagendeckung)",
          "Operatives vs. strategisches Controlling",
          "Berichtswesen & Reporting",
        ],
        examFocus:
          "Kennzahlen berechnen UND interpretieren. Eine Zahl allein gibt selten volle Punkte – die Aussage/Interpretation wird mitbewertet.",
      },
      {
        id: "we-5",
        title: "Investition & Finanzierung",
        hours: 2,
        topics: [
          "Investitionsrechnung (Kostenvergleich, Gewinnvergleich, Amortisation)",
          "Finanzierungsarten (Innen-/Außen-, Eigen-/Fremdfinanzierung)",
          "Kreditarten & Kreditsicherheiten",
          "Leasing vs. Kauf",
          "Liquiditätsplanung & Finanzplan",
        ],
        examFocus:
          "Vergleichsrechnungen (Leasing vs. Kauf, Investitionsalternativen) enden fast immer mit 'Entscheiden/Empfehlen Sie und begründen'. Die Begründung muss die Rechenergebnisse aufgreifen.",
      },
    ],
  },
  {
    id: "wiso",
    code: "Prüfungsbereich 3",
    title: "Wirtschafts- & Sozialkunde (WiSo)",
    form: "Schriftlich · überwiegend gebundene Aufgaben",
    color: "#059669",
    intro:
      "Rechtliche, wirtschaftliche und gesellschaftliche Rahmenbedingungen: Berufsausbildung, Arbeits- und Tarifrecht, Sozialversicherung, Wirtschaftsordnung und Verbraucherschutz.",
    lessons: [
      {
        id: "wiso-1",
        title: "Berufsausbildung & Arbeitsrecht",
        hours: 2,
        topics: [
          "Berufsbildungsgesetz (BBiG), Rechte & Pflichten",
          "Arbeitsvertrag, Kündigung, Kündigungsschutz",
          "Arbeitszeit-, Jugendarbeitsschutz, Mutterschutz",
          "Tarifrecht & Tarifautonomie",
          "Betriebsverfassung & Mitbestimmung",
        ],
        examFocus:
          "Viele Single-/Multiple-Choice-Aufgaben. Lerne Zuständigkeiten und Fristen präzise – hier wird gerne mit ähnlich klingenden Antwortoptionen 'getrickst'.",
      },
      {
        id: "wiso-2",
        title: "Sozialversicherung",
        hours: 2,
        topics: [
          "Die 5 Säulen der Sozialversicherung",
          "Beitragsbemessung & Beitragssätze (Grundprinzip)",
          "Versicherungspflicht & -freiheit",
          "Leistungen der einzelnen Zweige",
          "Träger & Selbstverwaltung",
        ],
        examFocus:
          "Zuordnungsaufgaben (Leistung → richtiger Versicherungszweig). Merke dir den Träger und die typische Leistung je Säule als Anker.",
      },
      {
        id: "wiso-3",
        title: "Wirtschaftsordnung & Markt",
        hours: 2,
        topics: [
          "Soziale Marktwirtschaft, Wirtschaftssysteme",
          "Markt & Preisbildung, Marktformen",
          "Konjunktur & Wirtschaftspolitik (Grundzüge)",
          "Wettbewerb & Wettbewerbsbeschränkungen",
          "Magisches Viereck / Sechseck",
        ],
        examFocus:
          "Transferaufgaben: Ein wirtschaftspolitisches Ereignis soll einem Modell zugeordnet und 'erläutert' werden. Fachbegriffe korrekt verwenden zählt.",
      },
      {
        id: "wiso-4",
        title: "Rechtsgeschäfte & Verbraucherschutz",
        hours: 2,
        topics: [
          "Rechts- & Geschäftsfähigkeit",
          "Zustandekommen von Verträgen, Willenserklärungen",
          "Kaufvertragsstörungen (Mangel, Verzug)",
          "Verbraucherschutz & Widerrufsrecht",
          "Eigentum & Besitz, Eigentumsvorbehalt",
        ],
        examFocus:
          "Fallbezogene Aufgaben: Sachverhalt lesen → richtige Rechtsfolge ableiten. Übe das saubere 'Subsumieren' (Regel auf den Fall anwenden).",
      },
    ],
  },
  {
    id: "eg",
    code: "Prüfungsbereich 4",
    title: "Fachaufgabe im Einsatzgebiet",
    form: "Mündlich · Report + Fachgespräch",
    color: "#d97706",
    intro:
      "Praxisbezogene Fachaufgabe aus deinem Einsatzgebiet: Erstellung eines Reports und anschließendes Fachgespräch. Hier zählen Struktur, Fachsprache und souveräne Argumentation.",
    lessons: [
      {
        id: "eg-1",
        title: "Report erstellen",
        hours: 2,
        topics: [
          "Auswahl & Eingrenzung der Fachaufgabe",
          "Aufbau & formale Anforderungen des Reports",
          "Prozessdarstellung & betriebswirtschaftliche Einordnung",
          "Visualisierung (Diagramme, Ablaufschemata)",
          "Reflexion & Bewertung der eigenen Lösung",
        ],
        examFocus:
          "Der Report ist Gesprächsgrundlage, wird aber nicht benotet – er muss aber Anknüpfungspunkte für Fragen liefern. Plane bewusst 'Tiefenstellen' ein, zu denen du sicher sprechen kannst.",
      },
      {
        id: "eg-2",
        title: "Fachgespräch & Präsentation",
        hours: 2,
        topics: [
          "Gesprächsstruktur & roter Faden",
          "Umgang mit Nachfragen & Transferfragen",
          "Fachsprache & sicheres Auftreten",
          "Argumentieren & Entscheidungen begründen",
          "Üben mit typischen Prüferfragen",
        ],
        examFocus:
          "Prüfer fragen nach dem 'Warum' deiner Entscheidungen und nach Alternativen. Bereite zu jedem Schritt eine Begründung UND eine verworfene Alternative vor.",
      },
    ],
  },
];

// Bereich "Prüfungsfragen verstehen" – Operatoren & Strategie
const OPERATOREN = [
  {
    bereich: "Anforderungsbereich I – Reproduktion",
    desc: "Wissen wiedergeben. Wenig eigene Wertung, dafür präzise und vollständig.",
    color: "#059669",
    items: [
      { op: "Nennen / Aufzählen", erklaerung: "Begriffe ohne Erläuterung auflisten.", tipp: "Anzahl beachten – werden 3 verlangt, nenne genau 3." },
      { op: "Beschreiben", erklaerung: "Sachverhalt in eigenen Worten darstellen, ohne zu werten.", tipp: "Vollständige Sätze, kein Pro/Contra." },
      { op: "Darstellen", erklaerung: "Strukturiert wiedergeben, ggf. mit Skizze.", tipp: "Reihenfolge/Logik sichtbar machen." },
    ],
  },
  {
    bereich: "Anforderungsbereich II – Reorganisation/Transfer",
    desc: "Wissen anwenden und auf neue Situationen übertragen.",
    color: "#2563eb",
    items: [
      { op: "Erläutern / Erklären", erklaerung: "Mit Begründung und Beispiel verständlich machen.", tipp: "'... weil ...' und ein konkretes Beispiel einbauen." },
      { op: "Berechnen / Ermitteln", erklaerung: "Mit Rechenweg zu einem Ergebnis kommen.", tipp: "Rechenweg + Einheit + Antwortsatz; Teilpunkte sichern." },
      { op: "Analysieren", erklaerung: "In Bestandteile zerlegen und Zusammenhänge zeigen.", tipp: "Struktur: erst zerlegen, dann Beziehungen benennen." },
      { op: "Gegenüberstellen / Vergleichen", erklaerung: "Gemeinsamkeiten und Unterschiede herausarbeiten.", tipp: "Kriterien-orientiert vergleichen, nicht nacheinander aufzählen." },
    ],
  },
  {
    bereich: "Anforderungsbereich III – Reflexion/Bewertung",
    desc: "Eigenständig beurteilen, entscheiden und begründen. Hier liegen die meisten Punkte.",
    color: "#dc2626",
    items: [
      { op: "Beurteilen", erklaerung: "Begründetes Urteil auf Basis von Kriterien fällen.", tipp: "Argumente abwägen → klares Fazit am Ende." },
      { op: "Bewerten / Stellung nehmen", erklaerung: "Eigene begründete Position einnehmen.", tipp: "Pro UND Contra, dann persönliche Entscheidung mit Begründung." },
      { op: "Entscheiden / Empfehlen", erklaerung: "Aus Alternativen begründet wählen.", tipp: "Rechenergebnisse/Fakten in der Begründung aufgreifen." },
      { op: "Entwickeln / Konzipieren", erklaerung: "Eigene Lösung/Maßnahme erstellen.", tipp: "Konkret und auf das Fallunternehmen bezogen werden." },
    ],
  },
];

const STRATEGIE_TIPPS = [
  {
    titel: "Operator zuerst markieren",
    text: "Unterstreiche in jeder Aufgabe das Verb (Operator). Es bestimmt Umfang und Tiefe der Antwort. 'Nennen' ≠ 'Erläutern' ≠ 'Beurteilen'.",
  },
  {
    titel: "Punkte = Argumente",
    text: "Faustregel: Pro Punkt mindestens ein vollständiger Gedanke/Aspekt. 4 Punkte → plane ca. 4 Aspekte ein.",
  },
  {
    titel: "Fallbezug herstellen",
    text: "Bei Transferaufgaben immer auf die Angaben des Modellunternehmens eingehen – allgemeine Lehrbuchsätze geben weniger Punkte.",
  },
  {
    titel: "Rechnen: Weg zeigen",
    text: "Auch bei falschem Endergebnis gibt es Teilpunkte für den richtigen Ansatz. Niemals nur die Zahl hinschreiben.",
  },
  {
    titel: "Zeit nach Punkten einteilen",
    text: "Verteile die Bearbeitungszeit proportional zu den erreichbaren Punkten, nicht nach 'Lust' auf eine Aufgabe.",
  },
  {
    titel: "Abwägen sichtbar machen",
    text: "Bei AfB III: Struktur 'einerseits – andererseits – Fazit'. Das Fazit nie vergessen, es bringt oft den letzten Punkt.",
  },
];

const SESSION_RULE = {
  startInfo: "1. Einheit: Freitag, 05.06.2026 · 2 Stunden",
  rhythm: "Ab der Folgewoche: 2× pro Woche je 2 Stunden",
  note: "Plan auf Wiederholung ausgelegt – jede Einheit mehrfach durchgehen (Spaced Repetition).",
};

// Inhaltsabfrage je Lerneinheit (3 Fragen) – keyed by lesson id
// Jede Frage: { q, opts[], correct (Index), fb }
const LESSON_QUIZ = {
  "gp-1": [
    {
      q: "Was ermittelt die optimale Bestellmenge?",
      opts: ["Den maximalen Lagerbestand", "Das Minimum aus Bestell- + Lagerhaltungskosten", "Nur die Bestellkosten", "Den Meldebestand"],
      correct: 1,
      fb: "Die optimale Bestellmenge minimiert die Summe aus bestellfixen Kosten und Lagerhaltungskosten.",
    },
    {
      q: "Wie berechnet sich der Meldebestand (ohne Mindestbestand)?",
      opts: ["Tagesverbrauch × Lieferzeit", "Jahresbedarf ÷ 12", "Höchstbestand − Mindestbestand", "Bestellmenge × 2"],
      correct: 0,
      fb: "Meldebestand = Tagesverbrauch × Lieferzeit (+ Sicherheitsbestand). Bei Erreichen wird neu bestellt.",
    },
    {
      q: "Wie ist die Umschlagshäufigkeit definiert?",
      opts: ["Lagerbestand ÷ Wareneinsatz", "Wareneinsatz ÷ durchschn. Lagerbestand", "Bestellmenge ÷ Lieferzeit", "Umsatz ÷ Gewinn"],
      correct: 1,
      fb: "Umschlagshäufigkeit = Wareneinsatz ÷ durchschnittlicher Lagerbestand. Hoch = Kapital wird schnell wieder frei.",
    },
  ],
  "gp-2": [
    {
      q: "Was kennzeichnet die Massenfertigung?",
      opts: ["Einzelstücke nach Kundenwunsch", "Große Mengen gleichartiger Produkte", "Kleine Lose mit Wiederholung", "Projektfertigung"],
      correct: 1,
      fb: "Massenfertigung = große Mengen gleichartiger Erzeugnisse über lange Zeit (z. B. Schrauben).",
    },
    {
      q: "Welches Ziel verfolgt Just-in-Time?",
      opts: ["Maximale Lagerbestände", "Bedarfssynchrone Anlieferung mit minimalen Beständen", "Längere Durchlaufzeiten", "Mehr Sicherheitsbestand"],
      correct: 1,
      fb: "JiT liefert Material genau dann, wenn es gebraucht wird → niedrige Lagerbestände, aber höhere Abhängigkeit vom Lieferanten.",
    },
    {
      q: "Was beschreibt die Werkstattfertigung?",
      opts: ["Maschinen entlang des Produktflusses", "Gleichartige Maschinen räumlich zusammengefasst", "Fließband", "Ein fester Standort je Produkt"],
      correct: 1,
      fb: "Bei der Werkstattfertigung werden funktionsgleiche Maschinen zu Werkstätten gruppiert – flexibel, aber längere Transportwege.",
    },
  ],
  "gp-3": [
    {
      q: "Was bedeutet die Skimming-Strategie?",
      opts: ["Niedriger Einstiegspreis, später Erhöhung", "Hoher Einführungspreis, später Senkung", "Dauerhaft niedrigster Preis", "Preis = Konkurrenz"],
      correct: 1,
      fb: "Skimming = hoher Einführungspreis (Abschöpfen der Zahlungsbereitschaft), danach schrittweise Senkung.",
    },
    {
      q: "Was ist Primärforschung?",
      opts: ["Auswertung vorhandener Daten", "Eigene, neue Datenerhebung (z. B. Befragung)", "Blick in die Statistik des Statistischen Bundesamts", "Analyse alter Verkaufszahlen"],
      correct: 1,
      fb: "Primärforschung erhebt neue Daten eigens für die Fragestellung (Befragung, Beobachtung, Experiment).",
    },
    {
      q: "Welches Instrument gehört zur Kommunikationspolitik?",
      opts: ["Rabattstaffel", "Werbung / Verkaufsförderung", "Lieferweg", "Produktverpackung als Schutz"],
      correct: 1,
      fb: "Kommunikationspolitik umfasst Werbung, Verkaufsförderung, PR und persönlichen Verkauf.",
    },
  ],
  "gp-4": [
    {
      q: "Was umfasst die Beschaffungslogistik?",
      opts: ["Warenfluss zum Kunden", "Materialfluss vom Lieferanten ins Unternehmen", "Innerbetrieblichen Transport", "Entsorgung"],
      correct: 1,
      fb: "Beschaffungslogistik = alle Prozesse, die Material vom Lieferanten ins Unternehmen bringen.",
    },
    {
      q: "Was ist das Ziel des Supply-Chain-Managements?",
      opts: ["Nur den Einkaufspreis senken", "Die gesamte Lieferkette ganzheitlich optimieren", "Lager maximal füllen", "Nur die eigene Produktion steuern"],
      correct: 1,
      fb: "SCM optimiert die komplette Kette vom Rohstofflieferanten bis zum Endkunden – unternehmensübergreifend.",
    },
    {
      q: "Was regeln die Incoterms?",
      opts: ["Steuersätze", "Kosten- und Gefahrenübergang zwischen Käufer und Verkäufer", "Zahlungsfristen", "Garantiezeiten"],
      correct: 1,
      fb: "Incoterms legen fest, wer Kosten und Risiko des Transports an welchem Punkt trägt (z. B. FOB, CIF, EXW).",
    },
  ],
  "gp-5": [
    {
      q: "Wie ergibt sich der Nettopersonalbedarf?",
      opts: ["Bruttobedarf + Neueinstellungen", "Bruttobedarf − voraussichtlicher Personalbestand", "Anzahl Bewerbungen", "Sollbestand × Fluktuation"],
      correct: 1,
      fb: "Nettopersonalbedarf = Bruttopersonalbedarf − fortgeschriebener Personalbestand (inkl. Zu-/Abgänge).",
    },
    {
      q: "Wonach richtet sich der Akkordlohn?",
      opts: ["Nach der Anwesenheitszeit", "Nach der erbrachten Leistung/Stückzahl", "Nach dem Alter", "Nach der Betriebszugehörigkeit"],
      correct: 1,
      fb: "Akkordlohn entlohnt die Menge/Leistung – mehr Stück = mehr Lohn (Leistungslohn).",
    },
    {
      q: "Ein Vorteil interner Personalbeschaffung ist …",
      opts: ["frische Impulse von außen", "geringere Kosten und bekannte Eignung", "größere Bewerberauswahl", "weniger Beförderungsdruck"],
      correct: 1,
      fb: "Intern: Mitarbeiter ist bekannt, schnell verfügbar, günstiger und motivierend (Aufstiegschance).",
    },
  ],
  "we-1": [
    {
      q: "Wie lautet die Grundregel eines Buchungssatzes?",
      opts: ["Haben an Soll", "Soll an Haben", "Aktiv an Passiv", "Ertrag an Aufwand"],
      correct: 1,
      fb: "Buchungssatz immer 'Soll an Haben' – zuerst das Soll-Konto, dann das Haben-Konto.",
    },
    {
      q: "Wie hoch ist die jährliche lineare Abschreibung?",
      opts: ["Anschaffungskosten × Zinssatz", "Anschaffungskosten ÷ Nutzungsdauer", "Restwert ÷ 2", "Anschaffungskosten × Nutzungsdauer"],
      correct: 1,
      fb: "Linear = Anschaffungskosten ÷ Nutzungsdauer → jedes Jahr der gleiche Abschreibungsbetrag.",
    },
    {
      q: "Wareneinkauf auf Ziel ist eine …",
      opts: ["Aktiv-Passiv-Mehrung (Bilanzsumme steigt)", "Aktivtausch", "Passivtausch", "Aktiv-Passiv-Minderung"],
      correct: 0,
      fb: "Ware (Aktiv) steigt, Verbindlichkeit (Passiv) steigt → Bilanzsumme nimmt zu = Aktiv-Passiv-Mehrung (Bilanzverlängerung).",
    },
  ],
  "we-2": [
    {
      q: "Was sind Kosten (Abgrenzung zum Aufwand)?",
      opts: ["Jeder Werteverzehr", "Betriebsbedingter, bewerteter Güterverzehr", "Nur Auszahlungen", "Nur außerordentliche Posten"],
      correct: 1,
      fb: "Kosten = betriebsbedingter, bewerteter Verzehr von Gütern/Leistungen. Nicht jeder Aufwand ist Kostenrelevant.",
    },
    {
      q: "Wozu dient der Betriebsabrechnungsbogen (BAB)?",
      opts: ["Einzelkosten direkt zuzuordnen", "Gemeinkosten auf Kostenstellen zu verteilen", "Den Gewinn zu buchen", "Die Bilanz zu erstellen"],
      correct: 1,
      fb: "Der BAB verteilt die Gemeinkosten über Schlüssel auf die Kostenstellen und ermittelt Zuschlagssätze.",
    },
    {
      q: "Was sind Einzelkosten?",
      opts: ["Nicht direkt zurechenbare Kosten", "Dem Kostenträger direkt zurechenbare Kosten", "Immer Fixkosten", "Kosten der Verwaltung"],
      correct: 1,
      fb: "Einzelkosten lassen sich einem Produkt direkt zuordnen (z. B. Fertigungsmaterial). Gemeinkosten nicht.",
    },
  ],
  "we-3": [
    {
      q: "Wie berechnet sich der Deckungsbeitrag (pro Stück)?",
      opts: ["Preis − Fixkosten", "Preis − variable Stückkosten", "Preis − Gesamtkosten", "Umsatz − Gewinn"],
      correct: 1,
      fb: "DB = Verkaufspreis − variable Kosten. Der DB deckt die Fixkosten und erwirtschaftet danach Gewinn.",
    },
    {
      q: "Was gilt am Break-even-Point?",
      opts: ["Gewinn ist maximal", "Gesamt-DB = Fixkosten (Gewinn = 0)", "Variable Kosten = 0", "Umsatz = variable Kosten"],
      correct: 1,
      fb: "Am Break-even decken die Deckungsbeiträge genau die Fixkosten – weder Gewinn noch Verlust.",
    },
    {
      q: "Womit arbeitet die Zuschlagskalkulation?",
      opts: ["Einem festen Stückpreis", "Gemeinkostenzuschlagssätzen", "Nur Einzelkosten", "Dem Deckungsbeitrag"],
      correct: 1,
      fb: "Die Zuschlagskalkulation rechnet Gemeinkosten über prozentuale Zuschlagssätze auf die Einzelkosten auf.",
    },
  ],
  "we-4": [
    {
      q: "Wie ist die Eigenkapitalquote definiert?",
      opts: ["Eigenkapital ÷ Gesamtkapital", "Fremdkapital ÷ Eigenkapital", "Gewinn ÷ Umsatz", "Eigenkapital ÷ Umsatz"],
      correct: 0,
      fb: "Eigenkapitalquote = Eigenkapital ÷ Gesamtkapital × 100 %. Hoch = solide finanziert, unabhängiger.",
    },
    {
      q: "Was misst eine Liquiditätskennzahl?",
      opts: ["Die Rentabilität", "Die Zahlungsfähigkeit", "Die Produktivität", "Den Marktanteil"],
      correct: 1,
      fb: "Liquiditätskennzahlen zeigen, ob das Unternehmen seine fälligen Zahlungsverpflichtungen erfüllen kann.",
    },
    {
      q: "Wozu dient der Soll-Ist-Vergleich?",
      opts: ["Steuern zu sparen", "Abweichungen zu erkennen und gegenzusteuern", "Die Bilanz zu verlängern", "Den Lohn zu berechnen"],
      correct: 1,
      fb: "Der Soll-Ist-Vergleich deckt Abweichungen von der Planung auf – Grundlage für Steuerungsmaßnahmen.",
    },
  ],
  "we-5": [
    {
      q: "Was ermittelt die Amortisationsrechnung?",
      opts: ["Den Gewinn pro Jahr", "Die Zeit bis zum Rückfluss des eingesetzten Kapitals", "Den Zinssatz", "Den Restwert"],
      correct: 1,
      fb: "Amortisation = Wie lange dauert es, bis die Investition über Rückflüsse 'wieder drin' ist? Kürzer = weniger Risiko.",
    },
    {
      q: "Welches ist ein Beispiel für Eigenfinanzierung?",
      opts: ["Bankkredit", "Einbehaltung von Gewinnen / Einlagen", "Lieferantenkredit", "Anleihe"],
      correct: 1,
      fb: "Eigenfinanzierung: Mittel von Eigentümern (Einlagen) oder aus einbehaltenem Gewinn – kein Fremdkapital.",
    },
    {
      q: "Ein typischer Vorteil von Leasing ist …",
      opts: ["Eigentum sofort", "Schonung der Liquidität (keine hohe Anfangsauszahlung)", "geringere Gesamtkosten immer", "keine laufenden Zahlungen"],
      correct: 1,
      fb: "Leasing schont die Liquidität: statt hoher Kaufsumme nur laufende Raten – dafür meist teurer in Summe.",
    },
  ],
  "wiso-1": [
    {
      q: "Was regelt das Berufsbildungsgesetz (BBiG)?",
      opts: ["Steuerrecht", "Rechte und Pflichten in der Berufsausbildung", "Sozialversicherung", "Handelsrecht"],
      correct: 1,
      fb: "Das BBiG regelt u. a. Ausbildungsvertrag, Rechte/Pflichten von Azubi und Betrieb, Prüfungen.",
    },
    {
      q: "Wie lang darf die Probezeit in der Ausbildung höchstens sein?",
      opts: ["2 Wochen", "1 Monat", "4 Monate", "6 Monate"],
      correct: 2,
      fb: "Die Probezeit beträgt mindestens 1 und höchstens 4 Monate (§ 20 BBiG).",
    },
    {
      q: "Was bedeutet Tarifautonomie?",
      opts: ["Der Staat legt Löhne fest", "Tarifparteien handeln Tarifverträge eigenständig aus", "Jeder Betrieb zahlt frei", "Gewerkschaften sind verboten"],
      correct: 1,
      fb: "Tarifautonomie: Gewerkschaften und Arbeitgeberverbände schließen ohne staatlichen Eingriff Tarifverträge (Art. 9 GG).",
    },
  ],
  "wiso-2": [
    {
      q: "Welche Leistung gehört zur Arbeitslosenversicherung?",
      opts: ["Rente", "Arbeitslosengeld", "Krankengeld", "Pflegegeld"],
      correct: 1,
      fb: "Die Arbeitslosenversicherung zahlt u. a. Arbeitslosengeld und finanziert Weiterbildung/Vermittlung.",
    },
    {
      q: "Nach welchem Prinzip funktioniert die gesetzliche Sozialversicherung?",
      opts: ["Kapitaldeckungsverfahren ausschließlich", "Solidaritäts- und Umlageprinzip", "Risikoäquivalenz wie Privatversicherung", "Freiwilligkeitsprinzip"],
      correct: 1,
      fb: "Solidarprinzip + Umlageverfahren: Beiträge der Aktiven finanzieren die heutigen Leistungen.",
    },
    {
      q: "Wie viele Zweige hat die gesetzliche Sozialversicherung?",
      opts: ["3", "4", "5", "6"],
      correct: 2,
      fb: "Fünf Säulen: Kranken-, Pflege-, Renten-, Arbeitslosen- und Unfallversicherung.",
    },
  ],
  "wiso-3": [
    {
      q: "Welches Ziel gehört NICHT zum magischen Viereck?",
      opts: ["Preisniveaustabilität", "Hoher Beschäftigungsstand", "Maximaler Unternehmensgewinn", "Stetiges Wirtschaftswachstum"],
      correct: 2,
      fb: "Magisches Viereck: Preisstabilität, hoher Beschäftigungsstand, Wachstum, außenwirtschaftliches Gleichgewicht.",
    },
    {
      q: "Was kennzeichnet die soziale Marktwirtschaft?",
      opts: ["Reine Planwirtschaft", "Marktwirtschaft mit sozialem Ausgleich durch den Staat", "Keine staatlichen Eingriffe", "Staatliche Preisfestsetzung"],
      correct: 1,
      fb: "Marktwirtschaftliche Grundordnung + sozialer Ausgleich (Sozialversicherung, Wettbewerbsschutz, Umverteilung).",
    },
    {
      q: "Was passiert bei einem Angebotsüberhang tendenziell mit dem Preis?",
      opts: ["Er steigt", "Er sinkt", "Er bleibt gleich", "Er wird staatlich erhöht"],
      correct: 1,
      fb: "Mehr Angebot als Nachfrage → Preis sinkt, bis sich Markt wieder ausgleicht.",
    },
  ],
  "wiso-4": [
    {
      q: "Wer ist beschränkt geschäftsfähig?",
      opts: ["0–6 Jahre", "7–17 Jahre", "ab 18 Jahre", "ab 21 Jahre"],
      correct: 1,
      fb: "Minderjährige von 7 bis 17 Jahren sind beschränkt geschäftsfähig (Zustimmung der Eltern nötig, § 106 BGB).",
    },
    {
      q: "Wodurch kommt ein Kaufvertrag zustande?",
      opts: ["Durch Übergabe der Ware", "Durch zwei übereinstimmende Willenserklärungen (Antrag + Annahme)", "Durch Bezahlung", "Durch eine Rechnung"],
      correct: 1,
      fb: "Kaufvertrag = zwei übereinstimmende Willenserklärungen (Angebot und Annahme). Übergabe ist die Erfüllung.",
    },
    {
      q: "Wie lange ist das Widerrufsrecht im Fernabsatz in der Regel?",
      opts: ["7 Tage", "14 Tage", "1 Monat", "Kein Widerrufsrecht"],
      correct: 1,
      fb: "Bei Fernabsatzgeschäften (z. B. Onlinekauf) gilt grundsätzlich ein Widerrufsrecht von 14 Tagen.",
    },
  ],
  "eg-1": [
    {
      q: "Wird der Report selbst benotet?",
      opts: ["Ja, er zählt 50 %", "Nein, er ist Grundlage für das Fachgespräch", "Ja, voll", "Er ist optional"],
      correct: 1,
      fb: "Der Report wird nicht benotet – er dient als Grundlage für das bewertete Fachgespräch.",
    },
    {
      q: "Worüber sollte die Fachaufgabe handeln?",
      opts: ["Ein erfundenes Beispiel", "Eine reale, praxisbezogene Aufgabe aus dem Einsatzgebiet", "Ein theoretisches Lehrbuchthema", "Ein fremdes Unternehmen"],
      correct: 1,
      fb: "Die Fachaufgabe stammt aus deinem realen betrieblichen Einsatzgebiet – konkret und nachvollziehbar.",
    },
    {
      q: "Was ist beim Aufbau des Reports besonders wichtig?",
      opts: ["Möglichst viele Seiten", "Anknüpfungspunkte für Nachfragen schaffen", "Nur Theorie zitieren", "Keine Visualisierung"],
      correct: 1,
      fb: "Plane bewusst 'Tiefenstellen' ein, zu denen du sicher sprechen kannst – sie steuern die Fragen des Prüfers.",
    },
  ],
  "eg-2": [
    {
      q: "Wonach fragen Prüfer im Fachgespräch besonders häufig?",
      opts: ["Nach auswendig gelernten Definitionen", "Nach der Begründung deiner Entscheidungen und Alternativen", "Nach privaten Details", "Nach anderen Azubis"],
      correct: 1,
      fb: "Erwarte 'Warum?'-Fragen: Begründe deine Entscheidungen und nenne verworfene Alternativen.",
    },
    {
      q: "Was bedeutet ein 'roter Faden' im Fachgespräch?",
      opts: ["Möglichst schnell reden", "Eine klare, nachvollziehbare Struktur", "Nur Fachwörter aneinanderreihen", "Viele Themen gleichzeitig"],
      correct: 1,
      fb: "Roter Faden = logischer, nachvollziehbarer Aufbau deiner Darstellung – Prüfer können dir leicht folgen.",
    },
    {
      q: "Wie reagierst du am besten auf eine Transfer-Nachfrage?",
      opts: ["Ausweichen", "Ruhig und fachlich begründet antworten", "Das Thema wechseln", "Nur 'ja/nein' sagen"],
      correct: 1,
      fb: "Bleib ruhig, denk kurz nach und begründe fachlich – Transferfragen prüfen Verständnis, nicht Auswendiglernen.",
    },
  ],
};
