import InitApi from "./InitApi";

export const saveQuestion = newQuestion => {
    const Questions = InitApi.parse.Object.extend("Questions");
    const question = new Questions();
    return question.save(newQuestion);
};

export const getQuestions = () => {
    const Questions = InitApi.parse.Object.extend("Questions");
    const questions = new InitApi.parse.Query(Questions);
    return questions.limit(500).find();
};

export const questionsLiveQuery = () => {
    let query = new InitApi.parse.Query("Questions");
    let subscription = InitApi.client.subscribe(query);
    return subscription;
};
