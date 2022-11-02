import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/get',
        method: 'get',
        response: () => {
            return {
                code: 0,
                messge: '请求成功',
                type: 'success',
                result: {
                    name: 'vben',
                    age: 19,
                    avater: '/avater.jpg'
                },
            }
        },
    },
    {
        url: '/api/login',
        method: 'get',
        response: () => {
            return {
                code: 200,
                messge: '登录成功',
                type: 'success',
                result: {
                    token: Random.string(10)
                },
            }
        },
    }
] as MockMethod[]