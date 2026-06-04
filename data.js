// Lehrplan-Daten: Industriekaufmann/-frau – Abschlussprüfung Teil 2 (AP2)
// Neuordnung: Industriekaufleuteausbildungsverordnung (IndKflAusbV), in Kraft seit 01.08.2024.
// AP2 umfasst die Prüfungsbereiche (Lernfelder 8–13 des KMK-Rahmenlehrplans):
//   1) Marketing, Vertrieb, Personalwesen und kaufmännische Steuerung und Kontrolle (LF 8/9/10/12)
//   2) Wirtschafts- und Sozialkunde (LF 11)
//   3) Fachaufgabe im Einsatzgebiet (LF 13)
// Jede Lerneinheit enthält echten Lernstoff (learn), einen Kurzüberblick (topics),
// einen Prüfungshinweis (examFocus) und eine Inhaltsabfrage im Prüfungsstil (quiz).

const CURRICULUM = [
  {
    id: "mvpk",
    code: "Prüfungsbereich 1 · AP2",
    title: "Marketing, Vertrieb, Personalwesen & kaufm. Steuerung und Kontrolle",
    form: "Schriftlich · 150 Min · ca. 60 % offen / 40 % gebunden · Gewichtung 35 %",
    color: "#2563eb",
    intro:
      "Der größte schriftliche Prüfungsbereich der AP2 (Lernfelder 8, 9, 10, 12). Er verbindet Marketing & Vertrieb, Personalwesen sowie die kaufmännische Steuerung und Kontrolle (Kosten- und Leistungsrechnung, Jahresabschluss, Investition und Finanzierung).",
    lessons: [
      {
        id: "mk-marktforschung",
        title: "Marktforschung & Marketingziele",
        hours: 1,
        learn:
          "<p>Marketing bedeutet <strong>marktorientierte Unternehmensführung</strong>: Alle Entscheidungen werden vom Kunden und Markt her gedacht. Der Marketingprozess verläuft in fünf Schritten: <em>Analyse → Ziele → Strategie → Maßnahmen (Marketing-Mix) → Kontrolle</em>.</p>" +
          "<h5>Marktforschung als Entscheidungsgrundlage</h5>" +
          "<p>Bevor Maßnahmen geplant werden, beschafft die Marktforschung Informationen. Man unterscheidet:</p>" +
          "<ul><li><strong>Primärforschung</strong> (field research): Erhebung <em>neuer</em> Daten – z. B. Befragung, Beobachtung, Experiment, Panel. Aktuell und passgenau, aber teuer und langsam.</li>" +
          "<li><strong>Sekundärforschung</strong> (desk research): Auswertung <em>vorhandener</em> Daten (interne Statistiken, amtliche Zahlen, Studien). Schnell und günstig, aber evtl. veraltet.</li></ul>" +
          "<h5>Marktgrößen & Ziele</h5>" +
          "<div class='formelbox'>Marktanteil = eigenes Absatz-/Umsatzvolumen ÷ Marktvolumen × 100<br>Marktausschöpfung = Marktvolumen ÷ Marktpotenzial × 100</div>" +
          "<p>Marketingziele sind <strong>ökonomisch</strong> (Umsatz, Marktanteil, Gewinn) oder <strong>psychografisch</strong> (Bekanntheitsgrad, Image, Kundenzufriedenheit). Sie sollten SMART formuliert sein.</p>" +
          "<div class='bsp'><strong>Beispiel:</strong> Marktvolumen 5 Mio. €, eigener Umsatz 750.000 € → Marktanteil = 750.000 ÷ 5.000.000 × 100 = <strong>15 %</strong>.</div>" +
          "<div class='merke'><strong>Merke:</strong> Erst Sekundärforschung (billig, schnell), dann gezielt Primärforschung – nur wo nötig.</div>",
        topics: [
          "Marketingprozess: Analyse → Ziele → Strategie → Mix → Kontrolle",
          "Primär- vs. Sekundärforschung (Methoden, Vor-/Nachteile)",
          "Marktpotenzial, Marktvolumen, Marktanteil",
          "Ökonomische vs. psychografische Marketingziele (SMART)",
        ],
        examFocus:
          "Häufig: Marktanteil 'berechnen' (AfB II), Primär/Sekundär 'unterscheiden', Methodenwahl 'begründen'. Auf den Operator achten – 'nennen' will nur Stichworte, 'begründen' verlangt das Warum.",
        quiz: [
          { q: "Die TecParts GmbH möchte vor einer Produkteinführung wissen, wie die Zielgruppe auf Designvarianten reagiert. Welche Vorgehensweise der Primärforschung ist geeignet?", opts: ["Auswertung amtlicher Statistiken", "Eine Befragung bzw. ein Produkttest der Zielgruppe", "Analyse der eigenen Verkaufszahlen", "Studium von Fachzeitschriften"], correct: 1, fb: "Neue, gezielte Daten von der Zielgruppe = Primärforschung (Befragung/Test). Die anderen Optionen sind Sekundärforschung. Operator 'auswählen/begründen' liegt im Anforderungsbereich II." },
          { q: "Das Marktvolumen beträgt 8 Mio. €, der eigene Umsatz 1,2 Mio. €. Berechnen Sie den Marktanteil.", opts: ["6,7 %", "15 %", "12 %", "18,5 %"], correct: 1, fb: "Marktanteil = 1,2 Mio. ÷ 8 Mio. × 100 = 15 %. 'Berechnen' (AfB II): immer Rechenweg + Einheit zeigen." },
          { q: "Worin unterscheidet sich die Sekundär- von der Primärforschung?", opts: ["Sekundärforschung erhebt neue Daten", "Sekundärforschung wertet bereits vorhandene Daten aus", "Primärforschung ist immer günstiger", "Es gibt keinen Unterschied"], correct: 1, fb: "Sekundärforschung nutzt vorhandenes Material (schnell, günstig); Primärforschung erhebt neue Daten (aktuell, teuer)." },
          { q: "Welches der folgenden ist ein psychografisches (nicht ökonomisches) Marketingziel?", opts: ["Umsatzsteigerung", "Erhöhung des Marktanteils", "Steigerung des Bekanntheitsgrades", "Gewinnsteigerung"], correct: 2, fb: "Bekanntheitsgrad/Image sind psychografische Ziele; Umsatz, Marktanteil und Gewinn sind ökonomische Ziele." },
          { q: "Ein Unternehmen will schnell und kostengünstig erste Marktinformationen gewinnen. Beurteilen Sie die sinnvollste Vorgehensweise.", opts: ["Primärforschung, weil aktueller", "Sekundärforschung, weil schneller und günstiger als erster Schritt", "Ein Panel, weil langfristig", "Ein Experiment, weil exakt"], correct: 1, fb: "'Beurteilen' (AfB III) heißt abwägen: Für einen schnellen, günstigen Einstieg ist Sekundärforschung sinnvoll – Primärforschung erst gezielt danach." },
          { q: "Was beschreibt der Marktanteil?", opts: ["Das Verhältnis von Marktvolumen zu Marktpotenzial", "Den Anteil des eigenen Absatzes/Umsatzes am Marktvolumen", "Den gesamten möglichen Absatz aller Anbieter", "Die Anzahl der Wettbewerber"], correct: 1, fb: "Marktanteil = eigener Absatz/Umsatz im Verhältnis zum gesamten Marktvolumen. Das Verhältnis Volumen zu Potenzial ist die Marktausschöpfung." },
        ],
      },
      {
        id: "mk-produkt-preis",
        title: "Marketing-Mix: Produkt- & Preispolitik",
        hours: 1,
        learn:
          "<p>Der <strong>Marketing-Mix</strong> bündelt die Instrumente in vier Feldern (die '4 P'): <em>Product, Price, Place, Promotion</em>. Diese Einheit behandelt Produkt- und Preispolitik.</p>" +
          "<h5>Produktpolitik (Product)</h5>" +
          "<ul><li><strong>Sortiment:</strong> Breite = Anzahl Produktlinien, Tiefe = Varianten je Linie.</li>" +
          "<li><strong>Produktlebenszyklus:</strong> Einführung → Wachstum → Reife → Sättigung → Rückgang.</li>" +
          "<li><strong>Maßnahmen:</strong> Produktinnovation, -variation, -differenzierung, -elimination; Marke, Verpackung, Service.</li></ul>" +
          "<h5>Preispolitik (Price)</h5>" +
          "<ul><li><strong>Skimmingstrategie:</strong> hoher Einführungspreis, später Senkung (schöpft Zahlungsbereitschaft ab) – gut bei Innovationen.</li>" +
          "<li><strong>Penetrationsstrategie:</strong> niedriger Einstiegspreis für schnelle Marktdurchdringung/hohen Marktanteil.</li>" +
          "<li>Preisdifferenzierung, Rabatte/Konditionen, Preiselastizität der Nachfrage.</li></ul>" +
          "<div class='formelbox'>Kurzfristige Preisuntergrenze = variable Stückkosten<br>Langfristige Preisuntergrenze = Selbstkosten</div>" +
          "<div class='merke'><strong>Merke:</strong> Welches Instrument zu welchem 'P' gehört, ist ein Klassiker bei Zuordnungsaufgaben – Garantie/Service = Produkt, Rabatt = Preis.</div>",
        topics: [
          "4 P des Marketing-Mix im Überblick",
          "Sortimentsbreite/-tiefe, Produktlebenszyklus",
          "Produktinnovation/-variation/-differenzierung/-elimination",
          "Preisstrategien Skimming vs. Penetration; Preisuntergrenzen",
        ],
        examFocus:
          "Typisch: Instrument einem 'P' 'zuordnen', Preisstrategie zur Fallsituation 'auswählen und begründen', Lebenszyklusphase 'erläutern'.",
        quiz: [
          { q: "Die NovaTech GmbH bringt ein technologisch einzigartiges Gerät heraus und will die hohe Zahlungsbereitschaft früher Käufer abschöpfen. Welche Preisstrategie passt?", opts: ["Penetrationsstrategie", "Skimmingstrategie", "Niedrigpreisstrategie", "Festpreisbindung"], correct: 1, fb: "Hoher Einführungspreis bei Innovation = Skimming. Penetration wäre der niedrige Einstiegspreis für schnelle Marktdurchdringung." },
          { q: "Ordnen Sie zu: Die Entscheidung über Garantieleistungen gehört zu welchem Instrument des Marketing-Mix?", opts: ["Preispolitik", "Produktpolitik", "Distributionspolitik", "Kommunikationspolitik"], correct: 1, fb: "Service- und Garantieleistungen sind Teil der Produktpolitik (Product)." },
          { q: "Wo liegt die kurzfristige Preisuntergrenze eines Produkts?", opts: ["Bei den Selbstkosten", "Bei den variablen Stückkosten", "Beim Listenpreis", "Bei den Fixkosten"], correct: 1, fb: "Kurzfristig (z. B. Zusatzauftrag, freie Kapazität) ist die Untergrenze = variable Stückkosten (Deckungsbeitrag null). Langfristig die Selbstkosten." },
          { q: "Welche Reihenfolge der Phasen des Produktlebenszyklus ist korrekt?", opts: ["Wachstum, Einführung, Reife, Rückgang", "Einführung, Wachstum, Reife, Sättigung, Rückgang", "Einführung, Reife, Wachstum, Rückgang", "Sättigung, Wachstum, Einführung, Reife"], correct: 1, fb: "Korrekt: Einführung → Wachstum → Reife → Sättigung → Rückgang." },
          { q: "Was versteht man unter der Sortimentstiefe?", opts: ["Die Anzahl der Produktlinien", "Die Anzahl der Varianten innerhalb einer Produktlinie", "Die Höhe der Lagerbestände", "Die Anzahl der Lieferanten"], correct: 1, fb: "Tiefe = Varianten je Linie; Breite = Anzahl unterschiedlicher Produktlinien." },
          { q: "Die Penetrationsstrategie bedeutet einen niedrigen Einführungspreis mit dem Ziel …", opts: ["Imagegewinn durch Exklusivität", "schnelle Marktdurchdringung und hoher Marktanteil", "kurzfristige Gewinnmaximierung", "ständig schwankender Preise"], correct: 1, fb: "Penetration zielt auf rasche Verbreitung und hohe Marktanteile über einen niedrigen Einstiegspreis." },
        ],
      },
      {
        id: "mk-distribution-kommunikation",
        title: "Marketing-Mix: Distributions- & Kommunikationspolitik",
        hours: 1,
        learn:
          "<p>Die beiden übrigen 'P' des Marketing-Mix: <strong>Place</strong> (Distribution) und <strong>Promotion</strong> (Kommunikation).</p>" +
          "<h5>Distributionspolitik (Place)</h5>" +
          "<ul><li><strong>Direkter Absatz:</strong> Hersteller verkauft unmittelbar an den Kunden (z. B. Außendienst, Werksverkauf, eigener Onlineshop).</li>" +
          "<li><strong>Indirekter Absatz:</strong> Verkauf über Absatzmittler (Groß-/Einzelhandel).</li>" +
          "<li>Vertriebssysteme: Mehrkanal-/Omnichannel, E-Commerce; Marketinglogistik (Lieferservice).</li></ul>" +
          "<h5>Kommunikationspolitik (Promotion)</h5>" +
          "<ul><li><strong>Werbung</strong> (klassisch & online), <strong>Verkaufsförderung</strong> (Sales Promotion, z. B. Gutscheine), <strong>Öffentlichkeitsarbeit/PR</strong>, <strong>persönlicher Verkauf</strong>, Sponsoring, Social Media.</li>" +
          "<li>Werbeplanung: Ziel → Zielgruppe → Botschaft → Medium → Budget → Erfolgskontrolle.</li></ul>" +
          "<div class='formelbox'>AIDA-Modell der Werbewirkung: <strong>A</strong>ttention → <strong>I</strong>nterest → <strong>D</strong>esire → <strong>A</strong>ction</div>" +
          "<div class='merke'><strong>Merke:</strong> Zielgruppe und Budget bestimmen den Kommunikationsweg – das ist oft Kern einer 'Beurteilen Sie …'-Aufgabe.</div>",
        topics: [
          "Direkter vs. indirekter Absatzweg, Vertriebssysteme",
          "Kommunikationsinstrumente (Werbung, VKF, PR, persönlicher Verkauf)",
          "Werbeplanung & Werbeerfolgskontrolle",
          "AIDA-Modell, Online-/Social-Media-Marketing",
        ],
        examFocus:
          "Maßnahme einem Instrument 'zuordnen'; eine Werbemaßnahme zum Fall 'entwickeln' (konkret!); Kommunikationsweg 'beurteilen' (Zielgruppen-/Budgetbezug).",
        quiz: [
          { q: "Ein Industrieunternehmen verkauft Maschinen über einen eigenen Außendienst direkt an Großkunden. Um welchen Absatzweg handelt es sich?", opts: ["Indirekter Absatz", "Direkter Absatz", "Verkauf über den Großhandel", "Kommissionsverkauf"], correct: 1, fb: "Ohne Zwischenstufe direkt zum Kunden = direkter Absatz. Über Handel wäre es indirekt." },
          { q: "Das AIDA-Modell beschreibt die Stufen der Werbewirkung. Wofür steht das letzte 'A' (Action)?", opts: ["Aufmerksamkeit", "Die Kaufhandlung", "Eine Anzeige", "Analyse"], correct: 1, fb: "AIDA: Attention → Interest → Desire → Action. Action = die ausgelöste Kaufhandlung." },
          { q: "Ordnen Sie zu: Ein zeitlich befristeter Rabattgutschein zur kurzfristigen Absatzsteigerung gehört zu …", opts: ["Public Relations", "Verkaufsförderung (Sales Promotion)", "persönlichem Verkauf", "Mediawerbung"], correct: 1, fb: "Kurzfristige Kaufanreize am Point of Sale sind Verkaufsförderung." },
          { q: "Welche Maßnahme zählt zur Öffentlichkeitsarbeit (PR)?", opts: ["Ein TV-Werbespot", "Eine Pressemitteilung zum Unternehmensjubiläum", "Ein Preisnachlass", "Ein Außendienstbesuch"], correct: 1, fb: "PR pflegt das Bild in der Öffentlichkeit (z. B. Pressearbeit) – ohne direkte Verkaufsbotschaft." },
          { q: "Beurteilen Sie: Für ein junges Modeunternehmen mit kleinem Budget und junger Zielgruppe ist welcher Kommunikationsweg am wirksamsten?", opts: ["Ganzseitige Zeitungsanzeige", "Social-Media-/Influencer-Marketing", "Bundesweite Plakatkampagne", "TV-Werbung zur Primetime"], correct: 1, fb: "'Beurteilen' (AfB III): Zielgruppe (jung) + geringes Budget → Social Media ist reichweitenstark und günstig." },
          { q: "Was kennzeichnet einen indirekten Absatzweg?", opts: ["Verkauf ganz ohne Zwischenstufen", "Verkauf über Absatzmittler wie Groß- oder Einzelhandel", "ausschließlich Onlineverkauf", "Verkauf nur an Mitarbeiter"], correct: 1, fb: "Indirekt = der Weg führt über Handelsstufen (Absatzmittler) zum Endkunden." },
        ],
      },
      {
        id: "mk-vertrieb",
        title: "Vertrieb, Kundenbindung & Marketingcontrolling",
        hours: 1,
        learn:
          "<p>Der <strong>Vertrieb</strong> setzt die Marketingstrategie um: Angebots- und Auftragsbearbeitung, Kundenakquise und -betreuung, Außendienst und Key-Account-Management.</p>" +
          "<h5>Kundenbeziehungsmanagement (CRM)</h5>" +
          "<p>CRM steuert die Kundengewinnung, <strong>-bindung</strong> und -rückgewinnung. Zentrale Idee: Bestandskunden zu halten ist meist günstiger als ständige Neukundengewinnung. Wichtige Größe ist der <strong>Customer Lifetime Value</strong> (Wert eines Kunden über die gesamte Geschäftsbeziehung). Ein gutes <strong>Beschwerdemanagement</strong> hält unzufriedene Kunden und liefert Verbesserungshinweise.</p>" +
          "<h5>Marketingcontrolling</h5>" +
          "<p>Es prüft, ob die Marketingziele erreicht werden (Soll-Ist-Vergleich). Typische Kennzahlen: <strong>Conversion Rate</strong> (Anteil der Interessenten, die kaufen), Kundenbindungsrate, Werbeerfolg (erzielter Deckungsbeitrag vs. Werbekosten).</p>" +
          "<div class='bsp'><strong>Beispiel:</strong> Kampagne kostet 20.000 €, bringt 120.000 € Mehrumsatz bei 30 % Deckungsbeitrag → DB = 36.000 € > 20.000 € Kosten ⇒ wirtschaftlich erfolgreich.</div>" +
          "<div class='merke'><strong>Merke:</strong> Erfolg im Marketing wird am Deckungsbeitrag gemessen, nicht am bloßen Umsatz.</div>",
        topics: [
          "Vertriebsaufgaben: Angebot, Auftrag, Kundenbetreuung",
          "CRM: Kundengewinnung, -bindung, -rückgewinnung",
          "Customer Lifetime Value, Beschwerdemanagement",
          "Marketingcontrolling & Vertriebskennzahlen (Conversion Rate)",
        ],
        examFocus:
          "Einfache Vertriebskennzahl 'berechnen'; Kundenbindungsmaßnahme 'entwickeln'; Erfolg einer Maßnahme 'beurteilen' (DB statt Umsatz!).",
        quiz: [
          { q: "Warum ist Kundenbindung für Industrieunternehmen oft wirtschaftlicher als ständige Neukundengewinnung?", opts: ["Bestandskunden kaufen nie wieder", "Das Halten zufriedener Kunden ist meist günstiger als teure Neukundengewinnung", "Kundenbindung verursacht keine Kosten", "Bestandskunden zahlen mehr Steuern"], correct: 1, fb: "Neukundengewinnung ist in der Regel deutlich teurer als die Pflege bestehender, zufriedener Kunden." },
          { q: "Was beschreibt der Customer Lifetime Value?", opts: ["Den Tagesumsatz", "Den über die gesamte Geschäftsbeziehung erwarteten Wert eines Kunden", "Die reine Anzahl der Kunden", "Die Werbekosten"], correct: 1, fb: "Der CLV bewertet den gesamten zukünftigen Wert eines Kunden – Grundlage für Bindungsinvestitionen." },
          { q: "Wozu dient ein professionelles Beschwerdemanagement vor allem?", opts: ["Kunden abzuwimmeln", "unzufriedene Kunden zu halten und Verbesserungspotenziale zu erkennen", "Umsätze zu verschleiern", "Werbung zu sparen"], correct: 1, fb: "Gut bearbeitete Beschwerden binden Kunden und liefern wertvolle Hinweise zur Verbesserung." },
          { q: "Eine Kampagne kostet 20.000 € und erzielt 120.000 € Mehrumsatz bei 30 % Deckungsbeitrag. Beurteilen Sie den Erfolg.", opts: ["Verlust, weil Werbung teuer ist", "Erfolg: Deckungsbeitrag 36.000 € übersteigt die Werbekosten von 20.000 €", "Kein Erfolg, da der Umsatz unter 200.000 € liegt", "Nicht beurteilbar"], correct: 1, fb: "DB = 120.000 € × 30 % = 36.000 € > 20.000 €. 'Beurteilen' (AfB III): Erfolg am Deckungsbeitrag messen, nicht am Umsatz." },
          { q: "Was gehört NICHT zu den Aufgaben des Vertriebs?", opts: ["Angebots- und Auftragsbearbeitung", "Kundenbetreuung", "Erstellung des handelsrechtlichen Jahresabschlusses", "Kundenakquise"], correct: 2, fb: "Der Jahresabschluss ist Aufgabe des Rechnungswesens, nicht des Vertriebs." },
          { q: "Welche Kennzahl misst, welcher Anteil der Interessenten tatsächlich kauft?", opts: ["Fluktuationsrate", "Conversion Rate (Umwandlungsquote)", "Eigenkapitalquote", "Umschlagshäufigkeit"], correct: 1, fb: "Die Conversion Rate zeigt den Anteil der Interessenten, der zu Käufern wird." },
        ],
      },
      {
        id: "pe-bedarf",
        title: "Personalbedarfsplanung & -beschaffung",
        hours: 1,
        learn:
          "<p>Das Personalwesen sorgt dafür, dass das Unternehmen <strong>die richtigen Mitarbeiter in richtiger Zahl, Qualifikation, zur richtigen Zeit am richtigen Ort</strong> hat.</p>" +
          "<h5>Personalbedarfsplanung</h5>" +
          "<p>Sie ist <strong>quantitativ</strong> (wie viele?), <strong>qualitativ</strong> (welche Qualifikation?), zeitlich und örtlich.</p>" +
          "<div class='formelbox'>Nettopersonalbedarf = Bruttopersonalbedarf − voraussichtlicher Personalbestand<br>(Bestand fortgeschrieben um Zugänge wie Rückkehrer und Abgänge wie Renteneintritte)</div>" +
          "<h5>Personalbeschaffung</h5>" +
          "<ul><li><strong>Intern</strong> (Versetzung, Beförderung, Mehrarbeit): Eignung bekannt, günstiger, motiviert – aber Betriebsblindheit, Beförderungsstau.</li>" +
          "<li><strong>Extern</strong> (Stellenanzeige, Agentur, Hochschulen, Social Recruiting): frische Impulse, große Auswahl – aber teurer, Einarbeitung, Fehlbesetzungsrisiko.</li></ul>" +
          "<div class='merke'><strong>Merke:</strong> Stellenausschreibungen müssen <strong>diskriminierungsfrei</strong> sein (AGG) – z. B. geschlechtsneutral (m/w/d).</div>",
        topics: [
          "Quantitative/qualitative Personalbedarfsplanung",
          "Brutto- vs. Nettopersonalbedarf (Berechnung)",
          "Interne vs. externe Beschaffung (Vor-/Nachteile)",
          "AGG bei Stellenausschreibungen",
        ],
        examFocus:
          "Nettobedarf 'berechnen'; intern/extern 'gegenüberstellen'; einen Beschaffungsweg 'beurteilen'.",
        quiz: [
          { q: "Ein Betrieb benötigt künftig 50 Mitarbeiter (Bruttobedarf). Aktuell sind 42 da, 3 gehen in Rente, 1 kehrt aus der Elternzeit zurück. Berechnen Sie den Nettopersonalbedarf.", opts: ["8", "10", "12", "6"], correct: 1, fb: "Voraussichtlicher Bestand = 42 − 3 + 1 = 40. Nettobedarf = 50 − 40 = 10. 'Berechnen' (AfB II): Bestand sauber fortschreiben." },
          { q: "Welcher Vorteil spricht für die interne Personalbeschaffung?", opts: ["Frische Impulse von außen", "Bekannte Eignung, geringere Kosten und Motivationswirkung", "Größere Bewerberauswahl", "Kein Einarbeitungsaufwand bei Neuen"], correct: 1, fb: "Intern ist die Eignung bekannt, es ist günstiger und wirkt motivierend (Aufstiegschance)." },
          { q: "Bei der externen Beschaffung ist ein Vorteil …", opts: ["der Beförderungsstau", "neues Know-how und eine größere Auswahl", "der Wegfall jeder Einarbeitung", "die Betriebsblindheit"], correct: 1, fb: "Extern bringt frisches Wissen und mehr Auswahl – allerdings teurer und mit Einarbeitung." },
          { q: "Eine Stellenanzeige sucht ausdrücklich einen 'jungen, deutschen Mann'. Beurteilen Sie dies rechtlich.", opts: ["Zulässig", "Unzulässig – Verstoß gegen das AGG (Diskriminierung wegen Alter, Geschlecht, Herkunft)", "Nur bei Behörden verboten", "Zulässig mit Begründung"], correct: 1, fb: "'Beurteilen' (AfB III): Die Formulierung diskriminiert mehrfach und verstößt gegen das Allgemeine Gleichbehandlungsgesetz." },
          { q: "Was umfasst die qualitative Personalbedarfsplanung?", opts: ["Die Anzahl der Mitarbeiter", "Die benötigten Qualifikationen und Kompetenzen", "Den Standort", "Die Höhe der Lohnkosten"], correct: 1, fb: "Qualitativ = welche Fähigkeiten/Qualifikationen werden gebraucht; die Anzahl ist die quantitative Seite." },
          { q: "Was zählt zur internen Personalbeschaffung?", opts: ["Stellenanzeige im Internet", "Versetzung oder Beförderung vorhandener Mitarbeiter", "Einschaltung einer Personalberatung", "Auftritt auf einer Jobmesse"], correct: 1, fb: "Intern wird der Bedarf aus dem vorhandenen Personal gedeckt (Versetzung, Beförderung, Mehrarbeit)." },
        ],
      },
      {
        id: "pe-auswahl-entwicklung",
        title: "Personalauswahl & Personalentwicklung",
        hours: 1,
        learn:
          "<h5>Personalauswahl</h5>" +
          "<p>Ablauf: Unterlagen sichten → Vorauswahl → Auswahlverfahren → Entscheidung → Einstellung. Verfahren sind u. a. <strong>Vorstellungsgespräch</strong>, Tests, <strong>Assessment-Center</strong> (Verhalten in realistischen Übungen) und Arbeitsprobe. Der <strong>Arbeitsvertrag</strong> regelt mindestens Beginn, Tätigkeit und Vergütung; oft mit Probezeit (Befristung nach TzBfG möglich).</p>" +
          "<h5>Personalentwicklung (PE)</h5>" +
          "<ul><li><strong>into the job:</strong> Einarbeitung, Trainee.</li>" +
          "<li><strong>on the job:</strong> Lernen am Arbeitsplatz – Unterweisung, Job Rotation/Enlargement/Enrichment.</li>" +
          "<li><strong>off the job:</strong> außerhalb des Arbeitsplatzes – Seminare, E-Learning.</li></ul>" +
          "<p>Ziele der PE: Mitarbeiter <strong>qualifizieren</strong>, <strong>binden</strong> und <strong>motivieren</strong> – und so die Wettbewerbsfähigkeit sichern.</p>" +
          "<div class='merke'><strong>Merke:</strong> 'on the job' = am Arbeitsplatz, 'off the job' = weg vom Arbeitsplatz. Diese Zuordnung wird gern abgefragt.</div>",
        topics: [
          "Auswahlprozess & Auswahlverfahren (u. a. Assessment-Center)",
          "Arbeitsvertrag, Probezeit, Befristung (TzBfG)",
          "PE-Konzepte: into/on/off the job",
          "Ziele der Personalentwicklung",
        ],
        examFocus:
          "Geeignetes Auswahlverfahren 'begründen'; PE-Maßnahme 'zuordnen'; Nutzen der PE 'erläutern'.",
        quiz: [
          { q: "Für eine Position mit hohen Führungsanforderungen will der Betrieb das Verhalten der Bewerber in realistischen Situationen prüfen. Welches Verfahren eignet sich besonders?", opts: ["Nur die Zeugnisauswertung", "Ein Assessment-Center", "Ein Onlinetest zum Allgemeinwissen", "Ein Losverfahren"], correct: 1, fb: "Das Assessment-Center beobachtet Verhalten in Übungen/Rollenspielen – ideal für Sozial- und Führungskompetenz." },
          { q: "Job Rotation ist eine Maßnahme …", opts: ["off the job", "on the job (planmäßiger Arbeitsplatzwechsel zum Lernen)", "out of the job", "into the job"], correct: 1, fb: "Job Rotation findet am Arbeitsplatz statt (on the job): geplanter Wechsel zwischen Tätigkeiten." },
          { q: "Welche Angabe gehört zwingend in einen Arbeitsvertrag?", opts: ["Die Lieblingsfarbe", "Beginn, Tätigkeit und Vergütung", "Die Hobbys", "Die Religionszugehörigkeit"], correct: 1, fb: "Wesentliche Vertragsbestandteile sind u. a. Beginn, Tätigkeit, Arbeitszeit und Vergütung." },
          { q: "Erläutern Sie den Nutzen der Personalentwicklung. Welche Aussage trifft zu?", opts: ["Sie erhöht nur die Kosten", "Sie qualifiziert und bindet Mitarbeiter und sichert die Wettbewerbsfähigkeit", "Sie ist gesetzlich verboten", "Sie ersetzt die Personalplanung"], correct: 1, fb: "'Erläutern' (AfB II): PE steigert Qualifikation, Bindung und Motivation – ein klarer Nutzen trotz Kosten." },
          { q: "Was bedeutet 'off the job'?", opts: ["Lernen direkt am Arbeitsplatz", "Qualifizierung außerhalb des Arbeitsplatzes (z. B. externes Seminar)", "Eine Versetzung", "Eine Kündigung"], correct: 1, fb: "'off the job' = Weiterbildung weg vom Arbeitsplatz (Seminar, Lehrgang, E-Learning)." },
          { q: "Wozu dient die Probezeit im Arbeitsverhältnis?", opts: ["Lohn zu sparen", "beiden Seiten eine erleichterte (kurzfristige) Lösung des Vertrags zu ermöglichen", "Urlaub zu sperren", "Steuern zu senken"], correct: 1, fb: "In der Probezeit gelten kürzere Kündigungsfristen – beide Seiten können sich erleichtert trennen." },
        ],
      },
      {
        id: "pe-entgelt",
        title: "Entgelt & Personalcontrolling",
        hours: 1,
        learn:
          "<h5>Entgeltformen</h5>" +
          "<ul><li><strong>Zeitlohn:</strong> Vergütung nach Arbeitszeit – gut bei nicht messbarer Leistung oder wenn Qualität zählt.</li>" +
          "<li><strong>Akkordlohn:</strong> Leistungslohn nach Menge (Geld- oder Zeitakkord) – nur bei akkordfähiger, beeinflussbarer Arbeit.</li>" +
          "<li><strong>Prämienlohn:</strong> Grundlohn + Prämie für Mehrleistung (Menge, Qualität, Ersparnis).</li>" +
          "<li>Gehalt sowie Zusatzleistungen (betriebliche Altersvorsorge, Sachbezüge).</li></ul>" +
          "<div class='formelbox'>Geldakkord: Lohn = gefertigte Stückzahl × Geldfaktor (€/Stück)<br>Fluktuationsrate = Abgänge ÷ durchschnittlicher Personalbestand × 100</div>" +
          "<h5>Brutto zu Netto & Personalcontrolling</h5>" +
          "<p>Vom Bruttolohn werden Lohnsteuer (+ Soli/Kirchensteuer) und die <strong>Arbeitnehmeranteile zur Sozialversicherung</strong> abgezogen → Nettolohn. Das Personalcontrolling steuert mit Kennzahlen wie <strong>Personalkostenquote</strong>, Fluktuationsrate und Krankenstand.</p>" +
          "<div class='bsp'><strong>Beispiel:</strong> 240 Stück × 0,75 €/Stück = <strong>180 € Akkordlohn</strong>.</div>",
        topics: [
          "Entgeltformen: Zeit-, Akkord-, Prämienlohn, Gehalt",
          "Akkord- und Fluktuationsberechnung",
          "Brutto-Netto-Abrechnung (Steuern + SV-Beiträge)",
          "Personalcontrolling-Kennzahlen",
        ],
        examFocus:
          "Akkordlohn/Fluktuation 'berechnen'; passende Entgeltform 'beurteilen'; Brutto-Netto 'erläutern'.",
        quiz: [
          { q: "Ein Mitarbeiter fertigt im Geldakkord 240 Stück bei einem Geldfaktor von 0,75 €/Stück. Berechnen Sie den Akkordlohn.", opts: ["180 €", "240 €", "320 €", "0,75 €"], correct: 0, fb: "Lohn = 240 × 0,75 € = 180 €. 'Berechnen' (AfB II): Menge × Geldfaktor." },
          { q: "Bei 8 Abgängen und einem durchschnittlichen Personalbestand von 160 – wie hoch ist die Fluktuationsrate?", opts: ["2 %", "5 %", "8 %", "12,5 %"], correct: 1, fb: "Fluktuationsrate = 8 ÷ 160 × 100 = 5 %." },
          { q: "Welche Entgeltform eignet sich, wenn Qualität wichtiger ist als reine Menge?", opts: ["Reiner Geldakkord", "Zeitlohn oder Prämienlohn mit Qualitätsprämie", "Mengenakkord", "Stückzahllohn"], correct: 1, fb: "'Beurteilen' (AfB III): Reiner Akkord fördert Tempo statt Qualität – besser Zeit-/Prämienlohn." },
          { q: "Welche Abzüge mindern den Bruttolohn zum Nettolohn?", opts: ["Nur die Lohnsteuer", "Lohnsteuer und die Arbeitnehmeranteile zur Sozialversicherung", "Nur die SV-Beiträge", "Die Umsatzsteuer"], correct: 1, fb: "Vom Brutto werden Lohnsteuer (+ Soli/KiSt) und die AN-Anteile zur Sozialversicherung abgezogen." },
          { q: "Die Personalkostenquote setzt die Personalkosten ins Verhältnis zu …", opts: ["dem Gewinn", "der Gesamtleistung bzw. dem Umsatz", "den Steuern", "der Mitarbeiterzahl"], correct: 1, fb: "Personalkostenquote = Personalkosten ÷ Gesamtleistung (oder Umsatz) × 100." },
          { q: "Akkordlohn ist nur sinnvoll/zulässig, wenn die Leistung …", opts: ["nicht messbar ist", "beeinflussbar und messbar ist (akkordfähig)", "gesetzlich verboten ist", "vom Wetter abhängt"], correct: 1, fb: "Akkord setzt eine vom Mitarbeiter beeinflussbare, gut messbare (akkordfähige) Tätigkeit voraus." },
        ],
      },
      {
        id: "ks-kostenarten",
        title: "KLR-Grundlagen: Kostenarten & Abgrenzung",
        hours: 1,
        learn:
          "<p>Die <strong>Kosten- und Leistungsrechnung (KLR)</strong> ist das interne Rechnungswesen. Sie dient der Kalkulation, der Wirtschaftlichkeitskontrolle und der Vorbereitung unternehmerischer Entscheidungen. Sie läuft in drei Stufen: <strong>Kostenarten → Kostenstellen → Kostenträger</strong>.</p>" +
          "<h5>Abgrenzung der Begriffe</h5>" +
          "<p>Nicht jeder Aufwand der Buchhaltung ist Kosten. <strong>Kosten = betriebsbedingter, bewerteter, periodengerechter Güterverzehr.</strong></p>" +
          "<ul><li><strong>Neutraler Aufwand:</strong> betriebsfremd/außerordentlich (z. B. Spende) → keine Kosten.</li>" +
          "<li><strong>Kalkulatorische Kosten:</strong> <em>Zusatzkosten</em> (kein Aufwand gegenüber, z. B. kalkulatorischer Unternehmerlohn) und <em>Anderskosten</em> (anders bewertet als der Aufwand, z. B. kalkulatorische Abschreibungen).</li></ul>" +
          "<h5>Kostenarten</h5>" +
          "<ul><li><strong>Einzelkosten</strong> (direkt zurechenbar, z. B. Fertigungsmaterial) vs. <strong>Gemeinkosten</strong> (nur indirekt verteilbar).</li>" +
          "<li><strong>Fixe</strong> (mengenunabhängig) vs. <strong>variable</strong> Kosten (steigen mit der Menge).</li></ul>" +
          "<div class='merke'><strong>Merke:</strong> Spende = neutraler Aufwand, kalkulatorischer Unternehmerlohn = Zusatzkosten. Diese Abgrenzung ist Pflichtwissen.</div>",
        topics: [
          "Zweck und Stufen der KLR",
          "Abgrenzung Aufwand/Kosten, neutraler Aufwand",
          "Kalkulatorische Kosten (Zusatz-/Anderskosten)",
          "Einzel-/Gemeinkosten, fixe/variable Kosten",
        ],
        examFocus:
          "Aufwand/Kosten 'abgrenzen'; eine Kostenart 'einordnen'; kalkulatorische Kosten 'erläutern'.",
        quiz: [
          { q: "Eine Geldspende des Unternehmens an einen Sportverein ist in der KLR …", opts: ["Zweckaufwand und damit Kosten", "neutraler Aufwand (keine Kosten)", "Einzelkosten", "Anderskosten"], correct: 1, fb: "Die Spende ist betriebsfremd → neutraler Aufwand, also keine Kosten." },
          { q: "Der kalkulatorische Unternehmerlohn ist ein Beispiel für …", opts: ["Anderskosten", "Zusatzkosten (es steht kein Aufwand gegenüber)", "Einzelkosten", "neutralen Ertrag"], correct: 1, fb: "Dem kalkulatorischen Unternehmerlohn steht kein Aufwand gegenüber → Zusatzkosten." },
          { q: "Welche Aussage zur Abgrenzung ist richtig?", opts: ["Jeder Aufwand ist zugleich Kosten", "Kosten sind betriebsbedingter, bewerteter Güterverzehr", "Kosten sind dasselbe wie Auszahlungen", "Aufwand ist immer kalkulatorisch"], correct: 1, fb: "Kosten = betriebsbedingter, bewerteter, periodengerechter Güterverzehr – nicht jeder Aufwand erfüllt das." },
          { q: "Fertigungslöhne, die einem Produkt direkt zurechenbar sind, zählen zu den …", opts: ["Gemeinkosten", "Einzelkosten", "Fixkosten", "kalkulatorischen Kosten"], correct: 1, fb: "Direkt zurechenbar = Einzelkosten (z. B. Fertigungsmaterial, Fertigungslöhne)." },
          { q: "Wie verhalten sich variable Kosten bei steigender Produktionsmenge?", opts: ["Sie bleiben konstant", "Sie steigen mit der Menge", "Sie sinken", "Sie sind immer null"], correct: 1, fb: "Variable Kosten verändern sich mit der Ausbringungsmenge; fixe Kosten bleiben in Summe gleich." },
          { q: "Kalkulatorische Abschreibungen sind ein Beispiel für …", opts: ["Zusatzkosten", "Anderskosten (statt bilanzieller AfA, anders bewertet)", "neutralen Aufwand", "Einzelkosten"], correct: 1, fb: "Den bilanziellen Abschreibungen steht ein anders bewerteter kalkulatorischer Wert gegenüber → Anderskosten." },
        ],
      },
      {
        id: "ks-bab",
        title: "Kostenstellenrechnung & Betriebsabrechnungsbogen (BAB)",
        hours: 1,
        learn:
          "<p>Die <strong>Kostenstellenrechnung</strong> verteilt die <strong>Gemeinkosten</strong> verursachungsgerecht auf die Bereiche, in denen sie entstehen (Material, Fertigung, Verwaltung, Vertrieb). Werkzeug ist der <strong>Betriebsabrechnungsbogen (BAB)</strong>.</p>" +
          "<h5>Ablauf im BAB</h5>" +
          "<ol><li>Gemeinkosten je Kostenart über <strong>Verteilungsschlüssel</strong> auf die Kostenstellen verteilen.</li>" +
          "<li>Summe je Kostenstelle bilden.</li>" +
          "<li><strong>Gemeinkostenzuschlagssätze</strong> berechnen.</li></ol>" +
          "<div class='formelbox'>MGK-Zuschlag = Materialgemeinkosten ÷ Fertigungsmaterial × 100<br>FGK-Zuschlag = Fertigungsgemeinkosten ÷ Fertigungslöhne × 100<br>VwVtGK-Zuschlag = (Verw.- + Vertriebsgemeinkosten) ÷ Herstellkosten × 100</div>" +
          "<p>Vergleicht man verrechnete <strong>Normalkosten</strong> mit den <strong>Istkosten</strong>, ergibt sich eine Kostenüber- oder -unterdeckung.</p>" +
          "<div class='bsp'><strong>Beispiel:</strong> MGK 30.000 €, Fertigungsmaterial 150.000 € → MGK-Zuschlag = 30.000 ÷ 150.000 × 100 = <strong>20 %</strong>.</div>",
        topics: [
          "Aufgabe der Kostenstellenrechnung",
          "Aufbau und Ablauf des BAB",
          "Verteilungsschlüssel & Gemeinkostenzuschlagssätze",
          "Kostenüber-/-unterdeckung (Normal vs. Ist)",
        ],
        examFocus:
          "Dauerbrenner: Zuschlagssätze 'berechnen' und das BAB-Schema anwenden. Bezugsgröße je Zuschlag genau kennen.",
        quiz: [
          { q: "Im BAB betragen die Materialgemeinkosten 30.000 € und das Fertigungsmaterial 150.000 €. Berechnen Sie den Materialgemeinkostenzuschlagssatz.", opts: ["20 %", "5 %", "50 %", "200 %"], correct: 0, fb: "30.000 ÷ 150.000 × 100 = 20 %. 'Berechnen' (AfB II): MGK im Verhältnis zum Fertigungsmaterial." },
          { q: "Wozu dient der Betriebsabrechnungsbogen?", opts: ["Zur Buchung der Einzelkosten", "Zur verursachungsgerechten Verteilung der Gemeinkosten auf Kostenstellen", "Zur Erstellung der Bilanz", "Zur Lohnabrechnung"], correct: 1, fb: "Der BAB verteilt die Gemeinkosten auf Kostenstellen und liefert die Zuschlagssätze." },
          { q: "Worauf wird der Fertigungsgemeinkostenzuschlag bezogen?", opts: ["Auf das Fertigungsmaterial", "Auf die Fertigungslöhne (Fertigungseinzelkosten)", "Auf den Umsatz", "Auf die Herstellkosten"], correct: 1, fb: "FGK-Zuschlag = Fertigungsgemeinkosten ÷ Fertigungslöhne × 100." },
          { q: "Die Verwaltungs- und Vertriebsgemeinkosten werden üblicherweise bezogen auf …", opts: ["das Fertigungsmaterial", "die Herstellkosten", "die Fertigungslöhne", "den Gewinn"], correct: 1, fb: "Verwaltungs- und Vertriebsgemeinkosten werden auf die Herstellkosten bezogen." },
          { q: "Wozu dienen Verteilungsschlüssel im BAB?", opts: ["Zur zufälligen Verteilung", "Um Gemeinkosten verursachungsgerecht auf die Kostenstellen aufzuteilen", "Zur Steuerberechnung", "Zur Lagerbewertung"], correct: 1, fb: "Verteilungsschlüssel (z. B. Fläche, Mitarbeiterzahl) verteilen Gemeinkosten möglichst verursachungsgerecht." },
          { q: "Eine Kostenüberdeckung liegt vor, wenn …", opts: ["die Istkosten größer als die Normalkosten sind", "die verrechneten Normalkosten größer als die Istkosten sind", "keine Gemeinkosten anfallen", "das Material teurer wird"], correct: 1, fb: "Überdeckung = es wurde mehr verrechnet (Normal) als tatsächlich angefallen (Ist)." },
        ],
      },
      {
        id: "ks-kalkulation",
        title: "Kostenträgerrechnung & Zuschlagskalkulation",
        hours: 1,
        learn:
          "<p>Die <strong>Kostenträgerstückrechnung</strong> (Kalkulation) ermittelt die Selbstkosten je Stück und schließlich den Verkaufspreis. In der Industrie nutzt man meist die <strong>Zuschlagskalkulation</strong>.</p>" +
          "<h5>Kalkulationsschema</h5>" +
          "<div class='formelbox'>Fertigungsmaterial + Materialgemeinkosten = <strong>Materialkosten</strong><br>Fertigungslöhne + Fertigungsgemeinkosten (+ Sondereinzelkosten Fertigung) = <strong>Fertigungskosten</strong><br>Material- + Fertigungskosten = <strong>Herstellkosten</strong><br>+ Verwaltungs- + Vertriebsgemeinkosten = <strong>Selbstkosten</strong><br>+ Gewinnzuschlag = <strong>Barverkaufspreis</strong><br>+ Kundenskonto/Provision = <strong>Zielverkaufspreis</strong><br>+ Rabatt = <strong>Listenverkaufspreis</strong> (netto)</div>" +
          "<h5>Kalkulationsrichtungen</h5>" +
          "<ul><li><strong>Vorwärtskalkulation:</strong> vom Einstandspreis zum Verkaufspreis.</li>" +
          "<li><strong>Rückwärtskalkulation:</strong> vom (Markt-)Verkaufspreis rückwärts zum maximal zulässigen Einkaufspreis.</li>" +
          "<li><strong>Differenzkalkulation:</strong> Einkauf und Verkauf vorgegeben → verbleibender Gewinn.</li></ul>" +
          "<div class='merke'><strong>Merke:</strong> Reihenfolge der Zuschläge: erst Skonto (zum Zielverkaufspreis), dann Rabatt (zum Listenverkaufspreis).</div>",
        topics: [
          "Vom Fertigungsmaterial zu den Selbstkosten",
          "Gewinnzuschlag, Skonto, Rabatt → Listenverkaufspreis",
          "Vorwärts-, Rückwärts-, Differenzkalkulation",
          "Sondereinzelkosten der Fertigung/des Vertriebs",
        ],
        examFocus:
          "Vollständige Kalkulation 'aufbauen/berechnen'; Zwischengrößen benennen. Rückwärtskalkulation 'ermitteln'.",
        quiz: [
          { q: "Was ergibt sich in der Zuschlagskalkulation direkt aus Material- und Fertigungskosten?", opts: ["Die Selbstkosten", "Die Herstellkosten", "Der Barverkaufspreis", "Der Listenverkaufspreis"], correct: 1, fb: "Material- + Fertigungskosten = Herstellkosten. Erst danach folgen Verwaltung/Vertrieb → Selbstkosten." },
          { q: "Die Selbstkosten ergeben sich aus den Herstellkosten zuzüglich …", opts: ["des Gewinns", "der Verwaltungs- und Vertriebsgemeinkosten", "von Rabatt und Skonto", "der Umsatzsteuer"], correct: 1, fb: "Selbstkosten = Herstellkosten + Verwaltungs- + Vertriebsgemeinkosten." },
          { q: "Ein Kunde soll 2 % Skonto und 10 % Rabatt erhalten. In welcher Reihenfolge werden diese in der Vorwärtskalkulation berücksichtigt?", opts: ["Zuerst Rabatt, dann Skonto", "Zuerst Skonto (zum Zielverkaufspreis), dann Rabatt (zum Listenverkaufspreis)", "Beide gleichzeitig", "Gar nicht"], correct: 1, fb: "Barverkaufspreis → + Skonto = Zielverkaufspreis → + Rabatt = Listenverkaufspreis." },
          { q: "Was ermittelt die Rückwärtskalkulation?", opts: ["Den Gewinn", "Vom vorgegebenen Verkaufspreis rückwärts den maximal zulässigen Bezugs-/Materialpreis", "Die Steuer", "Die Herstellkosten ohne Material"], correct: 1, fb: "Rückwärtskalkulation geht vom Marktpreis aus und prüft, wie teuer der Einkauf höchstens sein darf." },
          { q: "Sondereinzelkosten der Fertigung (z. B. ein Spezialwerkzeug) werden in der Kalkulation …", opts: ["als Gemeinkosten verteilt", "den Fertigungskosten direkt zugerechnet", "ignoriert", "vom Gewinn abgezogen"], correct: 1, fb: "Sondereinzelkosten sind direkt zurechenbar und werden den Fertigungskosten zugeschlagen." },
          { q: "Auf welche Größe wird der Gewinnzuschlag berechnet?", opts: ["Auf die Herstellkosten", "Auf die Selbstkosten", "Auf das Fertigungsmaterial", "Auf den Listenpreis"], correct: 1, fb: "Der Gewinnzuschlag bezieht sich auf die Selbstkosten und führt zum Barverkaufspreis." },
        ],
      },
      {
        id: "ks-deckungsbeitrag",
        title: "Teilkostenrechnung: Deckungsbeitrag & Break-even",
        hours: 1,
        learn:
          "<p>Die <strong>Vollkostenrechnung</strong> verteilt alle Kosten (auch fixe) auf die Produkte – das kann zu Fehlentscheidungen führen. Die <strong>Teilkostenrechnung</strong> (Direct Costing) rechnet nur die variablen Kosten den Trägern zu und behandelt die Fixkosten als Block.</p>" +
          "<div class='formelbox'>Deckungsbeitrag/Stück = Preis − variable Stückkosten<br>Betriebsergebnis = Gesamt-Deckungsbeitrag − Fixkosten<br>Break-even-Menge = Fixkosten ÷ Deckungsbeitrag pro Stück</div>" +
          "<h5>Typische Entscheidungen</h5>" +
          "<ul><li><strong>Zusatzauftrag</strong> bei freier Kapazität: annehmen, solange der Preis über den variablen Stückkosten liegt (positiver DB).</li>" +
          "<li><strong>Preisuntergrenze</strong> kurzfristig = variable Stückkosten.</li>" +
          "<li><strong>Engpass:</strong> Produkt mit dem höchsten <em>relativen</em> DB (je Engpasseinheit) bevorzugen.</li>" +
          "<li><strong>Make-or-buy:</strong> bei freier Kapazität variable Eigenkosten mit dem Einkaufspreis vergleichen.</li></ul>" +
          "<div class='bsp'><strong>Beispiel:</strong> Preis 60 €, variabel 40 € → DB 20 €. Fixkosten 100.000 € → Break-even = 100.000 ÷ 20 = <strong>5.000 Stück</strong>.</div>",
        topics: [
          "Voll- vs. Teilkostenrechnung",
          "Deckungsbeitrag, Betriebsergebnis, Break-even",
          "Zusatzauftrag, Preisuntergrenze, Engpass",
          "Make-or-buy-Entscheidung",
        ],
        examFocus:
          "Break-even/DB 'berechnen' und anschließend 'beurteilen/entscheiden' – die Begründung muss die Zahlen aufgreifen.",
        quiz: [
          { q: "Ein Produkt kostet variabel 40 €/Stück und wird für 60 € verkauft. Die Fixkosten betragen 100.000 €. Berechnen Sie die Break-even-Menge.", opts: ["1.667 Stück", "5.000 Stück", "2.500 Stück", "100.000 Stück"], correct: 1, fb: "DB = 60 − 40 = 20 €. Break-even = 100.000 ÷ 20 = 5.000 Stück." },
          { q: "Ein Zusatzauftrag wird zu 45 €/Stück angefragt (variable Kosten 40 €, freie Kapazität). Beurteilen Sie.", opts: ["Ablehnen, da unter den Vollkosten", "Annehmen, da positiver Deckungsbeitrag von 5 €/Stück", "Ablehnen, weil kein Gewinn entsteht", "Nicht entscheidbar"], correct: 1, fb: "'Beurteilen' (AfB III): Bei freier Kapazität zählt der Deckungsbeitrag – 45 € > 40 € ⇒ DB 5 €/Stück verbessert das Ergebnis." },
          { q: "Wo liegt die kurzfristige Preisuntergrenze?", opts: ["Bei den Selbstkosten", "Bei den variablen Stückkosten", "Beim Listenpreis", "Bei den Fixkosten"], correct: 1, fb: "Kurzfristig deckt der Preis mindestens die variablen Kosten (DB = 0) – das ist die Untergrenze." },
          { q: "Das Betriebsergebnis ergibt sich aus …", opts: ["Gesamt-Deckungsbeitrag − Fixkosten", "Umsatz − Materialkosten", "Preis − Gewinn", "Fixkosten − variable Kosten"], correct: 0, fb: "Betriebsergebnis = Summe der Deckungsbeiträge − Fixkosten." },
          { q: "Bei einem Engpass (z. B. knappe Maschinenstunden) sollte das Produkt bevorzugt werden mit dem höchsten …", opts: ["absoluten Verkaufspreis", "relativen Deckungsbeitrag je Engpasseinheit", "Umsatz", "Materialanteil"], correct: 1, fb: "Im Engpass entscheidet der DB je Engpasseinheit (relativer DB), nicht der absolute DB." },
          { q: "Warum kann die Vollkostenrechnung zu Fehlentscheidungen führen?", opts: ["Sie ignoriert das Material", "Sie proportionalisiert Fixkosten und kann profitable Aufträge fälschlich ablehnen lassen", "Sie rechnet keine Gemeinkosten", "Sie ist gesetzlich verboten"], correct: 1, fb: "Werden Fixkosten wie variable behandelt, erscheinen Aufträge mit positivem DB fälschlich unrentabel." },
        ],
      },
      {
        id: "ks-jahresabschluss",
        title: "Jahresabschluss: Bilanz & GuV",
        hours: 1,
        learn:
          "<p>Der <strong>Jahresabschluss</strong> nach HGB besteht aus <strong>Bilanz</strong> und <strong>Gewinn- und Verlustrechnung (GuV)</strong> (bei Kapitalgesellschaften zusätzlich Anhang/Lagebericht).</p>" +
          "<h5>Bilanz</h5>" +
          "<ul><li><strong>Aktiva</strong> (Mittelverwendung): Anlage- und Umlaufvermögen – was im Unternehmen steckt.</li>" +
          "<li><strong>Passiva</strong> (Mittelherkunft): Eigenkapital und Fremdkapital – woher das Geld kommt.</li></ul>" +
          "<h5>GuV</h5>" +
          "<div class='formelbox'>Erträge − Aufwendungen = Jahresüberschuss (bzw. Jahresfehlbetrag)</div>" +
          "<p>Die Abschreibungen (linear oder degressiv) mindern als Aufwand das Ergebnis. Es gelten Bewertungsgrundsätze wie das <strong>Vorsichtsprinzip</strong> (Realisations- und Imparitätsprinzip: Gewinne erst bei Realisation, drohende Verluste sofort).</p>" +
          "<div class='bsp'><strong>Beispiel:</strong> Maschine AK 60.000 €, Nutzungsdauer 6 Jahre, linear → 60.000 ÷ 6 = <strong>10.000 €/Jahr</strong> Abschreibung.</div>",
        topics: [
          "Bestandteile des Jahresabschlusses (HGB)",
          "Bilanz: Aktiva/Passiva, Mittelverwendung/-herkunft",
          "GuV: Erträge − Aufwendungen = Jahresergebnis",
          "Abschreibungen & Bewertungsgrundsätze (Vorsichtsprinzip)",
        ],
        examFocus:
          "Bilanzposten 'zuordnen' (Aktiv/Passiv); Jahresergebnis 'ermitteln'; lineare AfA 'berechnen'.",
        quiz: [
          { q: "Eine Maschine im Betriebsvermögen steht in der Bilanz …", opts: ["auf der Passivseite", "auf der Aktivseite (Anlagevermögen)", "in der GuV", "nur im Anhang"], correct: 1, fb: "Vermögensgegenstände stehen auf der Aktivseite; eine Maschine gehört ins Anlagevermögen." },
          { q: "Wo erscheinen Bankverbindlichkeiten?", opts: ["Aktiva, Umlaufvermögen", "Passiva, Fremdkapital", "in der GuV als Ertrag", "Aktiva, Anlagevermögen"], correct: 1, fb: "Schulden gehören zum Fremdkapital auf der Passivseite." },
          { q: "Wie ermittelt sich der Jahresüberschuss in der GuV?", opts: ["Aktiva − Passiva", "Erträge − Aufwendungen", "Umsatz − Steuern", "Eigenkapital − Fremdkapital"], correct: 1, fb: "Jahresüberschuss = Erträge − Aufwendungen." },
          { q: "Eine Maschine (AK 60.000 €, Nutzungsdauer 6 Jahre) wird linear abgeschrieben. Wie hoch ist die jährliche Abschreibung?", opts: ["6.000 €", "10.000 €", "12.000 €", "60.000 €"], correct: 1, fb: "Linear = 60.000 ÷ 6 = 10.000 € pro Jahr." },
          { q: "Das Vorsichtsprinzip führt u. a. dazu, dass …", opts: ["Gewinne möglichst früh ausgewiesen werden", "drohende Verluste sofort, Gewinne aber erst bei Realisation berücksichtigt werden", "keine Abschreibungen nötig sind", "die Bilanz entfällt"], correct: 1, fb: "Vorsichtsprinzip: Imparität (drohende Verluste sofort) und Realisation (Gewinne erst bei Realisierung)." },
          { q: "Die Aktivseite der Bilanz zeigt …", opts: ["die Mittelherkunft", "die Mittelverwendung (das Vermögen)", "den Gewinn", "die Steuern"], correct: 1, fb: "Aktiva = Mittelverwendung (Vermögen); Passiva = Mittelherkunft (Kapital)." },
        ],
      },
      {
        id: "ks-kennzahlen",
        title: "Bilanzanalyse & Kennzahlen",
        hours: 1,
        learn:
          "<p>Aus dem Jahresabschluss werden <strong>Kennzahlen</strong> gebildet, um das Unternehmen zu steuern und im Zeit-/Branchenvergleich zu beurteilen.</p>" +
          "<h5>Wichtige Kennzahlengruppen</h5>" +
          "<div class='formelbox'>Eigenkapitalquote = Eigenkapital ÷ Gesamtkapital × 100<br>Eigenkapitalrentabilität = Gewinn ÷ Eigenkapital × 100<br>Umsatzrentabilität = Gewinn ÷ Umsatz × 100<br>Liquidität 2. Grades = (flüssige Mittel + kurzfr. Forderungen) ÷ kurzfr. Verbindlichkeiten × 100<br>Return on Investment (ROI) = Umsatzrentabilität × Kapitalumschlag = Gewinn ÷ Gesamtkapital × 100</div>" +
          "<p>Außerdem: Anlagendeckung (<strong>goldene Bilanzregel</strong>: langfristiges Vermögen langfristig finanzieren) und der Cashflow als Maß der Innenfinanzierungskraft.</p>" +
          "<div class='merke'><strong>Merke:</strong> In der Prüfung reicht die Zahl allein selten – die <strong>Interpretation</strong> (was bedeutet der Wert?) bringt die Punkte. Eine Einzelkennzahl ist erst im Vergleich aussagekräftig.</div>",
        topics: [
          "Kapitalstruktur: Eigenkapitalquote, Verschuldungsgrad",
          "Rentabilität: EK-, Umsatzrentabilität, ROI",
          "Liquiditätsgrade, Anlagendeckung (goldene Bilanzregel)",
          "Aussagekraft & Zeit-/Branchenvergleich",
        ],
        examFocus:
          "Kennzahl 'berechnen' UND 'interpretieren/beurteilen'. Die Aussage zur Zahl wird mitbewertet.",
        quiz: [
          { q: "Eigenkapital 400.000 €, Gesamtkapital 1.000.000 €. Berechnen Sie die Eigenkapitalquote.", opts: ["25 %", "40 %", "250 %", "60 %"], correct: 1, fb: "EK-Quote = 400.000 ÷ 1.000.000 × 100 = 40 %." },
          { q: "Gewinn 60.000 €, Eigenkapital 400.000 €. Wie hoch ist die Eigenkapitalrentabilität?", opts: ["6,7 %", "15 %", "40 %", "24 %"], correct: 1, fb: "EK-Rentabilität = 60.000 ÷ 400.000 × 100 = 15 %." },
          { q: "Eine hohe Eigenkapitalquote bedeutet tendenziell …", opts: ["ein höheres Insolvenzrisiko", "mehr Stabilität und Unabhängigkeit, aber evtl. einen geringeren Leverage-Effekt", "weniger Umsatz", "höhere Steuern"], correct: 1, fb: "'Interpretieren' (AfB II/III): Viel EK = solide und unabhängig, kann die EK-Rentabilität aber dämpfen." },
          { q: "Was misst die Liquidität 2. Grades?", opts: ["die Rentabilität", "(flüssige Mittel + kurzfristige Forderungen) ÷ kurzfristige Verbindlichkeiten", "den Lagerumschlag", "die Anlagenintensität"], correct: 1, fb: "Liquidität 2. Grades bezieht flüssige Mittel und kurzfristige Forderungen auf die kurzfristigen Schulden." },
          { q: "Der Return on Investment (ROI) verknüpft …", opts: ["Umsatzrentabilität und Kapitalumschlag", "Liquidität und Fixkosten", "Eigenkapitalquote und Cashflow", "Lohn und Steuer"], correct: 0, fb: "ROI = Umsatzrentabilität × Kapitalumschlag = Gewinn ÷ Gesamtkapital." },
          { q: "Beurteilen Sie: Ist eine einzelne Kennzahl (z. B. EK-Quote 40 %) für sich aussagekräftig?", opts: ["Ja, immer", "Nein – erst im Zeit-/Branchenvergleich sinnvoll interpretierbar", "Nein, Kennzahlen sind verboten", "Ja, sie ersetzt die Bilanz"], correct: 1, fb: "'Beurteilen' (AfB III): Eine Kennzahl wird erst im Vergleich (Vorjahr, Branche) wirklich aussagekräftig." },
        ],
      },
      {
        id: "ks-investition",
        title: "Investitionsrechnung",
        hours: 1,
        learn:
          "<p>Eine <strong>Investition</strong> bindet Kapital für die Beschaffung von Vermögen. Die statischen Investitionsrechnungen helfen bei der Auswahl zwischen Alternativen.</p>" +
          "<h5>Statische Verfahren</h5>" +
          "<ul><li><strong>Kostenvergleich:</strong> bei gleicher Leistung die Alternative mit den geringeren Kosten.</li>" +
          "<li><strong>Gewinnvergleich:</strong> bezieht zusätzlich die Erlöse ein (Gewinn = Erlös − Kosten).</li>" +
          "<li><strong>Rentabilitätsvergleich:</strong> Gewinn im Verhältnis zum Kapitaleinsatz.</li>" +
          "<li><strong>Amortisationsrechnung:</strong> Zeit bis zur Rückgewinnung des Kapitals.</li></ul>" +
          "<div class='formelbox'>Amortisationszeit = Kapitaleinsatz ÷ durchschnittlicher jährlicher Rückfluss<br>(Rückfluss = Gewinn + kalkulatorische Abschreibungen)<br>Rentabilität = Ø Gewinn ÷ Ø Kapitaleinsatz × 100</div>" +
          "<p><strong>Grenze:</strong> Statische Verfahren vernachlässigen den <strong>Zeitwert des Geldes</strong> (Zinsen). Dynamische Verfahren (z. B. Kapitalwertmethode) berücksichtigen ihn.</p>" +
          "<div class='bsp'><strong>Beispiel:</strong> Kapitaleinsatz 120.000 €, jährlicher Rückfluss 30.000 € → Amortisationszeit = 120.000 ÷ 30.000 = <strong>4 Jahre</strong>.</div>",
        topics: [
          "Kosten-, Gewinn-, Rentabilitätsvergleich",
          "Amortisationsrechnung (Rückfluss = Gewinn + AfA)",
          "Grenzen statischer Verfahren (Zeitwert)",
          "Grundidee dynamischer Verfahren",
        ],
        examFocus:
          "Verfahren 'berechnen' und mit 'Empfehlen Sie …' abschließen – die Begründung greift die Rechenergebnisse auf.",
        quiz: [
          { q: "Eine Investition kostet 120.000 € und bringt jährliche Rückflüsse von 30.000 €. Berechnen Sie die Amortisationszeit.", opts: ["3 Jahre", "4 Jahre", "5 Jahre", "6 Jahre"], correct: 1, fb: "Amortisationszeit = 120.000 ÷ 30.000 = 4 Jahre." },
          { q: "Welches Verfahren bezieht im Gegensatz zum Kostenvergleich auch die Erlöse ein?", opts: ["Die Amortisationsrechnung", "Die Gewinnvergleichsrechnung", "Der Kostenvergleich", "Die Break-even-Analyse"], correct: 1, fb: "Der Gewinnvergleich berücksichtigt Erlöse und Kosten (Gewinn = Erlös − Kosten)." },
          { q: "Der jährliche Rückfluss einer Investition setzt sich zusammen aus …", opts: ["nur dem Gewinn", "Gewinn + kalkulatorische Abschreibungen", "nur den Abschreibungen", "Umsatz − Steuer"], correct: 1, fb: "Der Rückfluss (Cashflow der Investition) = Gewinn + Abschreibungen." },
          { q: "Eine kürzere Amortisationszeit bedeutet …", opts: ["ein höheres Risiko", "ein geringeres Risiko (Kapital fließt schneller zurück)", "höhere Kosten", "weniger Erlöse"], correct: 1, fb: "Je schneller das Kapital zurückkehrt, desto geringer das Risiko." },
          { q: "Was vernachlässigen die statischen Investitionsrechnungen?", opts: ["die Kosten", "den Zeitwert des Geldes (Zinseffekte)", "die Erlöse", "den Kapitaleinsatz"], correct: 1, fb: "Statische Verfahren rechnen mit Durchschnitten und ignorieren den zeitlichen Anfall der Zahlungen." },
          { q: "Zwei Maschinen verursachen bei gleicher Leistung unterschiedliche Kosten. Welches Verfahren ist am einfachsten geeignet?", opts: ["Gewinnvergleich", "Kostenvergleichsrechnung", "Rentabilitätsvergleich", "Kapitalwertmethode"], correct: 1, fb: "Bei gleicher Leistung genügt der Kostenvergleich – die geringeren Kosten gewinnen." },
        ],
      },
      {
        id: "ks-finanzierung",
        title: "Finanzierung & Liquidität",
        hours: 1,
        learn:
          "<p>Die Finanzierung deckt den Kapitalbedarf. Man unterscheidet nach <strong>Herkunft</strong> und <strong>Rechtsstellung</strong> des Kapitals.</p>" +
          "<h5>Systematik</h5>" +
          "<ul><li><strong>Innenfinanzierung:</strong> aus dem Unternehmen selbst – Selbstfinanzierung (einbehaltene Gewinne), Abschreibungs-/Rückstellungsgegenwerte, Vermögensumschichtung.</li>" +
          "<li><strong>Außenfinanzierung:</strong> von außen – Eigenfinanzierung (Einlagen/Beteiligung) oder Fremdfinanzierung (Kredite, Anleihen, Lieferantenkredit, Leasing, Factoring).</li></ul>" +
          "<h5>Kreditsicherheiten & Leasing</h5>" +
          "<p>Sicherheiten: Bürgschaft, Grundschuld/Hypothek, Sicherungsübereignung, Zession. <strong>Leasing</strong> schont die Liquidität (Raten statt Einmalzahlung), ist in Summe aber oft teurer als der Kauf.</p>" +
          "<div class='merke'><strong>Merke:</strong> Innen vs. außen = woher (intern erwirtschaftet oder von außen zugeführt); Eigen vs. fremd = Rechtsstellung (haftendes Eigenkapital oder rückzahlbares Fremdkapital).</div>",
        topics: [
          "Innen- vs. Außenfinanzierung",
          "Eigen- vs. Fremdfinanzierung (Beispiele)",
          "Kreditsicherheiten",
          "Leasing vs. Kauf; Liquiditätsplanung",
        ],
        examFocus:
          "Finanzierungsart 'zuordnen'; Leasing/Kauf und Kreditangebote 'beurteilen'.",
        quiz: [
          { q: "Die Finanzierung aus einbehaltenen Gewinnen zählt zur …", opts: ["Außenfinanzierung", "Innenfinanzierung (Selbstfinanzierung)", "Fremdfinanzierung", "Beteiligungsfinanzierung"], correct: 1, fb: "Einbehaltene Gewinne kommen aus dem Unternehmen selbst → Innen-/Selbstfinanzierung." },
          { q: "Ein Bankdarlehen ist ein Beispiel für …", opts: ["Eigenfinanzierung", "Außen- und Fremdfinanzierung", "Innenfinanzierung", "Selbstfinanzierung"], correct: 1, fb: "Das Kapital kommt von außen (Außenfinanzierung) und ist rückzahlbar (Fremdkapital)." },
          { q: "Welche Kreditsicherheit bezieht sich auf ein Grundstück?", opts: ["Bürgschaft", "Grundschuld bzw. Hypothek", "Sicherungsübereignung eines Pkw", "Zession (Forderungsabtretung)"], correct: 1, fb: "Grundpfandrechte (Grundschuld/Hypothek) sichern den Kredit über ein Grundstück." },
          { q: "Beurteilen Sie Leasing gegenüber Kauf bei knapper Liquidität.", opts: ["Kauf ist besser, weil sofort Eigentum entsteht", "Leasing schont die Liquidität (Raten statt hoher Einmalzahlung), ist in Summe aber oft teurer", "Leasing ist immer günstiger", "Es gibt keinen Unterschied"], correct: 1, fb: "'Beurteilen' (AfB III): Leasing entlastet die Liquidität, kostet über die Laufzeit aber meist mehr – abwägen und Fazit ziehen." },
          { q: "Was beschreibt der Lieferantenkredit?", opts: ["Ein Darlehen der Bank", "Das eingeräumte Zahlungsziel des Lieferanten (Kauf auf Ziel)", "Eine staatliche Förderung", "Eine Beteiligung"], correct: 1, fb: "Der Lieferantenkredit entsteht durch das Zahlungsziel beim Kauf auf Ziel – eine kurzfristige Fremdfinanzierung." },
          { q: "Wozu dient die Liquiditätsplanung?", opts: ["Den Gewinn zu ermitteln", "die jederzeitige Zahlungsfähigkeit zu sichern (Ein-/Auszahlungen abstimmen)", "Steuern zu berechnen", "das Lager zu bewerten"], correct: 1, fb: "Die Liquiditätsplanung stellt Ein- und Auszahlungen gegenüber, um Zahlungsunfähigkeit zu vermeiden." },
        ],
      },
    ],
  },
  {
    id: "wiso",
    code: "Prüfungsbereich 2 · AP2",
    title: "Wirtschafts- & Sozialkunde",
    form: "Schriftlich · 60 Min · gebundene & ungebundene Aufgaben · Gewichtung 10 %",
    color: "#059669",
    intro:
      "Lernfeld 11: Geschäftsprozesse an gesamtwirtschaftlichen Rahmenbedingungen ausrichten. Rechtliche, wirtschaftliche und gesellschaftliche Rahmenbedingungen der Berufs- und Arbeitswelt.",
    lessons: [
      {
        id: "wiso-markt",
        title: "Markt, Preisbildung & Wirtschaftsordnung",
        hours: 1,
        learn:
          "<p>Aus knappen Gütern entstehen wirtschaftliche Entscheidungen. Aus <strong>Bedürfnissen</strong> wird über die Kaufkraft <strong>Bedarf</strong> und am Markt <strong>Nachfrage</strong>. Das <strong>ökonomische Prinzip</strong> verlangt einen vernünftigen Mitteleinsatz.</p>" +
          "<div class='formelbox'>Maximalprinzip: mit gegebenen Mitteln den größten Erfolg<br>Minimalprinzip: ein festes Ziel mit geringstem Mitteleinsatz</div>" +
          "<h5>Wirtschaftsordnung</h5>" +
          "<p>Die <strong>soziale Marktwirtschaft</strong> verbindet Wettbewerb und Privateigentum mit sozialem Ausgleich durch den Staat (Sozialversicherung, Wettbewerbsschutz, Umverteilung).</p>" +
          "<h5>Preisbildung & Marktformen</h5>" +
          "<p>Der Preis bildet sich aus <strong>Angebot und Nachfrage</strong>. Im Gleichgewicht stimmen angebotene und nachgefragte Menge überein. Marktformen: Polypol (viele), Oligopol (wenige), Monopol (einer). Der Wettbewerb wird durch das GWB und das Bundeskartellamt geschützt.</p>" +
          "<div class='merke'><strong>Merke:</strong> Angebotsüberhang → Preis sinkt; Nachfrageüberhang → Preis steigt.</div>",
        topics: [
          "Bedürfnis–Bedarf–Nachfrage, ökonomisches Prinzip",
          "Wirtschaftssysteme & soziale Marktwirtschaft",
          "Preisbildung, Marktgleichgewicht, Marktformen",
          "Wettbewerbsschutz (GWB, Kartellamt)",
        ],
        examFocus:
          "Transfer: ein Ereignis einem Modell zuordnen und die Preiswirkung 'erläutern'; Marktform 'erkennen'.",
        quiz: [
          { q: "Wegen einer Missernte sinkt das Angebot an Kaffee stark. Erläutern Sie die Preiswirkung.", opts: ["Der Preis sinkt", "Der Preis steigt (Angebot kleiner als Nachfrage)", "Der Preis bleibt gleich", "Der Preis wird staatlich verboten"], correct: 1, fb: "'Erläutern' (AfB II): Verknappung des Angebots bei gleicher Nachfrage → der Preis steigt." },
          { q: "Was kennzeichnet die soziale Marktwirtschaft?", opts: ["staatliche Planung aller Preise", "Wettbewerb mit sozialem Ausgleich durch den Staat", "völliger Verzicht auf staatliche Eingriffe", "Selbstversorgung der Betriebe"], correct: 1, fb: "Marktwirtschaftliche Ordnung plus sozialer Ausgleich (Sozialpolitik, Wettbewerbsschutz)." },
          { q: "Auf einem Markt mit wenigen großen Anbietern und vielen Nachfragern liegt ein … vor.", opts: ["Polypol", "Angebotsoligopol", "Monopol", "Nachfragemonopol"], correct: 1, fb: "Wenige Anbieter, viele Nachfrager = Angebotsoligopol." },
          { q: "Im Marktgleichgewicht gilt: …", opts: ["Angebot größer als Nachfrage", "die angebotene Menge entspricht der nachgefragten Menge", "die Nachfrage ist null", "der Preis ist null"], correct: 1, fb: "Im Gleichgewicht treffen sich Angebot und Nachfrage – dort bildet sich der Gleichgewichtspreis." },
          { q: "Nach dem Maximalprinzip wird …", opts: ["mit minimalem Mitteleinsatz ein festes Ziel erreicht", "mit gegebenen Mitteln ein maximales Ergebnis erzielt", "gar nicht gewirtschaftet", "der Preis staatlich festgelegt"], correct: 1, fb: "Maximalprinzip: gegebene Mittel → größtmöglicher Erfolg. Das Gegenstück ist das Minimalprinzip." },
          { q: "Wozu dient das Gesetz gegen Wettbewerbsbeschränkungen (GWB)?", opts: ["zur Förderung von Kartellen", "zum Schutz des Wettbewerbs (Verbot wettbewerbswidriger Absprachen)", "zur staatlichen Preisfestsetzung", "zur Steuererhebung"], correct: 1, fb: "Das GWB schützt den Wettbewerb und verbietet z. B. Preisabsprachen (Kartelle)." },
        ],
      },
      {
        id: "wiso-konjunktur",
        title: "Wirtschaftspolitik & gesamtwirtschaftliche Rahmenbedingungen",
        hours: 1,
        learn:
          "<p>Die gesamtwirtschaftliche Leistung misst das <strong>Bruttoinlandsprodukt (BIP)</strong>. Die Wirtschaft durchläuft einen <strong>Konjunkturzyklus</strong>: Aufschwung → Boom (Hochkonjunktur) → Abschwung/Rezession → Tiefphase.</p>" +
          "<h5>Ziele: das magische Viereck</h5>" +
          "<ul><li>Preisniveaustabilität</li><li>hoher Beschäftigungsstand</li><li>außenwirtschaftliches Gleichgewicht</li><li>stetiges, angemessenes Wirtschaftswachstum</li></ul>" +
          "<p>(erweitert zum Sechseck um Umweltschutz und gerechte Einkommensverteilung).</p>" +
          "<h5>Steuerungsinstrumente</h5>" +
          "<p><strong>Fiskalpolitik</strong> (Staat über Steuern/Ausgaben) und <strong>Geldpolitik</strong> (EZB über den Leitzins; vorrangiges Ziel: Preisstabilität bei rund 2 % Inflation). Dauerhaft steigende Preise = <strong>Inflation</strong>, fallende = Deflation.</p>" +
          "<div class='merke'><strong>Merke:</strong> In der Rezession wirkt eine <em>expansive</em> Fiskalpolitik (niedrigere Steuern, höhere Ausgaben) konjunkturbelebend.</div>",
        topics: [
          "BIP & Konjunkturzyklus",
          "Magisches Viereck/Sechseck",
          "Inflation/Deflation",
          "Fiskal- und Geldpolitik (EZB, Leitzins)",
        ],
        examFocus:
          "Indikator/Phase 'zuordnen'; eine wirtschaftspolitische Maßnahme 'erläutern/beurteilen'.",
        quiz: [
          { q: "Steigt das allgemeine Preisniveau dauerhaft an, spricht man von …", opts: ["Deflation", "Inflation", "Rezession", "Stagnation"], correct: 1, fb: "Anhaltend steigendes Preisniveau = Inflation; fallendes = Deflation." },
          { q: "Welches Ziel gehört NICHT zum magischen Viereck?", opts: ["Preisniveaustabilität", "hoher Beschäftigungsstand", "maximaler Unternehmensgewinn", "außenwirtschaftliches Gleichgewicht"], correct: 2, fb: "Das magische Viereck umfasst Preisstabilität, Beschäftigung, außenwirtschaftliches Gleichgewicht und Wachstum – kein Einzelgewinn." },
          { q: "Welche Phase folgt typischerweise auf den Boom (Hochkonjunktur)?", opts: ["der Aufschwung", "der Abschwung/die Rezession", "sofort die Tiefphase", "kein Wechsel"], correct: 1, fb: "Nach dem Boom kommt der Abschwung (Rezession), danach die Tiefphase." },
          { q: "Das vorrangige Ziel der Geldpolitik der EZB ist …", opts: ["Vollbeschäftigung", "Preisstabilität (Inflation nahe 2 %)", "ein hoher Export", "Steuererhöhungen"], correct: 1, fb: "Die EZB ist vorrangig der Preisstabilität verpflichtet (mittelfristig rund 2 %)." },
          { q: "Welche Kennzahl misst die gesamtwirtschaftliche Leistung eines Landes?", opts: ["der Leitzins", "das Bruttoinlandsprodukt (BIP)", "die Eigenkapitalquote", "der DAX"], correct: 1, fb: "Das BIP misst den Wert aller im Inland erzeugten Waren und Dienstleistungen einer Periode." },
          { q: "Senkt der Staat in der Rezession die Steuern und erhöht die Ausgaben, betreibt er …", opts: ["restriktive Geldpolitik", "expansive Fiskalpolitik", "Angebotspolitik der EZB", "gar keine Politik"], correct: 1, fb: "'Zuordnen/Beurteilen': Steuern runter + Ausgaben rauf = expansive (nachfrageorientierte) Fiskalpolitik des Staates." },
        ],
      },
      {
        id: "wiso-arbeitsrecht",
        title: "Arbeits- & Tarifrecht, Mitbestimmung",
        hours: 1,
        learn:
          "<h5>Individualarbeitsrecht</h5>" +
          "<p>Es regelt das Verhältnis zwischen einzelnem Arbeitnehmer und Arbeitgeber: Arbeitsvertrag, Pflichten, <strong>Kündigung</strong> (ordentlich mit Frist / außerordentlich aus wichtigem Grund), <strong>Kündigungsschutz</strong> (KSchG: i. d. R. ab > 6 Monaten in Betrieben mit mehr als 10 Beschäftigten) und Zeugnis. Schutzgesetze: ArbZG, JArbSchG, MuSchG, BUrlG, AGG.</p>" +
          "<h5>Kollektivarbeitsrecht</h5>" +
          "<p><strong>Tarifautonomie:</strong> Gewerkschaften und Arbeitgeber(-verbände) handeln Tarifverträge ohne den Staat aus (Art. 9 GG). Während der Laufzeit gilt die <strong>Friedenspflicht</strong>; Arbeitskampfmittel sind Streik und Aussperrung.</p>" +
          "<h5>Betriebsverfassung</h5>" +
          "<p>Der <strong>Betriebsrat</strong> wird von der Belegschaft gewählt und hat Mitbestimmungsrechte v. a. in sozialen Angelegenheiten (z. B. Arbeitszeit, § 87 BetrVG).</p>" +
          "<div class='merke'><strong>Merke:</strong> Tarifvertrag = zwischen Gewerkschaft und Arbeitgeberverband; Betriebsvereinbarung = zwischen Betriebsrat und Arbeitgeber.</div>",
        topics: [
          "Arbeitsvertrag, Kündigung & Kündigungsschutz",
          "Schutzgesetze (ArbZG, JArbSchG, MuSchG, AGG)",
          "Tarifautonomie, Tarifvertrag, Arbeitskampf",
          "Betriebsrat & Mitbestimmung",
        ],
        examFocus:
          "Fall → Rechtsfolge 'beurteilen'; Fristen/Zuständigkeiten in MC genau lesen.",
        quiz: [
          { q: "Ein Arbeitnehmer (seit 3 Jahren in einem Betrieb mit 50 Beschäftigten) wird ohne Grund gekündigt. Beurteilen Sie.", opts: ["Wirksam, eine Kündigung braucht nie einen Grund", "Die Kündigung kann unwirksam sein – das KSchG verlangt eine soziale Rechtfertigung", "Nur mündlich wirksam", "Nur in Kleinbetrieben wirksam"], correct: 1, fb: "'Beurteilen' (AfB III): Da das KSchG greift (> 6 Monate, > 10 Beschäftigte), braucht die Kündigung einen sozial gerechtfertigten Grund." },
          { q: "Wer handelt Tarifverträge aus?", opts: ["Staat und Betriebsrat", "Gewerkschaften und Arbeitgeber(-verbände)", "IHK und Finanzamt", "Azubi und Ausbilder"], correct: 1, fb: "Tarifvertragsparteien sind Gewerkschaften und Arbeitgeber(-verbände)." },
          { q: "Eine fristlose (außerordentliche) Kündigung erfordert …", opts: ["keinen Grund", "einen wichtigen Grund (§ 626 BGB)", "die Zustimmung des Kunden", "sechs Monate Vorlauf"], correct: 1, fb: "Die außerordentliche Kündigung ist nur aus wichtigem Grund möglich." },
          { q: "Das Mutterschutzgesetz schützt …", opts: ["alle Arbeitnehmer", "werdende und stillende Mütter", "nur Beamtinnen", "alle Auszubildenden"], correct: 1, fb: "Das MuSchG schützt schwangere und stillende Arbeitnehmerinnen (z. B. Beschäftigungsverbote)." },
          { q: "Welches Recht hat der Betriebsrat unter anderem?", opts: ["über die Gewinnausschüttung zu entscheiden", "Mitbestimmung in sozialen Angelegenheiten (z. B. Arbeitszeit)", "die Steuern festzulegen", "den Geschäftsführer zu kündigen"], correct: 1, fb: "Der Betriebsrat hat echte Mitbestimmung u. a. bei sozialen Angelegenheiten (§ 87 BetrVG)." },
          { q: "Während der Laufzeit eines Tarifvertrags gilt die …", opts: ["Streikpflicht", "Friedenspflicht", "Aussperrungspflicht", "Lohnpfändung"], correct: 1, fb: "Während der Tariflaufzeit besteht Friedenspflicht – kein Arbeitskampf um die geregelten Inhalte." },
        ],
      },
      {
        id: "wiso-sozial",
        title: "Sozialversicherung",
        hours: 1,
        learn:
          "<p>Die gesetzliche Sozialversicherung sichert gegen die großen Lebensrisiken ab. Sie hat <strong>fünf Zweige</strong>:</p>" +
          "<ul><li><strong>Krankenversicherung</strong> – Krankenkassen (z. B. Krankengeld)</li>" +
          "<li><strong>Pflegeversicherung</strong> – Pflegekassen</li>" +
          "<li><strong>Rentenversicherung</strong> – Alters-, Erwerbsminderungs-, Hinterbliebenenrenten</li>" +
          "<li><strong>Arbeitslosenversicherung</strong> – Bundesagentur für Arbeit (Arbeitslosengeld)</li>" +
          "<li><strong>Unfallversicherung</strong> – Berufsgenossenschaften (Arbeits-/Wegeunfälle), allein vom Arbeitgeber finanziert</li></ul>" +
          "<h5>Prinzipien & Finanzierung</h5>" +
          "<p><strong>Solidarprinzip</strong> und <strong>Umlageverfahren</strong> (heutige Beiträge finanzieren heutige Leistungen), Selbstverwaltung, Versicherungspflicht. Die Beiträge tragen Arbeitgeber und Arbeitnehmer grundsätzlich <strong>paritätisch</strong> (Ausnahme: Unfallversicherung). Die <strong>Beitragsbemessungsgrenze</strong> begrenzt das beitragspflichtige Einkommen.</p>" +
          "<div class='merke'><strong>Merke:</strong> Leistung → Zweig zuordnen: Krankengeld = KV, Rente = RV, ALG I = ArblV, Wegeunfall = UV.</div>",
        topics: [
          "Die fünf Zweige und ihre Träger",
          "Solidar-/Umlageprinzip, Versicherungspflicht",
          "Paritätische Finanzierung & Ausnahmen",
          "Beitragsbemessungsgrenze, Leistungen",
        ],
        examFocus:
          "Leistung oder Träger einem Zweig 'zuordnen'; Finanzierungsprinzip 'erläutern'.",
        quiz: [
          { q: "Ein Arbeitnehmer verunglückt auf dem direkten Weg zur Arbeit. Welcher Zweig ist zuständig?", opts: ["Krankenversicherung", "gesetzliche Unfallversicherung", "Pflegeversicherung", "Rentenversicherung"], correct: 1, fb: "Wegeunfälle sind durch die gesetzliche Unfallversicherung abgedeckt." },
          { q: "Welcher Versicherungszweig wird allein vom Arbeitgeber finanziert?", opts: ["Krankenversicherung", "Unfallversicherung", "Rentenversicherung", "Arbeitslosenversicherung"], correct: 1, fb: "Die Beiträge zur gesetzlichen Unfallversicherung trägt der Arbeitgeber allein." },
          { q: "Das Arbeitslosengeld I wird gezahlt von der/dem …", opts: ["Krankenkasse", "Bundesagentur für Arbeit (Arbeitslosenversicherung)", "Rentenversicherung", "Pflegekasse"], correct: 1, fb: "Träger der Arbeitslosenversicherung ist die Bundesagentur für Arbeit." },
          { q: "Was bewirkt die Beitragsbemessungsgrenze?", opts: ["einen garantierten Mindestbeitrag", "bis zu welchem Einkommen Beiträge erhoben werden", "die Höhe der späteren Rente", "einen Steuerfreibetrag"], correct: 1, fb: "Bis zur Beitragsbemessungsgrenze wird verbeitragt; darüber liegendes Einkommen bleibt beitragsfrei." },
          { q: "Nach welchem Verfahren werden die Renten überwiegend finanziert?", opts: ["Kapitaldeckungsverfahren", "Umlageverfahren (aktive Beitragszahler finanzieren die heutigen Renten)", "Lotterieverfahren", "reines Steuerverfahren"], correct: 1, fb: "Die gesetzliche Rente arbeitet im Umlageverfahren – Generationenvertrag." },
          { q: "Wie werden die Sozialversicherungsbeiträge grundsätzlich getragen (außer Unfallversicherung)?", opts: ["allein vom Arbeitnehmer", "paritätisch von Arbeitgeber und Arbeitnehmer", "allein vom Staat", "allein vom Arbeitgeber"], correct: 1, fb: "Grundsatz: hälftige (paritätische) Finanzierung durch Arbeitgeber und Arbeitnehmer." },
        ],
      },
      {
        id: "wiso-recht",
        title: "Rechtsgeschäfte & Verbraucherschutz",
        hours: 1,
        learn:
          "<p><strong>Rechtsfähigkeit</strong> besteht ab Geburt. Die <strong>Geschäftsfähigkeit</strong> ist gestuft: geschäftsunfähig (unter 7), beschränkt geschäftsfähig (7–17), voll geschäftsfähig (ab 18).</p>" +
          "<h5>Vertrag & Störungen</h5>" +
          "<p>Ein Vertrag kommt durch zwei übereinstimmende <strong>Willenserklärungen</strong> zustande (Antrag + Annahme). Kaufvertragsstörungen sind u. a. <strong>Sachmangel</strong> (Schlechtleistung → Gewährleistung), <strong>Lieferungsverzug</strong>, <strong>Zahlungsverzug</strong> und <strong>Annahmeverzug</strong>.</p>" +
          "<h5>Verbraucherschutz & Eigentum</h5>" +
          "<p>Bei Fernabsatzgeschäften gilt grundsätzlich ein <strong>Widerrufsrecht von 14 Tagen</strong>. Beim <strong>Eigentumsvorbehalt</strong> bleibt der Verkäufer Eigentümer, bis vollständig gezahlt ist (wichtig: Eigentum ≠ Besitz).</p>" +
          "<div class='merke'><strong>Merke:</strong> Beschränkt Geschäftsfähige brauchen für nachteilige Geschäfte die Zustimmung der Eltern – sonst schwebend unwirksam (§ 108 BGB).</div>",
        topics: [
          "Rechts- und Geschäftsfähigkeit",
          "Vertragsschluss (Antrag + Annahme)",
          "Kaufvertragsstörungen (Mangel, Verzug)",
          "Verbraucherschutz, Widerruf, Eigentumsvorbehalt",
        ],
        examFocus:
          "Sachverhalt 'subsumieren' → Rechtsfolge ableiten und begründen.",
        quiz: [
          { q: "Ein 15-Jähriger kauft ohne Zustimmung der Eltern ein teures Handy. Beurteilen Sie die Wirksamkeit.", opts: ["voll wirksam", "schwebend unwirksam – es fehlt die erforderliche Zustimmung der Eltern (beschränkt geschäftsfähig)", "nichtig wegen Sittenwidrigkeit", "wirksam, da über 14"], correct: 1, fb: "'Beurteilen' (AfB III): Beschränkt Geschäftsfähige (7–17) – ein nachteiliges Geschäft ist ohne Zustimmung schwebend unwirksam (§ 108 BGB)." },
          { q: "Wodurch kommt ein Kaufvertrag zustande?", opts: ["durch Übergabe der Ware", "durch zwei übereinstimmende Willenserklärungen (Antrag + Annahme)", "durch die Bezahlung", "durch die Rechnung"], correct: 1, fb: "Vertrag = Antrag und Annahme. Übergabe/Zahlung sind bereits die Erfüllung." },
          { q: "Die gelieferte Ware ist beschädigt. Welche Kaufvertragsstörung liegt vor?", opts: ["Lieferungsverzug", "Sachmangel (Schlechtleistung)", "Annahmeverzug", "Zahlungsverzug"], correct: 1, fb: "Mangelhafte Ware = Sachmangel; es greifen die Gewährleistungsrechte." },
          { q: "Wie lange beträgt das Widerrufsrecht im Fernabsatz in der Regel?", opts: ["7 Tage", "14 Tage", "1 Monat", "es gibt keines"], correct: 1, fb: "Bei Fernabsatzgeschäften (z. B. Onlinekauf) gilt grundsätzlich ein Widerrufsrecht von 14 Tagen." },
          { q: "Beim Eigentumsvorbehalt bleibt der Verkäufer Eigentümer, bis …", opts: ["die Ware geliefert ist", "der Kaufpreis vollständig bezahlt ist", "die Garantie abläuft", "der Käufer es wünscht"], correct: 1, fb: "Der Eigentumsvorbehalt sichert den Verkäufer bis zur vollständigen Bezahlung." },
          { q: "Ein Kunde zahlt trotz Fälligkeit und Mahnung nicht. Es liegt … vor.", opts: ["Annahmeverzug", "Zahlungsverzug (Schuldnerverzug)", "ein Sachmangel", "Lieferungsverzug"], correct: 1, fb: "Nichtzahlung trotz Fälligkeit/Mahnung = Zahlungs-/Schuldnerverzug." },
        ],
      },
    ],
  },
  {
    id: "fa",
    code: "Prüfungsbereich 3 · AP2",
    title: "Fachaufgabe im Einsatzgebiet",
    form: "Mündlich · Dokumentation + Präsentation & Fachgespräch (30 Min) · Gewichtung 30 %",
    color: "#d97706",
    intro:
      "Lernfeld 13: Betriebliche Problemlösungsprozesse innovativ durchführen. Du bearbeitest eine reale Fachaufgabe im Einsatzgebiet, erstellst eine Dokumentation und präsentierst sie mit anschließendem Fachgespräch.",
    lessons: [
      {
        id: "fa-doku",
        title: "Fachaufgabe & Dokumentation",
        hours: 2,
        learn:
          "<p>Dieser Prüfungsbereich (30 % der AP2) ist <strong>mündlich</strong> und praxisbezogen: Du führst im Betrieb eine <strong>Fachaufgabe</strong> aus deinem Einsatzgebiet durch, erstellst eine <strong>Dokumentation</strong> und präsentierst diese; danach folgt das Fachgespräch.</p>" +
          "<h5>Auswahl der Fachaufgabe</h5>" +
          "<p>Geeignet ist ein <strong>typischer, abgeschlossener Geschäftsprozess mit Entscheidungsspielraum</strong> aus deinem realen Einsatzgebiet – nicht zu klein, nicht erfunden.</p>" +
          "<h5>Aufbau der Dokumentation</h5>" +
          "<ol><li>Ausgangssituation & Ziel</li><li>Vorgehen/Prozess (mit Visualisierung: Ablaufschema, Diagramm)</li><li>eingesetzte Methoden/IT</li><li>Ergebnis</li><li>Reflexion & Alternativen</li></ol>" +
          "<p>Das entspricht dem <strong>Problemlösungs-/Projektprozess</strong> aus Lernfeld 13: <em>analysieren → planen → umsetzen → kontrollieren</em>. Form und Umfang gibt die <strong>IHK</strong> vor.</p>" +
          "<div class='merke'><strong>Merke:</strong> Die Dokumentation wird nicht wie eine Klausur benotet – sie ist die Grundlage des Fachgesprächs. Baue bewusst 'Tiefenstellen' ein, zu denen du sicher sprechen kannst.</div>",
        topics: [
          "Auswahl einer geeigneten Fachaufgabe",
          "Aufbau & Formvorgaben der Dokumentation (IHK)",
          "Problemlösungsprozess: analysieren–planen–umsetzen–kontrollieren",
          "Reflexion und Visualisierung",
        ],
        examFocus:
          "Hier zählt strukturiertes, begründetes Vorgehen. Plane Anknüpfungspunkte für erwartbare Nachfragen ein.",
        quiz: [
          { q: "Welcher Aspekt sollte bei der Auswahl der Fachaufgabe im Vordergrund stehen?", opts: ["möglichst einfach und ohne Entscheidungen", "ein typischer Prozess mit Entscheidungsspielraum aus dem eigenen Einsatzgebiet", "ein erfundenes Thema", "ein Prozess einer fremden Abteilung"], correct: 1, fb: "Geeignet ist ein realer, typischer Prozess mit Entscheidungsspielraum – daran lässt sich Handlungskompetenz zeigen." },
          { q: "Wozu dient die Dokumentation in der Prüfung?", opts: ["sie wird streng wie eine Klausur benotet", "als Grundlage für Präsentation und Fachgespräch", "sie ersetzt das Fachgespräch", "sie ist völlig freiwillig"], correct: 1, fb: "Die Dokumentation ist die Gesprächsgrundlage; bewertet wird vor allem das Fachgespräch." },
          { q: "Welches Vorgehen entspricht dem Problemlösungs-/Projektprozess (Lernfeld 13)?", opts: ["sofort umsetzen ohne Plan", "analysieren → planen → umsetzen → kontrollieren", "nur dokumentieren", "nur präsentieren"], correct: 1, fb: "Der vollständige Handlungszyklus: analysieren, planen, umsetzen, kontrollieren." },
          { q: "Was gehört in den Reflexionsteil der Dokumentation?", opts: ["nur Eigenlob", "eine kritische Bewertung der eigenen Lösung und mögliche Alternativen", "fremde Lösungen", "die Bilanz des Unternehmens"], correct: 1, fb: "Reflexion = die eigene Vorgehensweise kritisch einordnen und Alternativen aufzeigen." },
          { q: "Warum sollten bewusst 'Tiefenstellen' eingebaut werden?", opts: ["zur Verlängerung der Doku", "um im Fachgespräch sicher auf erwartbare Nachfragen eingehen zu können", "um die Prüfer zu verwirren", "das ist verboten"], correct: 1, fb: "Geplante Tiefenstellen lenken die Nachfragen auf Themen, zu denen du sicher sprechen kannst." },
          { q: "Wonach richten sich Form und Umfang der Dokumentation?", opts: ["nach eigenem Ermessen", "nach den Vorgaben der zuständigen Stelle (IHK)", "nach dem Kunden", "es gibt keine Vorgaben"], correct: 1, fb: "Die IHK macht verbindliche Vorgaben zu Form und Umfang." },
        ],
      },
      {
        id: "fa-fachgespraech",
        title: "Präsentation & Fachgespräch",
        hours: 2,
        learn:
          "<h5>Präsentation</h5>" +
          "<p>Klar strukturiert (Einstieg – Hauptteil – Schluss), <strong>visualisiert</strong>, in freier Rede und in der vorgegebenen Zeit. Sie eröffnet das Fachgespräch.</p>" +
          "<h5>Fachgespräch</h5>" +
          "<p>Die Prüfer fragen nach <strong>Begründungen</strong>, <strong>Alternativen</strong> und nach dem <strong>Transfer</strong> auf andere Situationen sowie nach der betriebswirtschaftlichen Einordnung. Bewertet wird deine <strong>berufliche Handlungskompetenz</strong> – nicht das Auswendiglernen.</p>" +
          "<h5>Bezug zum Prüfungsfragen-Verständnis</h5>" +
          "<p>Die Operatoren wirken auch mündlich: 'Erläutern Sie …' (verständlich machen), 'Begründen/Beurteilen Sie …' (abwägen + Position). Wer die Operatoren erkennt, antwortet zielgenau.</p>" +
          "<div class='merke'><strong>Merke:</strong> Halte zu jedem Schritt eine <strong>Begründung</strong> UND eine <strong>verworfene Alternative</strong> bereit – damit beantwortest du die typischen 'Warum?'-Fragen souverän.</div>",
        topics: [
          "Aufbau & Visualisierung der Präsentation",
          "Typische Prüferfragen & Transferfragen",
          "Fachsprache und sicheres Auftreten",
          "Operatoren im mündlichen Kontext",
        ],
        examFocus:
          "'Warum?'-Fragen antizipieren: Entscheidung begründen + Alternative nennen. Operatoren auch mündlich erkennen.",
        quiz: [
          { q: "Worauf zielen die Prüferfragen im Fachgespräch typischerweise?", opts: ["auf auswendig gelernte Definitionen", "auf die Begründung der Entscheidungen, Alternativen und den Transfer", "auf private Themen", "auf die Rechtschreibung der Doku"], correct: 1, fb: "Das Fachgespräch prüft Handlungskompetenz: Begründungen, Alternativen, Transfer." },
          { q: "Eine gute Präsentation zeichnet sich aus durch …", opts: ["Vorlesen vom Blatt", "klare Struktur, Visualisierung und freie Rede in der Zeit", "möglichst viele Fachwörter ohne Erklärung", "Überziehen der Zeit"], correct: 1, fb: "Struktur, Visualisierung, freie Rede und Zeiteinhaltung kennzeichnen eine gelungene Präsentation." },
          { q: "Der Prüfer fragt: 'Welche Alternative hätten Sie gehabt und warum haben Sie sie verworfen?' Diese Frage entspricht dem Operator …", opts: ["nennen (AfB I)", "begründen/beurteilen (AfB III)", "beschreiben (AfB I)", "abschreiben"], correct: 1, fb: "Abwägen + Position = Anforderungsbereich III. Das Erkennen des Operators hilft auch mündlich, zielgenau zu antworten." },
          { q: "Wie reagierst du am besten auf eine unerwartete Transferfrage?", opts: ["ausweichen", "kurz strukturieren und fachlich begründet antworten", "das Thema wechseln", "schweigen"], correct: 1, fb: "Ruhig strukturieren und fachlich begründen – Transferfragen prüfen Verständnis, nicht Auswendiglernen." },
          { q: "Was wird im Fachgespräch letztlich bewertet?", opts: ["die Anzahl der Folien", "die berufliche Handlungskompetenz (begründetes, fachgerechtes Handeln)", "die Lautstärke", "die Kleidung"], correct: 1, fb: "Bewertet wird, ob du beruflich kompetent und begründet handelst." },
          { q: "Gute Vorbereitung heißt, zu jedem Schritt … bereitzuhalten.", opts: ["eine Ausrede", "eine Begründung UND eine verworfene Alternative", "eine zusätzliche Folie", "eine auswendig gelernte Zahl"], correct: 1, fb: "Begründung + Alternative je Schritt – so meisterst du die typischen Nachfragen souverän." },
        ],
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
  { titel: "Operator zuerst markieren", text: "Unterstreiche in jeder Aufgabe das Verb (Operator). Es bestimmt Umfang und Tiefe der Antwort. 'Nennen' ≠ 'Erläutern' ≠ 'Beurteilen'." },
  { titel: "Punkte = Argumente", text: "Faustregel: Pro Punkt mindestens ein vollständiger Gedanke/Aspekt. 4 Punkte → plane ca. 4 Aspekte ein." },
  { titel: "Fallbezug herstellen", text: "Bei Transferaufgaben immer auf die Angaben des Modellunternehmens eingehen – allgemeine Lehrbuchsätze geben weniger Punkte." },
  { titel: "Rechnen: Weg zeigen", text: "Auch bei falschem Endergebnis gibt es Teilpunkte für den richtigen Ansatz. Niemals nur die Zahl hinschreiben." },
  { titel: "Zeit nach Punkten einteilen", text: "Verteile die Bearbeitungszeit proportional zu den erreichbaren Punkten, nicht nach 'Lust' auf eine Aufgabe." },
  { titel: "Abwägen sichtbar machen", text: "Bei AfB III: Struktur 'einerseits – andererseits – Fazit'. Das Fazit nie vergessen, es bringt oft den letzten Punkt." },
];

// Drei-Phasen-Lernplan über ~10 Monate bis zur Prüfung
const PHASES = [
  {
    nr: 1,
    title: "Grundlagen aufbauen",
    period: "Monate 1–5 · ca. Jun – Okt 2026",
    color: "#2563eb",
    goal: "Alle Lerneinheiten einmal vollständig durcharbeiten und jede Inhaltsabfrage bestehen.",
    tasks: [
      "Pro Termin 1 Lerneinheit lernen + Inhaltsabfrage bestehen",
      "Rechenintensive Einheiten (KLR, Kalkulation, Investition) bewusst mit mehr Zeit",
      "Direkt nach dem Bestehen die erste Wiederholung einplanen lassen",
    ],
  },
  {
    nr: 2,
    title: "Vertiefen & Wiederholen",
    period: "Monate 6–8 · ca. Nov 2026 – Jan 2027",
    color: "#7c3aed",
    goal: "Jede Einheit mindestens einmal wiederholen, Schwächen gezielt häufiger.",
    tasks: [
      "Fällige Wiederholungen immer zuerst abarbeiten",
      "Rote/unsichere Einheiten doppelt einplanen",
      "Operatoren & Prüfungssprache gezielt trainieren",
    ],
  },
  {
    nr: 3,
    title: "Prüfungssimulation",
    period: "Monate 9–10 · ca. Feb – Apr 2027",
    color: "#059669",
    goal: "Sicherheit unter Prüfungsbedingungen, Fokus auf die letzten Lücken.",
    tasks: [
      "Inhaltsabfragen im Schnelldurchlauf wiederholen",
      "Originale/alte Prüfungen unter Zeitdruck üben",
      "Fachaufgabe: Dokumentation, Präsentation & Fachgespräch konkret proben",
    ],
  },
];

const SESSION_RULE = {
  startInfo: "1. Einheit: Freitag, 05.06.2026 · 2 Stunden",
  rhythm: "Ab der Folgewoche: 2× pro Woche je 2 Stunden",
  note: "Plan auf Wiederholung ausgelegt – jede Einheit mehrfach durchgehen (Spaced Repetition).",
};
