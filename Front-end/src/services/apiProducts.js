import { backendUrl } from "../App";
export async function getProduct(id) {
  const req = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!req) {
    throw new Error("failed in fetching the data");
  }
  const data = (await req).json();
  return data;
}

export async function getProducts() {
  const response = await fetch(backendUrl + "/api/product/list"); // Adjust the URL if needed
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  // console.log("query data : ", data);
  return data.products;
}
