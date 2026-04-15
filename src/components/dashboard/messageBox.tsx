import "./messages.css";

export type MessageProps = {
    id: number;
    sender: string;
    content: string;
    date: string;
}

export function MessageBox(message: MessageProps) {
    return(
        <div className="message" id={message.sender === "user" ? "sent-by-user" : ""}>
            {message.sender !== "user" ? <p id="message-sender">{message.sender}</p> : ""}
            <div id="message-body">
                <p>{message.content}</p>
                <p id="message-date">{message.date}</p>
            </div>
        </div>
    )
}