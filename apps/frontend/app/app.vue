<template>
  <div>
    <h1>Daftar User</h1>
    <pre v-if="!pending">{{ data }}</pre>
    <div v-else>
      Loading....
    </div>
  </div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp()

// Gunakan useAsyncData untuk fetch data di Server Side (SSR)
const { data, error,pending } = await useAsyncData("usersq", async () => {
  // Tambahkan .get() di akhir untuk mengeksekusi request
  const response = await $api.api.users({params : {id:23}})
 
  return response;
})

</script>