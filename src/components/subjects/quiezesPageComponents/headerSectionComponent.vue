<script setup>
import {defineProps} from 'vue'

const questionsStatus=defineProps(['subjectQuestionsStatus','quizOrder','barPercentage'])

</script>
<template>
      <header> 
        <h1 class="text-[1.5vw] font-[500]">Questions {{ questionsStatus.subjectQuestionsStatus}}</h1>
          <div class="w-[20vw] h-[2vw] border-2  border-green-500 rounded-[0.4vw]  transition-all duration-300 delay-100">
            <p class="h-[100%] bg-green-500 w-[0%] transition-all duration-[1600ms] delay-100" :style="{width:questionsStatus.barPercentage+'%'}"></p>
          </div>
     </header>
</template>