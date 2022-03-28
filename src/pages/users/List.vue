<template>
    <div class="q-pa-md" style="max-width: 100%" >
        <q-page>
            List of Users
            <q-btn color="primary" class="float-right" icon="person" label="Add User" v-on:click="addUser()" />
            
        </q-page>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'UserList',
    components: {},
    methods: {
        addUser() {
            this.$router.push({ path: '/users/add' })
        }
    }
})


</script>

<style>
</style>