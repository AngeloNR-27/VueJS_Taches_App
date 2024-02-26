<script setup>
import { ref } from 'vue';
import Inscription from '../components/Inscription.vue';
import Connexion from './Connexion.vue';

const showConnexion = ref(false);

const toggleComponent = () => {
  showConnexion.value = !showConnexion.value;
};
</script>

<template>
    <div class="first_container">
        <div class="child_container">
            <div class="first_child">
                <div class="logo">TaskMaster</div>
                <div class="description">
                    <div class="title">Bienvenu sur TaskMaster !</div>
                    <div class="slogan">
                        Dominez vos journées avec TaskMaster <br> Votre allié pour une productivité sans effort !
                    </div>
                    <div class="btn_connexion" @click="toggleComponent">Connexion</div>
                </div>
            </div>
            <div class="second_child">
                <!-- Use v-if and v-else to conditionally render components -->
                <div v-if="!showConnexion"><Inscription/></div>
                <div v-else><Connexion/></div>
            </div>
        </div>
    </div>
</template>
