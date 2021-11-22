<template>
    <div class="game">
        <card class="title" :display="!mode" :boat-infos="title" />
        <div class="cards">
            <v-card
                v-for="(card, i) in cards"
                :ref="`cards`"
                :key="i"
                :display="mode"
                :boat-infos="card"
                @click="onClick(i)"
            />
        </div>
        <span style="font-size: 1.5rem">Streak Count: {{ streakCount }}</span>
        <span v-if="answerFound" @click="next" class="nextButton">Next</span>
    </div>
</template>

<script lang="ts">
    import { boats } from "@/boats";
    import { IBoat } from "@/interfaces";
    import VCard from "@/components/v-card.vue";
    import { Component, Ref, Vue } from "vue-property-decorator";

    const NB_CARDS = 4;
    const NEXT_TIMEOUT = 750;

    @Component({
        components: { "v-card": VCard },
    })
    export default class Game extends Vue {
        @Ref("cards") protected cardsRef!: VCard[];

        protected answerFound = false;
        protected cards: IBoat[] = [];
        protected mode = false;
        protected nextTimeOut = 0;
        protected streakCount = 0;
        protected title!: IBoat;
        protected titleId = 0;

        protected created(): void {
            this.next();
        }

        protected getTitle(): void {
            this.titleId = Math.floor(Math.random() * this.cards.length);
            this.title = this.cards[this.titleId];
        }

        protected next(): void {
            this.getCards();
            this.getTitle();

            for (const card of this.cardsRef) {
                const htmlEl = card.$el as HTMLElement;
                htmlEl.style.backgroundColor = "#2f2d28";
            }
            this.answerFound = false;
            this.updateMode();
        }

        protected onClick(id: number): void {
            if (!this.answerFound) {
                const htmlEl = this.cardsRef[id].$el as HTMLElement;
                if (id === this.titleId) {
                    console.log("Nice");
                    htmlEl.style.backgroundColor = "#a7c957";
                    this.answerFound = true;
                    this.streakCount += 1;

                    this.nextTimeOut = setTimeout(
                        (): void => this.next(),
                        NEXT_TIMEOUT
                    );
                } else {
                    htmlEl.style.backgroundColor = "#bc4749";
                    this.streakCount = 0;
                }
            }
        }

        protected updateMode(): void {
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            this.mode = Math.floor(Math.random() * 2) >= 1;
        }

        private getCards(): void {
            let nbTaken = 0;
            const ids: number[] = [];
            this.cards = [];

            while (nbTaken < NB_CARDS) {
                const ID = Math.floor(Math.random() * boats.length);
                if (!ids.includes(ID)) {
                    this.cards.push(boats[ID]);
                    ids.push(ID);
                    nbTaken += 1;
                }
            }
        }
    }
</script>

<style>
    .game {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .game > * + * {
        margin-top: 1rem;
    }

    .title {
        width: 100%;
        height: 8rem !important;
        font-size: 3rem;
    }

    .nextButton {
        background-color: #9c9686;
        font-size: 1.5rem;
        padding: 0.5rem;
    }

    .cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;

        border-bottom: solid 3px #504c44;
        border-left: solid 3px #504c44;
    }

    .cards > * {
        border-top: solid 3px #504c44;
        border-right: solid 3px #504c44;
        justify-self: stretch;
        align-self: stretch;

        height: 14rem !important;
        width: 16rem !important;
        font-size: 1.75rem;
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
