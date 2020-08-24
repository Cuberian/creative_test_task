<template>
  <div class="container">
    <template v-if="isLoad">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </template>
    <template v-else>
    <app-card class="flat-card"
              v-for="flat in flats"
              :key="flat.id"
              :flatObj="flat"
    ></app-card>
    </template>
  </div>
</template>

<script>
  import appCard from "./components/Card";

  export default {
    name: 'App',
    data() {
      return {
        isLoad: true,
      };
    },
    computed:{
      flats() {
        return this.$store.getters.flats;
      }
    },
    methods: {
     loadData(){
        setTimeout(()=>{
        this.$http.get('http://localhost:3000/response').then(response => {
          return response.json();
        }).then(result => {
            this.$store.dispatch('dataFlatFetching', result);
        });
        this.$http.get('http://localhost:3000/liked').then(response => {
          return response.json();
        }).then(result => {
          this.$store.dispatch('dataLikedFetching', result);
        });
          this.isLoad = false;
        },2000);
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
  .spinner-border {
    margin: 0 auto;
    width: 10rem;
    height: 10rem;
  }
  .container{
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 30px;
  }

  .card {
    margin: 0 auto 15px;
  }
  @media screen and (min-width: 800px) {
    .container{
      flex-wrap: wrap;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }
    .card + .card {
      margin-left: 15px;
    }
    .card {
      margin-bottom: 15px;
    }
  }

</style>
