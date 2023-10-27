import { query } from "@/lib/db";
import { NextResponse } from "next/server";




export async function GET(req, {params}) {
    const {_id} = params;
    console.log("id", _id)
  const result = await query({
    query: "SELECT * FROM documents WHERE _id = " + parseInt(_id),
  });
  return NextResponse.json(result, { status: 200 });
}


export async function PATCH(req, {params}) {
  const {_id} = params;
  const body = await req.json();
  const {title, description} = body;
  const result = await query({
    query: "UPDATE documents SET title=?, description=? WHERE _id=" + parseInt(_id),
    values: [title, description]
  })
  return NextResponse.json(result, {status: 200})
}

export async function DELETE(req, {params}) {
  const {_id} = params;
  console.log("id", _id)
const result = await query({
  query: "DELETE FROM documents WHERE _id = " + parseInt(_id),
});
return NextResponse.json(result, { status: 200 });
}