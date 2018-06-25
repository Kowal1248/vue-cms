<template>
<section class="user">
  <div class="user_options-container">


    <div class="user_options-forms" id="user_options-forms">
      <div class="user_forms-login">
        <img src="../assets/logo.png" alt="Logo" style="width:250px">

        <form @submit.prevent="login" class="forms_form" style="padding-top:50px">
          <p v-if="error" class="error">Bładne dane.</p>

          <fieldset class="forms_fieldset">
            <div class="forms_field">
              <input type="email" placeholder="Podaj email" class="forms_field-input" v-model="email" required autofocus />
            </div>
            <div class="forms_field">
              <input type="password" placeholder="Hasło" class="forms_field-input" v-model="pass" required />
            </div>
          </fieldset>
          <div class="forms_buttons">
            <input type="submit" value="Zaloguj" class="forms_buttons-action" style="width:100%">
          </div>
        </form>
      

      </div>
    </div>
  </div>
</section>
</template>

<script>
import auth from '../auth'
export default {
  data() {
    return {
      email: '',
      pass: '',
      error: false,
      interval: null
    }
  },
  methods: {
    login() {
      auth.login(this.email, this.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/')
        }
      })
    }
  }
}
</script>

<style lang="css">
@import '../styles/custom-login.css';

</style>
