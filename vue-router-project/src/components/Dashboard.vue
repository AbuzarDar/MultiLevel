<template>
    <div class="container">
      <h1>Dashboard</h1>
      <nav>
        <router-link to="/dashboard/profile">Profile</router-link> |
        <router-link to="/dashboard/settings">Settings</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </template>
  