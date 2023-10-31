"use client"
import React, {useState, useEffect} from 'react'
import Header from '@/component/organisms/header'
import { Editor } from '@monaco-editor/react'
import { RecoilRoot } from 'recoil'
import Image from 'next/image'
import styles from './styles.module.scss'
export default function EditPage() {
  return (
    <RecoilRoot>
      <div style={{width: "100vw", height: "100vh", backgroundColor:'white', display:'flex',flexDirection:'column'}}>
        <Header/> 
        <div style={{width: "100vw", height: '85vh', paddingTop: 10, backgroundColor:'black', display:'flex'}}>
          <Editor       
            height='100%'
            width="70%"
            language="JavaScript"
            theme='vs-dark'
            options={{
              minimap: {
                enabled: false,
              },
              fontSize: 15,
              // cursorStyle: "black",
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
        </div>
      </div>
    </RecoilRoot>
  )
}
 