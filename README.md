# NewsBite: Advanced News Aggregator

NewsBite is a news aggregation app built with React and TypeScript. It pulls articles from several news APIs into one feed that you can filter by category, date, keyword, source and author.

## 🌟 Features

### 1. Multi-Source News Integration

- Aggregates news from multiple sources, including The New York Times API.
- Unified article format for consistent presentation across different sources.

### 2. Advanced Filtering System

- **Category Filter**: Browse news by specific categories (e.g., technology, politics, sports).
- **Date Range Selection**: Filter articles within a custom date range.
- **Keyword Search**: Find articles containing specific keywords or phrases.
- **Source Filter**: Focus on news from particular sources.
- **Author Filter**: Find articles by specific journalists or authors.

### 3. Responsive and Accessible Design

- Responsive layout that adapts to different screen sizes and devices.
- Follows accessibility best practices.

### 4. Dark Mode Support

- Toggle between light and dark themes.

### 5. Real-Time Updates

- Uses React Query for data fetching and caching.
- Refetches automatically so the news stays current.

### 6. Rich Article Cards

- Article cards show images, titles, abstracts, and metadata.
- Quick access to full articles via external links.

### 7. Performance Optimized

- Lazy loading and code splitting for faster initial load.
- State management with Zustand.

### 8. Error Handling and Loading States

- Error handling with readable error messages.
- Skeleton loading states.

### 9. Customizable User Preferences

- Persistent filters and settings using local storage.

### 10. Mobile-First Navigation

- Mobile navigation with a responsive header and mobile menu.

### 11. Internationalization Ready

- The structure is set up for adding more languages.

## 📰 News APIs Used

NewsBite uses three news APIs:

1. **The New York Times API**: Articles and breaking news from The New York Times.

   - [NYT API Documentation](https://developer.nytimes.com/apis)

2. **The Guardian API**: News articles from The Guardian and The Observer.

   - [The Guardian API Documentation](https://open-platform.theguardian.com/documentation/)

3. **News API**: Headlines from over 80,000 sources worldwide.
   - [News API Documentation](https://newsapi.org/docs)

## 🚀 Getting Started

### Prerequisites

- Docker installed on your machine

### Environment Setup

1. Copy the sample environment file:

   ```
   cp .env.sample .env
   ```

2. Open the `.env` file and provide your own API keys for the following services:

   - NYT API
   - The Guardian API
   - News API

   The `.env` file should look similar to this:

   ```
   VITE_NYT_API_KEY=your_nyt_api_key_here
   VITE_THE_GUARDIAN_API_KEY=your_guardian_api_key_here
   VITE_NEWS_API_ORG_KEY=your_news_api_key_here
   ```

   Replace `your_*_api_key_here` with your actual API keys obtained from the respective services.

### Running with Docker

1. Clone the repository:

   ```
   git clone https://github.com/Vette1123/NewsBite.git
   cd NewsBite
   ```

2. Build the Docker image:

   ```
   docker build -t newsbite .
   ```

3. Run the Docker container:

   ```
   docker run -p 3000:3000 newsbite
   ```

4. Access the application:
   Open your browser and navigate to `http://localhost:3000`

### Docker Features

The Dockerfile has these features:

- **Multi-stage build**: Keeps the final image small by separating build and runtime environments.
- **Non-root user**: Runs the application as a non-root user.
- **Health check**: Checks that the application is running inside the container.
- **Environment variables**: API keys and other settings are set through environment variables.
- **Caching**: Uses Docker layer caching to speed up builds.

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Query
- Zustand
- Axios
- React Router
- Shadcn UI
- Docker

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/Vette1123/NewsBite/issues).

## 📝 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

## 🙏 Acknowledgements

- The New York Times API
- The Guardian API
- News API
- All other news sources and APIs used in this project
- The open-source community for the tools and libraries
