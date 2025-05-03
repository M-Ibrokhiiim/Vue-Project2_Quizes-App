<script setup>
import {ref, watch} from 'vue'
import {useRouter} from 'vue-router'
import data from '../data/subjectsData.json'

const subjects=ref(data)
const searchedSubject=ref("")

watch(searchedSubject,()=>{
  subjects.value=data.filter(subject=>{
    return subject.name.toLowerCase().includes(searchedSubject.value.toLowerCase())
  })
})

const routeForSubjectQuizesPage=useRouter()
</script>

<template> 
  <header class=" w-[80%] m-auto text-left pt-[2vw] text-cyan-950">
    <div class=" w-[25%] flex justify-between align-middle content-center items-center">
       <label for="quizesText" class="font-[cursive] text-[2vw] font-extrabold text-cyan-950">Quizes</label>
       <input type="text" v-model="searchedSubject" autofocus placeholder="Search..." class="w-[13vw] h-[2vw] mt-[0.3vw] text-[1vw]  border-[0.15vw] border-cyan-950 outline-none p-[1vw] font-serif rounded-[0.4vw]">
    </div>
  </header>

  <main class=" w-[80%]  m-auto mt-[1vw]  items-center">
    <section class="flex  justify-between flex-wrap ">
      <div  @click="routeForSubjectQuizesPage.push(`/${subject.id}`)"  v-for="subject in subjects" :key="subject.id"  class="bg-slate-100 w-[230px] h-[370px] shadow-xl ml-4 mr-2 shadow-black mt-[3vw] rounded-[0.4vw] hover:-translate-y-1 hover:opacity-85 active:opacity-100 cursor-pointer active:scale-90 transition-all duration-400 delay-75 ">
        <img  :src="subject.img" class=" w-[100%] h-[300px] rounded-[0.4vw] ">
        <h3 class="text-[170%] font-bold font-sans mb-0 ml-[0.3vw]">{{ subject.name }}</h3>
        <p class="text-[100%] ml-[0.3vw] -mt-[0.3vw]">{{ subject.questions.length }} questions </p>
      </div> 
    </section>
  </main>
</template>
<style scoped>
.headDiv{
    width: 80%;
    margin: auto;
}
</style>