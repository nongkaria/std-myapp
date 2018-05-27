<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
                <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="pink darken-1">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn
                    slot="activator"
                    :href="source"
                    icon
                    large
                    target="_blank"
                  >
                 <i class="material-icons">school</i>
                  </v-btn>
                  <span>กรุณากรอกข้อมูลยืนยันตัวตน</span>  
                </v-tooltip>
                <v-tooltip right>
                  <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/wyYVVj" target="_blank">
                    <v-icon large>mdi-codepen</v-icon>
                  </v-btn>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                
                <v-btn class="white--text" color="pink darken-1">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="light-blue darken-1" app>
        <span class="white--text">&nbsp;&nbsp;&copy;&nbsp;&nbsp;STD Visitor System</span>
        
    </v-footer>
  </v-app>
</template>
<script>
let blankForm = {
  login: '',
  pass: '',
}

export default {
  layout: 'public',
  data() {
    return {
      form: JSON.parse(JSON.stringify(blankForm)),
    }
  },
  methods: {
    async doLogin() {
      let res = await this.$http.post('/login', this.form)
      if (!res.data.ok) {
        // TODO: login ไม่สำเร็จ
        return
      }
      console.log('login สำเร็จ')
      // 1. จำ user/login
      window.sessionStorage.setItem('user', JSON.stringify(res.data.user))
      // 2. ไปหน้า home
      this.$router.push('/home')
    },
  },
}
</script>