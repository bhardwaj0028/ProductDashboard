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

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── dashboard/         # Product dashboard
│   ├── product/[id]/      # Product detail pages
│   └── cart/              # Shopping cart page
├── components/            # Reusable components
│   ├── ui/               # ShadCN/UI components
│   ├── ProductCard.tsx   # Product display card
│   ├── SearchBar.tsx     # Search functionality
│   ├── ProductFilter.tsx # Category filtering
│   ├── CartBadge.tsx     # Cart status indicator
│   └── Navigation.tsx    # Main navigation
├── lib/                  # Utilities and API
│   ├── api.ts           # API functions
│   ├── types.ts         # TypeScript interfaces
│   └── utils.ts         # Utility functions
├── store/               # State management
│   └── cartStore.ts     # Zustand cart store
├── styles/              # Global styles
│   └── globals.css      # TailwindCSS imports
└── __tests__/           # Test files
```

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

## 🧪 Testing

The application includes comprehensive tests:

- **Unit Tests**: API functions, utilities, store logic
- **Component Tests**: Individual component behavior
- **Integration Tests**: Page-level functionality
- **E2E Scenarios**: Complete user journeys

Run tests with:
```bash
npm run test
```

## 🎨 UI/UX Design

### Design System
- **ShadCN/UI**: Consistent, accessible components
- **TailwindCSS**: Utility-first styling approach
- **Responsive Design**: Mobile-first implementation
- **Dark Mode Ready**: CSS variables for theming

### Component Library
- **Card**: Product display and layout containers
- **Button**: Interactive elements with variants
- **Input**: Search and form inputs
- **Select**: Category filtering dropdown
- **Badge**: Status indicators and cart counter

## 🔧 Configuration

### Next.js Configuration
- **Image Domains**: FakeStore API images allowed
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended rules

### TailwindCSS
- **Custom Theme**: Extended color palette
- **Responsive Breakpoints**: Mobile-first approach
- **Component Classes**: ShadCN/UI integration

## 📱 Responsive Design

The application is fully responsive across all device sizes:

- **Mobile (320px+)**: Single column layout, touch-friendly
- **Tablet (768px+)**: Two-column grid, optimized spacing
- **Desktop (1024px+)**: Multi-column grid, full features
- **Large Desktop (1440px+)**: Maximum width container

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Optimized dependencies
- **Caching**: API response caching strategies
- **Debounced Search**: Reduced API calls

## 🔒 Error Handling

- **API Errors**: Graceful fallbacks and retry options
- **Network Issues**: Offline state handling
- **Invalid Routes**: 404 page handling
- **Loading States**: Skeleton screens and spinners
- **Form Validation**: Input validation and feedback

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **FakeStore API** for providing product data
- **ShadCN/UI** for the component library
- **Next.js Team** for the amazing framework
- **Vercel** for deployment platform

---

**🤖 Assisted by [Amazon Q Developer](https://aws.amazon.com/q/developer)**
