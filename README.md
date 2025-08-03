# GitHub User Search

A React application that allows users to search for GitHub users and view their profiles using the GitHub API.

## Features

- Search for GitHub users by username
- View user profiles with detailed information
- Responsive design that works on all devices
- Real-time search results
- Random text added for testing purposes: The quick brown fox jumps over the lazy dog. This is a test update to the README file.

## Technologies Used

- React 19
- Vite
- GitHub REST API
- Axios for API requests
- CSS3 with CSS Variables for theming

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/alx-fe-reactjs.git
   cd alx-fe-reactjs/github-user-search
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── SearchBar.jsx
│   └── UserCard.jsx
├── services/      # API services
│   └── githubService.js
├── App.jsx        # Main application component
├── main.jsx       # Application entry point
└── index.css      # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This project is licensed under the MIT License.
