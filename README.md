# meet app

## Project description

This is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

### Feature 1: Filter events by city

#### Scenario 1: When user hasn't searched for a city, show upcoming events from all cities

Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

#### Scenario 2: User should see a list of suggestions when they searched for a city

Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

#### Scenario 3: User can select a city from the suggested list

Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

### Feature 2: Show/hide an event's details

#### Scenario 1: An event element is collapsed by default

Given the user has selected a city
When the user doesn’t click on an event
Then the event details will be collapsed

#### Scenario 2: User can expand an event to see its details

Given the user has searched for a city
When the user clicks on an event
Then the event details will expand

#### Scenario 3: User can collapse an event to hide its details

Given the user has clicked on an event
When the user clicks on the event details
Then the event details will collapse

### Feature 3: Specify number of Events

### Scenario 1: When user hasn’t specified a number, 32 is the default number

Given the user has not specified the numbers of events
When the user searches for events
Then 32 events will be listed per site

#### Scenario 2: User can change the number of events they want to see

Given the user sees the list of displayed events
When the user changes the number of events
Then the number of events will change accordingly

### Feature 4: Use the app when offline

#### Scenario 1: Show cached data when there’s no internet connection

Given the user has no internet connection
When the user starts the app
Then the app will operate with cached data

#### Scenario 2: Show error when user changes the settings (city, time range)

Given the user has no internet connection
When the user tries to change the settings
Then the app will display an error

### Feature 5: Data visualization

#### Scenario 1: Show a chart with the number of upcoming events in each city

Given the user has started the app
When the user has not searched for a city
Then a chart with the number of upcoming events will be displayed

## Built With

- Javascript
- React
