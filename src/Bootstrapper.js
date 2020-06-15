import DatabaseInitializer from "./models/DatabaseInitializer";

import { getPharmacies } from "./models/PharmacyModel";

export const bootDatabase = (store, history) => {
    DatabaseInitializer.InitializeSchema();
    DatabaseInitializer.InitializeDatabase().then(result => {
        pharmacyFunction(DatabaseInitializer.database, store, history);
    });
};

const pharmacyFunction = (database, store, history) => {
    getPharmacies(database).then(pharmacies => {
        if (pharmacies.length <= 0) {
            history.push("/pharmacy");
        } else {
            store.pharmaciesStore.selectPharmacy(pharmacies[0]);
            history.push("/login");
        }
    });
};
