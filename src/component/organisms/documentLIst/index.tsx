"use client"
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import { useRecoilState, useRecoilValue } from 'recoil';
import { user_id } from '@/recoil/userId';
import { deleteFile, getUserFilesList } from '@/api/file/api';
import './Table.scss'
import { CodeFile } from '@/@type/file/interface';
import { useRouter } from 'next/navigation';
import { fileInfo } from '@/recoil/fileInfo';
import { fileMode } from '@/recoil/fileMode';
const DocumentList = ()=>{
    const userId = useRecoilValue(user_id)
    const [currentFileInfo, setCurrentFileInfo] = useRecoilState(fileInfo)
    const [fileList, setFileList] = useState<CodeFile[]|[]>([]) 
    const [currentFileMode, setCurrentFileMode] = useRecoilState(fileMode); 
    const router = useRouter();
    useEffect(()=>{
        if (typeof userId === "number"){
            getUserFilesList(userId, setFileList);
        } 
    },[userId])
    
    const headerArray = ["형식", "작성자", "권한", "파일명", "최종 수정 날짜", "문서 생성 날짜", ""]
    return(
    <div className={styles.container}>
            <table className="user-table">
            <thead>
                <tr>
                {
                    headerArray.map((item)=><th key={item}>{item}</th>)
                }
                </tr>
            </thead>
        <tbody>
            {
                fileList.map((item)=>
                <tr 
                    key={item.fileId} 
                >
                        <td>{item.language}</td>
                        <td>{item.role}</td>
                        <td>{item.name}</td>
                        <td>{item.fileName}</td>
                        <td>{item.modifiedTime.substring(0,10)}</td>
                        <td>{item.createdTime.substring(0,10)}</td>
                        <td>
                            <button
                             className={styles.deleteButton}
                             onClick={async() => {
                                Promise.all([setCurrentFileMode("modify"),
                                setCurrentFileInfo(item),]).then(()=>router.push(`file/${item.language}/${item.fileHash}`));
                            }}
                            >
                            수정
                            </button>
                            <button
                             className={styles.deleteButton}
                             onClick = {()=>deleteFile(item.fileId)}
                            >
                            삭제
                            </button>
                        </td>
                </tr>)
            }
        </tbody>
        </table>
    </div>)
}
export default DocumentList;