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
            store.questionsStore.addQuestion({
                id: question.id,
                quizId: question.get("quizId"),
                content: question.get("content")
            });
        });
    });

    questionsLiveQuery().on("create", question => {
        store.questionsStore.addQuestion({
            id: question.id,
            quizId: question.get("quizId"),
            content: question.get("content")
        });
    });
};
