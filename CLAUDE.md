# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Ethos Productions website - a React-based single-page application showcasing video production services, portfolio, pricing, and client testimonials. The project is built with Vite and TypeScript, designed to highlight the company's creative video and media solutions.

## Development Commands

- **Development server**: `npm run dev` - Starts Vite dev server
- **Build**: `npm run build` - Creates production build using Vite
- **Preview**: `npm run preview` - Serves the production build locally

## Environment Setup

The application requires a Gemini API key for AI functionality:
1. Set `GEMINI_API_KEY` in `.env.local`
2. The key is exposed to the client-side as `process.env.API_KEY` and `process.env.GEMINI_API_KEY`

## Architecture

### Single-File Application Structure
The entire application is contained in `index.tsx` as a single-page React application with the following main components:

- **Header**: Navigation component with logo and menu links
- **Hero**: Video background section with company branding
- **Portfolio**: Interactive portfolio grid with project details modal
- **Services**: Service categories and descriptions
- **Pricing**: Pricing plans with feature lists
- **Testimonials**: Client testimonial carousel
- **FAQ**: Expandable FAQ section with smooth animations
- **Contact**: Contact form and company information

### Data Structure
All content data (services, portfolio items, pricing plans, testimonials, FAQ) is defined as constants at the top of `index.tsx`:
- `services[]`: Array of service categories
- `portfolioItems[]`: Portfolio projects with images and descriptions
- `pricingPlans[]`: Service pricing with feature lists
- `testimonials[]`: Client testimonials
- `faqData[]`: FAQ questions and answers

### Styling
- Uses CSS-in-JS approach with classes defined in `index.css`
- Responsive design with CSS Grid and Flexbox
- Google Fonts (Poppins) integration
- Custom CSS animations for smooth interactions

### CDN Dependencies
The project uses AI Studio's CDN for React dependencies instead of local node_modules:
- React and ReactDOM loaded via importmap in `index.html`
- This allows the application to run without traditional npm install for dependencies

## Key Implementation Details

### Modal System
Portfolio items open in a modal overlay with:
- Image display and project descriptions
- Keyboard navigation support (ESC to close, Enter to open)
- Click-outside-to-close functionality

### Interactive Elements
- Smooth scroll navigation between sections
- Expandable FAQ items with animation
- Responsive hamburger menu for mobile
- Form validation and submission handling

### Path Aliases
The project uses `@/*` path alias pointing to the root directory, configured in both:
- `tsconfig.json` paths mapping
- `vite.config.ts` resolve aliases

## AI Integration
The application appears to be configured for AI Studio deployment with specific CDN links and API key handling for potential AI-powered features.