import { createRouter, createWebHistory } from "vue-router";

import ProjectsPage from "./pages/ProjectsPage.vue";
import ContactsPage from "./pages/ContactsPage.vue";
import HomePage from "./pages/HomePage.vue";

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