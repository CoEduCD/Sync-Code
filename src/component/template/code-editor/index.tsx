import React, { useEffect } from 'react'
import { Editor } from '@monaco-editor/react'
import {useRecoilValue } from 'recoil'
import Image from 'next/image'
import styles from './styles.module.scss'
import { usePathname, useRouter } from 'next/navigation'
import { user_id } from '@/recoil/userId'
import { createNewFile } from '@/api/file/api'

export const CodeEditPage = ()=>{
    const path = usePathname().split('/');
    const userId = useRecoilValue(user_id);
    useEffect(()=>{
        if (typeof userId === "number"){
            createNewFile(Number(userId), path[2],path[3])
        } 
    },[userId])

    return(
    <div style={{width: "100vw", height: '85vh', paddingTop: 10, backgroundColor:'black', display:'flex'}}>
        <Editor       
            height='100%'
            width="70%"
            // language="javascript"
            language={path[2]}
            theme='vs-dark'
            options={{
                minimap: {
                enabled: true,
                },
                fontSize: 15,
                cursorStyle: "black",
                wordWrap: "on",
            }}
        />
        <div style={{width: '28%', backgroundColor:'white', height: '82vh',borderRadius: 20, position: 'relative'}}>
            <input type="text" style={{position: 'absolute' ,backgroundColor: 'white', color: 'black', border:'2px solid', borderRadius:20, borderColor:'#E3E3E3', paddingLeft: 10, bottom: 20, left: 0, width: '90%', height: '40px', transform: 'translateX(5%)'}}/>
            <Image
                src="/paper-plane.png"
                width={25}
                height={25}
                style={{ objectFit: 'cover'}}
                alt="Sync-Codes"
                className={styles.image}
            />
        </div>
    </div>)
}