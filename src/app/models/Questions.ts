export class Questions{
    question: string = "";
    answer: string = "";
    option1: string = "";
    option2: string = "";
    option3: string = "";
    option4: string = "";
    answerExplanation: string = "";
    languages: string = "";
    index!: number;
}

export class AnswersClass{
    correctAnswer!:string;
    questionNumber!:string;
}