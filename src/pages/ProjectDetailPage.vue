<script>
import { store } from '../store.js';
import axios from 'axios';

export default {

   data() {
      return {

         store,
         project: {},
      }
   },

   created() {

      this.getProjects();

   },

   methods: {

      getProjects() {
         axios
            .get(`${store.apiURL}/api/projects/${store.curSlug}`)
            .then((resp) => {

               this.project = resp.data.results;

               console.log(this.project);

            });
      }

   }

}
</script>

<template>

   <div class="container d-flex flex-column align-items-center">

      <h1 class="text-primary my-3">Project Details</h1>

      <div class="row mb-3">

         <div class="card mb-3 px-0" style="max-width: 1080px;">

            <div class="row g-0">

               <div class="col-md-4">

                  <img src="https://placehold.co/500x300?text=immagine+non+disponibile" class="img-fluid rounded-start"
                     alt="...">

               </div>

               <div class="col-md-8">

                  <div class="card-body">

                     <h5 class="card-title">Title: {{ project.title }} </h5>

                     <ul class="ps-2 row gap-1" v-if="project.technologies">

                        <li class="col-3 badge"
                           :class="tech.name == 'html' || tech.name == 'vite' ? 'text-white' : 'text-black'"
                           :style='`background-color: ${tech.color}`' v-for="tech in project.technologies">

                           {{ tech.name }}

                        </li>

                     </ul>

                     <h6>
                        <em class="fw-bold">Type:</em>
                        {{ project.type ? project.type.name : ' - ' }}
                     </h6>

                     <p class="card-text">{{ project.description }}</p>

                  </div>

               </div>

            </div>

         </div>

      </div>

   </div>

</template>

<style scoped lang="scss"></style>