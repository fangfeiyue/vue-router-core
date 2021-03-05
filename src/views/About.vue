<template>
  <div class="about">
    <h1>This is an about page</h1>

    <router-link to="/about/info">基本信息</router-link> |
    <router-link to="/about/history">工作履历</router-link>
    <router-view/>
  </div>
</template>
