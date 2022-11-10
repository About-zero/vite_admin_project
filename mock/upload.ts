import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/upload/image',
        method: 'post',
        response: () => {
            return {
                code: 200,
                messge: '上传成功',
                type: 'success',
                result: {
                    url: '../../../public/images/children.jpg',
                },
            }
        },
    },
] as MockMethod[]