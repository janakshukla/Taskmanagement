import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignUpForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-center text-3xl font-semibold md:text-5xl lg:text-7xl">
        Welcome to Todo App
      </h1>
      <Tabs defaultValue="Login" className="w-1/2">
        <TabsList>
          <TabsTrigger value="Login">Login</TabsTrigger>
          <TabsTrigger value="Signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="Login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="Signup">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
