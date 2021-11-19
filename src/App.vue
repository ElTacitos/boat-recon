<template>
    <div id="app">
        <card class="title" :display="!mode" :boat-infos="title" />
        <div class="cards">
            <card
                v-for="(card, i) in cards"
                :key="i"
                :display="mode"
                :boat-infos="card"
                @click="onClick(i)"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { boats } from "@/boats";
    import Card from "@/components/v-card.vue";
    import { IBoat } from "@/interfaces";
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: { card: Card },
    })
    export default class App extends Vue {
        protected cards!: IBoat[] = [];
        protected cardsBackground = ["white","white","white","white"];
        protected title!: IBoat;
        protected titleId = 0;
        protected created(): void {
            this.getCards();
            console.log("created");
        }

        protected get mode(): boolean {
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            return Math.floor(Math.random() * 10) >= 4;
        }

        protected getTitle(): string {
            this.titleId = Math.floor(Math.random() * this.cards.length);
            this.title = this.cards[this.titleId];
        }

        protected onClick(id: number): void {
            if (id === this.titleId) {
                console.log("Nice");
                this.getCards();
            }
            else {
                this.cardsBackground[id] = "gray";
            }
        }

        private getCards(): void {
            let nbTaken = 0;
            const ids = [];
            this.cards = [];

            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            while (nbTaken < 4) {
                const ID = Math.floor(Math.random() * boats.length);
                if (!ids.includes(ID)) {
                    this.cards.push(boats[ID]);
                    ids.push(ID);
                    nbTaken += 1;
                }
            }
            this.cardsBackground = ["white","white","white","white"];
            this.getTitle();
        }
    }
</script>

<style>
    body {
        background-color: #8c8a93;
    }

    .title {
        width: 100%;
        height: 100px !important;
        border: solid cadetblue 1px;
    }

    .cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .cards > * {
        border: solid green 1px;
        justify-self: stretch;
        align-self: stretch;

        height: 200px !important;
    }

    .class1 {
        grid-column-start: 1;
        grid-row-start: 1;
    }

    .class2 {
        grid-column-start: 2;
        grid-row-start: 1;
    }

    .class3 {
        grid-column-start: 1;
        grid-row-start: 2;
    }

    .class4 {
        grid-column-start: 2;
        grid-row-start: 2;
    }
</style>
