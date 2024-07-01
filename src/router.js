import { createRouter, createWebHistory } from "vue-router";

import ProjectsPage from "./components/ProjectsPage.vue";
import ContactsPage from "./components/ContactsPage.vue";
import HomePage from "./components/HomePage.vue";

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         name: 'home',
         component: HomePage
      },
      {
         path: '/contacts',
         name: 'contacts',
         component: ContactsPage
      },
      {
         path: '/projects',
         name: 'projects',
         component: ProjectsPage
      }
   ]
})

export { router };