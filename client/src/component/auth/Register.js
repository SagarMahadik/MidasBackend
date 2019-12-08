import React,{Fragment,useState} from 'react';
import {Link} from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name : '',
        email:'',
        password: '',
        passwordConfirm:'',
        role:''
    });

    const {name, email, password, passwordConfirm, role} = formData;

    const onChange = e => {
        setFormData({...formData,
        [e.target.name]:e.target.value})
    };

    const onSubmit = e => {
        e.preventDefault();
        if(password !== passwordConfirm){
            console.log("Password do not match")
        }else{
            console.log(formData)
        }
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Register here if you want to!</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Else fuck off!
            </p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    value ={name}
                    onChange={e => onChange(e)}
                     />
                </div>
                <div className="form-group">
                    <input 
                    type="email" 
                    placeholder="Email Address" 
                    name="email"
                    value={email}
                    onChange={e => onChange(e)} />
                    
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength="6"
                    value ={password}
                    onChange={e => onChange(e)}
                />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="passwordConfirm"
                    minLength="6"
                    value={passwordConfirm}
                    onChange={e => onChange(e)}
                 />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    placeholder="Confirm Role"
                    name="role"
                    value={role}
                    onChange={e => onChange(e)}
                 />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
            Already have an account? <Link to="/login">Sign In</Link>
      </p>
        </Fragment>
    )
}

export default Register;