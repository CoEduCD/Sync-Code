import { CodeFile } from "@/@type/file/interface";
import { fetchFromApi } from "@/utils/axios";
import { SetterOrUpdater } from "recoil";
export const createNewFile = async (userId:number, language:string, fileHash: string, setFileInfo:SetterOrUpdater<CodeFile | undefined>): Promise<void> => {
    try {
    let data = {
          "userId": userId,
          "fileName": "fileName",
          "language": language,
          "fileDetail": "",
          "fileHash": fileHash,
        }
      const res = await fetchFromApi('POST', '/file/create', data);
      let copyData = res.data;
      copyData.fileId = copyData.id;
      delete  copyData.id;
      setFileInfo(copyData)
    } catch (e) {
      console.log(e);
    }
}
export const getUserFilesList = async (userId:number,setFileList: React.Dispatch<React.SetStateAction<CodeFile[]|[]>>): Promise<void> => {
    try {
      const res = await fetchFromApi('GET', `/file/${userId}`);
      setFileList(res.data)
    } catch (e) {
      console.log(e);
    }
}

export const modifyFileContents = async (userId: number,fileInfo: CodeFile, codeData: string): Promise<void> => {
  try {
    let data = {
      "userId": userId,
      "fileId": fileInfo.fileId,
      "fileName": fileInfo.fileName,
      "language": fileInfo.language,
      "fileDetail": codeData
    }
    const res = await fetchFromApi('PATCH', `/file/edit`, data);
  } catch (e) {
    console.log(e);
  }
}


export const modifyFileName = async (userId: number,fileInfo: CodeFile, name: string): Promise<boolean> => {
  try {
    let data = {
      "userId": userId,
      "fileId": fileInfo.fileId,
      "fileName": name,
      "language": fileInfo.language,
      "fileDetail": fileInfo.fileDetail
    }
    const res = await fetchFromApi('PATCH', `/file/edit`, data);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}


export const deleteFile = async (userId: number,fileId: number,): Promise<boolean> => {
  try {
    let data = {
      "userId" : userId,
      "fileId" : fileId
    }
    const res = await fetchFromApi('DELETE', `/file/delete`, data);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

