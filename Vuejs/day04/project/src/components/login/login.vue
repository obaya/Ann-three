<template>
    <div>
        <input type="text" v-model="username"/>
        <input type="password" v-model="password"/>
        <input type="button" value="login" @click="login"/>
        <spinner v-if="show"></spinner>
    </div>
</template>

<script>
    import axios from 'axios';
    import superagent from 'superagent';
    import spinner from '../spinner/spinner.vue';
    import qs from 'qs'
    export default{
        data:function(){
            return {
                username:'',
                password:'',
                show: false
            }
        },
        methods:{
            login:function(){
                console.log(this)
                this.show=true;
                //发起ajax请求
                axios({
                  url: 'http://localhost:88/user.php',
                  method: 'post',
                  data: qs.stringify({username: this.username, password: this.password}),
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                  }
                }).then(res=>{
                console.log(res)
                    this.show=false;
                    //跳转至students页面
                    if(res.data.length>0){
                        this.$router.push({name: 'students'});
                    }else{
                        alert('用户名或密码不正确')
                    }

                })
            }
        },
        components:{
            spinner:spinner
        }
    }
</script>