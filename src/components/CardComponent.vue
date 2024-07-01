<script>
export default {

   props: {

      project: Object,

   },

   methods: {

      control() {

         console.log(this.project.type.name);

      }
   }

}
</script>

<template>

   <div class="card col">

      <img src="https://placehold.co/500x300?text=immagine+non+disponibile" class="card-img-top" alt="...">

      <div class="card-body d-flex flex-column justify-content-between">

         <div>

            <h5 class="card-title fs-4 fw-bold">{{ project.title }}</h5>

            <ul class="ps-2 row gap-1" v-if="project.technologies">

               <li class="col-3 badge" :class="tech.name == 'html' || tech.name == 'vite' ? 'text-white' : 'text-black' " :style='`background-color: ${tech.color}`'
                  v-for="tech in project.technologies">

                  {{ tech.name }}

               </li>

            </ul>

            <h6>
               <em class="fw-bold">Type:</em>
               {{ project.type ? project.type.name : ' - ' }}
            </h6>

            <p class="card-text fs-6">{{ project.description }}</p>

         </div>

         <a href="#" class="btn btn-primary w-50">Details</a>

      </div>

   </div>

</template>

<style scoped lang="scss">
.card {

   height: 700px;

   img {

      max-height: 50%;
   }

   ul {

      list-style-type: none;
   }

}
</style>