<script setup lang="ts">
  import { ref } from "vue";
  import Dropdown from "./Dropdown.vue";
  const ShowdropdownMenu = ref(false);
</script>
<script lang="ts">
export default {
    name: 'Navigationbar',
    components: {
        Dropdown
    },
    data () {
        return {
            anime:[
              {
                title :'studio',
                link : '#',
              },
              {
                title :'Top Anime',
                link : '#',
              },
              {
                title :'Seasional Anime',
                link : '#',
              },
              {
                title :'Reviews',
                link : '#',
              },
              {
                title :'Search Anime',
                link : '#',
              },
            ],
            manga: [
              {
                title :'Top Manga',
                link : '#',
              },
              {
                title :'Reviews',
                link : '#',
              },
              {
                title :'Search Manga',
                link : '#',
              },
            ],
            forums: [
              {
                title :'blogs',
                link : '#',
              },
              {
                title :'Discussion',
                link : '#',
              },
              {
                title :'Users',
                link : '#',
              },
            ],
            faq:[
              {
                title :'FAQ',
                link : '#',
              },
              {
                title :'About',
                link : '#',
              },
              {
                title :'Report',
                link : '#',
              }
            ]
        }
    }
}
</script>
<template>
  <nav>
    <!-- desktop -->
    <div class="bg-black text-white shadow">
      <div class="max-w-7xl mx-auto px-3">
        <div class="flex justify-between">
          <!-- menu -->
          <div class="flex space-x-">
            <!-- logo -->
            <RouterLink to="/" class="flex items-center py-5 px-2 text-4xl text-white">
              Animeku
            </RouterLink>
          </div>
          <!-- menu -->
          <div class="hidden md:flex items-center space-x-4">
            <div class="py-5 px-10">
              <Dropdown title="Anime" :items="anime"></Dropdown>
            </div>
            <div class="py-5 px-10">
              <Dropdown title="Manga" :items="manga"></Dropdown>
            </div>
            <div class="py-5 px-10">
              <Dropdown title="Forums" :items="forums"></Dropdown>
            </div>
            <div class="py-5 px-10">
              <Dropdown title="FAQ" :items="faq"></Dropdown>
            </div>
          </div>
          <div class="hidden md:flex items-center space-x-4">
            <div>Login</div>
            <div>Register</div>
          </div>
          <div class="md:hidden flex items-center">
            <button
              @click="ShowdropdownMenu == ShowdropdownMenu"
              class="py-5 px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile -->
    <div class="md:hidden bg-slate-500" v-show="ShowdropdownMenu">
      <div class="block py-5 px-10 hover:bg-slate-600 text-center">Anime</div>
      <div class="block py-5 px-10 hover:bg-slate-600 text-center">Manga</div>
      <div class="block py-5 px-10 hover:bg-slate-600 text-center">Forum</div>
      <div class="block py-5 px-10 hover:bg-slate-600 text-center">Faq</div>
    </div>
  </nav>
</template>
