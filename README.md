# 🪙 Coins Price Tracker

## 📋 Overview

This application displays a comprehensive list of cryptocurrency prices with detailed information for each coin.

## ✨ Tools

- **Frontend**: Used tanstack query (cause i use it in my day to day life and also to not implement custom infinite load more functionality to earn some time.) For the FE thats pretty much it just pure React and Styled components All custom.

- **Backend**: Used Node-Cache for caching. I could have used Redis but for the scope of the project and to not over engineer it i went with Node-Cache. For the BE thats pretty much it just pure Node and Express. I justed wanted it to work. Most likely i could do more with rate limiting etc. better error handling. More production ready code

## 🏗️ Architecture

### Frontend (coins-FE)

- Main Idea is to Keep the components pure. Break everything to make sense and be reusable.

- have 1 place that hold the logic and keep the logic close where its needed

- upLift the state in the case of the modal cause i do not want to map the modal over and over again.

### Backend (coins-BE)

- **Runtime**: Node.js with Express.js
- **API Integration**: Axios for CoinGecko API calls
- **Caching**: Node-Cache for in-memory caching (2-minute TTL)
- **Environment**: dotenv for configuration management - its a demo api KEY so its exposed

### Infrastructure

- **Containerization**: Docker with Docker Compose
- **Development**: Hot reload enabled for both frontend and backend
- **Ports**:
  - Frontend: 4173
  - Backend: 4321

### Development Tools

- **ESLint**: Code linting and formatting
- **Nodemon**: Development server with auto-restart
- **Docker & Docker Compose**: Containerization

## 🚀 Getting Started

- Docker and Docker Compose installed
- CoinGecko API key (optional, demo key included)

### Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd fullstack
   ```

2. **Start the application**

   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:4173
   - Backend API: http://localhost:4321

### Development Mode

For development with hot reload:

```bash
# Start both services
docker-compose up

# Or start individually
cd coins-BE && npm run dev
cd coins-FE && npm run dev
```

## 📡 API Endpoints

### Backend API

- `GET /coins` - Fetch paginated list of cryptocurrencies
  - Query params: `page` (default: 1)
- `GET /coins/:id` - Fetch detailed information for a specific coin

### External API

- **CoinGecko API**: Real-time cryptocurrency market data
- **Caching**: 2-minute server-side cache for API responses
- **Rate Limiting**: Respects CoinGecko API limits

## 🎯 Key Features Explained

### Infinite Scrolling

- Implements TanStack Query's `useInfiniteQuery`
- Loads 50 coins per page
- Smooth user experience with loading states

### Caching Strategy

- **Server-side**: 2-minute TTL cache for CoinGecko API responses
- **Client-side**: React Query manages data freshness and background updates

### Modal System

- Detailed coin information in overlay modal
- Fetches additional data on-demand
- Responsive design with close functionality

### Performance Optimizations

- React.memo for component memoization
- Efficient re-rendering with proper key props
- Skeleton loading states for better UX

## 🔧 Configuration

### Environment Variables

## 🎨 Design Philosophy

Stole the colors from the Main site and got inspiration from that.
The rest of the design its just me

## 📄 License

This project is for educational and demonstration purposes.
