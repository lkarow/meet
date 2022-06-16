Feature: Specify number of Events
Scenario: When user hasn't specified a number, 32 is the default number
Given the user is on the main page
When the user has not specified the numbers of events 
Then the default number of displayed events will be 32

Scenario: User can change the number of events they want to see
Given the user is on the main page
When the user changes the number of events 
Then the number of events will change accordingly
