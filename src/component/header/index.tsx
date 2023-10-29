"use client"
import React, { useEffect } from 'react';
import styles from './styles.module.scss'
import Link from 'next/link';
import { fetchFromApi } from '@/utils/axios';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react'
const Header = ()=>{
    // const { data: session } = useSession();
    // const router = useRouter();
    return(
    <div className={styles.container}>
            <Image
                src="/logo.jpg"
                width={150}
                height={150}
                style={{ objectFit: 'cover', marginLeft:20}}
                alt="Sync-Codes"
            />
            <div
                onClick={() => signIn("google")} 
                className={styles.loginBox}>
                    <Image
                        src="/GoogleLogo.png"
                        width={30}
                        height={30}
                        style={{ objectFit: 'cover', transform:'translate(-10px,10px)', backgroundColor:'white'}}
                        alt="구글"
                    />
                    Sign with Google
            </div>
        {/* <div className={styles.userBox}>정윤미님 안녕하세요 👩🏻‍💻</div> */}
    </div>)
}
export default Header;