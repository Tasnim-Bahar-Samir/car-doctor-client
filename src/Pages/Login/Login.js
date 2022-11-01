import React from "react";
import { Link } from "react-router-dom";
import loginImg from '../../assets/images/login/login.svg'

const Login = () => {
    const handleLogin = (e)=>{
        e.preventDefault()
    }
  return (
    <div>
      <div className="hero mb-36">
        <div className="hero-content grid md:grid-cols-2 md:gap-16 w-full">
          <div className="text-center md:text-left w-full">
            <img className="w-3/4" src={loginImg} alt="" />
          </div>
          <div className=" w-full md:p-[50px] border-2 rounded-xl">
            <form onSubmit={handleLogin} className="card-body w-full">
                <h2 className="text-4xl text-center mb-3 font-semibold">Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="your password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-600 border-none">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
