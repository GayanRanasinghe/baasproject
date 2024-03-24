<template>
    Welcome to KDJ<br>
    <q-btn class="bg-primary text-white" @click="logoutAction">Logout</q-btn>
  </template>
  <script setup>
  import {signOutUser} from 'src/firebase/firebase-signout'
  import {useRouter} from 'vue-router'
  const router = useRouter();
  const logoutAction = () => {
    console.log('Button Clicked')
    signOutUser().then(()=>{
      router.push('/login')
    })
  }
  </script>