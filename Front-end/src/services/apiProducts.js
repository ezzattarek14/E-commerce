import toast from "react-hot-toast";
import { backendUrl } from "../App";
export async function getProduct(id) {
  console.log("fetching"), id;
  const response = await fetch(
    backendUrl + `/api/product/single/?productId=${id}`
  );

  const data = await response.json();

  if (!response.ok) {
    toast.error(`${data.message}`);
    throw new Error("Failed to register user: " + data.message);
  }

  const product = data.product;
  // console.log("product:", product);
  return product; // Return the response data
}


//get all products
export async function getProducts() {
  const response = await fetch(backendUrl + "/api/product/list"); // Adjust the URL if needed
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  // console.log("query data : ", data);
  return data.products;
}
