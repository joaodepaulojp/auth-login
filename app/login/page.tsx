import LoginForm from "@/components/login-form";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex items-center">
      <div className="hidden lg:flex items-center justify-center bg-secondary-foreground h-screen w-1/2">
        <Image src="/undraw_enter.svg" width={500} height={500} alt="Login" />
      </div>

      {/* AJUSTAR RESPONSIVIDADE */}
      <div className="flex flex-col justify-center items-center h-screen w-full lg:w-1/2">
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
