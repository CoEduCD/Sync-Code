import { fetchFromApi } from "@/utils/axios";
import { Session } from "next-auth";
import { SetterOrUpdater } from "recoil";
import { UserId } from "@/@type/user/interface";
export const postUserLoginInfo = async (session: Session, setUserId:SetterOrUpdater<UserId>): Promise<void> => {
    let data = {
        "name": session.user?.name,
        "email": session.user?.email,
    }
    try {
      const res= await fetchFromApi('POST', '/user', data);
      setUserId(res.data)
      console.log(data)
    } catch (e) {
      console.log(e);
    }
}
