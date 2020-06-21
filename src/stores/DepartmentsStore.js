import { types } from "mobx-state-tree";

export const Department = types.model("Department", {
    id: types.string,
    name: types.string
});

export const DepartmentsStore = types
    .model("DepartmentsStore", {
        departments: types.array(Department),
        department: types.maybe(Department)
    })
    .actions(self => ({
        addDepartment(department) {
            self.departments.push(department);
        },
        selectedDepartment(department) {
            self.department = department;
        }
    }));
