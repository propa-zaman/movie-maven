import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Movie Maven - Your Ultimate Movie Companion',
  description: 'Discover, track, and explore your favorite movies with Movie Maven. Get personalized recommendations, create watchlists, and stay updated with the latest releases.',
  icons: {
    icon: '/favicon.svg'
  }
};

// If you need to use this type elsewhere in your application
export type MovieMavenMetadata = typeof metadata;