# Project level description

Expo app using Expo 40.* and AWS Amplify Datastore.

## Backend - Basic DataStore
Open the GraphQL schema in the amplify/backend/api/datasourcename/schema.graphql. You can use the sample or the one below that will be used in this example:

```graphql
type Click @model {
  id: ID!
  time: Int!
}
```
See more here: [Datastore example](https://github.com/dabit3/amplify-datastore-example/blob/master/README.md)

# GOCO - Handbook 📚

## Prerequisite
If you are reading this, you are probably familiar with some Object Oriented Programming. In order to participate in a team and have a sufficient development process, team-members should have a shared philosophy of how they develop software.


For this handbook you will need to know the SOLID principles:
- `S`ingle-Responsibility
- `O`pen/Close
- `L`iskov Substitution Principle
- `I`nterface Segregation Principle
- `D`ependency Inversion Principle

Find your own source and notes, which can explain these principles in whatever way suiting you.

Furthermore, we strongly advise you to read the Clean Code book. This philosophy is industry standard and has been for many years, so acquiring this knowledge is a great investment. 

## Definitions
- `task` a single capability in a software. Fx: *make a link to the Home page on the about page.*
- `feature` a feature for the in a software, formed by a set of tasks. Fx: *adding multiple profile images*
- `epic` a use case of the software. Fx: *making a signup flow*


## Sprints 
TBA

## Design
Projects, developed by the team, should use the [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/).

### Components
 - All Components must be in a file that starts with a capital letter. (Fx: `BlueButton.tsx`)
 - `atoms` should be files that are purely styled components 
 - `molecules` are components that are small, but contain more than just styled components
 - `organisms` are more complex components that contain multiple molecules/atoms

 ### Pages
 - All pages should have a folder inside content that encapsulates page specific code.

### Project structure

```
├── backend                 # Server/service related application
... 
├── client                  # Frontend related application
│   ├── components          # Atomic design
│   ├── globals             # Fx: colors.tsx, categories.json etc.
│   ├── index               # A single entry file
│   ├── models/types        # Model/types/codegen-files/data classes etc.
│   ├── pages               # Navigable singe views which implements components (top levels) 
│   ├── styles              # Getting started guide
│   └── ...                 # package declaration and config/env files.
└── readme.md
```

 
## Code Style
Per default do not use eslint or equivalent. Hover some projects will use eslint locally or on 'Git-Commit-Time'.

 - Do not outcomment code. Use the vcs! If you commit regularly, you can always go back and find old code.
 - Try to make the code compact. Do not have lines with one character. Fx:
 
 ```html
//Illegal 
<a 
    href="https://www.facebook.com/fundbrickscompany/"
    rel="nofollow noopener"
> 
    <FBIcon 
        name={"facebook"}
    />
</a> 

//Legal 
<a href="https://www.facebook.com/fundbrickscompany/" rel="nofollow noopener"><FBIcon name={"facebook"} /></a>

```


## Git
By default you should as minimum have a production and a development environment and for most projects you will also need a staging environment. *Although, in early stages of a project a production environment might seem overkill. However the team should make the system environment compatible from the beginning.* 

You **MUST ALWAYS** commit your code after finishing a task. Before you commit it is important that you **test** the functionality of the part of the system you've worked with. (**TASKS**)

You should create a branch for each feature. After you merge the branch into the development branch it is important that you **test the functionality on the development branch**. (**FEATURES**)

When merging the development branch into the staging/production environment, you should always **test the whole system**. (**EPICS**)

## Security 🛡
Never ever include any .env files, api keys or equivalent.


## Technical setup
#### Engine: `v12.16.*`
#### React-version `=<16.8`
#### AWS CLI `2`
#### npm `6.14.*`
#### amplify cli `~4.27.2`


`npm i` to install the project

`npm run start` to start the project
