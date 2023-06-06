// app.js
// const app = getApp()
// var util = require("/utils/util.js")
App({

  onLaunch() {
    // let userinfo = util.get('userinfo')
    // console.log(userinfo)

    
    // if (userinfo != null){
    //   if(userinfo[0].authority != 'False'){
    //   wx.reLaunch({
    //     url: '/pages/demo03/demo03',
    //   })}

    // }
    // else{
    //   wx.login({
    //     success: function(res){
    //     let code = res.code;
    //     console.log(code)
    //     if(code != ''){
    //       wx.request({
    //         url: 'http://127.0.0.1:8003/logintest/login',
    //         method: 'POST',
    //         header:{'content-type': 'application/x-www-form-urlencoded'},
    //         data:{
    //           code: code,
    //           demo: 'login'
    //         },        
    //         success: function(res){
    //           let backUserInfo = res.data;
    //           if(backUserInfo  != '' & backUserInfo[0].authority != 'False'){
    //            util.put('userinfo', backUserInfo,100)
    //             wx.removeStorage({key: 'registerUserInfo'})
    //             wx.reLaunch({
    //               url: '/pages/demo03/demo03',
    //             })
    //           }
    //           else{
    //             wx.reLaunch({
    //               url: '/pages/authority1/authority1',
    //             })
    //           }
    //         }
    //       })
    //     }
    //   }
          
    //   })


    // }
  },
  globalData: {
    userInfo: null
  }
})
