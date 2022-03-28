<template>
    <div class="q-pa-md" style="max-width: 100%" >
        <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
        >  
            <div class="row">
                <div class="col form-col">
                    <label>Email</label>
                    <q-input
                        v-model="email"
                        lazy-rules
                        :rules="[ val => val !== null && val !== '' || 'Please enter an email']"
                    />
                    <label>Access (You may choose multiple accesses)</label>
                    <q-select
                        multiple
                        v-model="selectedOptions"
                        :options="[`Users`, `Patients`, `Records`]"
                        :rules="[val => val && val.length > 0 || 'Select at least one access']"
                    />

                </div>
                <div class="col form-col">
                    <label>Password</label>
                    <q-input
                        type="password"
                        v-model="password"
                        lazy-rules
                        :rules="[
                        val => val !== null && val !== '' || 'Please type your password',
                        ]"
                    />
                </div>
            </div>
            <div class="row">
                <div class="col form-col">
                    <q-btn color="primary" id="login-btn" label="Submit" v-on:click="createNewUser()"/>
                </div>
                <div class="col form-col"></div>
            </div>
        </q-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from "quasar";
import { UserService } from 'src/services/UserService';
import { containers } from 'src/common/DependencyInjection';
import { User } from 'src/components/entities/User';
import { encryptString } from 'src/utils/Helpers';


export default defineComponent({
    name: 'UserAdd',
    components: {},
    data() {
        return {
            email: "",
            password: "",
            selectedOptions: [],
            q: useQuasar()
        }
    },
    methods: {
        createNewUser() {

            let userService: UserService = containers.resolve("IUserService");
            let user: User = {
                email: this.email,
                password: encryptString(this.password),
                access: this.selectedOptions
            }

            userService.createOne(user)
                .then((response) => {

                    if (response) {
                        this.q.dialog({
                            title: "User Add Successful",
                            message: "A new user has been added successfully"
                        });
                    }
                    else {
                        this.q.dialog({
                            title: "User Add Failed",
                            message: "An error has occured while adding new user"
                        });
                    }

                })
                .catch((err) => {
                    this.q.dialog({
                        title: "User Add Failed",
                        message: "An error has occured while adding new user"
                    });
                })
        }
    }
})
</script>

<style>
.form-col {
    margin-left: 5px;
    margin-right: 5px;
}
</style>