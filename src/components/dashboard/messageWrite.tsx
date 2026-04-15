import { useState } from "react";
import "./messages.css";

export default function WriteMessage() {
    const [message, setMessage] = useState("");
    
    function handleSend(event: any) {
        event.preventDefault();
        console.log(message);
    }

    return(
        <div className="message-write">
            <input type="text" id="message-write-body" value={message} onChange={(e) => {setMessage(e.target.value)}} placeholder="Write a message..."/>
            <div id="message-send"><img src="sendingButton.ico" alt="sending" onClick={handleSend} style={{height: "2.5rem"}}/></div>
        </div>
    );
}