<template>
    <!-- sign up -->
    <div id="signUpPage" class="bg-yellow">
        <div class="conatiner signUpPage vhContainer">
            <div class="side">
                <a href="#"><img class="logoImg"
                        src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
                        alt="" /></a>
                <img class="d-m-n"
                    src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png"
                    alt="workImg" />
            </div>
            <div>
                <form class="formControls" action="index.html">
                    <h2 class="formControls_txt">註冊帳號</h2>
                    <label class="formControls_label" for="email">Email</label>
                    <input class="formControls_input" type="text" id="email" name="email" placeholder="請輸入 email"
                        required v-model="email" />
                    <label class="formControls_label" for="name">您的暱稱</label>
                    <input class="formControls_input" type="text" name="name" id="name" placeholder="請輸入您的暱稱"
                        v-model="name" />
                    <label class="formControls_label" for="pwd">密碼</label>
                    <input class="formControls_input" type="password" name="pwd" id="pwd" placeholder="請輸入密碼" required
                        v-model="password" />
                    <label class="formControls_label" for="pwd">再次輸入密碼</label>
                    <input class="formControls_input" type="password" name="pwd" id="pwd2" placeholder="請再次輸入密碼"
                        required v-model="confirmPassword" />
                    <span v-if="password !== confirmPassword">挖哩勒 密碼不一致</span>
                    <input class="formControls_btnSubmit" type="button" @click.prevent="signup" value="註冊帳號" />
                    <router-link to="/"><a class="formControls_btnLink">已有帳號?前往登入</a></router-link>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const api = 'https://todolist-api.hexschool.io';
const password = ref('');
const confirmPassword = ref('');
const email = ref('');
const name = ref('');
const route = useRouter();

const signup = () => {

    
    axios.post(`${api}/users/sign_up`, {
        'email': email.value,
        'password': password.value,
        'nickname': name.value
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {

        if (response.status === 201) {
            document.cookie=`username=${name}`
            alert('註冊成功');
            route.push('/');
        }

    }).catch((err) => {
        alert(err.response.data.message);
    });
}

</script>