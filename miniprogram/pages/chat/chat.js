// miniprogram/pages/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',  // 输入内容
    msg: ['欢迎来到松鼠趣聊'], //回复内容
    photo: '', //头像
  },
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event)
    this.setData({
      value: event.detail,
    })
    
    // console.log(this.data.value);
  },
  // 发送消息
  send(event){
    this.setData({
      msg: this.data.msg.concat(this.data.value)
    })
    if(this.data.value!=''){
      wx.cloud.callFunction({
        name: 'chat',
        data: {
          key: this.data.value
        }
      }).then(res => {
        console.log(res);
        this.setData({
          msg: this.data.msg.concat(JSON.parse(res.result).content),
          value: ''
        });
      }).catch(err => {
        console.error(err);
        this.setData({
          value: ''
        })
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})