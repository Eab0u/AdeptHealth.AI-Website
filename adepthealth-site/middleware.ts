import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Temporary pre-launch site protection.
// Remove this middleware when public access is ready.
const BASIC_AUTH_USERNAME = "Zindagi Na";
const BASIC_AUTH_PASSWORD = "Milegi Dobara";

function unauthorizedResponse() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area", charset="UTF-8"',
    },
  });
}

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return unauthorizedResponse();
  }

  const encodedCredentials = authHeader.slice("Basic ".length).trim();

  try {
    const decodedCredentials = atob(encodedCredentials);
    const separatorIndex = decodedCredentials.indexOf(":");

    if (separatorIndex === -1) {
      return unauthorizedResponse();
    }

    const username = decodedCredentials.slice(0, separatorIndex);
    const password = decodedCredentials.slice(separatorIndex + 1);

    if (
      username !== BASIC_AUTH_USERNAME ||
      password !== BASIC_AUTH_PASSWORD
    ) {
      return unauthorizedResponse();
    }
  } catch {
    return unauthorizedResponse();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
