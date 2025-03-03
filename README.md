# GameHub - By Mesueh Christien

A beautiful and interactive video game discovery web application that allows users to search, filter, and explore games by various criteria. GameHub is a mini version of the Rawg website, a popular Video Game Discovery Platform, with modern UI and responsive design for optimal viewing on any device.

The application features advanced filtering capabilities, game detail pages with ratings and screenshots, responsive layouts, and performance-optimized image loading. Built with a clean architecture and TypeScript for enhanced code maintainability, GameHub demonstrates both frontend development proficiency and seamless API integration.

## Features

- **Advanced Game Search & Discovery**: Filter games by platform, genre, and search queries
- **Intuitive Game Cards**: Display key information including title, platform icons, and ratings
- **Detailed Game Information**: Rich game detail pages with descriptions, screenshots, and metadata
- **Color-Themed UI**: Dynamic dark/light theme based on user preference
- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Performance Optimized**: Efficient image loading and caching strategies

## Tech Stack

- **React**: 18.2.0
- **TypeScript**: For type safety and better developer experience
- **Chakra UI**: Component library for building accessible and responsive UI
- **React Query**: For efficient API data fetching and caching
- **Axios**: HTTP client for API requests
- **React Router**: For navigation between pages
- **Zustand**: Lightweight state management

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/christienMD/gamehub.git
cd gamehub
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables by creating a `.env` file
```
VITE_API_KEY=your_rawg_api_key
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## API Integration

GameHub uses the RAWG Video Games Database API. You'll need to:

1. Register at [https://rawg.io/apidocs](https://rawg.io/apidocs) to get your API key
2. Add your API key to the `.env` file as shown above

## Deployment

The application is deployed on Vercel. Visit [https://mdchristien-gamehub.vercel.app/](https://mdchristien-gamehub.vercel.app/) to see it live.

## Acknowledgments

- [RAWG Video Games Database](https://rawg.io/) for providing the comprehensive games API
- [Mosh Hamedani](https://codewithmosh.com/) for the project inspiration
