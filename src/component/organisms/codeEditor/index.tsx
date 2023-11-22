import { Editor } from '@monaco-editor/react';
import { usePathname } from 'next/navigation';
import path from 'path';
import React from 'react';
interface CodeEditorProps {
    codeData: string;
    setCodeData: React.Dispatch<React.SetStateAction<string>>
}
export const CodeEditor = ({codeData, setCodeData}:CodeEditorProps)=>{
    const path = usePathname().split('/');
    return(
    <>
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

    </>)
}