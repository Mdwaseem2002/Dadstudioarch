import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    const adminUsername = process.env.ADMIN_USERNAME || "Dadstudio";
    const adminPassword = process.env.ADMIN_PASSWORD || "12345";

    if (username === adminUsername && password === adminPassword) {
      // Create a simple token (in production, use JWT)
      const token = Buffer.from(
        JSON.stringify({
          user: adminUsername,
          exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
        })
      ).toString("base64");

      const response = NextResponse.json(
        { success: true, message: "Login successful" },
        { status: 200 }
      );

      response.cookies.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24 * 60 * 60, // 24 hours
        path: "/",
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
