import React from 'react'
import User from './User'

import {useSelector} from 'react-redux'



function UserData( props) {
  const {users} = useSelector((state) => {
    return  state  });


  return (
  

    <div>
      
      
        {users.map((item, index)=> {
      return <User 
      key={index} 
      userInfo={item}
      updateUser={props.editUser}
      deleteUser={props.deleteUser}
      
      
      />
    }



  )
}




        
    

  
   

</div>
  )
  
    
}

export default UserData;