import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import CustomInputField from "@/components/custom-input/CustomInputField";
import BackHome from "@/components/shared/navbar/BackHome";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useSignUpMutation } from "@/redux/features/auth/authApi";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Validation schema
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .regex(/[a-zA-Z0-9]/, { message: "Password must be alphanumeric" }),
});

export default function SignUpPage() {
  const navigate = useNavigate();
  const token = useAppSelector(selectCurrentUser);
  const [signUp] = useSignUpMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const toastId = toast.loading("Registration...");
      // Simulate form submission
      const res = await signUp(values);
      if (res?.data?.success) {
        form.reset();
        toast.success("Registration successful! Please login to continue.", {
          id: toastId,
        });
        navigate("/login");
      } else if ((res as { error: { status: number } })?.error.status == 409) {
        // console.log((res as {error:{status:number}})?.error.status );
        toast.error("Already Exist This User!", { id: toastId });
      } else {
        toast.error("something went wrong!!", { id: toastId });
      }
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  if (token) {
    return <BackHome message="YOu Are Already Login!" />;
  }

  return (
    <div className="h-[100vh] grid place-content-center ">
      {/* title */}
      <div className="">
        <Helmet>
          <title>Sign Up - Bike Shop || Online Delivary</title>
        </Helmet>
      </div>
      <Card className="relative w-full mx-auto md:w-96 lg:w-96">
        <p
          onClick={() => navigate("/")}
          className="absolute top-0 right-0 inline px-3 py-1 m-2 font-bold border rounded-full shadow-md hover:shadow-sm hover:cursor-pointer"
        >
          X
        </p>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                {/* Name Field */}
                <CustomInputField
                  name="name"
                  label="Full Name"
                  placeholder="Enter Full Name"
                  type="text"
                  control={form.control}
                />

                {/* Email Field */}
                <CustomInputField
                  name="email"
                  label="Email"
                  placeholder="Enter email address"
                  type="email"
                  control={form.control}
                />

                {/* Password Field */}
                <CustomInputField
                  name="password"
                  label="Password"
                  placeholder="******"
                  type="password"
                  control={form.control}
                />

                <Button type="submit" className="w-full">
                  Register
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
