<template>
    <div class="login_page">
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <div class="fixed-center">
            <q-card class="my-card">
              <q-card-section class="text-dark">
                <center>
                  <a href="/"><img src="~/assets/kdjlogo.png" style="width:130px"></a>
                  <br><p>Let us show the Easiest Way!</p>
                </center>
                <q-form ref="form" class="q-gutter-md" @submit="submitForm">
                  <q-input v-model="user.email" label="Email" name="Email" />
  
                  <q-input v-model="user.password" label="Password" name="password" type="password" autocomplete="current-password" />
  
  
                  <div class="q-mt-lg">
                    <q-btn class="full-width fredoka" color="primary" label="Login" rounded type="submit"></q-btn>
  
                   
                  </div>
                </q-form>
                <div class="q-mt-lg">
              You don't have an Account?
              <router-link class="text-primary" to="/register">Register</router-link>
             </div>
              </q-card-section>
  
              <q-separator />
  
              <q-card-actions align="right">
  
                <router-link style="text-decoration: none;" class="text-primary" to="/">Back to Home</router-link>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import {login} from 'src/firebase/firebase-login'
  import { useRouter } from 'vue-router'
  import { Notify } from 'quasar'
  import { getAuth, signInWithPopup} from 'firebase/auth';
  import { onMounted } from 'vue';
  
  const user = reactive({
    email: null,
    password: null
  })
  
  const form = ref(null)
  const router = useRouter();
  
  const submitForm = async () => {
    try {
      await form.value.validate();
      // Form validation passed, continue with form submission logic
      await login(user);
      router.push('/my');
    } catch (error) {
      // Handle validation errors
      console.error('Form validation failed:', error);
    }
  };
  
  
  // Check authentication status on component mount
  onMounted(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in, redirect to the dashboard
        router.push('/my');
      }
    });
  });
  </script>
  
  <style>
  /* Add your styles here if needed */
  </style>
  