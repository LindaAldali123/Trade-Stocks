<template>
    <div class="container">
        <div class="row">
            <div
                class="
                    col-xs-12 col-sm-8 col-sm-offset-2 col-md-12 col-md-offset-3
                "
            >
                <h1>The Super Quiz</h1>
            </div>
        </div>
        <hr />
        <div class="row">
            <div
                class="
                    col-xs-12 col-sm-8 col-sm-offset-2 col-md-12 col-md-offset-3
                "
            >
                <component
                    :is="mode"
                    @answered="answered($event)"
                    @confirmed="mode = 'app-question'"
                ></component>
            </div>
        </div>
    </div>
</template>
<script>
import Question from "@/components/Question.vue";
import Answer from "@/components/Answer.vue";
export default {
    data() {
        return {
            mode: "app-question",
        };
    },
    methods: {
        answered(isCorrect) {
            if (isCorrect) {
                this.mode = "app-answer";
            } else {
                this.mode = "app-question";
                alert("Wrong,Try Again!");
            }
        },
    },
    components: {
        AppQuestion: Question,
        AppAnswer: Answer,
    },
};
</script>
<style lang="scss" scoped>
.container {
    margin-top: 20px;
    background-image: linear-gradient(transparent, #3a3a3d);
}
h1 {
    color: rgb(40, 40, 41);
    font-weight: bolder;
    font-size: 38px;
}
</style>
