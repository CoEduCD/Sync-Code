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
      console.log(res.data);
      setUserId(res.data)
    } catch (e) {
      console.log(e);
    }
}
// export const postUserLoginInfo = async (user:string, email: string, setUserId:SetterOrUpdater<UserId>): Promise<void> => {
//     let data = {
//         "name": user,
//         "email": email,
//     }
//     try {
//       const res= await fetchFromApi('POST', '/user', data);
//       console.log(res.data);
//       setUserId(res.data)
//     } catch (e) {
//       console.log(e);
//     }
// }