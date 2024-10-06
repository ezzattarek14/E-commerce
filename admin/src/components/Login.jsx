import React from "react";

const Login = () => {
  return(
    <div>
      <div>
        <h1>Admin Panel</h1>
        <form>
            <div>
                <p>Email Address</p>
                <input className="rounded-md w-full px-3 py-2 border border-gray-400 outline-none" type="email" placeholder="your email" required />
            </div>
            <div>
                <p>Password</p>
                <input className="rounded-md w-full px-3 py-2 border border-gray-400 outline-none" type="password" placeholder="your password" required />
            </div>
            <button type="submit"> Login </button>
        </form>
      </div>
    </div>
  )
}

export default Login