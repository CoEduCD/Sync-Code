"use client"
import React, { useEffect, useState, useRef } from 'react'
import {useRecoilState, useRecoilValue } from 'recoil'
import { usePathname } from 'next/navigation'
import { user_id } from '@/recoil/userId'
import { fileMode } from '@/recoil/fileMode'
import { Chatting } from '@/component/organisms/chatting'
import { createNewFile } from '@/api/file/api'
import { CodeEditor } from '@/component/organisms/codeEditor'
import { io } from 'socket.io-client'
import { fileInfo } from '@/recoil/fileInfo'
import { user_name } from '@/recoil/userName'
export const CodeEditPage = ()=>{
    const path = usePathname().split('/');
    const userId = useRecoilValue(user_id);
    const userName = useRecoilValue(user_name)

    const [currentFileMode, setCurrentFileMode] = useRecoilState(fileMode);
    const [currentFileInfo, setCurrentFileInfo] = useRecoilState(fileInfo);
    const [codeData, setCodeData] = useState<string>("");
    const [showChat, setShowChat] = useState<boolean>(false);
    useEffect(()=>{
        if (currentFileMode==="create"){
            createNewFile(userId, path[2],path[3], setCurrentFileInfo)
        } 
    },[userId])
    var socket: any;
    socket = io("http://localhost:8000") 

    useEffect(()=>{
        if (currentFileInfo !== undefined) {
            socket.emit("join_room", currentFileInfo.fileId);
            setShowChat(true);
          } else {
            console.log("현재 파일 정보가 없습니다")
          }
        ;
    },[currentFileInfo])

    return(
    <div style={{width: "100vw", height: '85vh', paddingTop: 10, backgroundColor:'black', display:'flex'}}>
        <CodeEditor codeData={codeData} setCodeData={setCodeData}/>
       {showChat && <Chatting socket={socket} roomId={currentFileInfo?.fileId} username={userName}/> }
    </div>)
}