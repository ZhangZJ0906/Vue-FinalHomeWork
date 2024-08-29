<template>
    <!-- login_page -->
    <div id="loginPage" class="bg-yellow">
        <div class="conatiner loginPage vhContainer">
            <div class="side">
                <a href="#"><img class="logoImg"
                        src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
                        alt="" /></a>
                <img class="d-m-n"
                    src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png"
                    alt="workImg" />
            </div>
            <div>
                <form class="formControls">
                    <h2 class="formControls_txt">最實用的線上代辦事項服務</h2>
                    <label class="formControls_label" for="email">Email</label>
                    <input class="formControls_input" type="text" id="email" name="email" placeholder="請輸入 email"
                        required v-model="email" />
                    <span v-if="!email">此欄位不可留空</span>
                    <label class="formControls_label" for="pwd">密碼</label>
                    <input class="formControls_input" type="password" name="pwd" id="pwd" placeholder="請輸入密碼" required
                        v-model="password" />
                    <input class="formControls_btnSubmit" type="submit" value="登入" @click.prevent="login" />
                    <router-link to="/signup"><a class="formControls_btnLink">沒有帳號? 跟我註冊去</a></router-link>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const api = 'https://todolist-api.hexschool.io';
const password = ref('');
const email = ref('');

const router = useRouter();


const login = () => {
    if(email.value === '' || password.value === ''){
        alert('請輸入完整資料');
        return;
    }

    axios.post(`${api}/users/sign_in`, {
        'email': email.value,
        'password': password.value
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if (response.status === 200) {
            const token = response.data.token;
            const username = response.data.nickname;
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('username', username);
            alert('登入成功');
            router.push('/todolist');
        }
    }).catch((err) => {
        alert(err.response.data.message);
    })




}


</script>