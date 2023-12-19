"use client"
import React, {useState, useEffect} from 'react'
import { CodeEditPage } from '@/component/template/code-editor'
import FileHeader from '@/component/organisms/fileHeader'
import { useRecoilState, useRecoilValue } from 'recoil';
import { ErrorPage } from '@/component/template/errorTemplete';
import { fileInfo } from '@/recoil/fileInfo';
import { fileMode } from '@/recoil/fileMode';
import { user_id } from '@/recoil/userId';
import { fileAuthority } from '@/@type/authority/interface';
import { getAuthority } from '@/api/authority/api';
import { fileList } from '@/recoil/authorityList';


export default function EditPage() {
  const [currentFileInfo, setCurrentFileInfo] = useRecoilState(fileInfo);
  const [currentFileMode, setCurrentFileMode] = useRecoilState(fileMode);
  const [list, setList] = useRecoilState(fileList);
  const userId = useRecoilValue(user_id)

  useEffect(()=>{
    if (currentFileInfo!== undefined) {
      getAuthority(currentFileInfo?.fileId, setList)
    }
  },[])
  const checkAuthority = (list:fileAuthority[]|undefined, userId:number) => {
    return list?.some((item:fileAuthority) => item.hasOwnProperty('userId') && item.userId === userId) || false;
  };
  
  if (userId === 0){
    return (<ErrorPage/>);
  } else {
    if (currentFileMode === 'create'){
      return(
        <div style={{width: "100vw", height: "100vh", backgroundColor:'white', display:'flex',flexDirection:'column'}}>
          <FileHeader/> 
          <CodeEditPage/>
        </div>
      )
    } else {
      if (checkAuthority(list, userId)){
      return(
          <div style={{width: "100vw", height: "100vh", backgroundColor:'white', display:'flex',flexDirection:'column'}}>
            <FileHeader/> 
            <CodeEditPage/>
          </div>
        )
      } else {
        return<ErrorPage/>
      }
    }
  }
}
 