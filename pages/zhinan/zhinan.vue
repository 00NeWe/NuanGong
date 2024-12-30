<template>
  <view class="guide-page">
    <Nav title="UKISO操作指南" backUrl="/pages/FunctionPage/FunctionPage3" />
    <scroll-view class="guide-content" scroll-y>
      <view class="guide-textarea-container">
        <textarea
          v-model="guideText"
          class="guide-textarea"
          :disabled="true"
          :show-confirm-bar="false"
        ></textarea>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import Nav from '../../components/nav.vue';

const guideText = ref(`一、App下载及安装 iOS系统:
在App Store里搜索"UKISO"下载安装和更新，或者扫码进行下载；其他机型可以通过扫码包装盒的二维码进行下载。

二、注册与登录
1.验证码登录
点击"UKISO"App图标进入到登录页面，输入手机号，勾选协议，点击"登录"进入到验证码输入页，输入有效的6位有效的验证码，如果该手机已经成功登录过则进入到首页，如果该手机未登录过则会进入到设置密码页，设置成功之后进入到信息采集页;

2.一键登录
点击获取本机号码进行验证登录。

3.第三方(QQ和微信登录)
点击QQ或者微信进行第三方登录，第一次登录跳转到手机号绑定页，绑定成功后进入到信息采集页。

4.账号和密码登录
如果已经注册账号，可以输入已注册的手机号进行账号密码登录，在登录界面，可进行密码的修改。

三、蓝牙设备连接
先把设备进行开机，首页点击"添加"设备按钮，进入到设备搜索页面，点击"连接"，连接成功，则会显示该设备的操作详情。
注意:对于已经连接过的设备，蓝牙和设备之间不需要配对连接，设备开机，App进入会自动扫描感应蓝牙，连接成功后进入到设备详情页。

四、共享好友绑定
点击首页头像进入到共享好友绑定页面，点击添加，则能添加相关好友信息,绑定成功后，在个人中心，亲友提醒中设置提醒时间,设置成功后,在每次预测经期前的相应时间点,系统会发送一条提醒短信给绑定的好友。

五、经期记录
1、如何标记经期?
当前日期为起始日期，将【月经是否来了】的选项为"打开"，则可标记本次经期，标记成功后，日志可选择记录"月经流量"和"痛经程度"。

2、如何修改经期结束日?
点击日历上正确的经期结束时间，将【月经是否来了】选择为"关闭"。

3、如何删除经期记录?
点击日历上要删除的经期开始日，将【月经是否来了】选择为"关闭 ，清除此次经期记录;

4、如何修改周期和经期长度?
进入到个人中心，点击个人资料设置 ，进行经期长度、周期长度修改。

5、周期统计
点击"周期详情"可进行标记经期和痛经记录查看。`);
</script>

<style scoped>
.guide-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
justify-content: center;
  background-color: rgba(255, 255, 255, 1);;
}

.guide-content {
  flex: 1;
  margin: 20px;
  width: 350px;
}

.guide-textarea-container {
	
  background-color: #F5F5F5;
  border-radius: 15px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
  margin-bottom: 20px;
}

.guide-textarea {
  width: 100%;
  height: calc(100vh - 180px);
  font-size: 14px;
  line-height: 1.5;
  color: #333333;
  background-color: transparent;
  border: none;
  resize: none;
}
</style>