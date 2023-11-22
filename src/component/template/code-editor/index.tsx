"use client"
import React, { useEffect, useState, useRef } from 'react'
import { Editor } from '@monaco-editor/react'
import {useRecoilState, useRecoilValue } from 'recoil'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { user_id } from '@/recoil/userId'
import { fileInfo } from '@/recoil/fileInfo'
import { fileMode } from '@/recoil/fileMode'
import { Chatting } from '@/component/organisms/chatting'
import { createNewFile } from '@/api/file/api'
export const CodeEditPage = ()=>{
    const path = usePathname().split('/');
    const userId = useRecoilValue(user_id);
    const [currentFileInfo, setCurrentFileInfo] = useRecoilState(fileInfo);
    const [currentFileMode, setCurrentFileMode] = useRecoilState(fileMode);
    const [codeData, setCodeData] = useState("");
    useEffect(()=>{
        if (typeof userId === "number"&&currentFileMode==="create"){
            createNewFile(Number(userId), path[2],path[3])
        } 
    },[userId])
    return(
    <div style={{width: "100vw", height: '85vh', paddingTop: 10, backgroundColor:'black', display:'flex'}}>
        <Editor       
            height='100%'
            width="70%"
            // language="javascript"
            language={path[2]}
            value={codeData}
            // defaultValue={currentFileInfo.fileDetail}
            onChange={(value)=>{
                if (value!==undefined) {
                    console.log(value)
                    setCodeData(value)
                }
            }
            }
            theme='vs-dark'
            options={{
                minimap: {
                enabled: true,
                },
                fontSize: 15,
                cursorStyle: "black",
                wordWrap: "on",
            }}
        />
        <Chatting/>
    </div>)
}