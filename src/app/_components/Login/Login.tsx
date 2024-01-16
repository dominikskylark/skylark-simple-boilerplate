import { createACookie, graphQLCall } from "../../../../lib/actions";
import mutations from "../../../../lib/mutations";
import { Button } from "../basic/button";
import { Field, Label } from "../basic/fieldset";
import { Input } from "../basic/input";

export default function Login() {

    async function logInWithCredentials(formData: FormData) {
        'use server'

        const form = {
            username: formData.get('username'),
            password: formData.get('password'),
        }

        const query = mutations.loginWithCredentials(form.username, form.password)

        const data = await graphQLCall(query)
        if (data.success) {

            const token = data.data.data.authenticateUserWithPassword.sessionToken;
            console.log("TOKNEO", data.data.data.authenticateUserWithPassword)
            createACookie("session", token, true);
        } else {
            return null;
        }
    }


    return <>
        <div className="h-screen flex justify-center items-center">
            <form action={logInWithCredentials}>
                <Field>
                    <Label>Username</Label>
                    <Input name="username" />
                </Field>
                <Field>
                    <Label>Password</Label>
                    <Input type="password" name="password" />
                </Field>
                <Button type="submit">Login</Button>
            </form>
        </div>
    </>
}