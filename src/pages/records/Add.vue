<template>
    <div class="q-pa-md" style="max-width: 100%" >
        <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
        >  
            <div class="row">
                <div class="col form-col">
                    <label>First Name</label>
                    <q-input
                        rounded
                        outlined
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                    />

                    <label>Last Name</label>
                    <q-input
                        rounded
                        outlined
                        type="text"
                        v-model="age"
                        lazy-rules
                        :rules="[
                        val => val !== null && val !== '' || 'Please type your age',
                        val => val > 0 && val < 100 || 'Please type a real age'
                        ]"
                    />

                </div>
                <div class="col form-col">
                    <label>Address Line</label>
                    <q-input
                        rounded
                        outlined
                        type="text"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                    />

                     <label>Date Of Birth</label>
                    <q-input
                        rounded
                        outlined
                        type="date"
                        v-model="age"
                        lazy-rules
                        :rules="[
                        val => val !== null && val !== '' || 'Please type your age',
                        val => val > 0 && val < 100 || 'Please type a real age'
                        ]"
                    />
                </div>
            </div>
        </q-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'RecordAdd',
    components: {}
})
</script>

<style>
.form-col {
    margin-left: 5px;
    margin-right: 5px;
}
</style>