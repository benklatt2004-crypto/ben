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
  note: "Die Einheiten kannst du frei den Terminen zuordnen – ziehe Lerneinheiten in deine Slots.",
};
