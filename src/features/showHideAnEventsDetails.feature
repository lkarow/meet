Feature: Show/hide an event's details
Scenario: An event element is collapsed by default
Given the user has started the app
When the user doesn't click on an event 
Then the event details will be collapsed

Scenario: User can expand an event to see its details
Given the user has started the app
When the user clicks on an event 
Then the event details will expand

Scenario: User can collapse an event to hide its details
Given the user has expanded the details of an event 
When the user clicks on the event details 
Then the event details will collapse
