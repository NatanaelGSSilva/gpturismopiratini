<template>
    <h1>{{numero}}</h1>
</template>

<script>
export default {
    data(){
        return{
            numero: this.$route.params.id,
        }
    }
}
</script>

<style scoped>

</style>