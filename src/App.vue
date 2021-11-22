<template>
    <div id="app">
        <game />
    </div>
</template>

<script lang="ts">
    import Game from "@/Game.vue";
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: { game: Game },
    })
    export default class App extends Vue {}
</script>

<style>
    body {
        font-family: "Roboto Mono", sans-serif;
        background: #2f2d28;
        color: #f2e8cf;
        margin-bottom: 0;
    }
    @font-face {
        font-family: "Roboto Mono";
        src: local("Roboto Mono"),
            url(assets/fonts/RobotoMono-VariableFont_wght.ttf)
                format("truetype");
    }
</style>
