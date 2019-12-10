import React,{useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
//import store from '../../store';
//import {loadUser} from '../../action/auth';


const Dashboard = ({auth:{user,loading,isAuthenticated}}) => {
        
    if(user.role === 'admin'){
        return <Redirect to='/adminLandingPage'/>
    }
           
}

Dashboard.propTypes = {
    auth:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth : state.auth
})

export default connect(mapStateToProps,{})(Dashboard);