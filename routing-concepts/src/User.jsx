import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";


function User(){
    const {username}=useParams();
    //yahi parameters passhua tha
    const [userData,setUserData]=useState({});
    useEffect(()=>{
        fetch('/users.json').then(data=>{
            return data.json;
        }).then(data=>{
            setUserData(data[username]);
        })
    },[username]);

    return (
        <h2>
            This is User {userData?.name} and his age is {userData?.age};
        </h2>
    )
}
export default User;