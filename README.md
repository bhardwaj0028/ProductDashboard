# Next.js Product Dashboard

A modern, responsive product dashboard built with Next.js, React, ShadCN/UI, and TailwindCSS. This application demonstrates a production-ready e-commerce interface with clean UI, state management, and async logic.

## 🚀 Features

### Core Functionality
- **Home Page**: Welcome page with navigation to the product dashboard
- **Product Dashboard**: Browse products with search, filtering, and pagination
- **Product Details**: Detailed view of individual products
- **Shopping Cart**: Add/remove products with quantity management
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### Technical Features
- **Next.js App Router**: Modern routing with server-side rendering
- **TypeScript**: Full type safety throughout the application
- **ShadCN/UI Components**: Accessible, customizable UI components
- **Zustand State Management**: Lightweight cart state management
- **TailwindCSS**: Utility-first CSS framework
- **FakeStore API Integration**: Real product data from external API
- **Image Optimization**: Next.js Image component with lazy loading
- **Error Handling**: Graceful error states and loading indicators
- **Local Storage Persistence**: Cart state persists across sessions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS + ShadCN/UI
- **State Management**: Zustand
- **API**: FakeStore API (https://fakestoreapi.com/)
- **Testing**: Jest + React Testing Library
- **Icons**: Lucide React

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs-product-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 🎯 Key Features Implementation

### Product Dashboard
- **Search**: Real-time search with debounced input
- **Filtering**: Category-based filtering with dropdown
- **Pagination**: Client-side pagination (10 items per page)
- **Loading States**: Skeleton loading and error handling
- **Responsive Grid**: Adaptive product grid layout

### Shopping Cart
- **Add/Remove**: Add products from any page
- **Quantity Management**: Increase/decrease quantities
- **Persistence**: Cart state saved to localStorage
- **Real-time Updates**: Live total calculations
- **Empty State**: Graceful empty cart handling

### Product Details
- **Dynamic Routing**: `/product/[id]` pages
- **Image Optimization**: Next.js Image component
- **Breadcrumb Navigation**: Easy navigation back
- **Add to Cart**: Direct cart integration

### State Management
- **Zustand Store**: Lightweight state management
- **Persistence**: localStorage integration
- **Type Safety**: Full TypeScript support
- **Actions**: Add, remove, update, clear cart





