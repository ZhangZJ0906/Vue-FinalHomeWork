<template>
    <div class="container text-center mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow-lg p-4">
                    <h1 class="display-4 text-danger">404 - 頁面未找到</h1>
                    <p class="lead mt-3 mb-4">你跑來這幹嘛？這邊啥都沒有。</p>
                    <router-link to="/" class="btn btn-primary btn-lg">
                        返回首頁
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
};
</script>

<style scoped>
.card {
    border-radius: 12px;
    /* 使卡片边角圆润 */
}
</style>