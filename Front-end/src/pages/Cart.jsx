import Cartdetails from "../feature/Cart/Cartdetails";
import EmptyCart from "../feature/Cart/EmptyCart";
import OrderSummary from "../feature/Cart/OrderSummary";
import { useCartStore } from "../Store";

function Cart() {
  const cart = useCartStore((state) => state.cart);
  return (
    <div className="container space-y-5">
      <h1 className="font-extrabold text-5xl uppercase">your cart</h1>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-col justify-center items-center md:flex-row gap-5 w-full p-5">
          <Cartdetails />
          <OrderSummary />
        </div>
      )}
    </div>
  );
}

export default Cart;
