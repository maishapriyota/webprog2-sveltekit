import type { Handle } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
	const sessionId = event.cookies.get("session-id");
	const path = event.url.pathname;

	if (!sessionId && path !== "/login" && path !== "/signup") {
		throw redirect(303, "/login");
	}

	const response = await resolve(event);
	return response;
}) satisfies Handle;
