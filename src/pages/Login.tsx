import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";

import CustomInputField from "@/components/custom-input/CustomInputField";
import BackHome from "@/components/shared/navbar/BackHome";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { selectCurrentUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Form validation schema
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(1, { message: "Password must be at least 1 characters long" })
    .regex(/[a-zA-Z0-9]/, { message: "Password must be alphanumeric" }),
});

// Demo credentials
const demoAdmin = {
  email: "adminBikes@gmail.com",
  password: "adminBikes",
};

const demoUser = {
  email: "user@demo.com",
  password: "user123",
};

export default function LoginPreview() {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const token = useAppSelector(selectCurrentUser);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        email: values.email,
        password: values.password,
      };
      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.token);
      dispatch(setUser({ user: user, token: res?.data.token }));
      toast.success("Logged in successfully", { id: toastId, duration: 2000 });
      navigate(location?.state || "/", { replace: true });
    } catch {
      toast.error("Email or password incorrect!", {
        id: toastId,
        duration: 2000,
      });
    }
  }

  async function handleDemoLogin(userInfo: {
    email: string;
    password: string;
  }) {
    const toastId = toast.loading("Logging in as demo");
    try {
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.token);
      dispatch(setUser({ user: user, token: res?.data.token }));
      toast.success("Logged in as demo", { id: toastId, duration: 2000 });
      navigate(location?.state || "/", { replace: true });
    } catch {
      toast.error("Demo login failed", { id: toastId, duration: 2000 });
    }
  }

  if (token) {
    return <BackHome message="You're already logged in!" />;
  }

  return (
    <div className="h-[100vh] grid place-content-center">
      <Helmet>
        <title>Sign In - Bike Shop || Online Delivery</title>
      </Helmet>
      <Card className="relative w-full mx-auto md:w-96 lg:w-96">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                <CustomInputField
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  control={form.control}
                />
                <CustomInputField
                  name="password"
                  label="Password"
                  placeholder="*****"
                  type="password"
                  control={form.control}
                />
                <Link to="#" className="inline-block ml-auto text-sm underline">
                  Forgot your password?
                </Link>
                <Button type="submit" className="w-full">
                  Login
                </Button>

                {/* Demo Admin Login */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => handleDemoLogin(demoAdmin)}
                >
                  Login as Demo Admin
                </Button>

                {/* Demo User Login */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => handleDemoLogin(demoUser)}
                >
                  Login as Demo User
                </Button>

                {/* Continue without login */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate("/")}
                >
                  Continue Without Login
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 text-sm text-center">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
