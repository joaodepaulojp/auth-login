"use server";

import { signIn } from "@/auth";

export default async function loginAction(
  _prevState: unknown,
  formData: FormData
) {
  try {
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    });
    return { success: true };
  } catch (e) {
    if (e.type === "CredentialsSignin") {
      return {
        success: false,
        message: "Dados de login inválidos. Tente novamente.",
      };
    }

    return { success: false, message: "Por favor, tente novamente." };
  }
}
