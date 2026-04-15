import { MessageBox } from "./messageBox.tsx";
import WriteMessage from "./messageWrite.tsx";
import { useEffect, useRef } from "react";
import "./messages.css";

export default function MessageBoard() {
    const messages = [
        {
            id: 1,
            sender: "Sender1",
            content: "This is a message, that is long enough to be a message and mega fucking good for testing!",
            date: "2026-01-01 16:67"
        },
        {
            id: 2,
            sender: "user",
            content: "Message2",
            date: "2026-01-01 16:67"
        },
        {
            id: 3,
            sender: "Sender3",
            content: "This is a message, that is long enough to be a message and mega fucking good for testing!",
            date: "2026-01-01 16:67"
        },
        {
            id: 4,
            sender: "user",
            content: "This is a message, that is long enough to be a message and mega fucking good for testing!",
            date: "2026-01-01 16:67"
        },
        {
            id: 5,
            sender: "Sender5",
            content: "This is a message, that is long enough to be a message and mega fucking good for testing!",
            date: "2026-01-01 16:67"
        },
        {
            id: 6,
            sender: "user",
            content: "This is a message, that is long enough to be a message and mega fucking good for testing!",
            date: "2026-01-01 16:67"
        }
    ]

    //auto scrolldown
    const messageBoardRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = messageBoardRef.current;
        if(el) el.scrollTop = el.scrollHeight;
    }, []);

    return(
        <div className="message-board" ref={messageBoardRef}>
            <ul className="messages">
                <li>{messages.map((message) => {
                    return <MessageBox {...message} />
                })}</li>
            </ul>
            <WriteMessage />
        </div>
    );
}