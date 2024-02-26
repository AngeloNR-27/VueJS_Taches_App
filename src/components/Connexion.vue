<template>
    <div class="first_container">
        <div>
            <div class="content_right">
                <h1>Connectez vous</h1>
                <div class="form">
                    <form id="loginForm" @submit.prevent="submitForm">
                        <input type="text" v-model="userName" placeholder="Nom">
                        <input type="email" v-model="userEmail" placeholder="Email">
                        <input type="password" v-model="userPassword" placeholder="Mot de passe">
                        <button type="submit" class="btn_inscription">Connexion</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
            userEmail: '',
            userPassword: '',
            // Valeurs codées pour la comparaison
            codedUserName: 'admin',
            codedUserEmail: 'admin@gmail.com',
            codedUserPassword: 'password123'
        };
    },
    methods: {
        submitForm() {
            // Comparer les valeurs entrées par l'utilisateur avec les valeurs codées
            if (this.userName === this.codedUserName &&
                this.userEmail === this.codedUserEmail &&
                this.userPassword === this.codedUserPassword) {
                
                // Si les informations correspondent, rediriger vers Tasks.vue
                this.$router.push({ name: 'tasks' });
            } else {
                // Gérer les erreurs de connexion  ici
                alert('Nom d\'utilisateur, email ou mot de passe incorrect.');
            }
        }
    }
};
</script>
