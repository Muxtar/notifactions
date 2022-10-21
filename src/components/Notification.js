import { useState } from "react";

function Message(props){
    return(
        <div className="message">
            {props.messages}
        </div>
    )
}

function Notification({value}){
    let [show, setShow] = useState(false);

    function Xml(param){
        let api = new XMLHttpRequest();
        api.onload = ()=>{}
        api.send(`userId:${param}`) 
    }
    function showMessage(e){
        setShow(!show)
        value.readable = false;
        Xml('')
    }
    return(
        <div className={`notification ${value.readable ? 'read' : 'not-read'}`} onClick={showMessage}>
            <div className="left">
                <img src={value.image} alt="" />
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
                    value.messages ? <Message messages = {value.messages}/> : null
                : null }
            </div>
        </div>
    )
}

export default Notification;