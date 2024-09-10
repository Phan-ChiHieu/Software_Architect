import { NextResponse } from "next/server";

export async function POST(request: Request) {
  //
  const namespaceId = "23082024_hscodelv6_json";

  try {
  } catch (error) {
    return NextResponse.json({ error: "Failed to ingest your data" });
  }
}
