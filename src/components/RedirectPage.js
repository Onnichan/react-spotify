import { Component } from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/functions';

class RedirectPage extends Component{

  componentDidMount(){
    const { setExpiryTime, history, location } = this.props;
    
    try{
      if(_.isEmpty(location.hash)){
        return history.push('/dashboard');
      }

      const access_token = getParamValues(location.hash);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      localStorage.setItem('params', JSON.stringify(access_token));
      localStorage.setItem('expiry_time', expiryTime);
      console.log(expiryTime);
      setExpiryTime(expiryTime);
      history.push('/dashboard');

    }catch(error){
      history.push('/');
    }
  }

  render(){
    return null;
  }
}

export default RedirectPage;