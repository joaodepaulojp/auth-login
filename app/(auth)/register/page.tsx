import { auth } from "@/auth";
import RegisterForm from "@/components/register-form";
import Image from "next/image";
import { redirect } from "next/navigation";

const Register = async () => {
  const session = await auth();
  if (session) {
    return redirect("/dashboard");
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen">
      <div className="hidden lg:flex items-center justify-center bg-secondary-foreground h-screen w-1/2">
        <Image
          src="/undraw_register.svg"
          width={500}
          height={500}
          alt="Login"
        />
      </div>

      <div className="flex justify-center items-center w-full md:w-1/2 p-5">
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
