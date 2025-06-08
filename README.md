# Helpdesk Frontend

A modern, responsive React-based frontend application for the helpdesk management system. Built with React, Tailwind CSS, and integrated with the helpdesk backend API.

## Features

- **Modern UI/UX**
  - Clean, responsive design with Tailwind CSS
  - Dark/Light mode support
  - Mobile-first approach
  - Intuitive user interface

- **User Management**
  - User registration and login
  - Role-based dashboards (Admin, Agent, Customer)
  - Profile management
  - Secure authentication with JWT

- **Ticket Management**
  - Create and submit support tickets
  - View ticket history and status
  - Real-time updates
  - File attachment support
  - Priority and category selection

- **Dashboard & Analytics**
  - Interactive dashboards for different user roles
  - Ticket statistics and charts
  - Performance metrics visualization
  - Quick actions and shortcuts

- **AI-Powered Features**
  - AI-generated response suggestions
  - Intelligent ticket categorization
  - Smart search functionality

## Tech Stack

- **Framework**: React 18+ with Hooks
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API / Redux Toolkit
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Charts**: Recharts
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast

## Prerequisites

- Node.js 16+
- npm or yarn
- Helpdesk Backend API running

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sakthi-19/helpdesk_frontend.git
   cd helpdesk_frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   # API Configuration
   VITE_API_BASE_URL=http://localhost:8000/api
   VITE_API_TIMEOUT=10000
   
   # App Configuration
   VITE_APP_NAME=Helpdesk System
   VITE_APP_VERSION=1.0.0
   
   # Features
   VITE_ENABLE_AI_FEATURES=true
   VITE_ENABLE_DARK_MODE=true
   
   # External Services (Optional)
   VITE_GOOGLE_ANALYTICS_ID=your-ga-id
   VITE_SENTRY_DSN=your-sentry-dsn
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:5173/`

## Available Scripts

- **Development**
  ```bash
  npm run dev          # Start development server
  npm run build        # Build for production
  npm run preview      # Preview production build
  npm run lint         # Run ESLint
  npm run lint:fix     # Fix ESLint issues
  ```

- **Testing**
  ```bash
  npm run test         # Run tests
  npm run test:watch   # Run tests in watch mode
  npm run test:coverage # Run tests with coverage
  ```

## Project Structure

```
helpdesk_frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── forms/
│   │   └── ui/
│   ├── pages/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── tickets/
│   │   └── profile/
│   ├── hooks/
│   ├── services/
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── tickets.js
│   ├── store/
│   ├── utils/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
├── .env.example
├── .gitignore
└── README.md
```

## Key Components

### Authentication
- **LoginForm**: User login with email/password
- **RegisterForm**: New user registration
- **ProtectedRoute**: Route protection for authenticated users
- **AuthProvider**: Authentication context provider

### Dashboard
- **AdminDashboard**: Overview for admin users
- **AgentDashboard**: Agent-specific metrics and tasks
- **CustomerDashboard**: Customer ticket overview

### Tickets
- **TicketList**: Display and filter tickets
- **TicketForm**: Create/edit ticket form
- **TicketDetail**: Detailed ticket view with comments
- **TicketCard**: Ticket summary card component

### UI Components
- **Button**: Reusable button component
- **Modal**: Modal dialog component
- **Table**: Data table with sorting/filtering
- **Charts**: Various chart components using Recharts

## State Management

The application uses React Context API for global state management:

```javascript
// AuthContext
const AuthContext = createContext();

// TicketContext
const TicketContext = createContext();

// ThemeContext
const ThemeContext = createContext();
```

## API Integration

### Service Layer
```javascript
// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT,
});

// Request interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### Usage Examples
```javascript
// Creating a ticket
import { createTicket } from '../services/tickets';

const handleSubmit = async (ticketData) => {
  try {
    const response = await createTicket(ticketData);
    console.log('Ticket created:', response.data);
  } catch (error) {
    console.error('Error creating ticket:', error);
  }
};
```

## Styling with Tailwind CSS

The project uses Tailwind CSS for styling. Key configuration:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
}
```

## Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## Features by User Role

### Admin Users
- View all tickets and users
- Assign tickets to agents
- Generate reports and analytics
- Manage system settings
- User management

### Agent Users
- View assigned tickets
- Update ticket status
- Add comments and responses
- Use AI-powered response suggestions
- Track performance metrics

### Customer Users
- Create new tickets
- View own ticket history
- Update ticket information
- Track ticket progress
- Download attachments

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:8000/api` |
| `VITE_API_TIMEOUT` | API request timeout (ms) | `10000` |
| `VITE_APP_NAME` | Application name | `Helpdesk System` |
| `VITE_ENABLE_AI_FEATURES` | Enable AI features | `true` |
| `VITE_ENABLE_DARK_MODE` | Enable dark mode | `true` |

## Testing

The project includes comprehensive testing:

```bash
# Unit tests with Jest
npm run test

# Component testing with React Testing Library
npm run test:components

# E2E testing with Cypress
npm run test:e2e
```

## Building for Production

```bash
# Build the application
npm run build

# The build artifacts will be stored in the `dist/` directory
```

## Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Add environment variables in Vercel dashboard

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy the dist/ folder to your web server
```

## Performance Optimization

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Optimized images with proper formats
- **Bundle Analysis**: Use `npm run analyze` to analyze bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Code Style

The project uses ESLint and Prettier for code formatting:

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@yourcompany.com or create an issue in this repository.

## Changelog

### v1.0.0
- Initial release with React 18 and Vite
- Responsive design with Tailwind CSS
- JWT authentication implementation
- Complete ticket management system
- Dashboard with analytics
- AI-powered features integration
