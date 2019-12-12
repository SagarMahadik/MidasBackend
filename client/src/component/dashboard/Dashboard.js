import React,{useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = ({auth:{user,loading,isAuthenticated}}) => {
        console.log(user.role)
        switch (user.role) {
            
            case 'admin':
                return <Redirect to="/adminLandingPage"/>
            case 'doctor':
                return <Redirect to="/doctorsLandingPage"/>
            case 'patient':
                return <Redirect to="/patientsLandingPage"/>
            default:
                break;
        }          
}

Dashboard.propTypes = {
    auth:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth : state.auth
})

export default connect(mapStateToProps,{})(Dashboard);