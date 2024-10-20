/** @format */

export async function POST(request: Request) {
  const userData = await request.json();
  return Response.json({ message: "Hey world 123", userData });
}
