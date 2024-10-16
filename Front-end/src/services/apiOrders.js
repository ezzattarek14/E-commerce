// import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { backendUrl } from "../App";

export async function getOrders(userId) {
  //   const userId = Cookies.get("userId");
  const response = await fetch(
    backendUrl + `/api/order/userorders/?userId=${userId}`
  );

  const data = await response.json();

  console.log(data);

  if (!response.ok) {
    toast.error(`${data.message}`);
    throw new Error("Failed to register user: " + data.message);
  }

  const orders = data.orders;
  console.log("orders:", orders);
  return orders; // Return the response data
}
