# GlamBook - Makeup Artist Booking Platform

![GlamBook Preview](https://img.shields.io/badge/Status-Ready%20to%20Deploy-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38BDF8)

A professional makeup artist booking platform built with Next.js, TypeScript, and Tailwind CSS. This responsive web application allows users to browse makeup artists, view their profiles, and book appointments seamlessly.

## Features

### Core Functionality

1. Complete Booking Flow: Browse categories → View artists → Book → Confirmation
2. Six Makeup Categories: Bridal, Party, Casual, Traditional, Festive, Specialty
3. Artist Profiles: Detailed profiles with ratings, prices, and specialties
4. Responsive Design: Mobile-first layout that works on all devices

### Design Excellence

1. Modern UI/UX: Clean and intuitive design
2. Smooth Animations: Hover effects and transitions
3. Professional Styling: Cohesive color scheme and typography
4. Local Context: INR pricing and Indian artist names

### Pages and Components

1. Landing Page with Hero section and categories
2. Artist Listing pages filtered by category
3. Booking Form with validation
4. Confirmation Page displaying booking details

## Detailed Setup Guide

### System Requirements

1. Windows, macOS, or Linux operating system
2. Node.js 18.0 or newer
3. Git for version control
4. VS Code (recommended editor)
5. npm or yarn package manager

### Step-by-Step Local Setup

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd makeup-booking-platform
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

``

3. Available Scripts:

   ```bash
   npm run dev     # Start development server
   npm run build   # Create production build
   npm run start   # Start production server
   npm run lint    # Run ESLint
   npm run test    # Run tests
   ```

## Technology Stack

| Technology   | Version | Purpose                   |
| ------------ | ------- | ------------------------- |
| Next.js      | 14.0    | Framework with App Router |
| TypeScript   | 5.0     | Type-safe development     |
| Tailwind CSS | 3.0     | Utility-first styling     |
| Prisma       | 5.0     | Database ORM              |
| NextAuth.js  | 4.0     | Authentication            |
| Heroicons    | 2.0     | Icons and SVGs            |

## Project Architecture

### Directory Structure

```
src/
├── app/                        # Next.js 14 app directory
│   ├── artists/
│   │   └── [category]/        # Dynamic artist category pages
│   ├── booking/
│   │   └── [artistId]/        # Dynamic booking pages
│   ├── confirmation/          # Booking confirmation page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Homepage
├── components/               # Reusable components
│   ├── ArtistCard.tsx       # Artist display card
│   ├── BookingForm.tsx      # Booking form component
│   ├── CategorySection.tsx  # Category display section
│   ├── ConfirmationCard.tsx # Booking confirmation display
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Homepage hero section
│   └── RemoteImage.tsx     # Image optimization wrapper
├── data/
│   └── mockData.ts         # Mock data for development
├── types/
│   └── index.ts            # TypeScript type definitions
└── utils/
    └── images.ts           # Image utility functions
```

### Key Components

1. Page Components

   - `page.tsx`: Main landing page
   - `[category]/page.tsx`: Dynamic artist listing page
   - `[artistId]/page.tsx`: Dynamic booking page
   - `confirmation/page.tsx`: Booking confirmation page

2. Reusable Components

   - `ArtistCard`: Display artist information
   - `BookingForm`: Handle booking submissions
   - `CategorySection`: Display makeup categories
   - `RemoteImage`: Optimized image component

3. Data and Utils
   - `mockData.ts`: Development data
   - `images.ts`: Image handling utilities
   - `types/index.ts`: TypeScript interfaces

### Design Decisions

1. Visual Design Strategy

   - Color Psychology: Pink-Purple for luxury beauty
   - Typography: Playfair Display + Inter combination
   - Consistent spacing using 8px grid system
   - Responsive breakpoints with mobile-first approach

2. Performance Optimizations

   - Image optimization with next/image
   - Route prefetching
   - API response caching
   - Code splitting with dynamic imports

3. Security Measures
   - Input sanitization
   - CSRF protection
   - Rate limiting
   - Secure authentication flow

## Development Guidelines

### Code Style

1. ESLint configuration with Next.js defaults
2. Prettier for code formatting
3. Husky for pre-commit hooks
4. Conventional commits format

### Testing Strategy

1. Jest for unit testing
2. React Testing Library for component tests
3. Cypress for E2E testing
4. API endpoint testing with Supertest

## Monitoring and Analytics

1. Performance monitoring with Vercel Analytics
2. Error tracking with Sentry
3. User analytics with Google Analytics
4. API monitoring with DataDog

## Support and Documentation

### Resources

1. [Next.js Documentation](https://nextjs.org/docs)
2. [Tailwind CSS Documentation](https://tailwindcss.com/docs)
3. [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Getting Help

1. Create issues in GitHub repository
2. Check existing issues and discussions
3. Review documentation
4. Contact development team

## Contributing

1. Fork the repository
2. Create feature branch
3. Follow code style guidelines
4. Submit pull request
5. Wait for review

## License

This project is licensed under the MIT License. See LICENSE file for details.

---

Note: This project uses mock data and local storage in development. For production, connect to your preferred database and API services.

Built with modern web technologies for optimal performance and user experience.
