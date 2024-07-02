<script>
import axios from 'axios';
import { store } from '../store.js';

import PaginationNavBar from '../components/PaginationNavBar.vue'
import CardComponent from '../components/CardComponent.vue';

export default {

   components: {

      CardComponent,
      PaginationNavBar,

   },

   data() {
      return {

         store,
         projects: [],
         curPage: 1,
         lastPage: 1,


      }
   },

   created() {

      this.getProjects();

   },

   methods: {

      getProjects() {
         axios
            .get(`${this.store.apiURL}/api/projects`, {
               params: {
                  page: this.curPage,
               }
            })
            .then((resp) => {

               this.projects = resp.data.results.data;

               this.lastPage = resp.data.results.last_page;

               // console.log(this.projects);

            });
      },

      changePage(newPage) {

         this.curPage = newPage;

         this.getProjects();

      },

      nextPage() {

         if (this.curPage != this.lastPage) {

            this.curPage++;

            this.getProjects();

         }

      },

      prevPage() {

         if (this.curPage != 1) {

            this.curPage--;

            this.getProjects();

         }

      }

   }
}
</script>

<template>

   <div class="container d-flex flex-column align-items-center">

      <h1 class="text-primary my-3">Projects Cards</h1>

      <PaginationNavBar class="my-3" :lastPage="lastPage" :curPage="curPage" @change-page="changePage"
         @next-page="nextPage" @prev-page="prevPage"/>

      <div class="row row-cols-3 g-3 mb-3">

         <div class="" v-for="project in projects">

            <CardComponent :project="project" />

         </div>

      </div>

   </div>

</template>

<style scoped lang="scss"></style>