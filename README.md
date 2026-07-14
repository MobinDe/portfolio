# ⚡ My Front-End Portfolio

Welcome to my personal developer portfolio! This repository contains the source code for my professional website, built to showcase my projects, skills, and experience as a front-end developer.

The entire project is architected with a strong emphasis on **type safety**, **rapid styling**, and **blazing-fast build times**.

## 🛠️ Tech Stack

- **Core Framework:** React
- **Build Tool:** Vite (for instant HMR and ultra-fast builds)
- **Styling:** Tailwind CSS (utility-first, fully responsive, and dark-mode ready)
- **Language:** TypeScript (strict type-checking for robust, bug-free code)
- **Linting/Formatting:** ESLint + Prettier

## ✨ Key Features

- 🚀 **Lightning Fast Performance:** Leverages Vite's native ESM and optimized production builds.
- 🎨 **Tailwind Utility-First Styling:** Rapid UI development with a consistent, customizable design system.
- 📱 **Fully Responsive:** Pixel-perfect layouts across all devices (mobile, tablet, and desktop).
- 🛡️ **Type-Safe Code:** Fully written in TypeScript to catch errors early and improve developer experience.
- 🧩 **Modular Architecture:** Reusable, well-organized components for easy scaling and maintenance.
- 🌗 **Dark/Light Mode:** (If you have this—flaunt it!) Seamless theme switching powered by Tailwind.
- ♿ **Accessibility:** Semantic HTML and focus management included out-of-the-box.

## 🚀 Getting Started (Local Development)

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/[your-username]/[your-repo-name].git
   cd [your-repo-name]
Install dependencies:

bash
npm install
# or
yarn install
Start the Vite development server:

bash
npm run dev
(The app will usually be running at http://localhost:5173)

Build for production:

bash
npm run build
npm run preview  # To preview the production build locally
📂 Project Structure
bash
├── public/               # Static assets (favicon, meta images)
├── src/
│   ├── components/       # Reusable UI components (Button, Card, Navbar)
│   ├── pages/            # Main views (Home, Projects, About, Contact)
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript interfaces and type definitions
│   ├── utils/            # Helper functions and constants
│   ├── data/             # Static data (projects list, skills, etc.)
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Vite entry point
├── index.html            # Vite HTML entry
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript compiler options
