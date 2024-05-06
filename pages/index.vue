<template>
  <div class="bg-gradient-to-tr from-slate-100 to-slate-300 min-h-screen">
    <div class="m-auto max-w-screen-sm py-12">
      <h3>Generate USERS</h3>
      <div class="my-4 ">
        <input type="number" class="rounded-md py-1 text-center" v-model="count">
      </div>
      <button @click="refresh"
        class=" bg-gradient-to-tl from-red-500 to-red-600 hover:to-red-700 px-8 rounded-lg shadow-lg text-white py-2">RE_GENERATE</button>
      {{ loading }}
      {{ error }}
      <pre>{{ data.persons }}</pre>
    </div>
  </div>
</template>

<script setup>

// const personList = ref([])
const count = ref(10)

// async function getPersons() {
//   personList.value = await $fetch('/api/person', {
//     query: {
//       count: count.value
//     },
//     headers: {
//       'Authorization': 'secret'
//     }
//   })
// }

const { data, loading, error, refresh } = useFetch('/api/person', {
  query: {
    count: count.value
  },
  headers: {
    'Authorization': 'secret'
  }
})

// onMounted(() => {
// })


</script>
