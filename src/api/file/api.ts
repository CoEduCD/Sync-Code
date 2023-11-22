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

export const modifyFileContents = async (userId:number): Promise<void> => {
  try {
    const res= await fetchFromApi('PATCH', `/file/edit`);
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}