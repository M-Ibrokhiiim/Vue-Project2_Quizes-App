<script setup>
import {ref,computed} from 'vue'
import {useRouter,useRoute} from 'vue-router'
import headerSection from '../components/subjects/quiezesPageComponents/headerSectionComponent.vue'
import mainSection from '../components/subjects/quiezesPageComponents/mainSectionComponent.vue'
import subjects from '../data/subjectsData.json'
import Result from '../components/subjects/quiezesPageComponents/ResultPage.vue'


const subjectId=useRoute().params.id
const quizOrder=ref(0)
const subjectData=subjects.find(subject=>subject.id===parseInt(subjectId))

const correctAnswers=ref(0)

// Functions 
const subjectQuestionsStatus=computed(()=>{return `${quizOrder.value}/${subjectData.questions.length}`})
const barPercentage=computed(()=>{return `${(quizOrder.value)/subjectData.questions.length*100}`}) 

const onOptionSelected=(isCorrect)=>{
    if(isCorrect){
        correctAnswers.value++
    }
    quizOrder.value++
}

const result=computed(()=>`Congratulations  ${correctAnswers.value}/${subjectData.questions.length}`)
const routerPath=useRouter()
const backPath=()=>{
    return routerPath.back()
}
</script>

<template>
    <section class=" w-[70%] m-auto absolute top-[10%] left-[14%] ">
     <headerSection
     :subjectQuestionsStatus="subjectQuestionsStatus"
     :barPercentage="barPercentage"
     />

     <mainSection 
     v-if="quizOrder!==subjectData.questions.length"
     :subjectData="subjectData.questions[quizOrder]"
     @selectOption="onOptionSelected"
     />
      
     <Result   
     v-else
      :result=result    
     />
     <p @click="backPath()" class=" mt-[20vw] text-blue-400  ml-[70vw] hover:scale-110 text-[1vw] underline cursor-pointer active:scale-100 capitalize  font-[500]">back</p>
    </section>
</template>
<style scoped>
.headSection{
    width: 80%;
    /* margin: auto; */
}
</style>