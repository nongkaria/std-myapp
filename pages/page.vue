<template>
    <div>
        <h1>TEST</h1>
        <button @click="toHome" >To</button>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        toHome(){
            this.$routet.push('/index')
        }
    }
}
</script>

