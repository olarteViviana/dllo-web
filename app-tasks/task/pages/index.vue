<template>
    <div>
        <center>
            <h1>Bienvenidos a la app de tareas</h1>
            <p>Esta es una aplicación que permite gestionar las tareas de los estudiantes</p>
            <br>
            <a href="/tareas">Click para iniciar</a>
            <br>
            <br>
            <NuxtLink to ="/tareas">
                click para iniciar
            </NuxtLink>
        </center>
    </div>
</template>
<script>
definePageMeta({
  layout: "blank",
});
</script>