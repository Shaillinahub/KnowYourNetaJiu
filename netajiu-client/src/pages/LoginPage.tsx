import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./LoginPage.css";
import LoginComponent from "../appcomponents/LoginComponent";
import RegisterComponent from "../appcomponents/RegisterComponent";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="loginform_container">
      <img src="/logo.svg" alt="netajiu" />
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-[400px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginComponent />
        </TabsContent>
        <TabsContent value="register">
          <RegisterComponent />
        </TabsContent>
      </Tabs>
    </div>
  );
}
