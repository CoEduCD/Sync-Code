"use client"
import Editor from '@monaco-editor/react'
export default function EditPage() {
  
  return (
    <div style={{width: "100vw", height: "100vh", backgroundColor:'black', display:'flex',justifyContent:'center'}}>
            <Editor height='100%' width="50%" defaultLanguage="javascript"/>
    </div>
  )
}
 