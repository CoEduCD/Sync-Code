import React, { useState } from 'react';
import styles from './styles.module.scss'
import Image from "next/image";
import Link from 'next/link';
import { createNewFile } from '@/api/file/api';
import { useRecoilState, useRecoilValue } from 'recoil';
import { user_id } from '@/recoil/userId';
import { generateFileIdentifier } from '@/utils/fileIdentifierHash';
import { fileMode } from '@/recoil/fileMode';
import { fileInfo } from '@/recoil/fileInfo';
const AddDocument = ()=>{
    const userId = useRecoilValue(user_id);
    const [currentFileMode, setCurrentFileMode] = useRecoilState(fileMode); 
    const [currentFileInfo, setCurrentFileInfo] = useRecoilState(fileInfo); 
    return(
    <div className={styles.container}>
        <h1 className={styles.text}>👩🏻‍💻 새 작성 시작</h1>
        <div className={styles.imageContainer}>
                <Link
                    onClick={()=>{
                        setCurrentFileInfo(undefined);
                        setCurrentFileMode('create')
                    }}
                    className={styles.imageBox}
                    href= {`file/c/${generateFileIdentifier(userId, new Date())}`}
                >
                    <Image
                        src="/Cimage.jpeg"
                        width={100}
                        height={100}
                        style={{ objectFit: 'cover' }}
                        alt="C언어"
                    />
                    <div className={styles.startButton}><span>C언어</span>로 시작하기</div>
                </Link>
                <Link
                    className={styles.imageBox}
                    onClick={()=>{
                        setCurrentFileInfo(undefined);
                        setCurrentFileMode('create')
                    }}
                    href= {`file/python/${generateFileIdentifier(userId, new Date())}`}
                >
                    <Image
                        src="/PythonImage.jpeg"
                        width={100}
                        height={100}
                        style={{ objectFit: 'cover'}}
                        alt="Python언어"
                    />
                    <div className={styles.startButton}><span>파이썬</span>으로 시작하기</div>
                </Link>
                <Link
                    onClick={()=>{
                        setCurrentFileInfo(undefined);
                        setCurrentFileMode('create')
                    }}
                    className={styles.imageBox}
                    href= {`file/javascript/${generateFileIdentifier(userId, new Date())}`}
                >
                    <Image
                        src="/JavaScriptImage.svg"
                        width={100}
                        height={100}
                        style={{ objectFit: 'cover'}}
                        alt="Python언어"
                    />
                    <div className={styles.startButton}><span>자바스크립트</span>로 시작하기</div>
                </Link>
            </div>
    </div>)
}
export default AddDocument;