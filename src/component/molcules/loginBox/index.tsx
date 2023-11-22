"use client"
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
import { postUserLoginInfo } from '@/api/user/api';
import { user_id } from '@/recoil/userId';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRecoilState } from 'recoil';
export const LoginBox = ()=>{
    const { data: session } = useSession();
    const [showUserBox, setShowUserBox] = useState<boolean>(false);
    const [userId, setUserId] = useRecoilState(user_id);
    useEffect(()=>{
        if (session){
            postUserLoginInfo(session, setUserId);
        }
    },[session])
    
    const handleLogin = ()=>{
        signIn("google", {callbackUrl: "/" });
    }
    const handleLogout= ()=>{
        signOut()
    }
    return(
            session ? 
            <>
                <div 
                    className={styles.loginBox}
                    onMouseOver = {()=>setShowUserBox(true)}
                    onMouseLeave={()=>setShowUserBox(false)}
                >
                    <span>{session.user?.name}</span>님 안녕하세요 👩🏻‍💻
                </div> 
                {
                    showUserBox && 
                    <div 
                        className={styles.userBox}
                        onMouseOver = {()=>setShowUserBox(true)}
                        onMouseLeave={()=>setShowUserBox(false)}
                    >
                        <Image
                            src= {session.user?.image||""}
                            style={{ objectFit: 'cover'}}
                            width={80}
                            height={80}  
                            alt="유저이미지"
                        />
                        <div style={{fontSize: 13, marginTop: 5}}>{session.user?.email}</div>
                        <div onClick={()=>handleLogout()} style={{marginTop:5, fontWeight: 500}}>로그아웃</div> 
                    </div>
                }
            </>:
            <div
                onClick={() => handleLogin()} 
                className={styles.loginBox}>
                    <Image
                        src="/GoogleLogo.png"
                        width={30}
                        height={30}
                        style={{ objectFit: 'cover', transform:'translate(-10px,10px)'}}
                        alt="구글"
                    />
                    Sign with Google
            </div>
    )
}