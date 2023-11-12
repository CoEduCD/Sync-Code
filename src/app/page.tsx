"use client"
import React, { useEffect } from 'react';
import styles from './page.module.scss'
import Header from '@/component/organisms/header'
import AddDocument from '@/component/molcules/addDocument';
import DocumentList from '@/component/organisms/documentLIst';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { getUserFilesList } from '@/api/file/api';
import { user_id } from '@/recoil/userId';

export default function Home() {
  return (
    <RecoilRoot>
      <main className={styles.container}>
        <Header/>
        <AddDocument/>  
        <DocumentList/>
      </main>
    </RecoilRoot>
  )
}
