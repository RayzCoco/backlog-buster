import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const steamId = searchParams.get("steamId");
    const apiKey = process.env.STEAM_WEB_API_KEY;

    if (!steamId) {
      return NextResponse.json(
        { error: "Steam ID is required " },
        { status: 400 },
      );
    }

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "API key not configured",
        },
        { status: 500 },
      );
    }

    const url = `${process.env.NEXT_PUBLIC_STEAM_PROFILE_WEB_API_URL}?key=${apiKey}&steamids=${steamId}`;
    const res = await fetch(url);

    if (!res.ok) {
      console.error(`❌ Steam API error status: ${res.status}`);
      throw new Error("Steam Api response failed");
    }

    const data = await res.json();
    const player = data?.response?.players?.[0] || null;

    if (!player) {
      return NextResponse.json(
        { error: "Player profile not found" },
        { status: 404 },
      );
    }

    const cookieStore = await cookies();
    cookieStore.set("auth_token", player.steamid, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json(player);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
