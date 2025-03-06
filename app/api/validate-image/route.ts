import type { NextApiRequest, NextApiResponse } from "next";
import {NextResponse} from "next/server";

export async function GET(req: NextApiRequest) {

    if(!req.url) {
        return NextResponse.json({ error: "Invalid URL" });
    }

    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");

    if (!url) {
        return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    try {
        const res = await fetch(url, { method: "HEAD" });

        if (!res.ok) {
            return NextResponse.json({ error: "URL is unreachable" }, { status: 400 });
        }

        const type = res.headers.get("content-type") || "";

        if (!type.startsWith("image/")) {
            return NextResponse.json({ error: "URL is not an image" }, { status: 400 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Error validating URL" }, { status: 500 });
    }
}