import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      <p>Acesse a tela de login:</p>
      <Button asChild>
        <a href="/login">Login</a>
      </Button>
      <p>Acesse a tela de Cadastro:</p>
      <Button asChild>
        <a href="/register">Cadastro</a>
      </Button>
    </div>
  );
}
