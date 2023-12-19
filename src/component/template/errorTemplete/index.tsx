import React from 'react'
import styles from './styles.module.scss'


export const ErrorPage =  ()=>{
    return (
    <div className={styles.container}>
        <div>접근 권한이 없습니다.</div>
        <span>관리자에게 문의하세요</span>
    </div>
    )
}