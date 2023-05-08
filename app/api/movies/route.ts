import { NextResponse } from "next/server";
import { client } from "@/utils/contentfulClient";

// Fetch All Movies
export async function GET(req: Request) {
  const entries = await client.getEntries({
    content_type: "neoMovies",
  });

  return new Response(JSON.stringify(entries?.items), { status: 200 });
}
