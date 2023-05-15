import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { user, googleSignIn, logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                // console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log('logged user', user)
                navigate(from, { replace: true })

            }).catch(error => {
                console.log(error)
            })

    }
    return (
        <div>

            <form onSubmit={handleLogin}>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            name="email" placeholder="email"
                            className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className='bg-orange-400 py-3 rounded-lg' type="submit" value="Login" />
                    </div>
                </div>
            </form>
            <p className='px-10'>Create An Account <Link to="/register"><span className='text-blue-600 font-bold'>Register</span></Link></p>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className="btn btn-wide">Continue with google</button>
            </div>


        </div>
    );
};

export default Login;