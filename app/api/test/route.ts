import { NextRequest, NextResponse } from "next/server";
export const dynamic  = 'true';
export async function GET(request: NextRequest) {
    console.log('--->123')
  return NextResponse.json({ message: `Hello, World1!` });
}
