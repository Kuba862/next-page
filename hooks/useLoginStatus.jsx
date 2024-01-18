import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useLoginStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get("NextToken");
        setIsLoggedIn(token);
    }, []);

    return isLoggedIn;
}