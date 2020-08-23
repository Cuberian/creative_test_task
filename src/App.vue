<template>
  <div class="container">
    <app-card class="flat-card"
              v-for="flat in flats"
              :key="flat.id"
              :flatId="flat.id"
              :flatObj="flat"></app-card>
  </div>
</template>

<script>
  import appCard from "@/components/Card";

  export default {
    name: 'App',
    methods: {
       loadData(){
        console.log('start loading');
        this.$http.get('http://localhost:3000/response').then(response => {
          console.log('start json transform');
          return response.json();
        }).then(result => {
          console.log('start waiting');
          this.$store.dispatch('waitDataFetching', result);
        })
      }
    },
    computed:{
      flats() {
        console.log('require flats');
        return this.$store.getters.flats;
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
