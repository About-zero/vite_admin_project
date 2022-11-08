import { http } from '@/plugins/axios'
// class userApi {
//     info() {
//         return http.requset({
//             url: 'info'
//         })
//     }
//     login() {

//     }
// }
// export default new userApi()

export interface User {
    name: string,
    age: number,
    avater: string
}
export interface ILoginData {
    account: string,
    password: string
}
function info() {
    return http.requset<User>({
        url: 'user/info'
    })
}
interface LoginInterface {
    token: string
}
export function login(data: ILoginData) {
    return http.requset<LoginInterface>({
        url: 'login',
        method: 'post',
        data
    })
}

export default { info, login }