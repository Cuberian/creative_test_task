<template>
  <div class="container">
    <app-card class="flat-card"
              v-for="flat in flats"
              :key="flat.id"
              :flatObj="flat"></app-card>
  </div>
</template>

<script>
  import appCard from "@/components/Card";

  export default {
    name: 'App',
    computed:{
      flats() {
        return this.$store.getters.flats;
      }
    },
    methods: {
      loadData(){
        this.$http.get('http://localhost:3000/response').then(response => {
          return response.json();
        }).then(result => {
          this.$store.commit('fetchData', result);
          console.log(this.$store.state.flats[0]);
        })
      }
    },
    components: {
      appCard
    },
    created(){
      this.loadData();
    }
  }
</script>

<style scoped>
  .container{
    padding: 30px;
    display: grid;
    grid-template-columns:   repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 50px;
  }
</style>
