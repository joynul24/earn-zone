import { Link } from "react-router-dom";
import imgRegister from "../assets/authentication/authentication1.gif";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const handleGoogleRegister = () => {
    console.log("google");
  };

  const handleRegister = () => {
    console.log("login");
  };

  return (
    <div>
      <div className="register-page min-h-screen flex flex-col md:flex-row justify-between items-center">
        {/* login form */}
        <div className="card-body">
          <h1 className="text-xl font-bold text-center text-[#07332F] font-m">
            Register
          </h1>
          <form onSubmit={handleRegister} className="space-y-2 font-i">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name*</span>
              </label>
              <input
                name="name"
                type="name"
                placeholder="Your name"
                className="rounded-full w-full input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL*</span>
              </label>
              <input
                name="photo"
                type="url"
                placeholder="Your photo URL"
                className="rounded-full w-full input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email*</span>
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
                <span className="label-text">Password*</span>
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
                Register
              </button>
            </div>
            <p className="font-semibold text-center text-[#F7A582]">
              Already have an account? please{" "}
              <Link className="text-[#07332F]" to="/login">
                Login
              </Link>
              .
            </p>
          </form>
          <h2 className="text-center mt-5 md:text-xl font-bold">
            Or Sign Up With
          </h2>
          <div className="flex justify-center gap-5 mt-3">
            {/* Google */}
            <button
              onClick={handleGoogleRegister}
              className="btn bg-white text-black w-full rounded-full border-gray-300 hover:bg-[#07332F] hover:text-white"
            >
              <FcGoogle />
              Google
            </button>
          </div>
        </div>
        {/* login img */}
        <div>
          <img className=" md:w-[400px] lg:w-[500px]" src={imgRegister} />
          {/* <Lottie animationData={lottie}></Lottie> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
