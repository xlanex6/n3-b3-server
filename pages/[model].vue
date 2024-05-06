<template>
  <div class="bg-gradient-to-tr from-slate-100 to-slate-300 min-h-screen">

    <div class="m-auto max-w-screen-sm py-12">

      <div class="bg-gray-200 border-2 rounded-md space-y-4 m-auto py-4 my-4">
        <h3 class="text-center ">Generate {{ route.params.model }}</h3>
        <div class="flex justify-center">
          <input type="number" class="rounded-tl-md rounded-bl-md py-1 text-center" v-model="count">
          <button @click="refresh"
            class="bg-gradient-to-tl from-red-500 to-red-600 hover:to-red-700 px-8 rounded-tr-md rounded-br-md shadow-lg text-white py-2">RE-GENERATE</button>
        </div>

      </div>

      <div v-if="pending" class="w-full grid place-content-center h-52">
        <Icon name="line-md:loading-twotone-loop" class="text-black" size="80" />
      </div>

      <div v-else class="relative">
        <button class="absolute top-1 right-2 " @click="copy(JSON.stringify(data[route.params.model]))">
          <Icon name="ph:copy-light" class="text-black hover:text-gray-600" size="24" />
        </button>
        <pre class="text-xs rounded-md p-5 bg-white">{{ data[route.params.model] }}</pre>
      </div>


    </div>
  </div>
</template>

<script setup>

const route = useRoute()
const count = ref(2)

const { text, copy, copied, isSupported } = useClipboard()

const { data, refresh, pending } = useFetch(`/api/${route.params.model}`, {
  query: {
    count
  },
  headers: {
    'Authorization': 'secret'
  },
  watch: [count]
})


</script>
