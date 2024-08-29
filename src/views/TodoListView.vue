<template>
    <!-- ToDo List -->
    <div id="todoListPage" class="bg-half">
        <nav>
            <h1><a href="#">ONLINE TODO LIST</a></h1>
            <ul>
                <li class="todo_sm">
                    <a href="#"><span>{{ username }}的代辦</span></a>
                </li>
                <li><a @click="logout">登出</a></li>
            </ul>
        </nav>
        <div class="conatiner todoListPage vhContainer">
            <div class="todoList_Content">
                <div class="inputBox">
                    <input type="text" placeholder="請輸入待辦事項" v-model="content" />
                    <a href="#" @click.prevent="addtodo()">
                        <i class="fa fa-plus">+</i>
                    </a>
                </div>

                <!-- todoList tab -->
                <p v-if="alltodo.length === 0" class=" fs-1 ">目前尚無待辦事項</p>
                <div v-else class="todoList_list">
                    <ul class="todoList_tab">
                        <li><a @click="currentFilter = 'all'" :class="{ active: currentFilter === 'all' }">全部</a></li>
                        <li><a @click="currentFilter = 'active'" :class="{ active: currentFilter === 'active' }">待完成</a>
                        </li>
                        <li><a @click="currentFilter = 'completed'"
                                :class="{ active: currentFilter === 'completed' }">已完成</a></li>
                    </ul>
                    <div class="todoList_items">
                        <ul class="todoList_item" v-for="todo in filteredTodos" :key="todo.id">
                            <li>
                                <label class="todoList_label">
                                    <input class="todoList_input" type="checkbox" value="true" v-model="todo.status" />
                                    <span>{{ todo.content }}</span>
                                </label>
                                <a href="#" @click.prevent="deletetodo(todo.id)">
                                    <i class="fa fa-times">x</i>
                                </a>
                            </li>
                        </ul>
                        <div class="todoList_statistics">
                            <p >{{ unfinishedTodo.length }} 個未完成項目</p>
                        </div>
                    </div>
                </div>
                <!-- todoList tab -->

            </div>
        </div>
    </div>

</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const api = 'https://todolist-api.hexschool.io'
const router = useRouter();


const getSessionStorage = (name) => {
    return sessionStorage.getItem(name);
};
const token = getSessionStorage('token');
const username = getSessionStorage('username');

const logout = () => {
    sessionStorage.clear();
    router.push('/');
}
const alltodo = ref([]);
const content = ref('');
const currentFilter = ref('all');

const addtodo = () => {
    if (content.value === '') {
        alert('請輸入代辦事項');
        return;
    }
    axios.post(`${api}/todos`, {
        'content': content.value
    }, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if (response.status === 201) {
            alert('新增成功');
            gettodo();
            content.value = '';
        }
    }).catch((err) => {
        alert(err.response.data.message);
    });
}
const deletetodo = (id) => {

    axios.delete(`${api}/todos/${id}`, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if (response.status === 200) {
            alert('刪除成功');
            gettodo();
        } else {
            alert(err.response.data.message);
        }
    }).catch((err) => {
        alert(err.response.data.message);
    });
}
const gettodo = () => {

    axios.get(`${api}/todos`, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        alltodo.value = response.data.data;
    }).catch((err) => {
        alert(err.response.data.message);
    })
}
const filteredTodos = computed(() => {
    if (currentFilter.value === 'completed') {
        return alltodo.value.filter(todo => todo.status);
    } else if (currentFilter.value === 'active') {
        return alltodo.value.filter(todo => !todo.status);
    } else {
        return alltodo.value;
    }
});

const unfinishedTodo = computed(() => {
    return alltodo.value.filter(todo => !todo.status);
}
);


onMounted(() => {
    gettodo();
    // console.table(alltodo);
});
</script>