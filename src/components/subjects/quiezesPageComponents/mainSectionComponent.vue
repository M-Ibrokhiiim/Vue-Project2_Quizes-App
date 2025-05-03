<script setup>
import {defineProps,ref} from 'vue'
const data=defineProps(['subjectData','quizOrder'])

const subject=ref(data.subjectData)
const subjectQuizOrder=ref(data.quizOrder)

const question=subject.value.questions[subjectQuizOrder.value]
</script>
<template>
     <main class="w-[80%] h-11  mt-7">
      <div class=" text-[1.5vw] font-serif tracking-wider">
        <h1>{{ question.text }}</h1>
      </div>
      <section class="options ml-[2vw]">
        <div v-for=" option in question.options" :key="option" class="flex mt-2 items-center  hover:scale-105   active:scale-95 cursor-pointer duration-200 transition-all  ">
         <p class="mr-2 w-[2.3vw] h-[2.3vw] text-white rounded-[2vw] bg-green-400 flex items-center justify-center text-[1.5vw]">{{ option.label }}</p>
         <p class="text-[1.4vw]">{{ option.text }}</p>
        </div>
      </section>
     </main>
</template>