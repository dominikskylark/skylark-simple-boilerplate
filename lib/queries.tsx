const queries = {
    checkSessionJWT: () => {
        const query = `query Query {
            authenticatedItem {
              ... on User {
                name
              }
            }
          }
          `
        return query;

    }

}

export default queries;