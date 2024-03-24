// src/firebase/firebase-register.js

import { auth } from './index.js'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

import { Loading, Notify } from 'quasar'

export const register = (data) => {
 return new Promise((resolve, reject) => {
  Loading.show()

  createUserWithEmailAndPassword(auth, data.email, data.password).then(userCredential => {
   updateProfile(userCredential.user, {
    
displayName: data.first_name + " " + data.last_name

   })

   Loading.hide()
   resolve(userCredential.user)
  }).catch(err => {
   Loading.hide()
   Notify.create({
    type: 'negative',
    message: err.message
   })
   reject(err.message)
  })
 })
}


export  const resetPassword = (email) => {
  return new Promise((resolve, reject) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        resolve('Password reset email sent successfully!');
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};


export default register
