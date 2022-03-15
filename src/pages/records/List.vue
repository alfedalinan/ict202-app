<template>
    <div class="q-pa-md" style="max-width: 100%" >
        <q-page>
            List of Records
            <q-btn color="primary" class="float-right" icon="book" label="Add Record" v-on:click="addRecord()" />
            
        </q-page>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'RecordList',
    components: {},
    methods: {
        addRecord() {
            this.$router.push({ path: '/records/add' })
        }
    }
})


</script>

<style>
</style>