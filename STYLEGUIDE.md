# rohitkumarranjan.in — Styleguide

## Color Mode

**Dark**

## Colors

| Token      | Value       | Usage              |
|------------|-------------|---------------------|
| Background | `#121315`   | Page background     |
| Text       | `#ffffff`   | Primary text        |
| Accent     | `#00ff41`   | Links, borders, CTAs|
| Card BG    | `#000000`   | Card backgrounds    |
| Card Text  | `#b9cacb`   | Card body text      |
| Card Border| `#00ff4133` | Card border (20% α) |

## Typography

### Headings

| Level | Font Family     | Size  | Weight | Line Height | Letter Spacing |
|-------|-----------------|-------|--------|-------------|----------------|
| H1    | Manrope         | 72px  | 700    | 86px        | 0px            |
| H2    | Space Grotesk   | 52px  | 700    | 72px        | -3.6px         |
| H3    | JetBrains Mono  | 38px  | 700    | 46px        | -0.6px         |
| H4    | Manrope         | 28px  | 600    | 34px        | 0px            |

### Body

| Element | Font Family    | Size | Weight | Line Height | Letter Spacing |
|---------|----------------|------|--------|-------------|----------------|
| p       | JetBrains Mono | 20px | 400    | 28px        | 0px            |

### Font Fallbacks

- Manrope → `Manrope, sans-serif`
- Space Grotesk → `Space Grotesk, sans-serif`
- JetBrains Mono → `JetBrains Mono, monospace`

### Font Links (Google Fonts)

```
https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap
https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap
https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap
```

## Spacing Scale

| Token | Value |
|-------|-------|
| xs    | 6px   |
| sm    | 16px  |
| md    | 32px  |
| lg    | 64px  |
| xl    | 96px  |

## Shadows

| Token | Value                                          |
|-------|-------------------------------------------------|
| sm    | `rgba(0, 255, 65, 0.2) 0px 0px 10px 0px`       |
| md    | none                                            |
| lg    | none                                            |
| xl    | none                                            |
| inner | `rgb(0, 255, 65) 0px 0px 20px 0px inset`        |

## Components

### Button — Primary

```css
background-color: transparent;
color: #00ff41;
border: 1px solid #00ff41;
border-radius: 4px;
padding: 16px 27px;
font-family: "JetBrains Mono", monospace;
font-size: 14px;
font-weight: 400;
min-width: 313px;
min-height: 54px;
text-decoration: none;
```

### Button — Secondary

```css
background-color: transparent;
color: #00ff41;
border: 1px solid #00ff41;
border-radius: 4px;
padding: 16px 27px;
font-family: Manrope, sans-serif;
font-size: 14px;
font-weight: 400;
min-width: 313px;
min-height: 54px;
text-decoration: none;
box-shadow: rgba(0, 255, 65, 0.2) 0px 0px 10px 0px;
```

### Button — Link

```css
color: #ffffff;
font-family: Manrope, sans-serif;
font-size: 14px;
font-weight: 400;
text-decoration: underline;
background-color: transparent;
border: none;
padding: 0;
```

### Card

```css
background-color: #000000;
color: #b9cacb;
border: 1px solid #00ff4133;
border-radius: 4px;
padding: 16px;
box-shadow: rgba(0, 255, 65, 0.05) 0px 0px 20px 0px inset;
```
