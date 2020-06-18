import { types } from "mobx-state-tree";

export const Question = types.model("Question", {
    id: types.string,
    quizId: types.string,
    content: types.string
});

export const QuestionsStore = types
    .model("QuestionsStore", {
        questions: types.array(Question),
        question: types.maybe(Question)
    })
    .actions(self => ({
        addQuestion(question) {
            self.questions.push(question);
        },
        selectedQuestion(question) {
            self.question = question;
        }
    }));
