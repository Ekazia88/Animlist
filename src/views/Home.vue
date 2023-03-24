
<script>
// import DataAnime from '../components/DataAnime.vue';
import { reactive, onMounted } from 'vue';
import React, { useEffect, useState } from "react";
import axios from 'axios';
export default {
    Name : 'AnimeData',    
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
      const res = await axios.get('https://api.jikan.moe/v4/seasons/now');
      this.Animedata = res.data.data.slice(0,2);
      console.log(this.Animedata);
      } catch (error) {
        console.error(error);
      }
    },
  },
};


</script>
<script >

</script>
<template>
  <div class="bg-sky-300 border-b-black border-b-2">
    <div class="container"> 
      <div class="px-10 py-5">
        <div class="flex justify-between">
          <div class="flex text-4xl py-5">
            
          </div>
          <div class="flex px-2 py-5 text-2xl ">
          
            <div class="pt-0 absolute mx-auto text-gray-600">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search">
        <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
          <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="max-w-sm w-full lg:max-w-full lg:flex overflow-auto">
    <div class="leading-tight py-5 mx-auto">
      <div class="px-10 py-10 flex justify-between text-black ">
        <div class="border inline-block relative border-red-300 text-2xl text-center px-2 mx-1 " v-for="anime in Animedata"  :key="anime.mal_id">
        <div class="h-1/2  py-6 px-6 mb-2 border border-blue-300">
          {{anime.title }}
          <div class="flex flex-col-2 bg-slate-400 ">
            <img class="mx-auto" :src ="anime.images.jpg.large_image_url" alt="Anime Image">
            <div class="text-sm">
            {{ anime.synopsis }}
            {{ anime.aired.from }}
          </div>
      </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
