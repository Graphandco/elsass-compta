import { NextResponse } from "next/server";

export function middleware(request) {
	const response = NextResponse.next();

	// Ajoute le pathname actuel dans les headers
	response.headers.set("x-pathname", request.nextUrl.pathname);

	return response;
}

// Appliquer à toutes les pages (ou restreindre)
export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
