"use client"
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { useRecoilState } from 'recoil';
import { fileInfo } from '@/recoil/fileInfo';

interface IMsgDataTypes {
    roomId: string | number;
    user: string;
    msg: string;
    time: string;
}

export const Chatting = ({ socket, username, roomId }: any)=>{
    const [currentFileInfo, setCurrentFileInfo] = useRecoilState(fileInfo);
    const [currentMsg, setCurrentMsg] = useState("");
    const [chat, setChat] = useState<IMsgDataTypes[]>([]);
    const [isConnected, setIsConnected]  = useState<boolean>(false);
    const endOfMessagesRef = useRef(null);
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
                <span
                    className={styles.chatProfileSpan}
                    style={{ textAlign: user == username ? "right" : "left" }}
                >
                    {user.charAt(0)}
                </span>
                <h3 style={{ textAlign: user == username ? "right" : "left" ,  flexWrap: 'wrap'}}>
                    {msg}
                </h3>
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