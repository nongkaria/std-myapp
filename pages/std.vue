<template>

  <v-container fluid>
     <h3>STD-VisitorApp : ข้อมูลประวัติพื้นฐาน</h3><br><hr>
    <v-layout row>
      <v-flex xs4>
        <v-subheader>ชื่อสกุลผู้ปกครอง</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          name="input-1-3"
          label="ระบุรายละเอียด"
          single-line
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4>
        <v-subheader>เกี่ยวข้องเป็น</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          name="input-2-3"
          label="ระบุรายละเอียด"
          class="input-group--focused"
          single-line
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4>
        <v-subheader>ที่อยู่</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          name="input-3-3"
          label="Hint Text"
          value="ระบุรายละเอียด"
          class="input-group--focused"
          single-line
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4>
        <v-subheader>สภาพแวดล้อมที่พักอาศัย</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          name="input-3-4"
          label="Hint Text"
          value="ระบุรายละเอียด"
          single-line
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs4>
        <v-subheader>เบอร์ติดต่อ</v-subheader>
      </v-flex>
      <v-flex xs12 sm5>
        <v-text-field
          name="input-1-3"
          label="Hint Text"
          single-line
          prepend-icon="phone"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm3>
        <v-select :items="[{ text: 'Mobile' }]" label="Mobile"></v-select>
      </v-flex>
      </v-layout>
      <v-divider class="mt-5"></v-divider>                                  
        <v-card-actions>
          <v-btn flat>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <v-btn
                slot="activator"
                icon
                class="my-0"
                @click="resetForm"
              >
                <v-icon>refresh</v-icon>
              </v-btn>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" flat @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
 


    </v-layout>
    
    
  </v-container>
</template>