import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import imgLogin from "../assets/authentication/authentication1.gif";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "../context/Authcontext";
import { toast } from "react-toastify";

const Login = () => {

   const {loginUser, loginUserWithGoogle} = useContext(AuthContext)
   const Navigate = useNavigate()

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

  const handleGoogleLogin = () => {
    loginUserWithGoogle()
     .then((result) => {
          Navigate("/");
          if (result.user) {
            toast.success("User google login Successfuly");
            return;
          }
        })
        .catch(() => {
          toast.error("Google failed to be login!");
        });
  };

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
    .then((result) => {
      Navigate("/");
      if (result.user) {
        toast.success(`Mr ${result.user.displayName} has Successfuly your login`);
        return;
      }
    })
    .catch(() => {
      toast.error("Failed to be login!");
    });
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
          <form  onSubmit={handleSubmit(onSubmit)}  className="space-y-2 font-i">
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              {...register("email", { required: true })}
                name="email"
                type="email"
                placeholder="Your email"
                className="rounded-full w-full input input-bordered"
                required
              />
               {errors.email && (
                <span className="text-red-400">Email field is required</span>
              )}
            </div>
            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register(
                  "password",
                  {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                  },
                )}
                name="password"
                type="password"
                placeholder="Your password"
                className="rounded-full w-full input input-bordered"
                required
              />
               {errors.password?.type === "minLength" && (
                <span className="text-red-400">Passwmust be 6 characters</span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-400">
                  Password be less than 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-400">
                  Password must have one uppercase one lower case, one number and one special character.
                </span>
              )}
            </div>
            <div className="form-control mt-3">
            <input className="rounded-full btn btn-primary w-full bg-[#164943] hover:bg-[#07332F] border-0 text-white" type="submit" value="Login" />
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
