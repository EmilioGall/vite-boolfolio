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

            <button class="page-link" :disabled="curPage == 1" @click.prevent="$emit('prevPage')"
               aria-label="Next">

               <span aria-hidden="true">&laquo;</span>

            </button>

         </li>

         <li class="page-item" v-for="page in lastPage">

            <button class="page-link" :class="curPage == page ? 'active' : ''"
               @click.prevent="$emit('changePage', page)">
               {{ page }}
            </button>

         </li>

         <li class="page-item">

            <button class="page-link" :disabled="curPage == lastPage" @click.prevent="$emit('nextPage')"
               aria-label="Next">
               <span aria-hidden="true">&raquo;</span>
            </button>

         </li>

      </ul>

   </nav>

</template>

<style scoped lang="scss"></style>