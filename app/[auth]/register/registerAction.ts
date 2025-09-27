"use server";

export default async function registerAction(formData: FormData) {
  const entries = Array.from(formData.entries());
  const data = Object.fromEntries(entries);

  console.log("=== Register Action ===");
  console.log(data);
}
