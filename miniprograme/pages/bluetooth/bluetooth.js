// pages/bluetooth/bluetooth.js
// ArrayBuffer转16进度字符串示例
function ab2hex(buffer) {
  var hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function (bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('');
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    devices: []
  },
  openBluetooth: function() {
    var _this = this;
    wx.openBluetoothAdapter({
      success: function(res) {
        console.log(res);
        _this.getBluetoothAdapterState();
        _this.startBluetoothDevicesDiscovery();
      },
      fail: function(err) {
        console.log(err);
      },
      complete: function(data) {
        if (data.errCode == 10000){
          console.log('未初始化蓝牙适配器')
        }else if(data.errCode == 10001){
          console.log('当前蓝牙适配器不可用')
        } else if (data.errCode == 10002){

        }else{
          console.log(data.errMsg)
        }
      }
    })
  },
  startBluetoothDevicesDiscovery: function() {
    var _this = this;
    wx.startBluetoothDevicesDiscovery({
      // services: ['FEE7'],
      allowDuplicatesKey: false,
      success(res) {
        console.log(res);
        _this.onBluetoothDeviceFound();
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },
  stopBluetoothDevicesDiscovery: function() {
    wx.stopBluetoothDevicesDiscovery({
      success(res) {
        console.log(res)
      }
    })
  },
  onBluetoothDeviceFound: function() {
    var _this = this;
    wx.onBluetoothDeviceFound(function (res){
      var array = _this.data.devices;
      var devices = res.devices;
      if (!devices[0].name && !devices[0].localName) {
        return
      }
      console.log(devices);
      devices[0].advertisData = ab2hex(devices[0].advertisData);
      if(devices[0].name){
        // console.log(devices);
      }
      array = array.concat(devices);
      // console.log(array)
      _this.setData({
        devices: array
      })
      if (ab2hex(devices[0].advertisData)){
        // console.log(ab2hex(devices[0].advertisData))
      }
      
    })
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
  getBluetoothAdapterState: function() {
    wx.getBluetoothAdapterState({
      success: function (res) {

      },
      fail: function (err) {
        wx.showModal({
          title: '提示',
          content: '请打开蓝牙，确保设备连接正常',
          showCancel: false
        })
      },
      complete: function (data) {
        console.log(data)
      }
    })
  },
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