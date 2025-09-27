"use server";

import db from "@/lib/db";

export default async function registerAction(formData: FormData) {
  const entries = Array.from(formData.entries());
  const data = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };

  console.log("=== Register Action ===");
  console.log(data);

  //retornar erro se não tiver preenchido o form
  if (!data.name || !data.email || !data.password) {
    throw new Error("Por favor, preencha todos os campos.");
  }

  await db.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });
}
