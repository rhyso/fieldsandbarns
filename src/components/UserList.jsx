import React  from "react";
import * as R from 'ramda'
const UserList = (users={}) => {

  
    Object.entries(users).map(user => {
      console.log('>>',user);
      return ( <span>{'dd'}</span>)
    });
    return null
  

}

export default UserList