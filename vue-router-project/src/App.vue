<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/dashboard">Dashboard</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
@import './assets/styles.css';
</style>
