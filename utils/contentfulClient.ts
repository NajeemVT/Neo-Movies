import { createClient, EntryFields, Asset } from "contentful";
const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

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

export const client = createClient({
  space: space,
  accessToken: accessToken,
} as IClient);
