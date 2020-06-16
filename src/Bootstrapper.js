import InitApi from "./api/InitApi";

import { quizzesLiveQuery, getQuezzes } from "./api/Quizzes";
import { questionsLiveQuery, getQuestions } from "./api/Questions";

export const bootStore = store => {
    quizzesFunctions(store);
};

const quizzesFunctions = store => {
    getQuezzes().then(quizzes => {
        quizzes.forEach(quiz => {
            store.quizzesStore.addQuiz({
                id: quiz.id,
                name: quiz.get("name")
            });
        });
    });

    quizzesLiveQuery().on("create", quiz => {
        store.quizzesStore.addQuiz({
            id: quiz.id,
            name: quiz.get("name")
        });
    });
};

const questionsFunctions = store => {
    getQuestions().then(questions => {
        questions.forEach(question => {
            store.questionsStore.addQuiz({
                id: question.id,
                quizId: quisetion.get("quizId")
            });
        });
    });
};
