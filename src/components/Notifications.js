import { useState } from "react";
import Notification from "./Notification";

function Notifications({notifications}){
    return(
        <div className="notifications">
            {notifications.map((value, index)=>{
                return <Notification value = {value} key={value.id} id = {value.id}/>
            })}
        </div>
    )
}

export default Notifications;