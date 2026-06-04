# AP2 Lernplan – Industriekaufmann/-frau

Eine interaktive, animationsreiche Lern-Website zur Vorbereitung auf die
**Abschlussprüfung Teil 2 (AP2)** für Industriekaufleute (Neuordnung).

## Funktionen

- **Übersicht** – animiertes Dashboard mit Fortschritts-Statistiken und allen
  vier Prüfungsbereichen.
- **Lehrplan** – alle Lerneinheiten zum Abhaken, jeweils mit Inhalten und einem
  Hinweis *„So wird's geprüft"*. Fortschritt wird mit Konfetti gefeiert. ✨
- **Prüfungsfragen verstehen** – Operatoren nach Anforderungsbereich (I/II/III),
  Strategie-Spickzettel und ein Mini-Quiz zum Erkennen der geforderten
  Antworttiefe.
- **Terminplaner** – erste Einheit Fr 05.06.2026 (2 h), danach 2×/Woche à 2 h.
  Lern-Slots frei anlegen, Datum/Dauer ändern und Einheiten per **Drag & Drop**
  (oder Button) individuell zuordnen. Automatischer Vorschlag verfügbar.

Fortschritt und Plan werden **lokal im Browser** (localStorage) gespeichert –
kein Server, keine Anmeldung.

## Starten

Einfach `index.html` im Browser öffnen. Kein Build, keine Abhängigkeiten.

Alternativ lokal mit einem kleinen Webserver:

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

## Dateien

| Datei        | Inhalt                                            |
| ------------ | ------------------------------------------------- |
| `index.html` | Seitenstruktur & Ansichten                        |
| `styles.css` | Design + Animationen (Reveal, Konfetti, Ripple …) |
| `app.js`     | Logik: Navigation, Fortschritt, Quiz, Planer      |
| `data.js`    | Lehrplan-Inhalte & Operatoren                     |

> Hinweis: Die Inhalte sind eine Orientierungshilfe. Maßgeblich sind die
> aktuelle Ausbildungsordnung und der Rahmenlehrplan.
