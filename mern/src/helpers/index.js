export const configHeaderToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.log("No Tiene Permiso");
        return false;
    }
    return {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };
};
