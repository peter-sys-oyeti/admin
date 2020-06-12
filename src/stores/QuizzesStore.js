import { types } from "mobx-state-tree";

export const Quiz = types.model("Quiz", {
    id: types.string,
    name: types.string
});

export const QuizzesStore = types
    .model("QuizzesStore", {
        quizzes: types.array(Quiz)
    })
    .actions(self => ({
        addQuiz(quiz) {
            self.quizzes.push(quiz);
        }
    }));
