import axios from "axios";

export async function productsData() {
  const products = await axios.get(
    "https://645de9688d08100293f1eb54.mockapi.io/products"
  );
  
  return products;
}
