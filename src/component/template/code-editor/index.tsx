"use client"
import React, { useEffect, useState, useRef } from 'react'
import {useRecoilState, useRecoilValue } from 'recoil'
import { usePathname } from 'next/navigation'
import { user_id } from '@/recoil/userId'
import { fileMode } from '@/recoil/fileMode'
import { Chatting } from '@/component/organisms/chatting'
import { createNewFile } from '@/api/file/api'
import { CodeEditor } from '@/component/organisms/codeEditor'
export const CodeEditPage = ()=>{
    const path = usePathname().split('/');
    const userId = useRecoilValue(user_id);
    const [currentFileMode, setCurrentFileMode] = useRecoilState(fileMode);
    const [codeData, setCodeData] = useState<string>("");
    useEffect(()=>{
        if (currentFileMode==="create"){
            createNewFile(userId, path[2],path[3])
        } 
    },[userId])
    return(
    <div style={{width: "100vw", height: '85vh', paddingTop: 10, backgroundColor:'black', display:'flex'}}>
        <CodeEditor codeData={codeData} setCodeData={setCodeData}/>
        <Chatting/>
    </div>)
}