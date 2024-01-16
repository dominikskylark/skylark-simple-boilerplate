"use server"

import { cookies } from "next/headers";
import { createACookie, graphQLAuthCall, readACookie } from "../../../../lib/actions";
import queries from "../../../../lib/queries";
import Login from "../Login/Login";

async function needsChecking() {
    'use server'
    const currentTime = Date.now();
    const cookieValue = await readACookie('status');

    if (!cookieValue) {
        createACookie('status', `${currentTime}`, true)
        return true
    } else {
        return true;
    }
    // if (!hasCheckJWT) {
    //     createACookie('status', `${currentTime}`, true)
    //     return true
    // } else {
    //     const cookieTime = readACookie('status');

    //     console.log("KS", cookieTime - currentTime);
    //     return true;
    // }
}
export default async function Session({ children }: { children: any }) {
    const cookiesList = cookies()
    const hasCookie = cookiesList.has('session')
    const hasCheckJWT = cookiesList.has('status')
    const query = queries.checkSessionJWT();
    const check = await needsChecking();
    // decode the JWT (decode base64) - claims, exp
    // Multiply the exp * 1000
    // if this has expired or we checked it within the last 15 mins: skip it
    // whoAmI function

    if (hasCookie) {
        const data = await graphQLAuthCall(query);
        const isLoggedIn = data.data.data.authenticatedItem;

        if (isLoggedIn) {
            return <>{children}</>

        } else {
            return <Login />
        }

    } else {
        return <Login />
    }

}