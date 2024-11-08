# 🎨 HK Gallery

**HK Gallery** ist eine immersive, webbasierte Galerie, die die vielfältige Kultur und Kreativität von Hongkong durch Bilder, Videos und Animationen präsentiert. Die Website lädt die Nutzer dazu ein, interaktiv durch eine visuelle Erlebniswelt zu navigieren, und bietet dabei eine intuitive und moderne Benutzeroberfläche.

## 🚀 Projektübersicht

HK Gallery wurde entwickelt, um ein visuelles Storytelling-Erlebnis zu schaffen, das Besucher auf eine virtuelle Reise durch Hongkongs beeindruckende Landschaften, kulturelle Veranstaltungen und kreative Medien mitnimmt. Das Projekt zielt darauf ab, ein dynamisches und interaktives Erlebnis zu bieten, bei dem sich die Inhalte nahtlos durchscrollen lassen und die Galerien in einem ästhetischen und flüssigen Layout präsentiert werden.

## 🗂 Projekt Backlog

Bleib auf dem Laufenden und verfolge die aktuellen Aufgaben und Fortschritte im **Projekt Backlog**:

👉 [Projekt Backlog](https://github.com/users/bourb0n1412/projects/2)

## 📚 Dokumentation

Eine ausführliche technische und funktionale Dokumentation findest du hier:

👉 [Dokumentation](https://github.com/bourb0n1412/hongkonggallery/wiki)

## 🖼 Wireframe-Übersicht

Das Wireframe gibt einen visuellen Überblick über das Layout der Webseite und dient als Blaupause für die Entwicklung. Es besteht aus vier Hauptabschnitten:

1. **Startseite**: 
   - Die zentrale Hub-Seite mit Buttons, die zu den drei Hauptgalerien führen:
     - **Bildergalerie**
     - **Videogalerie**
     - **Animationsgalerie**

2. **Animationsgalerie**:
   - Eine Karussellansicht, die eine Sammlung von Animationen zeigt.
   - Nutzer können mithilfe von Pfeiltasten links und rechts durch die Animationen blättern.

3. **Bildergalerie**:
   - Ein horizontal durchscrollbarer Abschnitt mit einer Auswahl an Bildern.
   - Die Bilder sind in einem leicht chaotischen Layout angeordnet, um eine dynamische Ästhetik zu schaffen.

4. **Videogalerie**:
   - Ein durchscrollbarer Bereich, der verschiedene Videos mit Thumbnails präsentiert.
   - Die Nutzer können zwischen den Videos navigieren und sich die Inhalte direkt auf der Seite ansehen.

### Wireframe-Bild
![Wireframe](./assets/wireframe-image.jpg)

## 🌟 Funktionen

Die HK Gallery bietet eine Vielzahl interaktiver und benutzerfreundlicher Funktionen:

- **Intuitive Navigation**:
  - Die Startseite bietet klar strukturierte Optionen, um direkt zu den Bild-, Video- oder Animationsgalerien zu gelangen.

- **Bildergalerie**:
  - Ein horizontales Scrolling-Layout, das sich nahtlos bedienen lässt.
  - Interaktive Hover-Effekte und sanfte Übergänge für ein ansprechendes Nutzererlebnis.

- **Videogalerie**:
  - Ein durchscrollbarer Abschnitt mit Video-Thumbnails, die eine Vorschau des Inhalts bieten.
  - Direkte Wiedergabe der Videos auf der Seite, ohne dass die Nutzer die Galerie verlassen müssen.

- **Animationsgalerie**:
  - Ein dynamisches Karussell mit Animationen, die automatisch durchlaufen oder manuell gesteuert werden können.
  - Reaktionsschnelle Steuerung durch Pfeiltasten, die für Desktop und mobile Geräte optimiert sind.

## ⚙️ Installation

Folge diesen Schritten, um das Projekt lokal auf deinem Rechner zu installieren:

1. **Repository klonen**:
   ```bash
   git clone https://github.com/deinbenutzername/hk-gallery.git
   cd hk-gallery
   ```

2. **Abhängigkeiten installieren**:
   ```bash
   npm install
   ```

3. **Projekt lokal starten**:
   ```bash
   npm start
   ```

Die Seite sollte jetzt unter `http://localhost:3000` verfügbar sein.

## 🛠 Verwendete Technologien

- **React**: Für die Erstellung einer modularen und reaktiven Benutzeroberfläche.
- **CSS & Tailwind CSS**: Für das Styling der Komponenten und das Erstellen von Animationen.
- **JavaScript (ES6+)**: Für die Interaktivität und Funktionalität der Galerien.
- **React Hooks** (`useEffect`, `useRef`): Für die Scroll- und Navigationslogik.
- **GitHub Pages**: Für die Bereitstellung und das Hosting des Projekts.

## 📂 Projektstruktur

```bash
.
├── public
│   └── index.html
├── src
│   ├── assets
│   │   ├── images
│   │   └── videos
│   ├── components
│   │   ├── Header.js
│   │   ├── ImageGallery.js
│   │   ├── VideoGallery.js
│   │   └── AnimationGallery.js
│   ├── App.js
│   ├── GalleryPage.js
│   └── styles
│       └── GalleryPage.css
└── README.md
```

## 💡 Nutzung

- Auf der **Startseite** kannst du direkt zwischen den drei Galerien wählen: Bilder, Videos und Animationen.
- In jeder Galerie kannst du durch horizontales Scrollen neue Inhalte entdecken.
- Navigiere mithilfe der Pfeiltasten oder Swipe-Gesten auf mobilen Geräten durch die Galerien.
- Klick auf ein Video, um es direkt in der Galerie abzuspielen.

## 🚀 Zukünftige Verbesserungen

- **Dynamische Inhalte**:
  - Geplant ist eine Integration von Daten aus einer API, um die Inhalte automatisch zu aktualisieren und neue Medien hinzuzufügen.

- **Mehrsprachige Unterstützung**:
  - Die Website soll eine Mehrsprachigkeit erhalten, um international zugänglich zu sein.

- **Erweiterte Animationen**:
  - Hinzufügen von komplexeren Animationen für ein noch immersiveres Erlebnis.

- **Barrierefreiheit (Accessibility)**:
  - Implementierung von ARIA-Labels und besserer Tastaturnavigation, um die Website für alle Nutzer zugänglich zu machen.

- **SEO-Optimierung**:
  - Verbesserung der Suchmaschinenoptimierung, um die Sichtbarkeit der Galerie zu erhöhen.

---

