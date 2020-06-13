import InitApi from "./InitApi";

export const saveNewQuestion = newQuestion => {
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
  let query = initApi.parse.Query("Questions");
  let subscription = initApi.client.subscribe(query);
  return subscription;
};
