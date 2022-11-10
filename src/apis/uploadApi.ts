import { http } from '@/plugins/axios'


export interface IUploadImage {
    url: string,
}

export function uploadImage(data: FormData) {
    return http.requset<IUploadImage>({
        url: 'upload/image',
        method: 'post',
        data
    })  
}

