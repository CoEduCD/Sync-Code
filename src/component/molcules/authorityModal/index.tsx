import React, {useState, useEffect} from "react";
import { customStyles } from "./modal.styles";
import Modal from "react-modal";
import styles from './styles.module.scss'
import { useRecoilState, useRecoilValue } from "recoil";
import { fileInfo } from "@/recoil/fileInfo";
import { user_id } from "@/recoil/userId";
import { addAuthority, deleteAuthority, getAuthority, modifyAuthority } from "@/api/authority/api";
import { fileAuthority } from "@/@type/authority/interface";
import { AccessUserBox } from "../accessUserBox";
interface CustomModalProps {
    modalIsOpen: boolean;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
export const AuthorityModal = ({ modalIsOpen, setModalIsOpen}: CustomModalProps) => {
    const closeModal = () => {
        setModalIsOpen(false);
      };
      const [currentFileInfo, setCurrentFileInfo] = useRecoilState(fileInfo);
      const [list, setList] = useState<fileAuthority[]|undefined>();
      const userId = useRecoilValue(user_id);
      const [email, setEmail] = useState<string>("");
      const [isCopied, setIsCopied] = useState<boolean>(false);
      const handleAddAuthority = async () => {
        if (currentFileInfo!== undefined){
          if (await addAuthority(currentFileInfo?.fileId, userId, email)){
            getAuthority(currentFileInfo?.fileId, setList)
          }
        }
      }
      const handleCopyClick = () => {
        // 텍스트를 클립보드에 복사하는 로직
        const textToCopy =  window.location.href;
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            alert("url이 복사되었습니다")
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1500); // 1.5초 후에 메시지를 숨깁니다.
          })
          .catch((err) => {
            console.error('클립보드 복사 실패:', err);
          });
      };
      useEffect(()=>{
        if (currentFileInfo!== undefined) {
          getAuthority(currentFileInfo?.fileId, setList)
        }
      },[])

    return(
    modalIsOpen && 
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="확인">
          <div className={styles.container}>
            <div className={styles.fileName}><span> &quot;{currentFileInfo?.fileName}&quot;</span>공유</div>
            <div className={styles.addContainer}>
              <input 
                className={styles.addEmail} 
                type="text"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                  setEmail(e.target.value)
                }}
                placeholder="사용자 및 권한 추가"
              />
              <button 
                className={styles.addButton}
                onClick={()=>handleAddAuthority()}
              >
                    추가
              </button>
            </div>
            <div className={styles.accessList}>엑세스 권한이 있는 사용자</div> 
            <div className={styles.accessListContainer}>
              {
                list!==undefined && list.map(
                (item)=>
                  <AccessUserBox user={item} setUser={setList} key={item.userId}/>
                )
              }
            </div>        
            <div className={styles.buttonContainer}>
                 <button 
                    onClick={()=>handleCopyClick()}
                    className={styles.shareButton}
                  >
                    링크 복사
                </button>
                <button 
                    onClick={()=>setModalIsOpen(false)}
                    className={styles.closeButton}
                  >
                    완료
                </button>
            </div>
          </div>
        </Modal>
    )
}