<template>
    <div>
        <h1></h1>
    </div>
</template>
<script>
import {http} from './../api/index.js'
export default {
    data(){
        return {
            msg:''
        }
    },
    mounted(){
        console.log(http)
    }
}
</script>
