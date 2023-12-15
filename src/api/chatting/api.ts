import { fetchFromApi } from "@/utils/axios";

export const createNewChatting = async (fileId:number,  fileHash: string, setRoomId:React.Dispatch<React.SetStateAction<string | undefined>>): Promise<void> => {
    try {
    let data = {
          "fileId": fileId,
          "fileHash": fileHash,
        }
      const res = await fetchFromApi('POST', '/chat', data);
      console.log(res.data)
      setRoomId(res.data.roomId)
    } catch (e) {
      console.log(e);
    }
}