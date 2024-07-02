<script>
export default {

   props: {


   },

   methods: {


   }

}
</script>

<template>

   <h1>Details</h1>


   <img src="https://placehold.co/500x300?text=immagine+non+disponibile" class="col-6 card-img-top" alt="...">

   <div class="card-body col-6 d-flex flex-column justify-content-between">

      <div>

         <h5 class="card-title fs-4 fw-bold">titolo</h5>

         <ul class="ps-2 row gap-1" v-if="project.technologies">

            <li class="col-3 badge" :class="tech.name == 'html' || tech.name == 'vite' ? 'text-white' : 'text-black'"
               :style='`background-color: ${tech.color}`' v-for="tech in project.technologies">

               {{ tech.name }}

            </li>

         </ul>

         <h6>
            <em class="fw-bold">Type:</em>
            {{ project.type ? project.type.name : ' - ' }}
         </h6>

         <p class="card-text fs-6">{{ project.description }}</p>

      </div>

      <router-link :to="{ name: `projects/${item.routeName}` }" class="btn btn-primary w-50">
         Details
      </router-link>

   </div>

   </div> -->

</template>

<style scoped lang="scss"></style>