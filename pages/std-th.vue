<template>
 <v-jumbotron color="purple lighten-5">
    <v-container fill-height>
                 <v-layout align-center>
                   <v-flex>
                   <h1 class=".display-1font-weight 400">Welcome to the STD-Visitor </h1>
                    <span class="subheading">
                        <p>ความสาคัญและความจำเป็นของการเยี่ยมบ้านนักเรียน นั้นคือ การพัฒนานักเรียนให้เป็นบุคคลที่มีคุณภาพทั้งด้านร่างกาย จิตใจ สติปัญญา
                         ความสามารถ มีคุณธรรม จริยธรรม</p></span>
                    <v-divider class="my-3"></v-divider>
                    <div class="title mb-3">รายชื่อนักเรียนที่ปรึกษา</div>  
                   
                    <table>
  <tr>
    <th>Images</th>
    <th>IDNumber</th>
    <th>Name</th>
  </tr>
  <tr>
    <td><img src="icons/icon1.ico" width="50" height="50"></td>
    <td>6039010001</td>
    <th>นายสมปอง ใจดี</th>
  </tr>
  <tr>
    <td><img src="icons/icon2.ico" width="50" height="50"></td>
    <td>6039010002</td>
    <th>นายสมหมาย ขยันดี</th>
  </tr>
</table>
 </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>   
 </template>
<script>
export default {
  data() {
    return {
      students: [],
      headers: [
        { text: 'รหัส', align: 'left', sortable: false },
        { text: 'ชื่อ', align: 'left', sortable: false },
      ],
    }
  },//data
  async created() {
    this.getStd()
  },
  methods: {
    async getStd() {
      let res = await this.$http.get('/student/std')
      this.students = res.data.std
    },
  },
}
</script>

