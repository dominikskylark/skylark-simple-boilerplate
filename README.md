# Skylark Simple Boilerplate
The boilerplate utilises GraphQL and Keystone. Before starting, make sure to copy the example .env file and point to the right Keystone instance. 

`cp .env.example .env.local `

## Authentication
The boilerplate uses the default Users table in Keystone and uses built-in Keystone authentication mutation with email and password. Then, it creates a cookie to store the session token provided by Keystone and utilises a HOC to validate the session with Keystone. 

### Current flaws
1. At the moment, the HOC checks for the session every single time a user navigates around the app. To improve that, we should be checking for token’s validity in pre-set intervals. 
2. There is no notification that there was no email/password match
3. There is no way to retrieve forgotten password
4. There is no way to sign up

## TODOs
1. Address the authentication flaws
2. Currently, the default Tailwinds Dashboard component sits in the main file
3. Implement a way to install components that Skylark develops over the course of time

## Version control
`0.1.0`: Higher Order Component used as a session management




# skylark-simple-boilerplate
