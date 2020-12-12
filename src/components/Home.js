import React,{ Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Header from './Header';

const Home = (props) => {

  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZED_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    window.location.href = `${REACT_APP_AUTHORIZED_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`; 

    // console.log(REACT_APP_CLIENT_ID,REACT_APP_REDIRECT_URL,REACT_APP_AUTHORIZED_URL);
    // console.log('saluuuute'+app);
  }

  const { isValidSession, location } = props;
  const { state } = location;
  const sessionExpired = state && state.session_expired;

  return (
    <Fragment>
      {isValidSession() ? (
        <Redirect  to="/dashboard" />
      ) : (
        <div className="login">
          <Header />
          {sessionExpired && (
            <Alert variant="info">Session expired. Please login again.</Alert>
          )}
          <Button variant="info" type="submit" onClick={ handleLogin }>Login to spotify</Button>
        </div> 
      )}
    </Fragment>
  )
}

export default connect()(Home);