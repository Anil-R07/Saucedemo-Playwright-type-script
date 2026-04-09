Feature: Sort by price functionality

    Scenario: User Sort by Low to high and add to cart
        Given I launch the application
        When I login with username "standard_user" and password "secret_sauce"
        Then I should be logged in successfully

        When I sort the product by "lohi" high to low
        And user validate the sorting order
        Then user add the lowest priced product to cart and get the name of product
        Then cart count should be "1"

        When I open the cart
        Then I validate lowest price product in cart