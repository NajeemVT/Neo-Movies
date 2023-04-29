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
  description: EntryFields.RichText;
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
  console.log(`Error getting Featured Movies`);
}

// Fetch Featured Movies
export async function fetchFanFavoriteMovies<MovieType>() {
  const entries = await client.getEntries({
    content_type: "neoMovies",
    "fields.tags[in]": "fan-favorite",
  });
  if (entries.items) return entries.items;
  console.log(`Error getting FanFavorite Movies`);
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
  return entries.items[0];
}
