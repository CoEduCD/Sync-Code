"use client"
import React, { useEffect } from 'react';
import styles from './styles.module.scss'
import { useRecoilValue } from 'recoil';
import { user_id } from '@/recoil/userId';
import { getUserFilesList } from '@/api/file/api';
const DocumentList = ()=>{
    const userId = useRecoilValue(user_id)
    useEffect(()=>{
        if (typeof userId === "number"){
            getUserFilesList(userId);
        } 
    },[userId])
    const data = ["C","홍성화","ADMIN","test.c", "2020.10.31","2021.11.21"]
    const headerArray = [
        {
            "title":"형식",
            "xCoordinate":-25,
        },
        {
            "title":"작성자",
            "xCoordinate":-20,
        },
        {
            "title":"권한",
            "xCoordinate":-15,
        },
        {
            "title":"파일명",
            "xCoordinate":-10,
        },
        {
            "title":"최종 수정 날짜",
            "xCoordinate":20,
        },
        {
            "title":"문서 생성 날짜",
            "xCoordinate":25,
        },
    ]
    return(
    <div className={styles.container}>
        <div className={styles.headerContainer}>
            {
                headerArray.map((key)=>(<div key={key.title} style={{transform: `translateX(${key.xCoordinate}vw)`}}>{key.title}</div>))
            }
        </div>
        <div className={styles.headerContainer} style={{marginTop:30}}>
        {
                headerArray.map((key, index)=>(
                <div key={index} style={{transform: `translateX(${key.xCoordinate}vw)`}}>
                    {data[index]}
                </div>))
        }
        </div>
        <div className={styles.headerContainer} style={{marginTop:30}}>
        {
                headerArray.map((key, index)=>(
                <div key={index} style={{transform: `translateX(${key.xCoordinate}vw)`}}>
                    {data[index]}
                </div>))
        }
        </div>
        <div className={styles.headerContainer} style={{marginTop:30}}>
        {
                headerArray.map((key, index)=>(
                <div key={index} style={{transform: `translateX(${key.xCoordinate}vw)`}}>
                    {data[index]}
                </div>))
        }
        </div>
        <div className={styles.headerContainer} style={{marginTop:30}}>
        {
                headerArray.map((key, index)=>(
                <div key={index} style={{transform: `translateX(${key.xCoordinate}vw)`}}>
                    {data[index]}
                </div>))
        }
        </div>
        <div className={styles.headerContainer} style={{marginTop:30}}>
        {
                headerArray.map((key, index)=>(
                <div key={index} style={{transform: `translateX(${key.xCoordinate}vw)`}}>
                    {data[index]}
                </div>))
        }
        </div>
        <div className={styles.headerContainer} style={{marginTop:30}}>
        {
                headerArray.map((key, index)=>(
                <div key={index} style={{transform: `translateX(${key.xCoordinate}vw)`}}>
                    {data[index]}
                </div>))
        }
        </div>
    </div>)
}
export default DocumentList;