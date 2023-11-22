import { CodeFile } from "@/@type/file/interface";
import { fetchFromApi } from "@/utils/axios";
export const createNewFile = async (userId:number, language:string, fileHash: string): Promise<void> => {
    try {
    let data = {
          "user_id": userId,
          "fileName": "fileName",
          "language": language,
          "fileDetail": "",
          "fileHash": fileHash,
        }
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

export const modifyFileContents = async (fileInfo: CodeFile, codeData: string): Promise<void> => {
  try {
    let data = {
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


export const deleteFile = async (fileId: number): Promise<void> => {
  try {
    let data = {
      "file_id" : fileId
    }
    const res = await fetchFromApi('DELETE', `/file/delete`, data);
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}

