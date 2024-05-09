import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { compare } from "$lib/server/encryption";

import credential from "$lib/server/credential.json";

export const actions = {
	default: async ({ request, cookies }) => {
		const data = Object.fromEntries(await request.formData()) as {
			email: string;
			password: string;
		};

		if (data.email !== credential.email) {
			return fail(400, {
				error: true,
				message: "Email does not correct!",
				email: data.email
			});
		}

		const isPasswordCorrect = await compare(data.password, credential.password);

		if (!isPasswordCorrect) {
			return fail(401, {
				error: true,
				message: "Password does not correct!",
				email: data.email
			});
		}

		cookies.set("session-id", credential.id, { maxAge: 60 });
		throw redirect(303, "/");
	}
} satisfies Actions;
