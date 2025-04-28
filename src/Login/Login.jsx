import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import imgLogin from "../assets/authentication/authentication1.gif";
import "./Login.css";

const Login = () => {
  const handleGoogleLogin = () => {
    console.log("google");
  };

  const handleLogin = () => {
    console.log("login");
  };

  return (
    <>
      <div className="login-page min-h-screen flex flex-col md:flex-row justify-between items-center">
        {/* login img */}
        <div>
          <img className=" md:w-[400px] lg:w-[500px]" src={imgLogin} />
          {/* <Lottie animationData={lottie}></Lottie> */}
        </div>
        {/* login form */}
        <div className="card-body">
          <h1 className="text-xl font-bold text-center text-[#07332F] font-m">
            Login
          </h1>
          <form onSubmit={handleLogin} className="space-y-2 font-i">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your email"
                className="rounded-full w-full input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Your password"
                className="rounded-full w-full input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-3">
              <button className="rounded-full btn btn-primary w-full bg-[#07332F] border-0 text-white">
                Login
              </button>
            </div>
            <p className="font-semibold text-center text-[#F7A582]">
              New to this website? please?{" "}
              <Link className="text-[#07332F]" to="/register">
                Register
              </Link>
              .
            </p>
          </form>
          <h2 className="text-center mt-5 md:text-xl font-bold">
            Or Sign In With
          </h2>
          <div className="flex justify-center gap-5 mt-3">
            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black w-full rounded-full border-gray-300 hover:bg-[#07332F] hover:text-white"
            >
              <FcGoogle />
              Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
