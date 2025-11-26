# Marion Autos - Premium Active Car Dealership Platform

A modern, ultra-responsive web application for Marion Autos, a Ghana-based car dealership that sells cars locally and internationally.

## Features

### Core Functionality
- **Buy Cars in Ghana** - Browse and purchase premium vehicles available locally
- **Import from USA** - Access thousands of cars from the US market with automated cost calculation
- **Track Delivery** - Real-time shipment tracking with visual timeline
- **Cost Calculator** - Instant duty and shipping cost estimation
- **User Dashboard** - Manage saved cars, orders, and active shipments

### Design Highlights
- Ultra-responsive, mobile-first design
- Premium automotive styling (navy, silver, gold accents)
- Smooth animations and transitions
- Clean, modern UI with intuitive UX
- High-performance Next.js 14 architecture

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
marionautos/
├── app/
│   ├── page.tsx                    # Home page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── cars/
│   │   ├── ghana/
│   │   │   ├── page.tsx           # Ghana cars listing
│   │   │   └── [id]/page.tsx      # Car detail page
│   │   └── usa/
│   │       └── page.tsx           # USA cars import page
│   ├── track/
│   │   └── page.tsx               # Delivery tracking
│   ├── calculator/
│   │   └── page.tsx               # Cost calculator
│   └── dashboard/
│       └── page.tsx               # User dashboard
├── components/
│   ├── Button.tsx                  # Reusable button component
│   ├── Card.tsx                    # Card & CarCard components
│   ├── Navbar.tsx                  # Navigation bar
│   ├── Footer.tsx                  # Footer
│   └── SearchBar.tsx               # Search functionality
├── public/                         # Static assets
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Key Pages

### Home Page (`/`)
- Hero banner with call-to-action
- Advanced search functionality
- Quick action cards
- Featured cars from Ghana and USA
- Trust signals and benefits section

### Buy in Ghana (`/cars/ghana`)
- Car listings with filters
- Grid layout with car cards
- Pagination
- Detail pages for each vehicle

### Import from USA (`/cars/usa`)
- USA car inventory
- Automated cost calculation (car + shipping + duty)
- Import request functionality

### Track Delivery (`/track`)
- Tracking ID input
- Visual shipment timeline
- Progress indicators
- Estimated delivery date

### Cost Calculator (`/calculator`)
- Input form for car details
- Real-time cost breakdown
- Duty calculation based on Ghana customs
- Shipping estimates

### Dashboard (`/dashboard`)
- User profile
- Saved cars
- Order history
- Active shipment tracking

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- `primary` - Navy blue tones
- `accent` - Gold/yellow accents
- `dark` - Gray scale

### Content
Update car data in each page component to connect to your backend API or CMS.

## Future Enhancements

- Backend API integration
- User authentication
- Payment gateway integration
- Admin dashboard for inventory management
- Real-time notifications
- Multi-language support
- Advanced search with AI recommendations

## License

Copyright © 2025 Marion Auto. All rights reserved.

## Contact

For inquiries: info@marionauto.com
