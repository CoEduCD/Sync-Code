"use client"
import { Role } from '@/@type/authority/interface';
import { modifyFileContents } from '@/api/file/api';
import { useDebounce } from '@/hooks/useDebounce';
import { fileInfo } from '@/recoil/fileInfo';
import { fileMode } from '@/recoil/fileMode';
import { user_id } from '@/recoil/userId';
import { Editor } from '@monaco-editor/react';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
interface CodeEditorProps {
    codeData: string;
    setCodeData: React.Dispatch<React.SetStateAction<string>>
}
export const CodeEditor = ({codeData, setCodeData}:CodeEditorProps)=>{
    const userId = useRecoilValue(user_id)
    const [currentFileInfo, setCurrentFileInfo] = useRecoilState(fileInfo);
    const [currentFileMode, setCurrentFileMode] = useRecoilState(fileMode);
    const path = usePathname().split('/');
    const debouncedCode = useDebounce(codeData, 300);
    useEffect(()=>{
        if (currentFileMode === "modify" && currentFileInfo!==undefined && codeData.length>0 && currentFileInfo.role !== Role.VIEWER){
            modifyFileContents(userId, currentFileInfo, codeData)
        }

    },[debouncedCode])
    return(
    <>
        <Editor       
            height='100%'
            width="70%"
            language={path[2]}
            value={codeData}
            defaultValue={currentFileInfo!==undefined?currentFileInfo.fileDetail:""}
            onChange={(value)=>{
                if (value!==undefined) {
                    currentFileInfo?.role !== Role.VIEWER && setCodeData(value)
                }
            }
            }
            theme='vs-dark'
            options={{
                minimap: {
                enabled: true,
                },
                fontSize: 15,
                // cursorStyle: "black",
                wordWrap: "on",
            }}
        />

    </>)
}