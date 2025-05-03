<script setup>
import {ref} from 'vue'
import {useRouter,useRoute} from 'vue-router'
import headerSection from '../components/subjects/quiezesPageComponents/headerSectionComponent.vue'
import mainSection from '../components/subjects/quiezesPageComponents/mainSectionComponent.vue'
import subjects from '../data/subjectsData.json'

const subjectId=useRoute().params.id

const quizOrder=ref(0)
const subjectData=subjects.find(subject=>subject.id===parseInt(subjectId))
console.log(quizOrder.value);

const routerPath=useRouter()
const backPath=()=>{
    return routerPath.back()
}
</script>

<template>
    <section class=" w-[70%] m-auto absolute top-[10%] left-[14%] ">
     <headerSection/>
     <mainSection 
     :subjectData="subjectData"
     :quizOrder="quizOrder"
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