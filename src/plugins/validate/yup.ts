import * as yup from 'yup'


// 设置中文包
yup.setLocale({
    mixed: {
        required: '${label}必须输入'
    },
    string: {
        email: '邮箱格式错误'
    }
})
export default yup