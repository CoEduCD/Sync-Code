import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { LoginBox } from '@/component/molcules/loginBox';
const Header = ()=>{
    return(
    <div className={styles.container}>
        <Link href={`/`}>
            <Image
                    src="/logo.jpg"
                    width={100}
                    height={100}
                    style={{ objectFit: 'cover', marginLeft:20}}
                    alt="Sync-Codes"
                />
        </Link>
        <LoginBox/>
    </div>)
}
export default Header;