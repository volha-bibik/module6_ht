var chai = require('chai');
var expect = chai.expect;
var EC = protractor.ExpectedConditions;
var inheritance = require('./inheritance');
var BasePage = require('./basePage');

function ProductPage() {

  this.elements = {
      addButton: element.all(by.buttonText('Add to Bag')).get(0),
      quantity: element.all(by.model("productSummaryCtrl.quantity")).get(0),
      continueShoppingButton: element(by.css('.continue-shopping-bt')),
      proceedToCheckoutButton: element(by.linkText('PROCEED TO CHECKOUT')),
      size9: element(by.linkText("9")),
      modalView: element(by.css(".fancybox-opened"))
  }


  this.setAmount = function (elementName, number) {
      var _this = this;
      return _this.elements[elementName].sendKeys(number);
  };

  this.addToBag = function () {
      var _this = this;
      return browser.executeScript("arguments[0].scrollIntoView(false);", _this.elements["addButton"])
        .then(function(){
          return browser.wait(EC.elementToBeClickable(_this.elements["addButton"]), 5000)
            .then(function(){
              return _this.elements["addButton"].click()
                .then(function() {
                  return browser.wait(EC.visibilityOf(_this.elements["modalView"]), 10000);
                })
            })
        })
  };

}

inheritance.inherits(BasePage,ProductPage);
module.exports = new ProductPage();
