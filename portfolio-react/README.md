# Portfolio with Data Rain Component

This is a Next.js portfolio project featuring an animated Data Rain component integrated with shadcn/ui, Tailwind CSS 4, and TypeScript.

## 🚀 Features

- ⚡ **Next.js 16** with Turbopack for blazing-fast development
- 🎨 **Tailwind CSS 4** for modern styling
- 🧩 **shadcn/ui** component library
- 📘 **TypeScript** for type safety
- 🌊 **Data Rain Animation** - Interactive canvas-based particle system with fluid dynamics

## 📦 Project Structure

```
portfolio-react/
├── app/
│   ├── globals.css          # Global styles + Data Rain CSS
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page with Data Rain
├── components/
│   └── ui/
│       ├── button.tsx       # shadcn button component
│       └── data-rain.tsx    # Data Rain component ⭐
├── lib/
│   └── utils.ts             # Utility functions
├── components.json          # shadcn configuration
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ (you have v26.13.0 ✓)
- npm or pnpm

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd portfolio-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Data Rain Component Usage

### Basic Usage

```tsx
import DataRain from "@/components/ui/data-rain";

export default function Page() {
  return <DataRain />;
}
```

### With Custom Colors (Terminal Green Theme)

```tsx
<DataRain
  palette={{
    calm: "#00ff41",   // Terminal green
    mid: "#8a5cff",    // Purple
    hot: "#ff3d9a"     // Pink
  }}
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `palette` | `{ calm: string; mid: string; hot: string }` | Built-in colors | Custom color palette (hex codes) |
| `count` | `number` | Auto-calculated | Number of particles |
| `flowSpeed` | `number` | `1` | Animation speed (0.05-5) |
| `obstacleRadius` | `number` | `64` | Cursor interaction radius |
| `autopilot` | `boolean` | `true` | Enable ghost cursor when idle |
| `fullscreen` | `boolean` | `true` | Fill entire viewport |
| `className` | `string` | - | Additional CSS classes |

### Customizing Colors via CSS

The component reads colors from CSS variables. Update in `app/globals.css`:

```css
:root {
  --dr-calm: #00ff41;    /* Terminal green */
  --dr-mid: #8a5cff;     /* Purple */
  --dr-hot: #ff3d9a;     /* Pink */
  --dr-core: #eafcff;    /* Core/spark color */
}
```

## 📁 Why `components/ui/`?

The `components/ui/` folder is **required** by shadcn/ui conventions:

1. **Consistent imports**: All UI components use `@/components/ui/*` imports
2. **CLI compatibility**: `npx shadcn@latest add <component>` installs here automatically
3. **Separation of concerns**: UI primitives separate from app-specific components
4. **Team workflow**: Standard location everyone recognizes

## 🎯 Current Implementation

The home page (`app/page.tsx`) demonstrates:
- Data Rain as full-screen background
- Content overlay with your portfolio info
- Terminal green color scheme matching your Arch Linux theme
- Responsive cards showcasing your projects

## 🔧 Available Scripts

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📚 Adding More shadcn Components

```bash
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
```

Components are automatically added to `components/ui/`.

## 🎨 Tailwind CSS 4 Notes

This project uses **Tailwind CSS v4** (latest):
- No `tailwind.config.js` needed for basic setup
- CSS-first configuration via `@theme` in `globals.css`
- Import-based setup: `@import "tailwindcss"`
- Custom properties for theming

## 🐛 Troubleshooting

### Data Rain not animating?
- Check browser console for errors
- Ensure `"use client"` directive is at the top of your page
- Verify CSS variables are defined in `globals.css`

### Component not found?
- Check import path: `@/components/ui/data-rain`
- Ensure file is `.tsx` extension
- Run `npm install` if dependencies are missing

### Tailwind classes not working?
- Restart dev server after CSS changes
- Check `globals.css` has `@import "tailwindcss"`
- Verify Tailwind CSS is in `package.json`

## 🚀 Next Steps

1. **Customize the palette** to match your personal brand
2. **Add more sections** (About, Skills, Projects, Contact)
3. **Integrate terminal component** from your original portfolio
4. **Add animations** with Framer Motion or CSS
5. **Deploy to Vercel** with one command: `vercel`

## 📝 Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- Data Rain - Custom canvas-based particle system

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com/)
- [React Hooks](https://react.dev/reference/react)

---

Built with 💚 for Arch Linux enthusiasts. I use Arch, btw.
