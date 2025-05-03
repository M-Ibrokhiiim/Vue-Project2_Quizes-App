import {createRouter,createWebHistory} from 'vue-router'
import subjectsPage from '../view/subjectsPage.vue'
import subjectQuizesPage from '../view/subjectQuizesPage.vue'
const router=createRouter({
    history:createWebHistory(),
    routes:[
      {
        path:"/",
        component:subjectsPage  
      },
      {
        path:"/:id",
        component:subjectQuizesPage
      }
    ]
})

export default router