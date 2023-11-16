"use client"
import React, {useState, useEffect} from 'react'
import Header from '@/component/organisms/header'
import { RecoilRoot} from 'recoil'
import { CodeEditPage } from '@/component/template/code-editor'


export default function EditPage() {
  return (
    <RecoilRoot>
      <div style={{width: "100vw", height: "100vh", backgroundColor:'white', display:'flex',flexDirection:'column'}}>
        <Header/> 
        <CodeEditPage/>
      </div>
    </RecoilRoot>
  )
}
 