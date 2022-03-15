<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="openDrawer()"
          v-if="this.$route.name != 'Chat' && this.$route.name != 'Contacts' && this.$route.name != 'MyInfo'"
        />

        <q-btn
          flat
          dense
          round
          icon="keyboard_backspace"
          aria-label="Back"
          v-on:click="backToPrev()"
          v-if="this.$route.name == 'Chat' || this.$route.name == 'Contacts' || this.$route.name == 'MyInfo'"
        />

        <q-toolbar-title>
          {{ this.$route.name && this.$route.name != 'MyInfo' ? this.$route.name : '' }}
        </q-toolbar-title>

      </q-toolbar>
      <q-toolbar style="background-color: #FFF; color: #000;" v-if="this.$route.name == 'Chat'">
          <q-item>
            <q-item-section avatar>
              <q-icon color="primary" name="person_pin" /> 
            </q-item-section>
            <q-item-section>
              {{ this.$route.params.username }}
            </q-item-section>
          </q-item>
        </q-toolbar>
      </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Medical Record Management
        </q-item-label>

        <DefaultLink v-for="link in defaultLinks" :key="link.title" v-bind="link" />
        <hr />
         <q-item clickable tag="a" href="#" @click="logout()">
            <q-item-section avatar>
                <q-icon name="logout" />
            </q-item-section>

            <q-item-section>
                <q-item-label>Logout</q-item-label>
                
            </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- PAGE - ROUTER VIEW -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import DefaultLink from "src/components/DefaultLinks.vue";

const links = [
    {
        title: "Patient Records",
        icon: "face",
        link: "#/records/list",
        caption: "Manage your patient records here"
    },
    {
        title: "Physicians",
        icon: "contact_page",
        link: "#/physicians",
        caption: "Manage primary care providers"
    }
];

export default defineComponent({
    name: 'DefaultLayout',
    components: { DefaultLink },
    setup() {
        const leftDrawerOpen = ref(false);
        const defaultLinks = ref(links);
        
        return { leftDrawerOpen, defaultLinks }
    },
    methods: {
        openDrawer() {
            return this.leftDrawerOpen = !this.leftDrawerOpen;
        }
    },
    mounted() { }
})
</script>
