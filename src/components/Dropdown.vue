<template>
     <div class="flex p-3  hover:bg-slate-500" :class="{'bg-slate-400': isOpen}" @click="isOpen = !isOpen">
        {{ title }}
        <svg class="w-4 h-4 ml-3 mt-1 fill-white hover:fill-black" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 448 512">
        <path 
        d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
    </svg>
    </div>
    <div class="lg:absolute px-0 py-0 " v-if="isOpen">
        <transition name="fade" appear>
        <div class="bg-slate-400">
            <div v-for="(item,i) in items" :key="i" class="block p-6 hover:bg-slate-500">
                <a :href="item.link">{{ item.title }}</a>
            </div>
        </div>
    </transition>
    </div>
</template>
<script>
export default {
    name: 'Dropdown',
    props: ['title','items'],
    data (){
        return{
            isOpen: false
        }
    }
}
</script>