<template>
   <div class="lg:w-full block min-h-screen bg-slate-700">
    <div class="flex flex-wrap gap-2 justify-between py-[2rem]  mx-4 my-4 bg-white overflow-hidden">
      <div class="inline-flex max-w-[30%] h-[31.1rem] text-[14px] px-[0px] whitespace-normal  overflow-hidden" v-for="anime in Animedata"  :key="anime.mal_id">
        <div class=" flex flex-col bg-slate-500 m-10">
          <div class="flex shadow-lg items-center h-[3rem] text-[1.2em] px-[0rem] font-bold leading-[1.1rem] weight-700 text-center whitespace-pre-line relative">
            <a class="my-0 mx-auto md:overflow-hidden text-ellipsis">
              {{ anime.title }} 
            </a>
          </div>
          <div>
            <div class="h-[120px] w-[240px] float-left relative px-2">
              <img class="pl-2 py-2" :src ="anime.images.jpg.large_image_url" alt="Anime Image">
            </div>
            <div class=" max-h-[305px] flex flex-col my-2 mx-2">
              <div class="shadow-sm shadow-gray-800 text-center font-semibold ">
                {{ anime.source }}
              </div>
              <div class="overflow-y-hidden hover:overflow-y-auto scrollbar scrollbar-track-cyan-200 text-left whitespace-normal p-[0.5em] leading-[1.2]">
                {{ anime.synopsis }}
              </div> 
            </div> 
        </div>
        <div class="mt-auto py-2 text-center bg-blue-700 font-bold">
                {{ anime.status }}
        </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    Name : 'SeasonsNowAnime',    
    data(){
          return {
        Animedata: []
      };
        },
    mounted(){
      this.GetAnime();
    },
    methods :{
      async GetAnime(){
      try{
      const res = await axios.get('https://api.jikan.moe/v4/seasons/2023/summer');
      this.Animedata = res.data.data.slice(0,);
      console.log(this.SeasonsNowAnime);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
