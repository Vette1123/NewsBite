# NewsBite: Advanced News Aggregator

NewsBite is a cutting-edge news aggregation application that provides users with a seamless and personalized news browsing experience. Built with React, TypeScript, and leveraging the power of modern web technologies, NewsBite offers a rich set of features designed to keep users informed and engaged.

## 🌟 Features

### 1. Multi-Source News Integration

- Aggregates news from multiple reputable sources, including The New York Times API.
- Unified article format for consistent presentation across different sources.

### 2. Advanced Filtering System

- **Category Filter**: Browse news by specific categories (e.g., technology, politics, sports).
- **Date Range Selection**: Filter articles within a custom date range.
- **Keyword Search**: Find articles containing specific keywords or phrases.
- **Source Filter**: Focus on news from particular sources.
- **Author Filter**: Discover articles by specific journalists or authors.

### 3. Responsive and Accessible Design

- Fully responsive layout that adapts to various screen sizes and devices.
- Implements accessibility best practices for an inclusive user experience.

### 4. Dark Mode Support

- Toggle between light and dark themes for comfortable reading in any environment.

### 5. Real-Time Updates

- Utilizes React Query for efficient data fetching and caching.
- Automatic refetching to ensure the latest news is always available.

### 6. Rich Article Cards

- Visually appealing article cards with images, titles, abstracts, and metadata.
- Quick access to full articles via external links.

### 7. Performance Optimized

- Implements lazy loading and code splitting for faster initial load times.
- Efficient state management using Zustand for a smooth user experience.

### 8. Error Handling and Loading States

- Graceful error handling with user-friendly error messages.
- Skeleton loading states for a polished loading experience.

### 9. Customizable User Preferences

- Persistent filters and settings using local storage.

### 10. Mobile-First Navigation

- Intuitive mobile navigation with a responsive header and mobile menu.

### 11. Internationalization Ready

- Structure in place to easily add multi-language support.

## 📰 News APIs Used

NewsBite integrates with three powerful news APIs to provide a diverse and comprehensive news feed:

1. **The New York Times API**: Offers access to high-quality journalism and breaking news from one of the world's leading news organizations.

   - [NYT API Documentation](https://developer.nytimes.com/apis)

2. **The Guardian API**: Provides a wide range of news articles from The Guardian and The Observer, known for their investigative journalism and international coverage.

   - [The Guardian API Documentation](https://open-platform.theguardian.com/documentation/)

3. **News API**: Aggregates headlines from over 80,000 sources worldwide, offering a broad spectrum of news content.
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

Our Dockerfile implements several best practices and features:

- **Multi-stage build**: Optimizes the final image size by separating build and runtime environments.
- **Non-root user**: Enhances security by running the application as a non-root user.
- **Health check**: Ensures the application is running correctly within the container.
- **Environment variables**: Allows for easy configuration of API keys and other settings.
- **Caching**: Leverages Docker layer caching for faster builds.

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
- The open-source community for the amazing tools and libraries
