import { types } from "mobx-state-tree";
import { QuizzesStore } from "./QuizzesStore";
import { QuestionsStore } from "./QuestionsStore";
import { AnswersStore } from "./AnswersStore";
import { UsersStore } from "./UsersStore";
import { DepartmentsStore } from "./DepartmentsStore";
export const RootStore = types.model("RootStore", {
    quizzesStore: types.optional(QuizzesStore, {}),
    questionsStore: types.optional(QuestionsStore, {}),
    answersStore: types.optional(AnswersStore, {}),
    usersStore: types.optional(UsersStore, {}),
    departmentsStore: types.optional(DepartmentsStore, {})
});
