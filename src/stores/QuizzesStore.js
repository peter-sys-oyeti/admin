import { types } from "mobx-state-tree";

export const Quiz = types.model("Quiz", {
    id: types.string,
    name: types.string
});

export const QuizzesStore = types
    .model("QuizzesStore", {
        quizzes: types.array(Quiz),
        quiz: types.maybe(Quiz)
    })
    .actions(self => ({
        addQuiz(quiz) {
            self.quizzes.push(quiz);
        },
        selectedQuiz(quiz) {
            self.quiz = quiz;
        }
    }));
