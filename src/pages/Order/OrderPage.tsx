import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  useAuthMeQuery,
  useUpdateProfileMutation,
} from "@/redux/features/auth/authApi";
import { clearCart } from "@/redux/features/cart/cartSlice";
import { useCreateOrderMutation } from "@/redux/features/order/orderApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const OrderPage = () => {
  const { isLoading, data } = useAuthMeQuery(undefined);
  const [updateProfile] = useUpdateProfileMutation();
  const cartData = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [
    createOrder,
    { isLoading: orderLoading, isSuccess, data: orderData, isError, error },
  ] = useCreateOrderMutation();

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [profileComplete, setProfileComplete] = useState(true);

  useEffect(() => {
    if (data?.data) {
      setUserDetails({
        name: data.data.name || "",
        email: data.data.email || "",
        phone: data.data.phone || "",
        address: data.data.address || "",
      });

      // Check if any required fields are missing
      if (!data.data.name || !data.data.phone || !data.data.address) {
        setProfileComplete(false);
      } else {
        setProfileComplete(true);
      }
    }
  }, [data]);
  const toastId = "order";
  useEffect(() => {
    if (orderLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      // toast.success(orderData?.message, { id: toastId });
      dispatch(clearCart());
      if (orderData?.data) {
        // dispatch(afterOrder())
        setTimeout(() => {
          window.location.href = orderData?.data;
        }, 1000);
      }
    }

    if (isError) toast.error(JSON.stringify(error), { id: toastId });
  }, [error, isError, isSuccess, orderData, orderData?.message, orderLoading]);

  const handleOrderCreate = async () => {
    const formattedData = {
      products: cartData?.items?.map((item) => ({
        _id: item?._id,
        quantity: item?.selectQuantity,
      })),
    };

    await createOrder(formattedData).unwrap();
  };

  if (isLoading) {
    return <Loading />;
  }

  const handleProfileUpdate = async () => {
    try {
      await updateProfile({
        name: userDetails.name,
        phone: userDetails.phone,
        address: userDetails.address,
      }).unwrap();
      setIsEditing(false);
      setProfileComplete(true);
    } catch (error) {
      console.error("Profile update failed", error);
    }
  };

  // console.log(cartData, "data");

  return (
    <div className="container p-4 mx-auto lg:p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* User Details - Left Side (8 Rows) */}
        <div className="md:col-span-2 row-span-8">
          <Card className="h-full shadow-md">
            <CardHeader>
              <CardTitle>User Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  placeholder="Full Name"
                  value={userDetails.name}
                  disabled={!isEditing}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                />
                <Input placeholder="Email" value={userDetails.email} disabled />
                <Input
                  placeholder="Phone"
                  value={userDetails.phone}
                  disabled={!isEditing}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, phone: e.target.value })
                  }
                />
                <Input
                  placeholder="Address"
                  value={userDetails.address}
                  disabled={!isEditing}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, address: e.target.value })
                  }
                />
              </div>
              {!profileComplete && (
                <p className="mt-2 text-red-500">
                  Please update your profile to proceed with the order.
                </p>
              )}
              {isEditing ? (
                <Button
                  className="w-full mt-4 text-white bg-green-500"
                  onClick={handleProfileUpdate}
                >
                  Save Profile
                </Button>
              ) : (
                !profileComplete && (
                  <Button
                    className="w-full mt-4 text-white duration-300 bg-black hover:bg-red-500"
                    onClick={() => setIsEditing(true)}
                  >
                    Update Profile
                  </Button>
                )
              )}
            </CardContent>
          </Card>
        </div>

        {/* Order Summary - Right Side (4 Rows) */}
        <div className="row-span-4 md:col-span-1">
          <div className="h-full p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-bold">Order Summary</h2>
            <div className="flex justify-between mb-2 text-lg">
              <span>Total Products:</span>
              <span className="font-semibold">{cartData?.totalQuantity}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total Price:</span>
              <span className="text-2xl text-red-600">
                Tk.{cartData?.totalPrice}
              </span>
            </div>
            {profileComplete && cartData?.items.length > 0 && (
              <Button
                className="w-full mt-4 text-white bg-primary-red"
                onClick={handleOrderCreate}
              >
                Order
              </Button>
            )}
          </div>
          <div className="w-full mt-3 text-center">
            <h4 className="w-full text-lg font-bold text-center text-red-800">
              !!Warning!!
            </h4>
            <p>
              The product quantity will decrease only after the admin verifies
              the order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
