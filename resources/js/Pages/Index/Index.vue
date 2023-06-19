<template>

 
   <div v-for="listing in listings" :key="listing.id">
   
      {{ listing.city }}
 
  </div>
  
  <Link href="/hello">Show Page</Link>
  <div>
    <!-- The message is {{ message }} -->
  </div>

</template>

<script setup>

import {Link} from '@inertiajs/vue3'
import ListingAddress from '@/Components/ListingAddress.vue'
defineProps({listings:Array, })

</script>

