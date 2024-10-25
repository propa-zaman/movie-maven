# Movie App with TMDB API & Next.js

This project is a **responsive movie search and details application** built using **Next.js** and the **TMDB API**. It demonstrates various Next.js advanced features such as **Infinite Scrolling**, **Server-Side Rendering (SSR)**, **Incremental Static Regeneration (ISR)**, **Dynamic Routing**, and **API Routes**. Users can explore popular movies, search for titles, view detailed movie information, and manage a **watchlist**.

## Features

### 1. **Homepage:**
   - Displays a list of popular movies from the TMDB API.
   - **Infinite Scrolling** to load more movies.
   - Movie posters are **lazy-loaded** for performance optimization.
   - A **search bar** is included to search for movies by title, with the same infinite scrolling or load-more behavior applied to the search results.

### 2. **Movie Details Page:**
   - When a user clicks on a movie, they are navigated to a dynamic route (e.g., `/movies/[id]`).
   - Fetches and displays detailed movie information using TMDB's movie details API, including:
     - Movie poster
     - Description
     - Genres
     - Release date
     - Cast information
   - **Server-Side Rendering (SSR)** is used with **Incremental Static Regeneration (ISR)**, ensuring the page revalidates every 60 seconds for fresh data.

### 3. **Favorites/Watchlist:**
   - Users can **add/remove movies** from their **watchlist**.
   - Watchlist data is stored on the server using **Server Actions** (Next.js 14).
   - A separate **Watchlist page** (`/watchlist`) displays all saved movies, allowing users to manage their favorites.
   - Optimistic UI is used to update the watchlist without waiting for the server-side response.

### 4. **Dark Mode:**
   - A **dark mode toggle** is available across the app, with the theme preference persisted using **localStorage**.
   - Dark mode is globally managed using **React Context** for consistent behavior across all pages.

## Extra Features
- **React Hook Form** for search form validation.
- **Zod** is used for API response validation to ensure data integrity.
- **TanStack Query** is used for efficient server data fetching and caching.
- **Next.js Middleware** manages user preferences (e.g., dark mode) and authentication.
  
## Tech Stack
- **Next.js**: React framework for SSR, ISR, and dynamic routing.
- **TypeScript**: For type safety and robust code.
- **Tailwind CSS**: For fast and easy styling.
- **React Query (TanStack Query)**: For data fetching, caching, and synchronization.
- **TMDB API**: For fetching movie data.

## How to Run Locally

1. Clone the repository:
```bash
   git clone https://github.com/your-username/movie-app
   cd movie-app
```
2. Install dependencies:
```bash
npm install
```
3. Add your TMDB API key in the .env.local file:
```bash
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
```
4. Run the development server:
```bash
npm run dev
```
5. Open the app in your browser:
```bash
http://localhost:3000
```


## Watchlist Feature
- The watchlist feature allows users to add or remove movies to their watchlist.
- A dedicated /watchlist page shows all the movies in the watchlist.
- The watchlist is stored in memory for demonstration purposes.

## Deployment
To deploy the app to Vercel:

- Push your repository to GitHub.
- Create an account on Vercel.
- Link your GitHub repository with Vercel.
- Vercel will automatically deploy the app and provide you with a live link.

## Live Demo
Check out the live demo at Live URL

## API Endpoints Used
- Popular Movies: https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY
- Movie Search: https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=
- Movie Details: https://api.themoviedb.org/3/movie/{movie_id}?api_key=YOUR_API_KEY
- Movie Cast: https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=YOUR_API_KEY

## Known Issues and Future Enhancements
- **Authentication:** Currently, the watchlist is stored in memory. In future iterations, adding proper authentication would allow each user to have their own watchlist.
- **Optimizations:** Further optimizations can be done in caching and API calls.






