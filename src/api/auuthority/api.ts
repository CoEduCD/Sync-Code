import { CodeFile } from "@/@type/file/interface";
import { fetchFromApi } from "@/utils/axios";
export const getAuthority = async (fileId:number): Promise<void> => {
    try {
      const res = await fetchFromApi('GET', `/file/authority/${fileId}`);
      console.log(res.data)
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

export const modifyAuthority = async (userId: number,fileId:number, role: string,editUserId: number ): Promise<void> => {
  try {
    let data = {
        "userId": userId,
        "fileId": fileId,
        "role": role,
        "editUserId": editUserId,
    }
    const res = await fetchFromApi('PATCH', `/file/authority/edit`, data);
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}



export const deleteAuthority = async (userId: number,fileId: number,deleteUserId:number): Promise<void> => {
  try {
    let data = {
        "userId": userId,
        "fileId": fileId,
        "deleteUserId": deleteUserId,
    }
    const res = await fetchFromApi('DELETE', `/file/authority/delete`, data);
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}

