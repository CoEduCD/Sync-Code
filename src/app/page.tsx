import React from 'react';
import styles from './page.module.scss'
import Header from '../../src/component/header'
import '../../src/style/global.scss'
import AddDocument from '../../src/component/addDocument';
import DocumentList from '@/component/documentLIst';

export default function Home() {
  return (
    <main className={styles.container}>
      <Header/>
      <AddDocument/>  
      <DocumentList/>
    </main>
  )
}
