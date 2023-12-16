import { fileAuthority } from "@/@type/authority/interface";
import { fetchFromApi } from "@/utils/axios";
export const getAuthority = async (fileId:number, setList: React.Dispatch<React.SetStateAction<fileAuthority[]|undefined>>): Promise<void> => {
    try {
      const res = await fetchFromApi('GET', `/file/authority/${fileId}`);
      setList(res.data)
    } catch (e) {
      console.log(e);
    }
}
export const addAuthority = async (fileId: number, userId: number,email:string ): Promise<boolean> => {
    try {
      
      let body  = {
        "fileId": fileId,
        "userId": userId,
        "email": email,
      }
      const res = await fetchFromApi('POST', `/file/authority/add`, body);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
}

export const modifyAuthority = async (userId: number,fileId:number, role: string, editUserId: number, setUser:React.Dispatch<React.SetStateAction<fileAuthority[] | undefined>>): Promise<void> => {
  try {
    let data = {
        "userId": userId,
        "fileId": fileId,
        "role": role,
        "editUserId": editUserId,
    }
    const res = await fetchFromApi('PATCH', `/file/authority/edit`, data);
    setUser(res.data);
  } catch (e) {
    console.log(e);
  }
}



export const deleteAuthority = async (userId: number,fileId: number,deleteUserId:number,setUser:React.Dispatch<React.SetStateAction<fileAuthority[] | undefined>>): Promise<void> => {
  try {
    let data = {
        "userId": userId,
        "fileId": fileId,
        "deleteUserId": deleteUserId,
    }
    const res = await fetchFromApi('DELETE', `/file/authority/delete`, data);
    setUser(res.data)
  } catch (e) {
    console.log(e);
  }
}

