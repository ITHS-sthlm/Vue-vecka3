/* Steg 1, skapa applikationen */
const app = Vue.createApp({});

/* Steg 2, skapa templates */
/* Skapar templates för varje rutt */

const About = { template: `<h1>Om</h1>` };
const Home = { template: `<h1>Hem</h1>` };
const Contact = { template: `<h1>Kontakt</h1>` };

/* Steg 3, skapa våra routes */

/* Skapar våra rutter och "talar" om vilka komponenter som ska visas */
const routes = [
    {
        component: About,
        path: '/about'
    },
    {
        component: Contact,
        path: '/contact'
    },
    {
        component: Home,
        path: '/'
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
