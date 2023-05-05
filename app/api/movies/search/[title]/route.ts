import { NextResponse } from "next/server";
import { client } from "@/utils/contentfulClient";

// Fetch details of a movie based on id
export async function GET(
  req: Request,
  { params }: { params: { title: string } }
) {
  const title = params.title;
  const entries = await client.getEntries({
    content_type: "neoMovies",
    "fields.title[match]": title,
  });
  return NextResponse.json(entries?.items);
}
