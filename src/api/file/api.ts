import { fetchFromApi } from "@/utils/axios";
export const createNewFile = async (userId:number): Promise<void> => {
    try {
    let data = {
            "user_id": userId,
            "file_name" : "newFile",
            "language" :"C",
            "file_detail":"안녕안녕",
    }
      const res= await fetchFromApi('POST', '/file/create', data);
    } catch (e) {
      console.log(e);
    }
}
export const getUserFilesList = async (userId:number): Promise<void> => {
    try {
      const res= await fetchFromApi('GET', `/file/${userId}`);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
}