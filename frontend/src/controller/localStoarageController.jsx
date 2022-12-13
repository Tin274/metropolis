export const checkUserLoggedStatus = () => {
    const userStorage = localStorage.getItem("name");
    if (userStorage) {
        const status = JSON.parse(userStorage);
        return status.logged;
    }
};
