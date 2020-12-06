import React, { useEffect, useState } from 'react';
interface Props{

}
const College_Container:React.FC = () =>{
    const [colleges,setColleges] = useState<any>([]);
    const getData=()=>{
        fetch('colleges.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setColleges(myJson);
          });
      }

      useEffect(()=>{
        getData();
      },[]);
    

    return (
       <>
       <div>
           <img src="../Asset/college.png">

           </img>
       </div>
       </>
    );
}

export default College_Container;