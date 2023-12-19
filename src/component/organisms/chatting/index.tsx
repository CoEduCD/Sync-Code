"use client"
import React, { useEffect, useState } from 'react';
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
    const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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

    return(
        <div style={{width: '28%', backgroundColor:'white', height: '82vh',borderRadius: 20, position: 'relative', color:'black'}}>
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
                <h3 style={{ textAlign: user == username ? "right" : "left" }}>
                    {msg}
                </h3>
                </div>
            ))}
            </div>
            <div>
            <form onSubmit={(e) => sendData(e)}>
                <input
                className={styles.chat_input}
                type="text"
                value={currentMsg}
                placeholder="Type your message.."
                onChange={(e) => setCurrentMsg(e.target.value)}
                />
                <button className={styles.chat_button}>Send</button>
            </form>
            </div>
        </div>
        </div>)
}