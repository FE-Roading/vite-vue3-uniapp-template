// 调取手机通话
function makePhoneCall(phone:string){
  //获取系统信息
  const res = uni.getSystemInfoSync();
  // ios系统默认有个模态框
  if(res.platform=='ios'){
    uni.makePhoneCall({
      phoneNumber:phone,
      success(){
        console.log('拨打成功了');
      },
      fail() {
        console.log('拨打失败了');
      }
    })
  }else{
  //安卓手机手动设置一个showActionSheet
    uni.showActionSheet({
        itemList: [phone,'呼叫'],
        success:function(res){
            if(res.tapIndex==1){
              uni.makePhoneCall({
                phoneNumber: phone,
              })
            }
          }
    })
  }
}

export default makePhoneCall
