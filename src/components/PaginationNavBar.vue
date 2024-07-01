<script>
export default {

   props: {

      lastPage: Number,
      curPage: Number,

   },

   data() {
      return {

      }
   }

}
</script>

<template>

   <nav aria-label="Page navigation example">

      <ul class="pagination">

         <li class="page-item">

            <a class="page-link" href="#" aria-label="Previous">

               <span aria-hidden="true">&laquo;</span>

            </a>

         </li>

         <li class="page-item" v-for="page in lastPage">
            <button class="page-link" :class="curPage == page ? 'active' : ''"
               @click.prevent="$emit('changePage', page)">
               {{ page }}
            </button>
         </li>

         <li class="page-item">

            <a class="page-link" href="#" aria-label="Next">
               <span aria-hidden="true">&raquo;</span>
            </a>

         </li>

      </ul>

   </nav>

</template>

<style scoped lang="scss"></style>