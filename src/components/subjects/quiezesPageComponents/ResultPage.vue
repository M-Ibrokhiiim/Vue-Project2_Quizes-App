<script setup>
import {defineProps} from 'vue'

const props=defineProps(['result'])

</script>
<template>
    <div  class="text-[2vw] font-bold m-auto text-center mt-[12vw]">
    <h1>{{ props.result }}</h1>
    </div>
</template>