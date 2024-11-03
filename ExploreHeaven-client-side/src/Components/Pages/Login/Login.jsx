import { useContext } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const { signIn, logInWithGoogle, logInWithGitHub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location);
    const from = location.state || '/';

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Successfully logged in!");
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error("Login error:", error);
                const errorMessage = error.message || "Login failed. Please try again.";
                toast.error(errorMessage);
            });
    };

    const handleLogInWithGoogle = () => {
        logInWithGoogle()
            .then((result) => {
                console.log(result.user);
                toast.success('Successfully logged in with Google!');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error("Google login error:", error);
                toast.error("Google login failed. Please try again.");
            });
    };

    const handleLogInWithGitHub = () => {
        logInWithGitHub()
            .then((result) => {
                console.log(result.user);
                toast.success('Successfully logged in with GitHub!');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error("GitHub login error:", error);
                toast.error("GitHub login failed. Please try again.");
            });
    };

    return (
        <div className="mx-auto">
            <Toaster />
            <h2 className="text-center text-lg">{location.state && 'To access this page '}Please Login</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="card-body mx-auto md:w-3/4 lg:w-1/2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: "Email is required" })}
                        className="input input-bordered"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: "Password is required" })}
                        className="input input-bordered"
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>

            <p className="text-center">Login with
                <button onClick={handleLogInWithGoogle} className="text-blue-600 mx-3"> Google </button>
                or
                <button onClick={handleLogInWithGitHub} className="text-blue-600 ml-3"> GitHub </button>
            </p>

            <p className="text-center">Don't have an account?
                <Link to={'/register'} className="text-blue-600"> Register</Link>
            </p>
        </div>
    );
};

export default Login;
