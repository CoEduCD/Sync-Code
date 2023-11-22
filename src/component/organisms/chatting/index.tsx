"use client"
import React,{useEffect, useState} from 'react'
import Image from 'next/image';
import styles from './styles.module.scss'
export const Chatting = ()=>{
    // const baseUrl = 'ws://localhost:8002';
    // const socket = new WebSocket(`${baseUrl}/chat/rooms/${roomIndex}`);
    return(
        <div style={{width: '28%', backgroundColor:'white', height: '82vh',borderRadius: 20, position: 'relative'}}>
            <input type="text" style={{position: 'absolute' ,backgroundColor: 'white', color: 'black', border:'2px solid', borderRadius:20, borderColor:'#E3E3E3', paddingLeft: 10, bottom: 20, left: 0, width: '90%', height: '40px', transform: 'translateX(5%)'}}/>
            <Image
                src="/paper-plane.png"
                width={25}
                height={25}
                style={{ objectFit: 'cover'}}
                alt="Sync-Codes"
                className={styles.image}
            />
        </div>);
}