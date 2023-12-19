"use client"
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { LoginBox } from '@/component/molcules/loginBox';
import { AuthorityModal } from '@/component/molcules/authorityModal';
import { fileInfo } from '@/recoil/fileInfo';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modifyFileContents, modifyFileName } from '@/api/file/api';
import { useDebounce } from '@/hooks/useDebounce';
import { user_id } from '@/recoil/userId';
import { Role } from '@/@type/authority/interface';
const FileHeader = ()=>{
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [currentFileInfo, setCurrentFileInfo] = useRecoilState(fileInfo);
    const [fileName, setFileName] = useState<string>("");
    const debouncedName = useDebounce(fileName, 500);
    const userId = useRecoilValue(user_id)
    useEffect(() => {
        const modifyFileNameAsync = async () => {
          if (currentFileInfo !== undefined) {
            if (await modifyFileName(userId, currentFileInfo, debouncedName)) {
                setCurrentFileInfo({ ...currentFileInfo, fileName: debouncedName });
            }
          }
        };
      
        modifyFileNameAsync();
      }, [debouncedName]);
    useEffect(()=>{
        if (currentFileInfo!==undefined ){
            setFileName(currentFileInfo?.fileName)
        }
    },[])
    return(
    <div className={styles.container}>
        <div className={styles.leftContainer}>
            <Link href={`/`}>
                <Image
                        src="/logo.jpg"
                        width={100}
                        height={100}
                        style={{ objectFit: 'cover', marginLeft:20}}
                        alt="Sync-Codes"
                    />
            </Link>
            <input 
                type="text" 
                placeholder={currentFileInfo?.fileName}
                className={styles.fileName}
                value={fileName}
                onChange={(e)=>setFileName(e.target.value)}
            />
        </div>
        <div className={styles.rightContainer}>
            {
                currentFileInfo?.role === Role.ADMIN &&
                <Image 
                src='/shareIcon.png' 
                width="50"
                height="50"
                alt="공유하기"
                style={{margin: "0 15px"}}
                onClick={()=>setModalIsOpen(true)}
                />
            }
            <AuthorityModal 
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
            />
            <LoginBox/>
        </div>
    </div>)
}
export default FileHeader;