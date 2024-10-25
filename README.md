# HK Gallery

## Projektübersicht

Dieses Projekt ist eine webbasierte Galerie namens **HK Gallery**, die eine Sammlung von Bildern, Videos und Animationen zeigt. Das Layout ist in verschiedene Abschnitte unterteilt, die jeweils einen anderen Medientyp hervorheben. Die Website ermöglicht es den Nutzern, interaktiv durch Bild-, Video- und Animationsgalerien zu navigieren.

## Wireframe-Übersicht

Das Wireframe bietet einen strukturierten visuellen Überblick über das Layout der Website. Es enthält folgende Abschnitte:

1. **Startseite**: Der Ausgangspunkt der Website, mit Buttons, die den Benutzer zu verschiedenen Galerien führen.
    - **Galerie**
    - **Video**
    - **Animation**

2. **Animationsabschnitt**: Eine Karussell-artige Anzeige, die verschiedene Animationen zeigt.
    - Nutzer können mit Pfeiltasten (links und rechts) durch die Animationen navigieren.

3. **Bildergalerie**: Zeigt Bilder in einem durchscrollbaren Galerielayout.
    - Nutzer können durch Bilder scrollen, die als Bild 1, Bild 2, Bild 3 usw. gekennzeichnet sind.

4. **Videogalerie**: Eine durchscrollbare Galerie von Videos.
    - Nutzer können durch Videos scrollen, die als Video 1, Video 2 usw. gekennzeichnet sind.

### Wireframe-Bild
![Wireframe](./assets/wireframe-image.jpg)

## Funktionen

- **Navigation auf der Startseite**: 
  - Die Startseite enthält drei Hauptoptionen, um zur gewünschten Galerie zu navigieren (Bilder, Videos oder Animationen).
  
- **Bildergalerie**:
  - Ein horizontaler Slider, der mehrere Bilder zeigt.
  - Nutzer können mit links/rechts-Pfeiltasten zwischen den Bildern navigieren.

- **Videogalerie**:
  - Ein ähnlicher horizontaler Slider, der sich auf die Anzeige von Videos konzentriert.
  - Jedes Video wird durch ein Thumbnail dargestellt, und die Nutzer können durch verschiedene Videos scrollen.

- **Animationsabschnitt**:
  - Ein eigener Abschnitt für Animationen, durch den man mit links/rechts-Pfeiltasten navigieren kann.
  - Jede Animation wird in einer größeren, zentralen Ansicht dargestellt.

## Installation

1. Klone das Repository:
   ```bash
   git clone https://github.com/deinbenutzername/hk-gallery.git
   cd hk-gallery
   ```

2. Installiere die Abhängigkeiten:
   ```bash
   npm install
   ```

3. Starte das Projekt lokal:
   ```bash
   npm start
   ```

## Verwendete Technologien

- **React**: Für den Aufbau der interaktiven Benutzeroberfläche.
- **CSS**: Für das Styling der Komponenten und die Erstellung von Animationen.
- **JavaScript**: Für die Funktionalität der Bild-, Video- und Animationsgalerien.
- **React Hooks**: Wie `useEffect` und `useRef` für Scroll- und Navigationslogik.
  
## Projektstruktur

```bash
.
├── public
│   └── index.html
├── src
│   ├── assets
│   │   ├── images
│   │   └── videos
│   ├── components
│   │   ├── ImageGallery.js
│   │   ├── VideoGallery.js
│   │   └── AnimationGallery.js
│   ├── App.js
│   ├── GalleryPage.js
│   └── styles
│       └── GalleryPage.css
└── README.md
```

## Nutzung

- Die **Startseite** enthält Navigationsoptionen zu den drei Hauptgalerien: Bilder, Videos und Animationen.
- In jeder Galerie können die Nutzer horizontal scrollen, um mehr Elemente zu sehen.
- Die Navigationspfeile in den Galerien ermöglichen es den Nutzern, zwischen den verschiedenen Medienelementen hin- und herzublättern.

## Zukünftige Verbesserungen

- **Dynamische Inhalte**: Implementierung der Möglichkeit, Bilder, Videos und Animationen dynamisch von einem Backend abzurufen.
- **Responsive Design**: Sicherstellen, dass die Website vollständig für mobile Geräte optimiert ist.
- **Barrierefreiheit**: Verbesserung der Tastaturnavigation und Unterstützung für Screenreader.
