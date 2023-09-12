<template>
    <v-layout class="rounded rounded-md">
        <v-app-bar :title="titleApp"></v-app-bar>
        <!-- <h1>{{ titleApp }}</h1> -->
        <v-navigation-drawer>
            <v-list>
                <!-- Navegación -->
                <v-list-item title="Inicio" to="/"></v-list-item>
                <v-list-item title="Tareas" to="/tareas"></v-list-item>
                <v-list-item title="Ayuda" to="/docs/ayuda"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center">
            <!-- slot: Carga el contenido de la página (pages/..)-->
            <slot />
        </v-main>
    </v-layout>
</template>
<script setup>
const titleApp = ref("App de Tareas")
let likes = ref(0)
const incrementLikes = () => {
    likes.value++
}
</script>
<style>
.links {
    margin: 15px;
}
</style>