<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
<!--        <img src="../assets/logo.png" alt="">-->
      </div>
      <!--      表单数据绑定   //此处定义：model=“xxx”-->
      <!--        表单数据验证加上：model“自定义名称” 表单数据验证加上：rules=“自定义名称”-->
<!--      ref 是一个引用，获取实例对象-->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
<!--        用户名字 ,加上数据验证 利用prop属性进行制定规则命名，然后在sc-->
        <el-form-item prop="username">
<!--        表单数据绑定  //此处定义 v-model 注意木有：！！！！-->
          <el-input v-model="loginForm.username " placeholder="请输入账号" prefix-icon="el-icon-s-custom"></el-input>
        </el-form-item >
<!--        密码·-->
        <el-form-item prop="password" >
<!--          表单数据绑定 //此处定义 v-model 注意木有：！！！！,如果想要密码隐藏，要加一个type=“password”-->

          <el-input v-model="loginForm.password" placeholder="请输入密码" prefix-icon="el-icon-key" type="password"></el-input>
        </el-form-item>
<!--        按钮区域-->
        <el-form-item class="btns">
          <!--          通过@click绑定单击事件,进行表单的预验证-->
          <el-button type="primary" round @click="login">登录</el-button>
<!--          通过@click绑定单击事件,进行表单的重置-->
          <el-button type="danger" round @click="resetLoginForm"> 重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export  default {
  data (){
    return{
       //表单数据绑定  登录表单的数据绑定对象
      loginForm:{
        username:'',
        password:''

      },
      // 这是表单的验证规则对象
      loginFormRules:{
        //验证用户名是否合法
        username:[
          { required: true, message: '请输入账号', trigger: 'blur' },

        ],
        //验证密码是否合法
        password: [
          { min: 6, max: 10, message: '长度在 6到 10 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods:{
    //点击重置按钮，重置登录表单
    resetLoginForm(){
      //通过this 在$refs中可以直接获取页面的实例对象
      //console.log(this);
      this.$refs.loginFormRef.resetFields();
    },
    //首先通过this.refs来调用validate函数，在通过箭头函数来
    login(){
      this.$refs.loginFormRef.validate(async vaild=>{
        console.log(vaild);//返回Boolen值 验证成功为true 失败为false
        if(!vaild) return;//如果！vaild 那就不进行请求验证， 反之通过axios进行验证密码，首先通过main.js导入axios包
          //接收返回数据,返回promise 因此可以用await方法简化，但是也需要async方法放在valid前
          const {data:res}=await this.$http.post("login",this.loginForm);
          if( res.meta.status!==200) return this.$message.error("登录失败")
          this.$message.success("登录成功");
          //1.将登陆成功后的token保存到客户端的sessionStorage中（localStorgre是长久的存储机制，而sessionStorage是会话期间）
            //1.1项目中除了登录外其他API接口，必须登录之后才可访问
            //1.2token 只有在当前网站贷款期间生效，所以将token保存到客户端的sessionStorage中
          window.sessionStorage.setItem("token",res.data.token);
          //2.通过编程式导航跳转到后台主页，路由地址为/home
            this.$router.push('home');
      });
    }
  }
};
</script>

<style Lang="less" scoped >
.login_container  /deep/{
  background-color:#eeeeee;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #dddddd;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color:BLUE;
    img  {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}

.btns {
  display: flex;
 justify-content: flex-end;

}
</style>