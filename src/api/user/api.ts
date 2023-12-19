import { fetchFromApi } from "@/utils/axios";
import { Session } from "next-auth";
import { SetterOrUpdater } from "recoil";
export const postUserLoginInfo = async (session: Session, setUserId:SetterOrUpdater<number>, setUserName: SetterOrUpdater<string>): Promise<void> => {
    let data = {
        "name": session.user?.name,
        "email": session.user?.email,
    }
    try {
      const res= await fetchFromApi('POST', '/user', data);
      setUserName(String(data.name))
      setUserId(res.data)
    } catch (e) {
      console.log(e);
    }
}
