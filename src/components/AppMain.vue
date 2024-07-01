<script>
import axios from 'axios';

import PaginationNavBar from './PaginationNavBar.vue'
import CardComponent from './CardComponent.vue';

export default {

   components: {

      CardComponent,
      PaginationNavBar,

   },

   data() {
      return {

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
            .get('http://127.0.0.1:8000/api/projects', {
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

      }

   }
}
</script>

<template>

   <div class="container d-flex flex-column align-items-center">

      <h1 class="text-primary my-3">Projects Cards</h1>

      <PaginationNavBar class="my-3" :lastPage="lastPage" :curPage="curPage" @change-page="changePage"/>
   
      <div class="row row-cols-3 g-3 mb-3">

         <div class="" v-for="project in projects">

            <CardComponent :project="project"/>

         </div>

      </div>

   </div>

</template>

<style scoped lang="scss"></style>