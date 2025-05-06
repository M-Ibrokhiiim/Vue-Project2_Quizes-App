<script setup>
import {defineProps,defineEmits} from 'vue'
const data=defineProps(['subjectData'])
 
const emit=defineEmits(['selectOption'])

const emitSelectedOption=(isCorrect)=>{
  emit('selectOption',isCorrect)
}
</script>
<template>
     <main class="w-[80%] h-11  mt-7">
      <div class=" text-[1.5vw] font-serif tracking-wider">
        <h1>{{ data.subjectData.text }}</h1>
      </div>
      <section class="options ml-[2vw]">
        <div v-for="option in data.subjectData.options" :key="option.id"  @click="emitSelectedOption(option.isCorrect)" class="flex mt-2 items-center  hover:scale-105   active:scale-95 cursor-pointer duration-200 transition-all">
          <p class="mr-2 w-[2.3vw] h-[2.3vw] text-white rounded-[2vw] bg-green-400 flex items-center justify-center text-[1.5vw]">{{option.label}} </p>
          <p class="text-[1.4vw] bg-slate-200 w-[12vw] rounded-tr-[1vw] rounded-br-[1vw]">{{option.text}}</p>
        </div>
      </section>
     </main>
</template>