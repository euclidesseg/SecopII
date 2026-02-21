<script setup lang="ts">
import { onMounted, ref } from 'vue';

    const isScrolled = ref(false);

    const andleScroll = () =>{
        isScrolled.value = window.scrollY > 20;
    }

    onMounted(() =>{
        window.addEventListener('scroll', andleScroll);
    })
</script>

<template>


    <nav :class="[
        'fixed w-full z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 flex justify-between items-center',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
    ]">
        <div class="max-w-7xl mx-auto w-full flex justify-between items-center">
            <div class="flex items-center gap-2.5">
                <div class="bg-primary p-2 rounded-xl shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-white w-6 h-6" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                </div>
                <span class="text-2xl font-black tracking-tight text-slate-900">SECOP<span
                        class="brand-text uppercase ml-0.5 text-lg">Analytics</span></span>
            </div>

            <div class="hidden lg:flex items-center gap-10 text-sm font-bold text-slate-600 uppercase tracking-widest">
                <a href="#" class="hover:text-[#6e11b0] transition-colors">Explorador</a>
                <a href="#" class="hover:text-[#6e11b0] transition-colors">Estadísticas</a>             
            </div>
        </div>
    </nav>
</template>

<style>
</style>