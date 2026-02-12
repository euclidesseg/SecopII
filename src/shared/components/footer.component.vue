<script setup lang="ts">
</script>

<template>

    <footer class="bg-slate-950 text-white pt-24 pb-12 mt-20 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1 brand-bg"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                <div class="space-y-6">
                    <div class="flex items-center gap-3">
                        <div class="brand-bg p-2 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-white w-6 h-6" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <span class="text-2xl font-black tracking-tighter">SECOP<span class="brand-text">A</span></span>
                    </div>
                    <p class="text-slate-400 text-sm leading-relaxed font-medium">
                        Transformando la complejidad de los datos públicos en inteligencia accionable para ciudadanos,
                        periodistas y empresas.
                    </p>
                    <div class="flex gap-4">
                        <a href="#"
                            class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#6e11b0] transition shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <path
                                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            </svg>
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#6e11b0] transition shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="space-y-6">
                    <h4 class="text-sm font-black uppercase tracking-[0.2em] brand-text">Recursos</h4>
                    <ul class="space-y-4 text-sm text-slate-400 font-bold uppercase tracking-wider">
                        <li><a href="#" class="hover:text-white transition">API Explorer</a></li>
                        <li><a href="#" class="hover:text-white transition">Datasets</a></li>
                        <li><a href="#" class="hover:text-white transition">Documentación SODA</a></li>
                        <li><a href="#" class="hover:text-white transition">Endpoints Oficiales</a></li>
                    </ul>
                </div>

                <div class="space-y-6">
                    <h4 class="text-sm font-black uppercase tracking-[0.2em] brand-text">Legal</h4>
                    <ul class="space-y-4 text-sm text-slate-400 font-bold uppercase tracking-wider">
                        <li><a href="#" class="hover:text-white transition">Términos de Uso</a></li>
                        <li><a href="#" class="hover:text-white transition">Política de Datos</a></li>
                        <li><a href="#" class="hover:text-white transition">Licencia MIT</a></li>
                        <li><a href="#" class="hover:text-white transition">Transparencia</a></li>
                    </ul>
                </div>

                <div class="space-y-6">
                    <h4 class="text-sm font-black uppercase tracking-[0.2em] brand-text">Newsletter</h4>
                    <p class="text-xs text-slate-500 font-medium italic">Recibe alertas sobre contrataciones de alto
                        valor.
                    </p>
                    <div class="flex gap-2">
                        <input type="email" placeholder="email@gov.co"
                            class="bg-slate-900 border-none rounded-xl px-4 py-3 text-sm flex-1 focus:ring-2 focus:ring-[#6e11b0] transition-all">
                        <button
                            class="brand-bg p-3 rounded-xl hover:opacity-80 transition shadow-lg shadow-[#6e11b0]/20">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="3">
                                <path d="M5 12h14m-7-7 7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-600">
                    <span class="flex items-center gap-2 italic"><span
                            class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        API Status: Operational</span>
                    <span class="text-slate-800">|</span>
                    <span>v2.4.0-PRO</span>
                </div>
                <p class="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                    © 2024 SECOP Analytics. Proyecto Independiente de Auditoría Ciudadana.
                </p>
            </div>
        </div>
    </footer>
</template>