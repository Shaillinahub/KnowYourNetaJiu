import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const registerSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number" }),
  citizenshipDocument: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Citizenship document is required")
    .transform((files) => files[0]),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export default function RegisterComponent() {
  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  function onRegisterSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values);
    // Handle registration logic here
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Create a new account to get started.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...registerForm}>
          <form
            onSubmit={registerForm.handleSubmit(onRegisterSubmit)}
            className="space-y-4"
          >
            <FormField
              control={registerForm.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={registerForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={registerForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={registerForm.control}
              name="citizenshipDocument"
              render={({ field: { onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>Citizenship Document</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => onChange(e.target.files)}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Upload your citizenship document (PDF, JPG, or PNG)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={registerForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-netablue">
              Register
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
