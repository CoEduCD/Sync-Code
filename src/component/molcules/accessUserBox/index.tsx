import React, {useState, useEffect} from 'react'
import styles from './styles.module.scss'
import { fileAuthority } from '@/@type/authority/interface'
import { Role } from '@/@type/authority/interface'
import { deleteAuthority, modifyAuthority } from '@/api/authority/api'
import { user_id } from '@/recoil/userId'
import { SetterOrUpdater, useRecoilState, useRecoilValue } from 'recoil'
import { fileInfo } from '@/recoil/fileInfo'

export const AccessUserBox = ({user, setUser}:{user: fileAuthority, setUser: SetterOrUpdater<fileAuthority[] | undefined>})=>{
    const userId = useRecoilValue(user_id)
    const [currentFileInfo, setCurrentFileInfo] = useRecoilState(fileInfo);
    const handleRoleChangeEvent = 
    async (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (currentFileInfo?.fileId!==undefined){
            if (e.target.value !== Role.ADMIN && e.target.value !== "none"){
                modifyAuthority(userId,currentFileInfo?.fileId,e.target.value,user.userId, setUser);
            }  else if (e.target.value === "none") {
                deleteAuthority(userId, currentFileInfo?.fileId,user.userId, setUser)
            }
        }
    }
    return(
    <div className={styles.container}>
        <div>
            <div
                className={styles.email}
            >
            {
                user.email
            }
            </div>
            <div 
                 className={styles.name}
            >
            {
                user.name
            }
            </div>
        </div>
        <select 
            className={styles.selectBox} 
            value={user.role}
            onChange={(e)=>handleRoleChangeEvent(e)}
        >
            {user.role === Role.ADMIN ? 
            <option value={Role.ADMIN}>관리자</option> :
            <>
                <option value={Role.EDITOR}>편집자</option>
                <option value={Role.VIEWER}>뷰어</option>
                <option value={"none"}>권한 삭제</option>
            </>}
        </select>
    </div>)
}