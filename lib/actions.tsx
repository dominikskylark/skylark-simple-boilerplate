'use server'
import { cookies } from 'next/headers'
const fs = require('node:fs');

export async function returnAsyncData(success: boolean, data: any) {
    if (success) {
        return { success: true, data: data }
    } else {
        return { success: false, data: { message: data } }
    }
}

export async function graphQLCall(query: string) {
    try {
        const data = await fetch(`${process.env.GRAPHQL_URL}`, {
            method: "POST",
            body: JSON.stringify({ query }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (data.ok) {
            const json = await data.json();

            return returnAsyncData(true, json)
        } else {
            return returnAsyncData(false, "Data unreadable")
        }
    } catch (e) {
        return returnAsyncData(false, "Problem with connecting to GraphQL");
    }
}

export async function graphQLAuthCall(query: string) {
    const sessionId = cookies().get("session");
    const token = sessionId?.value;

    try {
        const data = await fetch(`${process.env.GRAPHQL_URL}`, {
            method: "POST",
            body: JSON.stringify({ query }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        if (data.ok) {
            const json = await data.json();

            return returnAsyncData(true, json)
        } else {
            return returnAsyncData(false, "Data unreadable")
        }
    } catch (e) {
        return returnAsyncData(false, "Problem with connecting to GraphQL");
    }
}



export async function createACookie(name: string, value: string, secure: boolean) {

    cookies().set(name, value, { secure: secure, httpOnly: true })

}

export async function readACookie(name: string) {
    const cookiesF = cookies()
    const cookieExists = cookiesF.has(name)

    if (cookieExists) {
        return cookiesF.get(name)

    } else {
        return false;
    }

}

export async function whoAmI() {
    const cookiesList = cookies()
    const hasCookie = cookiesList.has('session');

    if (hasCookie) {
        const viewer = cookiesList.get("session");
        const details = viewer?.item;

        console.log(details);
        return;
    } else {
        return null;
    }
}


export async function readFolders() {
    const folderPath = './src/app/screens';
    const ruczka = __dirname
    const energa = ruczka.split("app")

    // const berlu = energa[0] + "app/" + "screens"
    // console.log("BERLUO", berlu)
    const juju = "/Users/dominik/Dev/eurohockey-platform/.next/server/app/screens"
    const buczka = fs.readdirSync(folderPath);


    return { bu: buczka }
}