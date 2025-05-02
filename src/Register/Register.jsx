import { Link, useNavigate } from "react-router-dom";
import imgRegister from "../assets/authentication/authentication1.gif";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "../context/Authcontext";
import { toast } from "react-toastify";

const Register = () => {

  const {createUser, updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleRegister = () => {
    console.log("google");
  };

  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then(result => {
      console.log(result.user);
      updateUserProfile({ displayName: data.name, photoURL: data.photo })
      if(result.user) {
        toast.success(`Mr ${data.name} has succsessfull your registration`);
        navigate('/')
      }
    })
    .catch(() => {
      toast.error('Sorry, with this auth you have made a allredy account!');
    })
  };

  return (
    <div>
      <div className="register-page min-h-screen flex flex-col md:flex-row justify-between items-center">
        {/* login form */}
        <div className="card-body">
          <h1 className="text-xl font-bold text-center text-[#07332F] font-m">
            Register
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 font-i">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name*</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Your name"
                className="rounded-full w-full input input-bordered"
              />
              {errors.name && (
                <span className="text-red-400">Name field is required</span>
              )}
            </div>
            {/* Photo Url */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL*</span>
              </label>
              <input
                {...register("photo", { required: true })}
                name="photo"
                type="url"
                placeholder="Your photo URL"
                className="rounded-full w-full input input-bordered"
              />
              {errors.photo && (
                <span className="text-red-400">Photo field is required</span>
              )}
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                placeholder="Your email"
                className="rounded-full w-full input input-bordered"
              />
              {errors.email && (
                <span className="text-red-400">Email field is required</span>
              )}
            </div>
            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password*</span>
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
            {/* Category */}
            <div className="form-control">
              <p className="text-gray-600">Select your category*</p>
              <select
                defaultValue="Choose your rule"
                {...register("selection")}
                name="selection"
                className="select w-full rounded-full"
              >
                <option>Worker</option>
                <option>Buyer</option>
              </select>
            </div>
            <div className="form-control mt-3">
              <input className="rounded-full btn btn-primary w-full bg-[#164943] hover:bg-[#07332F] border-0 text-white" type="submit" value="Register" />
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
