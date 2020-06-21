import InitApi from "./InitApi";

export const getDepartments = () => {
    const Departments = InitApi.parse.Object.extend("Departments");
    const departments = new InitApi.parse.Query(Departments);
    return departments.limit(20).find();
};
