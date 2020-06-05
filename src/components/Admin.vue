<template>
    <div>
        <header class="masthead" style="background-image:url('assets/img/home-bg.jpg');">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <div class="site-heading">
                            <h1>Administrador</h1>
                            <span class="subheading">
                                <router-link class="text-muted" to="/administrador/simple">Administrador Simple </router-link>|
                                <router-link class="text-muted" to="/administrador/avanzado">Administrador Avanzado</router-link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8">               
                    <router-view></router-view>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>
