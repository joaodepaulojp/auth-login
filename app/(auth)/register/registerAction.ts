"use server";

import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";

export default async function registerAction(
  _prevState: unknown,
  formData: FormData
) {
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
    return {
      message: "Por favor, preencha todos os campos.",
      success: false,
    };
  }

  //verificar email cadastrado para tratar erro
  const userExists = await db.user.findUnique({
    where: { email: data.email },
  });
  if (userExists) {
    return {
      message: "Email já cadastrado. Por favor, use outro email.",
      success: false,
    };
  }

  //cria usuário no banco se não existir cadastro com o email informado
  await db.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashSync(data.password),
    },
  });

  return {
    message: "Usuário cadastrado com sucesso!",
    success: true,
  };
}
