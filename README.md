### Dashboard & Analytics
- **Top Page**: Health achievement tracking with interactive charts
- **Body Record**: Weight and body fat percentage visualization using Recharts
- **Exercise Tracking**: Daily exercise records with calorie tracking
- **Meal Records**: Food intake monitoring with filtering capabilities

### Personal Health Management
- **My Record Page**: Comprehensive health record overview
  - Interactive hero cards for quick navigation
  - Body weight progress charts
  - Exercise activity logs
  - Personal diary with load-more functionality

### Content Management
- **Column/News Page**: Health articles and tips
  - Category-based filtering (Recommended, Diet, Beauty, Health)
  - Responsive article grid layout
  - Load more functionality

### Authentication System
- Session-based authentication using `iron-session`
- Protected routes with automatic redirect
- Demo user accounts for testing
- Login/logout functionality

### Modern UI/UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Lazy Loading**: Code splitting with React.lazy for better performance
- **Skeleton Loading**: Smooth loading states for better UX
- **Smooth Scrolling**: Section navigation within pages
- **Japanese UI**: Fully localized interface

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Authentication**: [iron-session](https://github.com/vvo/iron-session)
- **Forms**: [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Progress Bars**: [react-circular-progressbar](https://github.com/kevinsqi/react-circular-progressbar)

## 📋 Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the root directory:

Create `.env.local` with the following content:

```env
SECRET_COOKIE_PASSWORD=your_complex_password_at_least_32_characters_long
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000]

## Demo Accounts

- `demo@gmail.com` / `password123`

## Project Structure

```
healthcare-app/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── (auth)/            # Authentication pages
│   │   │   └── login/         # Login page
│   │   ├── (dashboard)/       # Protected dashboard pages
│   │   │   ├── top/           # Main dashboard
│   │   │   ├── my-record/     # Personal health records
│   │   │   └── column/        # News/articles page
│   │   ├── api/               # API routes
│   │   │   └── auth/          # Authentication endpoints
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable components
│   │   ├── charts/            # Chart components
│   │   ├── forms/             # Form components
│   │   ├── layout/            # Layout components
│   │   ├── news/              # News/article components
│   │   └── ui/                # UI components & skeletons
│   ├── lib/                   # Utility functions & data
│   │   ├── data/              # Mock data files
│   │   ├── session.ts         # Session management
│   │   └── users.ts           # User data
│   ├── types/                 # TypeScript type definitions
│   └── middleware.ts          # Next.js middleware
├── public/                    # Static assets
│   ├── images/                # Application images
│   └── icons/                 # SVG icons
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Available Routes

### Public Routes
- `/` - Redirects to `/column`
- `/column` - News and articles page
- `/login` - Login page

### Protected Routes (Requires Authentication)
- `/top` - Main dashboard with health metrics
- `/my-record` - Personal health records page

## Key Features Implementation

### Lazy Loading & Performance
- **Code Splitting**: Pages are lazy-loaded for better performance
- **Skeleton UI**: Loading states for smooth user experience
- **Chart Optimization**: Heavy chart components are loaded on-demand

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Breakpoint Strategy**: Tailwind CSS responsive utilities
- **Flexible Layouts**: Adapts to different screen sizes

### Data Management
- **Mock Data**: Realistic dummy data for development
- **State Management**: React hooks for local state
- **Load More**: Pagination for large data sets

## 📱 Mobile Responsiveness

The application is fully responsive with special considerations for mobile devices:

- **Hero Section**: Stacks vertically on mobile (1:1 ratio instead of 40:60)
- **Navigation**: Collapsible sidebar menu
- **Charts**: Responsive chart containers
- **Cards**: Flexible grid layouts