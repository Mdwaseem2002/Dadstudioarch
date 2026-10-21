import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    const decoded = JSON.parse(Buffer.from(token, "base64").toString());

    if (decoded.exp < Date.now()) {
      const response = NextResponse.json(
        { authenticated: false, message: "Token expired" },
        { status: 401 }
      );
      response.cookies.set("admin_token", "", { maxAge: 0, path: "/" });
      return response;
    }

    return NextResponse.json(
      { authenticated: true, user: decoded.user },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }
}
