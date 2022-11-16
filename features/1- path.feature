Feature: Path

  Scenario: Page element display
   Given I am on "path" page
   Then I can see the "question" text displayed
   And I can see the "Advans description" text displayed
   And I can see the "Avisto description" text displayed
   And I can see the "Elsys-design description" text displayed
   And I can see the "Mecagine description" text displayed
   And I can see "Advans" photo dispayed
   
Scenario Outline: Text should be equal
   Given I am on "path" page
   Then I can see the "<label>" label is equal to "<text>"
     Examples:
              | label                    | text                                                                                                                                        | 
              | question                 | Where you want to go ?                                                                                                                      | 
              | Advans description       | ADVANS Group est un partenaire technologique de référence, spécialiste de l’ingénierie des systèmes électroniques, logiciels et mécaniques. |      
              | Avisto description       | AVISTO est une société d’ingénierie logicielle fondée et managée par des ingénieurs.                                                        | 
              | Elsys-design description | ELSYS Design est une société d’ingénierie spécialisée dans la conception des systèmes embarqués.                                            | 
              | Mecagine description     | MECAGINE est la branche d’ADVANS Group spécialisée dans la conception mécanique de pointe.                                                  | 

 Scenario: Text display
   Given I am on "path" page
   When I click on the "Advans" button
   Then I can see the "Advans web picture" web picture displayed
