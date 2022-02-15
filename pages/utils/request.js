//发送ajax请求
export default (url,data={},method='GET')=>{  //data默认为一个对象，method默认为GET请求
    return new Promise(((resolve, reject) => {
        wx.request({
            url,  //此处为简写形式，原本应该为url:url
            data,
            method
        })
    }))
}
