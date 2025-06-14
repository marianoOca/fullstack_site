import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(getAuth(), function(user) {
            setUser(user);
            setIsLoading(false);
        });

        // neccesary to avoid onAuthStateChanged causing memory leakage
        return unsuscribe;
    }, []);

    return { isLoading, user };
}

export default useUser;