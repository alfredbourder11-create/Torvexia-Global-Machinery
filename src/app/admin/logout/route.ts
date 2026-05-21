import { destroySession } from "@/lib/admin-auth";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(_req: NextRequest) {
  await destroySession();
  redirect("/admin/login");
}
