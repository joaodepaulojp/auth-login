import Form from "next/form";
import logoutAction from "../(auth)/(logout)/logoutAction";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Form action={logoutAction}>
        <Button>Logout</Button>
      </Form>
    </div>
  );
};

export default Dashboard;
