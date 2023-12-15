import axios from "axios";
import type { Method, AxiosResponse } from "axios";

const SERVER_DEPLOY_URL = 'http://ec2-15-165-115-163.ap-northeast-2.compute.amazonaws.com:8080'


export const fetchFromApi = async (method: Method | undefined, url: string, data?: any): Promise<AxiosResponse> => {
  return axios({
    method,
    url: SERVER_DEPLOY_URL + url,
    data,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
        console.log(err);
        throw err;
            
    });
};