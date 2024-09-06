import React from 'react'

const hider = () => {
    return useEffect(() => {
        value ? setIsEmpty(true) : setIsEmpty(false);
        if(!isEmpty){
          document.getElementById("butid").style.display = "none"
       } else{
         document.getElementById("butid").style.display = "initial"
       }
      })
}

export default hider
