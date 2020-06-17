import InitApi from "./InitApi";

export const saveAnswer = newAnswer => {
    const Answers = InitApi.parse.Object.extend("Answers");
    const answer = new Answers();
    return answer.save(newAnswer);
};

export const getAnswers = () => {
    const Answers = InitApi.parse.Object.extend("Answers");
    const answers = new InitApi.parse.Query(Answers);
    return answers.limit(500).find();
};

export const answersLiveQuery = () => {
    let query = new InitApi.parse.Query("Answers");
    let subscription = InitApi.client.subscribe(query);
    return subscription;
};
