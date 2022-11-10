import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/user/info',
        method: 'get',
        response: () => {
            return {
                code: 0,
                messge: '请求成功',
                type: 'success',
                result: {
                    name: 'zero.',
                    age: 19,
                    avater: '../../../public/images/children.jpg',
                    permissions: ['editor_markdown', 'article_edit']
                },
            }
        },
    },
    {
        url: '/api/login',
        method: 'post',
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