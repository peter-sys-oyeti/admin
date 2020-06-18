import { types } from "mobx-state-tree";

export const Answer = types.model("Answer", {
    id: types.string,
    questionId: types.string,
    content: types.string,
    type: types.string
});

export const AnswersStore = types
    .model("AnswersStore", {
        answers: types.array(Answer)
    })
    .actions(self => ({
        addAnswer(answer) {
            self.answers.push(answer);
        }
    }));
