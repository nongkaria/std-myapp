//store/index.js
export const state = () => ({
  online: false,
  drawer: false,
  students: [],
})

export const mutations = {
  setOnline(state, status) {
    state.online = status
  },
  setDrawer(state, status) {
    state.drawer = status
  },
  setStudents(state, data) {
    state.students = data
  },
}

export const actions = {
  loadStudents(store) {
    // 1. โหลดข้อมูลเก่าจาก localStorage ก่อน
    let students = JSON.parse(window.localStorage.getItem('students') || '[]')
    // 2 commit
    store.commit('setStudents', students)
    setInterval(() => {
      // 3. ยิง api เพื่อข้อมูลใหม่จาก server
      let newData = []
      for (let i = 1; i <= 100; i++) {
        newData.push({
          code: ('' + i).padStart(4, '0'),
          name: `Name${i}`,
          room: '' + Math.ceil(i / 30),
        })
      }
      // 4. commit
      store.commit('setStudents', newData)
      // 5. เก็บลง localStorage
      window.localStorage.setItem('students', JSON.stringify(newData))
    }, 5000)
  },
}