<script setup>
import { ref } from 'vue';
import Connexion from './Connexion.vue';


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
                    <div class="btn_connexion">TaskMaster</div>
                </div>
            </div>
            <div class="second_child">
                <div><Connexion/></div>
            </div>
        </div>
    </div>
</template>
