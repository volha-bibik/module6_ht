Feature: Find and work with some goods

  Background:
      Given I am on "home" page

      @search
  Scenario: Find goods using search box and filtering them
      When I perform a search of "dresses"
      Then I should see a title "Search: dresses"
      Then I click "regular" on "catalog"
      Then I click "topRated" on "catalog"
      Then I see result "Women's Elbow Sleeve Ponte Sheath Dress" at "1"

      @edit @catalog @bag
  Scenario: Find goods using catalog, filtering them, add to bag and update
      Then I choose "women"
      Then I should see a title "Women's Clothing, Shoes, Accessories | Lands' End"
      Then I click "shoes" on "catalog"
      Then I click "sneakers" on "catalog"
      When I open product "1"
      Then I click "size9" on "product"
      Then I add to bag
      Then I click "proceedToCheckoutButton" on "product"
      Then I check "size" "9"
      Then I click "edit" on "bag"
      Then I click "size10" on "bag"
      Then I update item
      Then I check "size" "10"

      @remove @catalog @bag
  Scenario: Find goods using catalog, filtering them, add to bag and remove
      Then I choose "men"
      Then I should see a title "Men's Clothing, Shoes & Accessories | Lands' End"
      Then I click "bags" on "catalog"
      Then I click "hightolow" on "catalog"
      When I open product "2"
      Then I should see a title "Stripe Duffle from Lands' End"
      Then I set "quantity" "3"
      Then I add to bag
      Then I click "continueShoppingButton" on "product"
      Then I open bag
      Then I check amount "3"
      Then I click "remove" on "bag"
      Then I check amount "0"
