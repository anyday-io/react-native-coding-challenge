# RN Coding Challenge
- Please do not take more than one day for this challenge.
- Please open a pull request against the `main` branch with your implementation
- Please feel free to ask any questions if you need more clarification.
- When you complete the challenge, please add a Markdown as below:
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

# Project Configuration:
- Typescript + ESLint + Prettier
- Packages
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

# Challenge
We'd like to display a list of characters from a US TV show called [Rick and Morty](https://www.adultswim.com/videos/rick-and-morty).
From this list, we're able to pull down to refresh the data, be able to paginate through pages. This list view also contains a search bar that let users to search for characters by their `name`.
Tapping on the character will navigate us to a detail screen that gives us more info about that selected character.