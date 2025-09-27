import LoginForm from "@/components/login-form";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen">
      <div className="hidden lg:flex items-center justify-center bg-secondary-foreground h-screen w-1/2">
        <Image src="/undraw_enter.svg" width={500} height={500} alt="Login" />
      </div>

      <div className="flex justify-center items-center w-full md:w-1/2 p-5">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
