import React from 'react'
import {useEffect} from 'react'

const Navbar = ({color}) =>{

    // useEffect(() =>{
    //     alert("Welcome");
    //   },[])
      
      // useEffect (() =>{
      //   alert("the count has changed");
      // },[])
      
      // useEffect (() =>{
      //   alert("first count has changed");
      // },[first])

      useEffect (() =>{
        alert("color has changed");
      },[color])

      return (
        <div>
            this is navbar {color}
        </div>
      )
}
export default Navbar