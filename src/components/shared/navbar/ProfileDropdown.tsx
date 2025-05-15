import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import {
  useAuthMeQuery,
  useLogOutMutation,
} from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { TUser } from "@/types/types";
import { Button } from "@/components/ui/button";

export function ProfileDropdown({ user }: { user: TUser }) {
  const dispatch = useAppDispatch();
  const { data } = useAuthMeQuery(undefined);
  const [logOut] = useLogOutMutation();
  const handleLogOut = async () => {
    dispatch(logout());
    toast.success("logout!");
    await logOut({});
  };

  return (
    <DropdownMenu>
      {/* profile image */}
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={data?.data?.profileImage || "https://github.com/shadcn.png"}
            alt="profile image"
          />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      {/* profile info */}
      <DropdownMenuContent className="mt-5 w-56  mr-20">
        {/* profile name */}
        <DropdownMenuItem className="flex flex-col items-center">
          <h1 className="w-full text-xl font-semibold text-center">
            {user.name.length > 15
              ? `${user?.name.slice(0, 10)}...`
              : user.name}
          </h1>
        </DropdownMenuItem>
        {/* menu */}
        <DropdownMenuItem>
          {}
          {user?.role === "admin" ? (
            <Link to={"/admin/dashboard"} className="w-full">
              <Button
                variant={"outline"}
                className="w-full hover:text-orange-600"
              >
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link to={"/user/dashboard"} className="w-full">
              <Button
                variant={"outline"}
                className="w-full hover:text-orange-600"
              >
                Dashboard
              </Button>
            </Link>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            onClick={handleLogOut}
            variant={"outline"}
            className="w-full bg-orange-600 text-white hover:bg-orange-700 hover:text-white"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
