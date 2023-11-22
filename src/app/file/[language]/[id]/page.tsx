import React, {useState, useEffect} from 'react'
import { CodeEditPage } from '@/component/template/code-editor'
import FileHeader from '@/component/organisms/fileHeader'


export default function EditPage() {
  return (
      <div style={{width: "100vw", height: "100vh", backgroundColor:'white', display:'flex',flexDirection:'column'}}>
        <FileHeader/> 
        <CodeEditPage/>
      </div>
  )
}
 