import { redirect, fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { hash } from "$lib/server/encryption";

import credential from "$lib/server/credential.json";

import fs from "fs";
import path from "path";
import process from "process";

export const actions = {
	default: async ({ request }) => {
		const data = Object.fromEntries(await request.formData()) as {
			name: string;
			email: string;
			password: string;
			passwordConfirm: string;
			id?: string;
		};
		data.id = crypto.randomUUID();

		if (data.email === credential.email) {
			return fail(400, {
				error: true,
				message: "Email is already used!",
				name: data.name,
				email: data.email
			});
		}

		if (data.password !== data.passwordConfirm) {
			return fail(400, {
				error: true,
				message: "Password does not match!",
				name: data.name,
				email: data.email
			});
		}

		const hashedPassword = await hash(data.password);
		const fd = path.join(process.cwd(), "src/lib/server/credential.json");
		fs.writeFileSync(
			fd,
			JSON.stringify({
				...data,
				password: hashedPassword,
				passwordConfirm: hashedPassword
			})
		);
		throw redirect(303, "/login");
	}
} satisfies Actions;
