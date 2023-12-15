import { CodeFile } from "@/@type/file/interface";
import { fetchFromApi } from "@/utils/axios";
export const createNewFile = async (userId:number, language:string, fileHash: string): Promise<void> => {
    try {
    let data = {
          "userId": userId,
          "fileName": "fileName",
          "language": language,
          "fileDetail": "",
          "fileHash": fileHash,
        }
      console.log(data)
      const res = await fetchFromApi('POST', '/file/create', data);
      console.log(res.data)
    } catch (e) {
      console.log(e);
    }
}
export const getUserFilesList = async (userId:number,setFileList: React.Dispatch<React.SetStateAction<CodeFile[]|[]>>): Promise<void> => {
    try {
      const res = await fetchFromApi('GET', `/file/${userId}`);
      setFileList(res.data)
      console.log(res.data);
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
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}


export const modifyFileName = async (userId: number,fileInfo: CodeFile, name: string): Promise<void> => {
  try {
    let data = {
      "userId": userId,
      "fileId": fileInfo.fileId,
      "fileName": name,
      "language": fileInfo.language,
      "fileDetail": fileInfo.fileDetail
    }
    const res = await fetchFromApi('PATCH', `/file/edit`, data);
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}


export const deleteFile = async (userId: number,fileId: number,): Promise<void> => {
  try {
    let data = {
      "userId" : userId,
      "fileId" : fileId
    }
    const res = await fetchFromApi('DELETE', `/file/delete`, data);
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}

