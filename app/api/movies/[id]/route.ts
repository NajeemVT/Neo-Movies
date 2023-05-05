import { NextResponse } from "next/server";
import { client } from "@/utils/contentfulClient";

// Fetch details of a movie based on id
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const entries = await client.getEntries({
    content_type: "neoMovies",
    "fields.id": id,
  });
  return NextResponse.json(entries?.items);
}
