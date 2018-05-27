<template>
<v-app>
      <v-navigation-drawer v-model="drawer" app right/>
      <v-toolbar color="light-blue darken-1" app>
       <img src="/icons/logo.gif" alt="student1" width="50" height="50">
      <v-toolbar-title >ระบบเยี่ยมบ้านนักเรียน </v-toolbar-title>    
      <v-spacer/>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>     
      </v-toolbar> 
 
    <v-content>
      <nuxt/>
    </v-content>


    <v-footer color="light-blue darken-1" app>  
      <span class="white--text" >&nbsp;&nbsp;&copy;&nbsp;&nbsp;STD Visitor System</span>                
    </v-footer>
</v-app>
</template>

<script>
export default {
  computed: {
    online: {
      get() {
        return this.$store.state.online
      },
      set(value) {
        this.$store.commit('setOnline', value)
      },
    },
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(value) {
        this.$store.commit('setDrawer', value)
      },
    },
  },

  // async created() {
  //   let ok = await this.$store.dispatch('loadUser')
  //   if (!ok) {
  //     return this.$router.replace('/')
  //   }
  //   // this.$store.dispatch('loadStudents')
  // }, // created

  mounted() {
    this.$store.commit('setOnline', window.navigator.onLine)
    window.addEventListener('offline', this.toggleNetworkStatus)
    window.addEventListener('online', this.toggleNetworkStatus)
  },

  beforeDestroyed() {
    window.removeEventListener('offline', this.toggleNetworkStatus)
    window.removeEventListener('online', this.toggleNetworkStatus)
  },

  methods: {
    toggleNetworkStatus({ type }) {
      this.online = type === 'online'
    },
  },
}
</script>
