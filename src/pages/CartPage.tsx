import { Button } from "@/components/ui/button";
import { RiDeleteBin2Fill } from "react-icons/ri";
import cycle1 from "@/assets/images/bike-image-red.jpg"; // Assuming the image path
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  removeFromCart,
  updateQuantity,
} from "@/redux/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CartPage = () => {
  const cartData = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className="">
      {/* title */}
      <div className="">
        <Helmet>
          <title>My Cart - Bike Shop || Online Delivary</title>
        </Helmet>
      </div>
      {/*  */}
      <section className="container mx-auto min-h-[70vh] grid grid-cols-1 lg:grid-cols-12 gap-12 py-6 px-4 md:px-0">
        {/* Left Side: Product List */}
        <div className="lg:col-span-9 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">MY CART</h2>
          {cartData?.items.length > 0 ? (
            cartData?.items?.map((item) => (
              <div
                // product mean product id
                key={item?._id}
                className="flex md:flex-row flex-col items-center justify-between gap-4 border-b border-gray-200 py-4"
              >
                <img
                  src={cycle1}
                  alt="Product"
                  className="w-32 object-cover border rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">Model: {item?.model}</p>
                </div>
                <div className="flex items-center border rounded-md">
                  <button
                    className="px-3 py-1 border-r text-gray-600"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item._id,
                          selectQuantity: Math.max(item.selectQuantity - 1, 1),
                        })
                      )
                    }
                  >
                    -
                  </button>
                  <span className="px-4">{item?.selectQuantity}</span>
                  <button
                    className="px-3 py-1 border-l text-gray-600"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item._id,
                          selectQuantity: Math.min(
                            item?.selectQuantity + 1,
                            item.quantity
                          ),
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <div>
                  <span className="font-semibold text-lg">
                    BDT {item.price.toFixed(2)}
                  </span>
                </div>
                <div>
                  <Button
                    onClick={() => dispatch(removeFromCart(item?._id))}
                    variant="link"
                    className="text-primary-red flex items-center gap-2"
                  >
                    <RiDeleteBin2Fill className="w-5 h-5 mr-1" /> Remove
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full h-full grid place-items-center text-semibold text-center text-xl">
              <p className="text-gray-500">Your cart is empty.</p>
            </div>
          )}
        </div>

        {/* Right Side: Price Summary (Fixed Sidebar) */}
        <div className="lg:col-span-3 relative">
          <div className="bg-white rounded-lg shadow-md grid gap-2 p-4 sticky">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-base">Total Product:</span>
              <span className="text-base">{cartData?.totalQuantity}</span>
            </div>
            {/* <div className="flex justify-between mb-2">
            <span>Tax (10%):</span>
            <span>${(totalPrice * 0.1).toFixed(2)}</span>
          </div> */}
            <div className="flex justify-between font-bold text-base mb-4">
              <span className="text-base">Total Price:</span>
              <span className="text-base px-2">BDT.{cartData?.totalPrice}</span>
            </div>
            {cartData?.items.length > 0 && (
              <Button
                className="w-full text-white bg-primary-red"
                onClick={() => navigate("/order")}
              >
                Checkout
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
