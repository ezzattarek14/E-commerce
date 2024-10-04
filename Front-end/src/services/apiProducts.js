export async function getProduct(id) {
  const req = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!req) {
    throw new Error("failed in fetching the data");
  }
  const data = (await req).json();
  return data;
}

export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data;
}
