<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title text-center">{{ question }}</h3>
        </div>
        <div class="panel-body">
            <div class="col-xs-12 col-sm-12 text-center">
                <button
                    class="btn btn-primary btn-lg"
                    style="margin: 20px"
                    @click="onAnswer(btnData[0].correct)"
                >
                    {{ btnData[0].answer }}
                </button>
            </div>
        </div>
        <div class="panel-body">
            <div class="col-xs-12 col-sm-12 text-center">
                <button
                    class="btn btn-primary btn-lg"
                    style="margin: 20px"
                    @click="onAnswer(btnData[1].correct)"
                >
                    {{ btnData[1].answer }}
                </button>
            </div>
        </div>
        <div class="panel-body">
            <div class="col-xs-12 col-sm-12 text-center">
                <button
                    class="btn btn-primary btn-lg"
                    style="margin: 20px"
                    @click="onAnswer(btnData[2].correct)"
                >
                    {{ btnData[2].answer }}
                </button>
            </div>
        </div>
        <div class="panel-body">
            <div class="col-xs-12 col-sm-12 text-center">
                <button
                    class="btn btn-primary btn-lg"
                    style="margin: 20px"
                    @click="onAnswer(btnData[3].correct)"
                >
                    {{ btnData[3].answer }}
                </button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.panel {
    text-align: center;
    width: 100%;
    margin: auto;
    text-align: center;
}
.panel-heading {
    text-align: center;
    width: 100%;
}
.panel-title {
    background-color: #ccc;
    padding: 16px;
    font-weight: bold;
}
button {
    width: 110px;
    height: 50px;
    text-align: center;
    float: left;
}
</style>
<script>
const MODE_ADDITION = 1;
const MODE_SUBTRACTION = 2;
export default {
    data() {
        return {
            question: "Oop, an error ocurred",
            btnData: [
                { correct: true, answer: 0 },
                { correct: false, answer: 0 },
                { correct: false, answer: 0 },
                { correct: false, answer: 0 },
            ],
        };
    },
    methods: {
        generateQuestion() {
            const firstNumber = this.generateRandomNumber(1, 100);
            const secondNumber = this.generateRandomNumber(1, 100);
            const modeNumber = this.generateRandomNumber(1, 2);
            let correctAnswer = 0;
            switch (modeNumber) {
                case MODE_ADDITION:
                    correctAnswer = firstNumber + secondNumber;
                    this.question = `What's ${firstNumber} + ${secondNumber}?`;
                    break;
                case MODE_SUBTRACTION:
                    correctAnswer = firstNumber - secondNumber;
                    this.question = `What's ${firstNumber} - ${secondNumber}?`;
                    break;
                default:
                    correctAnswer = 0;
                    this.question = `Oop, An Error Occurred :/`;
            }
            this.btnData[0].answer = this.generateRandomNumber(
                correctAnswer - 10,
                correctAnswer + 10,
                correctAnswer
            );
            this.btnData[0].correct = false;
            this.btnData[1].answer = this.generateRandomNumber(
                correctAnswer - 10,
                correctAnswer + 10,
                correctAnswer
            );
            this.btnData[1].correct = false;
            this.btnData[2].answer = this.generateRandomNumber(
                correctAnswer - 10,
                correctAnswer + 10,
                correctAnswer
            );
            this.btnData[2].correct = false;
            this.btnData[3].answer = this.generateRandomNumber(
                correctAnswer - 10,
                correctAnswer + 10,
                correctAnswer
            );
            this.btnData[3].correct = false;
            const correctButton = this.generateRandomNumber(0, 3);
            this.btnData[correctButton].correct = true;
            this.btnData[correctButton].answer = correctAnswer;
        },
        generateRandomNumber(min, max, except) {
            const rndNumber = Math.round(Math.random() * (max - min)) + min;
            console.log(min, max, rndNumber);
            if (rndNumber == except) {
                return this.generateRandomNumber(min, max, except);
            }
            return rndNumber;
        },
        onAnswer(isCorrect) {
            this.$emit("answered", isCorrect);
        },
    },
    created() {
        this.generateQuestion();
    },
};
</script>
