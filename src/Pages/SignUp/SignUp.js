import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import loginImg from '../../assets/images/login/login.svg'
import { userContext } from '../../Context/AuthProvider/AuthProvider'
const SignUp = () => {
    const {createUser} = useContext(userContext)
    const handleSignUp = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(e => console.log(e))
    }
  return (
    <div className="hero mb-36">
        <div className="hero-content grid md:grid-cols-2 md:gap-16 w-full">
          <div className="text-center md:text-left w-full">
            <img className="w-3/4" src={loginImg} alt="" />
          </div>
          <div className=" w-full md:p-[50px] border-2 rounded-xl">
            <form onSubmit={handleSignUp} className="card-body w-full">
                <h2 className="text-4xl text-center mb-3 font-semibold">Sign Up</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="your name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
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
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-600 border-none">Sign Up</button>
              </div>
            </form>
            <p className="text-center">Already have an account?<Link className="text-orange-700" to='/login'>Login</Link> </p> 
          </div>
        </div>
      </div>
  )
}

export default SignUp