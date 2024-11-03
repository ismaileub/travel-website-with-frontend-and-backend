import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');


        if (!passwordPattern.test(password)) {
            toast.error("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters.");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("User created successfully!");

                const user = { name, email, password };

                fetch('https://explore-haven-server-side.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })

            })

            .catch(error => {

                if (error.code === "auth/email-already-in-use") {
                    toast.error("This email is already in use. Please try another one.");
                } else {
                    toast.error("Failed to register. Please try again.");
                }
                console.error(error);
            });
    }

    return (
        <div>
            <Toaster />
            <div className="mx-auto">
                <h2 className="text-center text-lg">Please Register</h2>

                <form onSubmit={handleRegister} className="card-body mx-auto md:w-3/4 lg:w-1/2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="photo" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                <p className="text-center">Already have an account? <Link to={'/login'} className="text-blue-600">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
