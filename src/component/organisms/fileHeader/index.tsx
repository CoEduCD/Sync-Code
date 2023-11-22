import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { LoginBox } from '@/component/molcules/loginBox';
const FileHeader = ()=>{
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
            <div style={{color:"black"}}>파일 이름 수정</div>
        </div>
        <div className={styles.rightContainer}>
            <div style={{color:"black"}}>공유하기</div>
            <LoginBox/>
        </div>
    </div>)
}
export default FileHeader;