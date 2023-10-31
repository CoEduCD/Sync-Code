import React from 'react';
import styles from './styles.module.scss'
import Image from "next/image";
import Link from 'next/link';
import { createNewFile } from '@/api/file/api';
import { useRecoilValue } from 'recoil';
import { user_id } from '@/recoil/userId';
const AddDocument = ()=>{
    const userId = useRecoilValue(user_id);
    return(
    <div className={styles.container}>
        <h1 className={styles.text}>👩🏻‍💻 새 작성 시작</h1>
        <div className={styles.imageContainer}>
            <Link
                onClick={()=>
                    (typeof (userId) === "number")?
                    createNewFile(userId):null
                }
                className={styles.imageBox} 
                href={{
                pathname: '/edit-page',
            }}>
                    <Image
                        src="/Cimage.jpeg"
                        width={100}
                        height={100}
                        style={{ objectFit: 'cover'}}
                        alt="C언어"
                    />
                    <div className={styles.startButton}><span>C언어</span>로 시작하기</div>
            </Link>
            <Link
                className={styles.imageBox} 
                href={{
                pathname: '/edit-page',
            }}>
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
                    className={styles.imageBox} 
                    href={{
                    pathname: '/edit-page',
                }}>
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