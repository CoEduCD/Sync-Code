"use client"
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import { useRecoilValue } from 'recoil';
import { user_id } from '@/recoil/userId';
import { getUserFilesList } from '@/api/file/api';
import './Table.scss'
const DocumentList = ()=>{
    const userId = useRecoilValue(user_id)
    const [fileList, setFileList] = useState<any>()
    useEffect(()=>{
        if (typeof userId === "number"){
            getUserFilesList(userId);
        } 
    },[userId])
    const headerArray = ["형식", "작성자", "권한", "파일명", "최종 수정 날짜", "문서 생성 날짜"]
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
            
        </tbody>
        </table>
    </div>)
}
export default DocumentList;