
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    'bootstrap-vue-3/nuxt',
    '@pinia/nuxt',
  ],
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '~/assets/styles/bootstrap.scss',
  ],

  runtimeConfig: {
    mongoUrl: "mongodb://vl0011:shin0114@ac-dshyqa8-shard-00-00.qpqzirs.mongodb.net:27017,ac-dshyqa8-shard-00-01.qpqzirs.mongodb.net:27017,ac-dshyqa8-shard-00-02.qpqzirs.mongodb.net:27017/?ssl=true&replicaSet=atlas-s8o80s-shard-0&authSource=admin&retryWrites=true&w=majority"
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
});
