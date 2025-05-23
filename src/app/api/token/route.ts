import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();

  const token = cookieStore.get("token");

  if (!token) {
    return (
      NextResponse.json(
        {
          message: "Unauthorize!",
        },
        { status: 401 }
      )
    )
  }

  const { value } = token;

  const headers = {
    Authorization: `Bearer ${value}`,
    "Content-Type": "application/json",
  };

  return NextResponse.json({ token: value });
}
