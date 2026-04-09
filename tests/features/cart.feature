Feature: Cart functionality

  Scenario: User adds and removes products from cart
    Given I launch the application
    When I login with username "standard_user" and password "secret_sauce"
    Then I should be logged in successfully

    When I add product "Sauce Labs Backpack" to cart
    And I add product "Sauce Labs Bike Light" to cart
    Then cart count should be "2"

    When I open the cart
    Then I should see 2 items in cart

    When I remove product "Sauce Labs Backpack"
    Then I should see 1 items in cart