<script>
import axios from 'axios';
import CardComponent from './CardComponent.vue';

export default {
   components: {

      CardComponent

   },

   data() {
      return {

         projects: [],

      }
   },

   created() {

      this.getProjects();

   },

   methods: {

      getProjects() {
         axios
            .get('http://127.0.0.1:8000/api/projects')
            .then((resp) => {

               this.projects = resp.data.results;

               // console.log(this.projects);

            });
      }
   }
}
</script>

<template>

   <div class="container">

      <h1 class="text-center text-primary my-3">Projects Cards</h1>
   
      <div class="row row-cols-3 g-3 mb-3">

         <div class="" v-for="project in projects">

            <CardComponent :project="project"/>

         </div>

      </div>

   </div>

</template>

<style scoped lang="scss"></style>