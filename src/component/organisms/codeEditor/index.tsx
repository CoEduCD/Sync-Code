"use client"
import { Role } from '@/@type/authority/interface';
import { modifyFileContents } from '@/api/file/api';
import { useDebounce } from '@/hooks/useDebounce';
import { fileInfo } from '@/recoil/fileInfo';
import { fileMode } from '@/recoil/fileMode';
import { user_id } from '@/recoil/userId';
import { Editor } from '@monaco-editor/react';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import yorkie from 'yorkie-js-sdk';
interface CodeEditorProps {
    codeData: string;
    setCodeData: React.Dispatch<React.SetStateAction<string>>
}

export const CodeEditor = ({ codeData, setCodeData }: CodeEditorProps) => {
    const userId = useRecoilValue(user_id);
    const [currentFileInfo, setCurrentFileInfo] = useRecoilState(fileInfo);
    const [currentFileMode, setCurrentFileMode] = useRecoilState(fileMode);
    const [doc,] = useState(new yorkie.Document('file', currentFileInfo?.fileHash));
    const path = usePathname().split('/');
    const debouncedCode = useDebounce(codeData, 500);
    // const debouncedSyncCode = useDebounce(codeData, 0);
    useEffect(() => {
        async function attachDoc() {
          // 01. create client with RPCAddr(envoy) then activate it.
          const client = new yorkie.Client('http://localhost:8080');
          await client.activate();
    
          // 02. attach the document into the client.
          await client.attach(doc);
    
        //   03. create default todos if not exists.
          doc.update((root) => {
            if (root['contents']===undefined) {
              root['contents'] = new yorkie.Text();  
            }
        })

        doc.subscribe((event) => {
            setCodeData(doc.getRoot()['contents']);
          });
    
        // //   05. set todos  the attached document.
        //   setCodeData(doc.getRoot()['contents']);
    
        }
        attachDoc();
      }, [doc]);

    useEffect(() => {
        if (currentFileMode === "modify" && currentFileInfo !== undefined && codeData.length > 0 && currentFileInfo.role !== Role.VIEWER) {
            doc.update((root)=>{
                root['contents'] =  debouncedCode;
            });
            modifyFileContents(userId, currentFileInfo, codeData);
        }
    }, [debouncedCode]);

    // useEffect(()=>{
    //     if (currentFileMode === "modify" && currentFileInfo !== undefined && codeData.length > 0 && currentFileInfo.role !== Role.VIEWER) {
    //         doc.update((root)=>{
    //             root['contents'] =  codeData;
    //         });
    //     }
    // },[codeData])
    return (
            <Editor
                height='100%'
                width="70%"
                language={path[2]}
                value={codeData}
                defaultValue={currentFileInfo !== undefined ? currentFileInfo.fileDetail : ""}
                onChange={(value) => {
                    if (value !== undefined && currentFileInfo?.role !== Role.VIEWER) {
                        setCodeData(value);
                    }
                }}
                theme='vs-dark'
                options={{
                    minimap: {
                        enabled: true,
                    },
                    fontSize: 15,
                    wordWrap: "on",
                }}
            />
    );
}
