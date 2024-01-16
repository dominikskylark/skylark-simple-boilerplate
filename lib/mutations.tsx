const mutations = {
    loginWithCredentials: (email: FormDataEntryValue | null, password: FormDataEntryValue | null) => {
        const query = `mutation AuthenticateUserWithPassword{
            authenticateUserWithPassword(email: "${email}", password: "${password}") {
              ... on UserAuthenticationWithPasswordSuccess {
                item {
                  name
                }
                sessionToken
              }
            }
          }
          `

        return query;
    }
}

export default mutations;