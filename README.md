# RN Coding Challenge
- Please do not take more than 6 hours for this challenge.
- Please open a pull request against the `main` branch for your implementation
- Please feel free to ask any questions if you need more clarifications.
- When you complete the challenge, please add a Markdown to you PR as below:
```
# Description

- Briefly explain which problems (if any) you're running into
- Or briefly explain the additional technologies, extra packages (if any) you added
- Or anything that helps us to understand your approaches
- 
-

# Proof of Completeness

- Attach a screen recording of the running app to demonstrate your solution

```

# Project Configuration
- Typescript + ESLint + Prettier
- Installed Packages:
```
"dependencies": {
    "@react-navigation/native": "^6.0.8",
    "@react-navigation/native-stack": "^6.5.0",
    "@reduxjs/toolkit": "^1.8.0",
    "react": "17.0.2",
    "react-native": "0.67.3",
    "react-native-safe-area-context": "^4.1.2",
    "react-native-screens": "^3.13.0",
    "react-redux": "^7.2.6",
    "redux-saga": "^1.1.3"
},
```

# Our Challenge
We'll be using this public [Rick and Morty API](https://rickandmortyapi.com/) to feed data for our challenge

The first screen of the application will display a list of characters using this endpoint
```
GET: https://rickandmortyapi.com/api/character

Response
{
  "info": {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character/?page=2",
    "prev": null
  },
  "results": [
    // ...
  ]
}
```
The `results` will be an array of characters. Check out the [Character schema](https://rickandmortyapi.com/documentation/#character-schema)


Each list items will contain the character's profile image, name and status.
Example of how the character list item view looks:

<img src="./images/character_row.png" width="300">


The list view component of this screen will have the ability to
- show pending state when making API requests
- pull down to refresh the data
- paginate the data

At the top of the list view component, there will a search bar component, that lets user to filter for certain characters by `name`. Using this [Filter characters](https://rickandmortyapi.com/documentation/#filter-characters) endpoint.
```
GET: https://rickandmortyapi.com/api/character/?name=rick

Response
{
  "info": {
    "count": 29,
    "pages": 2,
    "next": "https://rickandmortyapi.com/api/character/?page=2&name=rick&status=alive",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        //...
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    },
    // ...
  ]
}
}
```

When tapping on the list view item, it navigates users to the second screen which displays the character's details such as: `image`, `name`, `status`, `species`, `type`, `gender`, `origin name`, `location name`, `episodes` in which the character appears. Please feel free to come up with a design to display these information.

We might need to refetch a single character if the data above are unavailable from previous request. You can get a single character by adding the `id` as a parameter: `/character/2`
```
GET: https://rickandmortyapi.com/api/character/2

Response:
{
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    // ...
  ],
  "url": "https://rickandmortyapi.com/api/character/2",
  "created": "2017-11-04T18:50:21.651Z"
}
```

# Things we will be assessing
- Using redux store, selectors and sagas OR MobX state tree (if you prefer)
- Using type definitions with Typescript
- Using API services to make requests
- Using model layer (if necessary)
- Using functional components or class components
- Using hooks
- Code structuring
- Using Stylesheet or styled components

# Troubleshooting
## I can't push my commits to the github. What can I do?
## Answer:
Our project was configured with a pre-push hook to validate your code, therefore you have to:
- Make sure you added mocks for the packages you installed, or your added tests pass by running `yarn test`
- Make sure your type check pass by running `yarn compile`
- Make sure you don't have any linting errors by running `yarn lint`