import { useState } from "react";

function Message(props){
    return(
        <div className="message">
            {props.message}
        </div>
    )
}

function Notification({value}){
    let [show, setShow] = useState(false);
    function showMessage(){
        setShow(!show)
    }
    return(
        <div className={`notification ${value.readable ? 'read' : 'not-read'}`} onClick={showMessage}>
            <div className="left">
                <img src={require(`../../notifications-page-main/assets/images/${value.image}`)} alt="" />
            </div>
            <div className="right">
                <p className="about">
                    <span className="username">{value.username}</span>
                    <span className='move'>{value.move}</span>
                    <span className="note">{value.note}</span>
                    {value.readable ? <span className='point'></span> : null}
                </p>
                <p className="date-main">{value.date}</p>
                {show ?
                    value.message ? <Message message = {value.message}/> : null
                : null }
            </div>
        </div>
    )
}

export default Notification;