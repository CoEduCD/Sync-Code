import React from 'react';
import styles from './styles.module.scss'
import Image from "next/image";
import Link from 'next/link';
const AddDocument = ()=>{
    return(
    <div className={styles.container}>
        <h1 className={styles.text}>👩🏻‍💻 새 작성 시작</h1>
        <div className={styles.imageContainer}>
            <Link
                className={styles.imageBox} 
                href={{
                pathname: '/edit-page',
                query: { language: "C++" }, 
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
                query: { language: "Python" }, 
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
                query: { language: "Python" }, 
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