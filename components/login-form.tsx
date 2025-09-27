"use client";
import React, { useActionState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { EyeIcon, Terminal } from "lucide-react";
import Form from "next/form";
import loginAction from "@/app/(auth)/login/loginAction";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  function togglePassword() {
    const input = document.getElementById("password") as HTMLInputElement;
    input.type = input.type === "password" ? "text" : "password";
  }
  return (
    <>
      {state?.success === false && (
        <div>
          <Alert variant="destructive">
            <Terminal />
            <AlertTitle>Opa, algo deu errado!</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        </div>
      )}
      <div className="items-center shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <h2 className="text-[20px] ">Bem-vindo de volta</h2>
        <p className=" max-w-sm text-[32px] font-bold">
          Faça login na sua conta
        </p>

        <Form action={formAction}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className="text-lg">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="seuemail@exemplo.com"
              type="email"
              className="w-full h-[49px]"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password" className="text-lg">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              className="w-full h-[49px]"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="flex gap-2 items-center cursor-pointer "
            >
              <EyeIcon size={20} />
              Mostrar senha
            </button>
          </LabelInputContainer>

          <p className="text-secondary text-sm text-right">
            Esqueceu sua senha?
          </p>

          <button
            className="mt-6 group/btn relative block h-[52px] w-full rounded-md bg-gradient-to-br cursor-pointer font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] bg-secondary dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Entrar na conta &rarr;
            <BottomGradient />
          </button>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

          <div className="flex flex-col space-y-4">
            <button
              className="group/btn shadow-input relative flex h-[52px] w-full items-center justify-start space-x-2 rounded-md bg-accent px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
              type="submit"
            >
              <IconBrandGithub className="h-4 w-4 text-white" />
              <span className="text-sm text-white">GitHub</span>
              <BottomGradient />
            </button>
            <button
              className="group/btn shadow-input relative flex h-[52px] w-full items-center justify-start space-x-2 rounded-md bg-accent px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
              type="submit"
            >
              <IconBrandGoogle className="h-4 w-4 text-white" />
              <span className="text-sm text-white">Google</span>
              <BottomGradient />
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
