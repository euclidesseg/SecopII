<template>
    <footer class="bg-slate-950 text-white pt-24 pb-12 mt-20 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1 bg-primary-c-c"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <!-- Grid Ajustado a 5 columnas para desktop -->
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
                
                <!-- Columna 1: Branding -->
                <div class="space-y-6 md:col-span-3 lg:col-span-1">
                    <div class="flex items-center gap-3">
                        <div class="bg-primary-c-c p-2 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-white w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <span class="text-2xl font-black tracking-tighter">SECOP<span class="brand-text">A</span></span>
                    </div>
                    <p class="text-slate-400 text-sm leading-relaxed font-medium">
                        Herramienta independiente de consulta abierta para facilitar la visualización de procesos de contratación pública en Colombia.
                    </p>
                    <div class="flex gap-4">
                       <a href="https://www.linkedin.com/in/e-perez-in" target="_blank" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#6e11b0] transition shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="https://github.com/euclidesseg" target="_blank" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#6e11b0] transition shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                        </a>
                        <a href="https://www.youtube.com/@euclidesperez699" target="_blank" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#6e11b0] transition shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
                        </a>
                    </div>
                </div>

                <!-- Columna 2: Fuentes de Datos -->
                <div class="space-y-6">
                    <h4 class="text-sm font-black uppercase tracking-[0.2em] brand-text">Fuentes</h4>
                    <ul class="space-y-4 text-xs text-slate-400 font-bold uppercase tracking-wider">
                        <li><a href="https://www.datos.gov.co/" target="_blank" class="hover:text-white transition italic">Portal Datos Abiertos</a></li>
                        <li><a href="https://dev.socrata.com/foundry/www.datos.gov.co/p6dx-8zbt" target="_blank" class="hover:text-white transition italic">Socrata API</a></li>
                        <li><a href="https://www.colombiacompra.gov.co/transparencia/datos-abiertos" target="_blank" class="hover:text-white transition italic">CCE Transparencia</a></li>
                    </ul>
                </div>

                <!-- Columna 3: Recursos -->
                <div class="space-y-6">
                    <h4 class="text-sm font-black uppercase tracking-[0.2em] brand-text">Recursos</h4>
                    <ul class="space-y-4 text-xs text-slate-400 font-bold uppercase tracking-wider">
                        <li><a href="https://github.com/euclidesseg/SecopII" class="hover:text-white transition">Código Abierto</a></li>
                    </ul>
                </div>

                <!-- NUEVA Columna 4: Legalidad (La que pediste) -->
                <div class="space-y-6">
                    <RouterLink :to="{name:'legal'}" class="text-sm font-black uppercase tracking-[0.2em] brand-text hover:text-white transition">Legal & Transparencia</RouterLink>
                </div>

                <!-- Columna 5: El Proyecto -->
                <div class="space-y-6">
                    <h4 class="text-sm font-black uppercase tracking-[0.2em] brand-text">Sobre el sitio</h4>
                    <ul class="space-y-4 text-xs text-slate-400 font-bold uppercase tracking-wider">
                        <li><a href="#" class="hover:text-white transition">¿Cómo funciona?</a></li>
                        <li>Objetivo: Educativo y de Información</li>
                    </ul>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-600">
                    <span class="flex items-center gap-2 italic">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Estado: Operacional
                    </span>
                    <span class="text-slate-800">|</span>
                    <span>Versión 1.0 Beta</span>
                </div>
                <!-- TEXTO LEGAL REFORZADO -->
                <p class="text-[10px] text-slate-600 font-bold uppercase tracking-widest text-center md:text-right max-w-2xl">
                    © 2026 SECOPA. Proyecto independiente con fines educativos y de transparencia. 
                    No somos una entidad gubernamental, ni estamos vinculados oficialmente con la Agencia Nacional de Contratación Pública. 
                    La veracidad de los datos depende de la fuente original (Socrata/Datos Abiertos).
                </p>
            </div>
        </div>
    </footer>
</template>