Feature: Dashboard
 
Scenario: Text should be displayed
   Given I am on "dashboard" page
   Then I can see the "welcome" text displayed
   And I can see the "welcome description" text displayed
   And I can see the "coockies" text displayed
  
Scenario: Accept coockies
   Given I am on "dashboard" page
   When I click on the "agree" button
   Then I can see the "question" label is equal to "Where you want to go ?"

Scenario Outline: Text should be equal
    Given I am on "dashboard" page
    Then I can see the "<label>" label is equal to "<text>"
     Examples:
              | label               | text                                                                      |
              | welcome             | Welcome to my Android App                                                 |
              | welcome description | This is my first Android Application \n I'm using Appium to Test this App |      
              | coockies            | Nous prenons à coeur de protéger vos données                              | 

