import { createClient, EntryFields, Asset } from "contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

type IClient = {
  space: string;
  accessToken: string;
};

export type MovieType = {
  id: EntryFields.Integer;
  title: EntryFields.Text;
  posterImage: Asset;
  description: EntryFields.Text;
  director: EntryFields.Text;
  writers: EntryFields.Text[];
  cast: EntryFields.Text[];
  imdbRating: EntryFields.Integer;
  streamingUrl: EntryFields.Text;
  tags: EntryFields.Text[];
};

const client = createClient({
  space: space,
  accessToken: accessToken,
} as IClient);

// Fetch Top 5 Movies
export async function fetchTopFiveMovies<MovieType>() {
  const entries = await client.getEntries({
    content_type: "neoMovies",
    limit: 5,
    "fields.tags[in]": "top5",
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Top 5 Movies`);
}

// Fetch Featured Movies
export async function fetchFeaturedMovies<MovieType>() {
  const entries = await client.getEntries({
    content_type: "neoMovies",
    "fields.tags[in]": "featured",
    limit: 3,
  });
  if (entries.items) return entries.items;
  console.log(`Error getting featured movies`);
}

// Fetch Featured Movies
export async function fetchFanFavoriteMovies<MovieType>() {
  const entries = await client.getEntries({
    content_type: "neoMovies",
    "fields.tags[in]": "fan-favorite",
  });
  if (entries.items) return entries.items;
  console.log(`Error getting fan favorite movies`);
}

// Fetch Movie of the Day
export async function fetchMovieOfTheDay<MovieType>() {
  const entries = await client.getEntries({
    content_type: "neoMovies",
    "fields.tags[in]": "movie-of-the-day",
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Movie of the day`);
}

// Fetch All Movies
export async function fetchAllMovies<MovieType>() {
  const entries = await client.getEntries({
    content_type: "neoMovies",
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Movies`);
}

// Fetch details of a movie based on id
export async function fetchMovieDetails(id: string) {
  const entries = await client.getEntries({
    content_type: "neoMovies",
    "fields.id": id,
  });
  if (entries.items) return entries.items;
  console.log(`Error getting movie details`);
}

// Fetch Top 5 Random Movies
export async function fetchRandomMovies<MovieType>() {
  const entries = await client.getEntries({
    content_type: "neoMovies",
    limit: 5,
  });
  if (entries.items) return entries.items;
  console.log(`Error getting random movies`);
}

// Search movie by name
export async function searchMovieByName(title: string) {
  const entries = await client.getEntries({
    content_type: "neoMovies",
    "fields.title[match]": title,
    limit: 5,
  });
  if (entries.items) return entries.items;
  console.log(`Error in searching movie by name`);
}
