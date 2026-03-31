<script setup lang="ts">

const navigateSection = (hash: string) => {
    const target = document.querySelector(hash);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
};
</script> 
<template>
    <div class="m-full px-4 flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto pt-32">

        <!-- Navegación Lateral Interna (Anclajes) -->
        <aside class="lg:w-1/4">
            <div class="sticky top-20 space-y-2">
                <h2 class="text-xs font-bold text-gray-700 uppercase tracking-widest px-4 mb-4">Secciones Legales</h2>
                <nav class="flex flex-col">
                    <a href="#" @click.prevent="navigateSection('#descargo')"
                        class="sidebar-link block px-4 py-3 rounded-r-xl text-gray-600 hover:bg-gray-50 transition-all font-medium active">
                        Descargo de Responsabilidad
                    </a>
                    <a href="#" @click.prevent="navigateSection('#terminos')"
                        class="sidebar-link block px-4 py-3 rounded-r-xl text-gray-600 hover:bg-gray-50 transition-all font-medium">
                        Términos de Uso
                    </a>
                    <a href="#" @click.prevent="navigateSection('#datos')"
                        class="sidebar-link block px-4 py-3 rounded-r-xl text-gray-600 hover:bg-gray-50 transition-all font-medium">
                        Tratamiento de Datos
                    </a>
                    <a href="#" @click.prevent="navigateSection('#fuentes')"
                        class="sidebar-link block px-4 py-3 rounded-r-xl text-gray-600 hover:bg-gray-50 transition-all font-medium">
                        Fuentes Oficiales
                    </a>
                </nav>

                <div class="mt-8 p-6 bg-primary-c/10 rounded-2xl border border-purple-100">
                    <p class="text-xs text-purple-700 font-bold mb-2 uppercase">Aviso Educativo</p>
                    <p class="text-xs text-purple-600 leading-relaxed">
                        Este sitio web es una herramienta de visualización independiente. Los datos son propiedad de sus
                        respectivas fuentes gubernamentales.
                    </p>
                </div>
            </div>
        </aside>

        <!-- Contenido Principal de Texto -->
        <div class="lg:w-3/4 space-y-16">

            <!-- Título Principal -->
            <section>
                <h1 class="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">Centro Legal y Transparencia</h1>
                <p class="text-xl text-gray-500 max-w-3xl leading-relaxed">
                    En SECOPA centralizamos los términos legales y las políticas de transparencia que rigen nuestra
                    plataforma educativa.
                </p>
            </section>

            <!-- 1. Descargo de Responsabilidad -->
            <section id="descargo" class="scroll-mt-10">
                <div class="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 legal-card">
                    <div class="flex items-center gap-4 mb-8">
                        <span
                            class="w-12 h-12 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center text-xl shadow-inner">
                            <i class="fas fa-exclamation-triangle"></i>
                        </span>
                        <h2 class="text-2xl font-bold text-gray-900">Descargo de Responsabilidad</h2>
                    </div>
                    <div class="prose prose-purple max-w-none text-gray-600 leading-relaxed space-y-4">
                        <p
                            class="font-semibold text-gray-800 italic border-l-4 border-primary-c pl-4 py-2 bg-primary-c/10 rounded-r-lg">

                            SECOPA no representa a la Agencia Nacional de Contratación Pública - Colombia Compra
                            Eficiente.
                        </p>
                        <p>
                            Los datos aquí visualizados son obtenidos de manera directa mediante protocolos de **Datos
                            Abiertos de Colombia**. No realizamos modificaciones sobre los registros originales de
                            contratación. Cualquier discrepancia o error en los montos, fechas o nombres de los
                            contratos debe ser validado en el portal oficial del SECOP II.
                        </p>
                    </div>
                </div>
            </section>

            <!-- 2. Términos de Uso -->
            <section id="terminos" class="scroll-mt-10">
                <div class="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 legal-card">
                    <div class="flex items-center gap-4 mb-8">
                        <span
                            class="w-12 h-12 bg-primary-c/10 text-purple-600 rounded-full flex items-center justify-center text-xl shadow-inner">
                            <i class="fas fa-file-contract"></i>
                        </span>
                        <h2 class="text-2xl font-bold text-gray-900">Términos de Uso</h2>
                    </div>
                    <div class="grid md:grid-cols-2 gap-8 text-gray-600">
                        <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <h3 class="font-bold text-gray-900 mb-2">Finalidad Educativa</h3>
                            <p class="text-sm">El acceso a SECOPA es libre y tiene como único fin la pedagogía sobre la
                                inversión pública en Colombia.</p>
                        </div>
                        <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <h3 class="font-bold text-gray-900 mb-2">Responsabilidad</h3>
                            <p class="text-sm">No somos responsables del uso posterior que los usuarios den a la
                                información consultada en esta plataforma.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 3. Tratamiento de Datos -->
            <section id="datos" class="scroll-mt-10">
                <div class="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 legal-card">
                    <div class="flex items-center gap-4 mb-8">
                        <span
                            class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xl shadow-inner">
                            <i class="fas fa-user-shield"></i>
                        </span>
                        <h2 class="text-2xl font-bold text-gray-900">Privacidad y Datos</h2>
                    </div>
                    <div class="text-gray-600 space-y-4">
                        <p>
                            De acuerdo con la **Ley 1581 de 2012**, SECOPA garantiza que no recolecta ni almacena
                            información personal de sus visitantes.
                        </p>
                        <div class="flex items-start gap-3 bg-emerald-50 p-4 rounded-xl text-emerald-800 text-sm">
                            <i class="fas fa-info-circle mt-1"></i>
                            <p>Las consultas realizadas no quedan vinculadas a su dirección IP ni a perfiles de usuario.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 4. Enlaces Oficiales -->
            <section id="fuentes" class="scroll-mt-10">
                <div class="bg-gray-900 rounded-3xl p-8 md:p-10 shadow-xl text-white">
                    <div class="flex items-center gap-4 mb-6">
                        <i class="fas fa-link text-purple-400"></i>
                        <h2 class="text-2xl font-bold">Validación Oficial</h2>
                    </div>
                    <div class="grid sm:grid-cols-2 gap-4">
                        <a href="https://www.colombiacompra.gov.co/" target="_blank"
                            class="flex items-center justify-between p-5 bg-gray-800 rounded-2xl hover:bg-purple-600 transition-all group">
                            <div class="flex flex-col">
                                <span class="font-bold">Colombia Compra Eficiente</span>
                                <span class="text-xs text-gray-400 group-hover:text-purple-100">Web oficial de la
                                    agencia</span>
                            </div>
                            <i class="fas fa-external-link-alt text-gray-500 group-hover:text-white"></i>
                        </a>
                        <a href="https://www.datos.gov.co/" target="_blank"
                            class="flex items-center justify-between p-5 bg-gray-800 rounded-2xl hover:bg-purple-600 transition-all group">
                            <div class="flex flex-col">
                                <span class="font-bold">Portal de Datos Abiertos</span>
                                <span class="text-xs text-gray-400 group-hover:text-purple-100">Dataset del SECOP
                                    II</span>
                            </div>
                            <i class="fas fa-external-link-alt text-gray-500 group-hover:text-white"></i>
                        </a>
                    </div>
                </div>
            </section>

            <div class="h-20"></div> <!-- Espaciador final -->
        </div>
    </div>
</template>

<style scoped>
.sidebar-link.active {
    color: #6d28d9;
    border-left: 4px solid #6d28d9;
    background-color: #f5f3ff;
}

.legal-card {
    transition: all 0.3s ease;
}

.legal-card:hover {
    border-color: #ddd6fe;
}
</style>