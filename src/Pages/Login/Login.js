import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from '../../assets/images/login/login.svg'
import { userContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
    const {userLogin} = useContext(userContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email,password)
        .then((result) =>{
            navigate(from,{replace:true})
            console.log(result.user)
        })
        .catch(()=>{})
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
                  type="email"
                  placeholder="your email"
                  name="email"
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
                  name="password"
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
            <p className="text-center">New to this website? <Link className="text-orange-700" to='/signup'>Sign Up</Link> </p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
