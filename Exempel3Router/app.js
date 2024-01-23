/* Steg 1, skapa applikationen */
const app = Vue.createApp({});

/* Steg 2, skapa templates */
/* Skapar templates för varje rutt */
/* Lägger till params för att se vilken adress vi är inne på */
/* username kan heta vad somhelst */
const Sida = { template: `<h1>Sida {{ $route.params.sida }}</h1>` };


/* Steg 3, skapa våra routes */

/* Skapar våra rutter och "talar" om vilka komponenter som ska visas */
/* vi inför parameter (params) med ett kolon, allt efter det kan döpas till det som är mest lämpligt med
tanke på innehållet på just den sidan */
const routes = [
    {
        component: Sida,
        path: '/:a/:b/:c'
    }
];

/* Steg 4, implementera Vuerouter med dess förutsättningar */

/* Skapar förutsättningarna att använda Router i vår applikation */
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes
});

/* Steg 5, App use */
/* implementerar så kallat middleware och detta fallet vill vi använda(use)router */
app.use(router);

/* Steg 6, monterar */
app.mount('#app');
