<template lang="">
    <div class="flex items-center">
        <button @click="prevSeason">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="1em" 
            viewBox="0 0 320 512"
            >
            <path
             d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
            </svg>
    </button>
        <div class="container">
            <div class="flex flex-nowrap overflow-x-hidden">
                <div class="season" v-for="(season, index) in visibleSeasons" :key="index">
                {{ season }}
                </div>
            </div>
        </div>
        <button @click="nextSeason">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="1em" 
            viewBox="0 0 320 512">
            <path 
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
            </svg>
        </button>
    </div>
</template>
<script>
export default {
    props : {
        seasons : Array,
    },
    data(){
        return{
            currentIndex:0,
            pageSize:1,
        };
    },
    computed:{
        visibleSeasons() {
      const startIndex = this.currentIndex * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.seasons.slice(startIndex, endIndex);
    },
  },
  methods: {
    prevSeason() {
        if (this.currentIndex < this.seasons.length - 1) {
        this.currentIndex++;
      }
    },
    nextSeason() {
        if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    
    },
  },
};
</script>
<style lang="">
    
</style>