import React from 'react';
import styles from './styles.module.scss'
const DocumentList = ()=>{
    return(
    <div className={styles.container}>
        <div>형식</div>
        <div>
            <div>작성자</div>
            <div>최종 수정 날짜</div>
            <div>문서 생성 날짜</div>
        </div>
    </div>)
}
export default DocumentList;