import { useCartStore } from "../../Store";
import { formatCurrency } from "../../utils/helper";
import { BsArrowRight } from "react-icons/bs";

function OrderSummary() {
  const cart = useCartStore((state) => state.cart);
  const discount = 10;
  const delivery = 10;
  const totalPrice = Math.floor(
    cart
      .map((item) => item.price * item.quantity)
      .reduce((acc, curr) => acc + curr, 0)
  );
  console.log(totalPrice);
  return (
    <div className="w-2/3 md:w-2/3 space-y-7 p-2">
      {/* order summary title */}
      <h1 className="font-bold text-xl md:text-2xl capitalize">
        order summary
      </h1>

      {/* total price, discount, and delivery */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-lg md:text-xl">Subtotal</span>
          <span className="text-lg md:text-xl font-bold">
            {formatCurrency(totalPrice)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-lg md:text-xl">Discount</span>
          <span className="text-red-600 text-lg md:text-xl font-bold">
            {`-${formatCurrency(discount)}`}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-lg md:text-xl">Delivery Fee</span>
          <span className="text-lg md:text-xl font-bold">
            {formatCurrency(delivery)}
          </span>
        </div>
      </div>

      {/* total price */}
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg md:text-xl">Total</span>
        <span className="text-lg md:text-xl font-bold">
          {formatCurrency(totalPrice - discount + delivery)}
        </span>
      </div>

      {/* button of the checkout */}
      <button className="flex items-center text-base md:text-xl justify-center font-semibold gap-2 text-white bg-mblack w-full py-3 md:py-4 rounded-full transition-all duration-500 ease-in-out hover:bg-white hover:text-mblack cursor-pointer whitespace-nowrap">
        Go to Checkout <BsArrowRight />
      </button>
    </div>
  );
}

export default OrderSummary;
