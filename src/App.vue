<template>
  <header class=" w-[80%] m-auto text-left pt-[2vw] text-cyan-950">
    <div class=" w-[25%] flex justify-between align-middle content-center items-center">
       <label for="quizesText" class="font-[cursive] text-[2vw] font-extrabold text-cyan-950">Quizes</label>
       <input type="text" autofocus placeholder="Search..." class="w-[13vw] h-[2vw] mt-[0.3vw] text-[1vw]  border-[0.15vw] border-cyan-950 outline-none p-[1vw] font-serif rounded-[0.4vw]">
    </div>
  </header>

  <main class="bg-slate-400 w-[80%] m-auto mt-[1vw] ">
    <section>
      <div class="bg-slate-100 w-[150px] shadow-xl shadow-black  rounded-[0.4vw] hover:-translate-y-1 hover:opacity-85 active:opacity-100 cursor-pointer active:scale-90 transition-all duration-400 delay-75 ">
        <img src="./assets/pics/programmingPic.jpg" class="w-[100%]  h-[200px] rounded-[0.4vw] overflow-scroll">
        <h3 class="text-[1.4vw] font-bold font-sans mb-0 ml-[0.3vw]">Programming</h3>
        <p class="text-[1vw] ml-[0.3vw] -mt-[0.3vw]">3 questions</p>
      </div>
    </section>
  </main>
</template>