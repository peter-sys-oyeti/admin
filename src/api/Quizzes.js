import InitApi from "./InitApi";

export const saveQuiz = newQuiz => {
    const Quizzes = InitApi.parse.Object.extend("Quizzes");
    const quiz = new Quizzes();
    return quiz.save(newQuiz);
};

export const getQuezzes = () => {
    const Quizzes = InitApi.parse.Object.extend("Quizzes");
    const quizzes = new InitApi.parse.Query(Quizzes);
    return quizzes.limit(500).find();
};

export const quizzesLiveQuery = () => {
    let query = initApi.parse.Query("Quizzes");
    let subscription = initApi.client.subscribe(query);
    return subscription;
};
