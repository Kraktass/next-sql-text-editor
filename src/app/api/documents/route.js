import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const result = await query({
    query: "SELECT * FROM documents",
  });
  return NextResponse.json(result, { status: 200 });
}

export async function POST(req, res) {
  const body = await req.json();
  const { title, description } = body;

  const results = await query({
    query: "INSERT INTO documents (title, description) VALUES (?, ?)",
    values: [title, description],
  });
  return NextResponse.json(results, { status: 200 });
}
