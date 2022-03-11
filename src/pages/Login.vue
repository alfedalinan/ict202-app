<template>
  <div class="q-pa-sm" style="max-width: 100%">
        <div class="form-title">Login to your Medical Records Portal</div>
        <q-form>
            <q-input
                label="Email address"
                v-model="username"
                square
                ref="usernameLogin"
            ></q-input>
            <br>
            <q-input
                label="Password"
                type="password"
                ref="passwordLogin"
                v-model="password"
            ></q-input>
            <br>
            <!-- <div class="text-negative" v-if="restrictionLabel != ''" >{{ restrictionLabel }}</div> -->
            <q-btn color="primary" id="login-btn" label="Login" v-on:click="initLogin()"/>
        </q-form>
        <div class="q-pa-md text-center">
            <small>Not yet a member? Click <a :href="signUpLink">here</a> to sign up </small>
        </div>
    </div>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent, ref } from 'vue';
import { IAuthService } from 'src/interfaces/IAuthService';
import { containers } from 'src/common/DependencyInjection';
import { Credentials } from 'src/components/entities/Credentials';
import { encryptString } from "src/utils/Helpers";

export default defineComponent({
  name: 'Login',
  components: { ExampleComponent },
  data() {
      return {
        username: "",
        password: "",
      }
  },
  methods: {
      initLogin() {

          let authService: IAuthService = containers.resolve("IAuthService");
          let credentials: Credentials = {
              email: this.username,
              password: encryptString(this.password)
          }
        
          authService.login(credentials)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })

      }
  }
});
</script>

<style>
 #login-btn {
     width: 100%
 }
</style>
