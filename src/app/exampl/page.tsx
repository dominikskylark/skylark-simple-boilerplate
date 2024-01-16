import { readFolders } from "../../../lib/actions"

export default async function Page() {
    const foldi = await readFolders();
    return <p>{JSON.stringify(foldi)}</p>
}