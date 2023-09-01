<template>
    <div>
        <h1>Pagina de tareas</h1>
        <p>Formulario para la gestión de tareas de los estudiantes</p>

        <form action="javascript:void(0)" @submit="saveUser">
            <v-text-field label="Nombre" v-model="user.name" required  type="text" placeholder="Ingrese su nombre"></v-text-field>
            
            <v-text-field label="Correo" v-model="user.email" type="email" placeholder="Ingrese su correo" />
            
            <label class="form-label" for="txtTask">Descripción tarea</label>
            
            <v-textarea label="Descripción" v-model="user.description" cols="10" rows="3"></v-textarea>
            <v-checkbox v-model="user.conditions">
                <template v-slot:label>
                    <a href="http://google.com" target="_blank">Acepta terminos y condiciones</a>
                </template>
            </v-checkbox>

            <label>Tipo de tarea</label>
            <v-radio-group v-model="user.type">
            <v-radio label="Actividad" value="typeA"></v-radio>
            <v-radio label="Tarea" value="typeB"></v-radio>
            </v-radio-group>

            <v-select @change="updatePeriod()" label="Semestre" v-model="user.period" :items="['Semestre 1', 'Semestre 2', 'Semestre 3']"></v-select>


            <v-btn type="submit" >Enviar</v-btn>
        </form>

        <v-btn @click="getTasks()">Obtener tareas</v-btn>
        
        <ul>
            <li v-for="task in tasks" :key="task.id">
                <b>
                    {{ task.id }}
                </b>
                <br>
                {{ task.name }}
                <br>
                {{ task.period }}

            </li>
        </ul>
    </div>
</template>
<script setup>
import axios from "axios";
const user = ref({ conditions: true, period: '1'})
const tasks = ref({})

const saveUser = async () => {
    console.log(user.value);
    const result = await axios.post("http://localhost:3001/tasks", user.value)
    console.log(result);
}
const updatePeriod = () => {
    console.log(user.value);
}
const getTasks = async () => {
    try {
        const result = await axios.get("http://localhost:3001/tasks", user.value)
        tasks.value = result.data
    } catch (error) {
        console.log(error);
    }
}
</script>