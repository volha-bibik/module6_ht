var BasePage = require('./basePage');
var chai = require('chai');
var expect = require("chai").expect;
var inheritance = require('./inheritance');
var EC = protractor.ExpectedConditions;

function CatalogPage() {

  this.elements = {
    resultProducts: element.all(by.css(".product-title")),
    regular: element(by.linkText("Regular")),
    topRated: element(by.linkText("Top Rated")),
    shoes: element(by.linkText("Shoes")),
    sneakers: element(by.linkText("Sneakers")),
    bags: element(by.linkText("Bags")),
    hightolow: element(by.linkText("Price High To Low")),
    casual: element(by.linkText("Casual"))
  }


  this.takeResult = function (title, number) {
    var _this = this;
    return _this.elements["resultProducts"].get(+number - 1).getText()
      .then(function (text) {
        return expect(text).to.be.equal(title);
      })
    }

  this.openProduct = function (number) {
    var _this = this;
    let currentTitle;
    return browser.getTitle()
      .then(function(title){
        currentTitle = title;
        return browser.wait(EC.visibilityOf(_this.elements["resultProducts"].get(+number - 1)))
          .then(function(){
            return browser.executeScript("arguments[0].scrollIntoView(false);", _this.elements["resultProducts"].get(+number - 1))
              .then(function(){
                return browser.wait(EC.elementToBeClickable(_this.elements["resultProducts"].get(+number - 1).element(by.css("a"))))
                  .then(function(){
                    return _this.elements["resultProducts"].get(+number - 1).element(by.css("a")).click()
                      .then(function() {
                        return browser.wait(function() {
                          return browser.getTitle().then(function (title) {
                              return title !== currentTitle;
                          });
                      }, 10000)
                  })
                })
            })
          })
        })
    }

}
                    //                  elementToBeClickable

inheritance.inherits(BasePage,CatalogPage);
module.exports = new CatalogPage();
