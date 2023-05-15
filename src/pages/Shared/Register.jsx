import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { user, createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const confirmPassword = form.confirmPassword.value;
        const password = form.password.value;
        console.log(name, email, password, confirmPassword);
        if (password === confirmPassword) {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log('Registered user', user);
                    navigate('/')
                }).catch(error => {
                    console.log(error)
                })
        } else {
            alert('Password did not match')
        }
    }
    return (
        <div>

            <form onSubmit={handleRegister}>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            name="name" placeholder="Name"
                            className="input input-bordered" />
                    </div>
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

                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input name="confirmPassword" type="password" placeholder="Confirm password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className='bg-orange-400 py-3 rounded-lg' type="submit" value="Register" />
                    </div>
                </div>
            </form>
            <p className='px-5 py-3'>Already have an account <Link className='text-orange-400 fw-semibold' to="/login">Login</Link></p>


        </div>
    );
};

export default Register;