import InitApi from "./api/InitApi";

import { quizzesLiveQuery, getQuezzes } from "./api/Quizzes";
import { questionsLiveQuery, getQuestions } from "./api/Questions";
import { answersLiveQuery, getAnswers } from "./api/Answers";
import { getUsers, usersLiveQuery } from "./api/Users";
import { getDepartments } from "./api/Departments";

export const bootStore = store => {
    quizzesFunctions(store);
    questionsFunctions(store);
    answersFunctions(store);
    usersFunction(store);
    departmentsFunction(store);
};

const quizzesFunctions = store => {
    getQuezzes().then(quizzes => {
        quizzes.forEach(quiz => {
            store.quizzesStore.addQuiz({
                id: quiz.id,
                name: quiz.get("name")
            });
        });
    });

    quizzesLiveQuery().on("create", quiz => {
        store.quizzesStore.addQuiz({
            id: quiz.id,
            name: quiz.get("name")
        });
    });
};

const questionsFunctions = store => {
    getQuestions().then(questions => {
        questions.forEach(question => {
            store.questionsStore.addQuestion({
                id: question.id,
                quizId: question.get("quizId"),
                content: question.get("content")
            });
        });
    });

    questionsLiveQuery().on("create", question => {
        store.questionsStore.addQuestion({
            id: question.id,
            quizId: question.get("quizId"),
            content: question.get("content")
        });
    });
};

const answersFunctions = store => {
    getAnswers().then(answers => {
        answers.forEach(answer => {
            store.answersStore.addAnswer({
                id: answer.id,
                questionId: answer.get("questionId"),
                content: answer.get("content"),
                type: answer.get("type")
            });
        });
    });

    answersLiveQuery().on("create", answer => {
        store.answersStore.addAnswer({
            id: answer.id,
            questionId: answer.get("questionId"),
            content: answer.get("content"),
            type: answer.get("type")
        });
    });
};

const usersFunction = store => {
    getUsers().then(users => {
        users.forEach(user => {
            store.usersStore.addUser({
                id: user.id,
                username: user.get("username")
            });
        });
    });

    usersLiveQuery().on("create", user => {
        store.usersStore.addUser({
            id: user.id,
            username: user.get("username")
        });
    });
};

const departmentsFunction = store => {
    getDepartments().then(departments => {
        departments.forEach(department => {
            store.departmentsStore.addDepartment({
                id: department.get("id"),
                name: department.get("name")
            });
        });
    });
};
