<template>
    <div @click="emit" class="v-card">
        <svg v-if="display" viewBox="0 0 100 100" v-html="boatInfos.svg" style="width: 100%; height: 100%"/>
        <div v-else>{{ boatInfos.type }}</div>
    </div>
</template>

<script lang="ts">
    import { IBoat } from "@/interfaces";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component({})
    export default class App extends Vue {
        @Prop({ required: true, type: Object })
        protected readonly boatInfos!: IBoat;

        @Prop({ required: true, type: Boolean })
        protected readonly display!: boolean;

        protected emit(): void {
            this.$emit("click", this.boatInfos.type);
        }
    }
</script>

<style scoped>
    .v-card {
        width: 100%;
        height: 100%;
    }
</style>
