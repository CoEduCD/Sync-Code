"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { useRecoilState } from 'recoil';
import { fileInfo } from '@/recoil/fileInfo';

export const Chatting = ()=>{
    const baseUrl = 'ws://ec2-15-165-115-163.ap-northeast-2.compute.amazonaws.com:8080/ws/chat';
    const [currentFileInfo, setCurrentFileInfo] = useRecoilState(fileInfo);
    const [roomId, setRoomId] = useState<string|undefined>();
    const [socketConnected, setSocketConnected] = useState(false); // 추가: WebSocket 연결 상태
    const [message, setMessage] = useState<string>("")
    const [sendMessage, setSendMessage] = useState<string[]>()
    const [receiveMessage, setReceiveMessage] = useState<string[]>()
    return(
        <div style={{width: '28%', backgroundColor:'white', height: '82vh',borderRadius: 20, position: 'relative'}}>
            <input 
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                type="text" 
                style={{position: 'absolute' ,backgroundColor: 'white', color: 'black', border:'2px solid', borderRadius:20, borderColor:'#E3E3E3', paddingLeft: 10, bottom: 20, left: 0, width: '90%', height: '40px', transform: 'translateX(5%)'}}
            />
            <Image
                src="/paper-plane.png"
                width={25}
                height={25}
                style={{ objectFit: 'cover'}}
                alt="Sync-Codes"
                className={styles.image}
                onClick={()=>{
                  setMessage("")
                }}
            />
        </div>)
}