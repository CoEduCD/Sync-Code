import React from 'react';
import styles from './styles.module.scss'

const Header = ()=>{
    return(
    <div className={styles.container}>
        <h1 className={styles.text}>💻 SyncCode</h1>
        <div className={styles.userBox}>정윤미님 안녕하세요 👩🏻‍💻</div>
    </div>)
}
export default Header;