import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')
const SobreMi = () => import('./components/SobreMi')
const Contacto = () => import('./components/Contacto')
const Post = () => import('./components/Post')
import Articulo from './components/Articulo'
import Admin from './components/Admin'
import AdminAvanzado from './components/AdminAvanzado'
import AdminSimple from './components/AdminSimple'
import NotFound from './components/NotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
        routes: [
            {
                path: "/",
                name: "Inicio",
                component: Inicio
            },
            {
                path: "/home",
                name: "Home",
                redirect: to => {
                    console.log(to)
                    return {name: 'Inicio'}
                    }
            },
            {
                path: "/inicio",
                name: "Inicio",
                redirect: to => {
                    console.log(to)
                    return {name: 'Inicio'}
                    }
            },
            {
                path: "/portada",
                name: "Portada",
                redirect: to => {
                    console.log(to)
                    return {name: 'Inicio'}
                    }
            },
            {
                path: "/sobremi",
                name: "SobreMi",
                component: SobreMi,
                alias: ['/acerca']
            },
            {
                path: "/contacto",
                name: "Contacto",
                component: Contacto,
                alias: ['/contactame']
            },
            {
                path: "/post",
                name: "Post",
                component: Post,
                children: [
                {
                    path: ":articulo",
                    name: "Articulo",
                    component: Articulo,               
                },
                ]
            },
            {
                path: "/administrador",
                name: "Admin",
                component: Admin,
                children: [
                    {
                        path: "simple",
                        name: "AdminSimple",
                        component: AdminSimple,
                    },
                    {
                        path: "avanzado",
                        name: "AdminAvanzado",
                        component: AdminAvanzado,
                    }
                ]
            },
            {
                path: "*",
                name: "NotFound",
                component: NotFound,
            }            
        ]
})