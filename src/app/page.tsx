"use client"
import React, { useEffect } from 'react';
import styles from './page.module.scss'
import Header from '@/component/organisms/header'
import AddDocument from '@/component/molcules/addDocument';
import DocumentList from '@/component/organisms/documentLIst';
import { fileInfo } from '@/recoil/fileInfo';
import { fileMode } from '@/recoil/fileMode';
import { useRecoilState } from 'recoil';

export default function Home() {
  return (
      <main className={styles.container}>
        <Header/>
        <AddDocument/>  
        <DocumentList/>
      </main>
  )
}
