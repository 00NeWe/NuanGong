<template>
  <div class="app">
    <router-view></router-view>
    <nav class="tab-bar">
      <router-link to="/" class="tab-item">
        <i class="icon-home"></i>
      </router-link>
      <router-link to="/function2" class="tab-item">
        <i class="icon-calendar"></i>
      </router-link>
      <router-link to="/function3" class="tab-item">
        <i class="icon-user"></i>
      </router-link>
    </nav>
  </div>
</template>

<script setup>

</script>

<style scoped>

.app {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  background-color: #FFF0F0;
  min-height: 100vh;
  position: relative;
  padding-bottom: 60px;
}

.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.tab-item {
  color: #999;
  text-decoration: none;
  font-size: 24px;
}

.tab-item.router-link-active {
  color: #FFC0CB;
}

.icon-home::before { content: '🏠'; }
.icon-calendar::before { content: '📅'; }
.icon-user::before { content: '👤'; }
</style>