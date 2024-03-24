<template>
    <div class="register_page">
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <div class="fixed-center">
            <q-card class="my-card">
              <q-card-section class="text-dark">
                <center>
                  <a href="/"><img src="~/assets/kdjlogo.png" style="width:130px"></a>
                  <br><p>Let us show the Easiest Way!</p><small>Registration Form</small>
                </center>
               
          <q-form ref="form" class="q-gutter-md" @submit="submit">
           <q-input v-model="user.first_name" label="First Name" name="First Name" />
           <q-input v-model="user.last_name" label="Last Name" name="Last Name" />
           <q-input v-model="user.email" label="Email" name="Email" />
           <q-input v-model="user.password" label="Password" name="password" type="password" />
           <div>
          <q-btn class="full-width fredoka" color="primary" label="Register" rounded
           type="submit"></q-btn>
 
          <div class="q-mt-lg">
           <div class="q-mt-sm">
            Already have an account?
            <router-link class="text-primary" to="/login">Login</router-link>
           </div>
          </div>
         </div>
        </q-form>
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
 import register from 'src/firebase/firebase-register'
 import { useRouter } from 'vue-router'
 import { Notify } from 'quasar'
 import { getAuth, onAuthStateChanged } from 'firebase/auth';
 
 import { onMounted } from 'vue';
 
  const user = reactive({
   last_name: null,
   first_name: null,
   email: null,
   password: null
  })
  
  const form = ref(null)
  const router = useRouter();
  const submit = async () => {
  // Validate the form
  if (form.value.validate()) {
    try {
      // Attempt to register the user
      const registeredUser = await register(user)

      if (registeredUser) {
        // Registration successful, notify the user
        Notify.create({
          type: 'positive',
          message: 'Registration successful. You can now log in.'
        })

        // Redirect to the login page
        router.push('/my');

      }
    } catch (error) {
      // Handle registration errors
      Notify.create({
        type: 'negative',
        message: `Registration failed: ${error.message}`
      })
    }
  }
}

// Check authentication status on component mount
onMounted(() => {
  console.log('sdad')
  const auth = getAuth();
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is logged in, redirect to the dashboard
      router.push('/my');
    }
  });
});
 </script>