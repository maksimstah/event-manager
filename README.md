## Demo

Check out the live demo of the project [here](https://mini-event-management.vercel.app/).

## Features

- View a list of events
- Add new events
- Edit existing events
- Delete events
- Responsive design for mobile and desktop

## Tech Stack

- **Frontend:**
  - React
  - TypeScript
  - Vite
  - Redux Toolkit Query
  - React Router
  - SCSS Modules
  - Toastify for notifications

- **Backend:**
  - MockAPI (used for simulating API requests)

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

   \`\`\`bash
   git clone https://github.com/username/mini-event-manager.git
   cd mini-event-manager
   \`\`\`

2. **Install dependencies:**

   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server:**

   \`\`\`bash
   npm run dev
   \`\`\`

   Your app should now be running on [http://localhost:5173](http://localhost:5173).

## Scripts

- **\`npm run dev\`**: Starts the development server.
- **\`npm run build\`**: Builds the app for production.
- **\`npm run preview\`**: Previews the production build locally.
- **\`npm run deploy\`**: Deploys the build to GitHub Pages.

## Deploying to GitHub Pages

1. **Update the \`vite.config.ts\`:**
   Ensure the \`base\` option is set to the correct path:

   \`\`\`typescript
   export default defineConfig({
     plugins: [react()],
     base: '/mini-event-manager/', // Ensure this matches your repo name
   });
   \`\`\`

2. **Build the project:**

   \`\`\`bash
   npm run build
   \`\`\`

3. **Deploy to GitHub Pages:**

   \`\`\`bash
   npm run deploy
   \`\`\`


