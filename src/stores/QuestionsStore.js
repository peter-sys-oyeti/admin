import { types } from "mobx-state-tree";

export const Question = types.model("Question", {
    id: types.string,
    question: types.string
});

export const QuestionsStore = types
    .model("QuestionsStore", {
        questions: types.array(Question)
    })
    .actions(self => ({
        addQuestion(question) {
            self.questions.push(question);
        }
    }));
