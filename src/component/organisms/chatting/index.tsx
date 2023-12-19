"use client"
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

interface IMsgDataTypes {
    roomId: string | number;
    user: string;
    msg: string;
    time: string;
}

export const Chatting = ({ socket, username, roomId }: any)=>{
    const [currentMsg, setCurrentMsg] = useState("");
    const [chat, setChat] = useState<IMsgDataTypes[]>([]);
    const [isConnected, setIsConnected]  = useState<boolean>(false);
    const endOfMessagesRef = useRef<any>(null);
    const sendData = async () => {
        if (currentMsg !== "") {
        const msgData: IMsgDataTypes = {
            roomId,
            user: username,
            msg: currentMsg,
            time:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
        };
        await socket.emit("send_msg", msgData);
        setCurrentMsg("");
        }
    };
    useEffect(() => {
        if (!isConnected){
            const handleNewMessage = (data: IMsgDataTypes) => {
                setChat((prev) => [...prev, data]);
            };
        
            socket.on("receive_msg", handleNewMessage);    
        }
        return () => {
            setIsConnected(true);
        };
    }, [socket]);

    useEffect(()=>{
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    },[chat])

    return(
        <div className={styles.container}>
        <div className={styles.chat_border}>
            <div>
            {chat.map(({ roomId, user, msg, time }, key) => (
                <div
                key={key}
                className={
                    user == username
                    ? styles.chatProfileRight
                    : styles.chatProfileLeft
                }
                >
                    <div>
                        {user !== username ?
                            <div
                                className={styles.userName}
                            >
                                {user}
                            </div>: null}
                            <div 
                                className = {user == username ? styles.sendMessage: styles.receiveMessage}
                           >
                                {msg}
                            </div>
                    </div>
                </div>
            ))}
            <div ref={endOfMessagesRef} />
            </div>
                <div>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        sendData()
                    }}>
                        <input 
                            className={styles.input}
                            type="text"
                            value={currentMsg}
                            placeholder="Type your message.."
                            onChange={(e) => setCurrentMsg(e.target.value)}
                        />
                        <Image
                            src="/paper-plane.png"
                            width={25}
                            height={25}
                            style={{ objectFit: 'cover'}}
                            alt="Sync-Codes"
                            className={styles.image}
                            onClick={()=>{
                            sendData()
                            }}
                        />
                    </form>
                </div>
            </div>
        </div>)
}