"use server";
import { verifyPassword, createSession } from "@/lib/admin-auth";
import { redirect } from "next/navigation";

export async function loginAction(_prev: { error: string }, formData: FormData): Promise<{ error: string }> {
  const password = formData.get("password") as string;
  if (!password) return { error: "Mot de passe requis" };

  const valid = await verifyPassword(password);
  if (!valid) return { error: "Mot de passe incorrect" };

  await createSession();
  redirect("/admin");
}
