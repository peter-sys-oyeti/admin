import InitApi from "./api/InitApi";

import { quizzesLiveQuery, getQuezzes } from "./api/Quizzes";

export const bootStore = store => {
    quizzesFunctions(store);
};

const quizzesFunctions = store => {
    getQuezzes().then(quizzes => {
        quizzes.forEach(quiz => {
            store.quizzesStore.addQuiz({
                id: quiz.id,
                name: quiz.name
            });
        });
    });

    quizzesLiveQuery().on("create", quiz => {
        store.quizzesStore.addQuiz({
            id: quiz.id,
            name: quiz.name
        });
    });
};
