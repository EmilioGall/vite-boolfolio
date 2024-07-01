<script>

export default {

   data() {
      return {

         navItemsArray: [
            {
               routeName: 'home',
               routeTitle: 'Home'
            },
            {
               routeName: 'projects',
               routeTitle: 'Projects',
            },
            {
               routeName: 'contacts',
               routeTitle: 'Contacts'
            },

         ],

         curRouteName: 'home',

      }
   },

   created() {


   },

   methods: {

      activePage(routeName) {

         this.curRouteName = routeName;

      }

   }
}

</script>

<template>

   <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">

      <div class="container-fluid">

         <a class="navbar-brand" href="#">BoolFolio</a>

         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>

         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

               <li class="nav-item" v-for="item in navItemsArray">

                  <router-link :to="{ name: item.routeName }" class="nav-link" @click.prevent="activePage(item.routeName)" :class="item.routeName == curRouteName ? 'active' : ''">
                     {{ item.routeTitle }}
                  </router-link>

               </li>

            </ul>
         </div>
      </div>
   </nav>

</template>

<style scoped lang="scss"></style>