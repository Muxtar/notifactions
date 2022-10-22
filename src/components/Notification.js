import { useState } from "react";

function Message(props){
    return(
        <div className="message">
            {props.messages}
        </div>
    )
}

function Notification({value, id}){
    let [show, setShow] = useState(false);

    function xml(){
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            console.log(this.responseText)
        }
        xhttp.open("PATCH", `http://127.0.0.1:8000/api/${id}/`);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(null)
    }

    function showMessage(e){
        setShow(!show);
        value.readable = false;
        console.log('showmessages run')
        xml();
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