import Cookies from "js-cookie";
// import { useCartStore } from "../Store";

function islogged() {
  // Get a cookie
  const value = Cookies.get("Token");

  // console.log("value", value);

  return value ? true : false;
}

function logIn(token, username) {
  // console.log(user);
  // Set a cookie
  Cookies.set("Token", token);
  Cookies.set("username", username);
  window.location.reload();
}

function logOut(clearCart) {
  Cookies.remove("Token");
  Cookies.remove("username");
  Cookies.remove("user");
  clearCart();
  window.location.reload();
}

export { logIn, logOut, islogged };
