import { NextResponse } from "next/server";
import { client } from "@/utils/contentfulClient";

// Filter movies
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  let entries;
  const tag = searchParams.get("tag");
  if (tag === "random") {
    entries = await client.getEntries({
      content_type: "neoMovies",
      limit: 5,
    });
  } else {
    entries = await client.getEntries({
      content_type: "neoMovies",
      "fields.tags[in]": tag,
    });
  }

  return NextResponse.json(entries?.items);
}
