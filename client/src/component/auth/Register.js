import React,{Fragment,useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAlert} from '../../action/alert';
import {register} from '../../action/auth';
import PropTypes from 'prop-types';

const Register = ({setAlert, register, isAuthenticated,user}) => {
    const [formData, setFormData] = useState({
        name : '',
        email:'',
        password: '',
        passwordConfirm:'',
        mobile:'',
        role:''
    });

    const {name, email, password, mobile, passwordConfirm, role} = formData;

    const onChange = e => {
        setFormData({...formData,
        [e.target.name]:e.target.value})
    };

    const onSubmit = e => {
        e.preventDefault();
        if(password !== passwordConfirm){
            setAlert("Password do not match", 'danger');
        }else{
            register({ name, email, password, passwordConfirm, role, mobile})
        }
    }

    if(isAuthenticated && user){
        return <Redirect to ="/dashboard"/>
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Register here!</h1>

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
                    type="text" 
                    placeholder="Mobile number" 
                    name="mobile"
                    value={mobile}
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

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool
    }

const mapStateToProps = state =>({
    isAuthenticated : state.auth.isAuthenticated,
    user:state.auth.user
});

export default connect(mapStateToProps, { setAlert,register })(Register);