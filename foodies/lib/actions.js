"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { saveMeal } from "./meals";

export async function shareMeal(prevState, formData) {
	const meal = {
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
		creator: formData.get("name"),
		creator_email: formData.get("email"),
	};

	if (
		isTextValid(
			meal.title,
			meal.summary,
			meal.instructions,
			meal.creator,
			meal.creator_email
		) ||
		!meal.image ||
		meal.image.size === 0 ||
		!meal.creator_email.includes("@")
	) {
		return {
			message: "Invalid input! Please check your input and try again.",
		};
	}

	await saveMeal(meal);
	revalidatePath("/meals");
	redirect("/meals");
}

function isTextValid(...texts) {
	return texts.some((text) => !text || text.trim() === "");
}
