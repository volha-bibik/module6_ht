var BasePage = require('./basePage');
var chai = require('chai');
var expect = require("chai").expect;
var EC = protractor.ExpectedConditions;
var inheritance = require('./inheritance');

var BagPage = function () {

  this.elements = {
    remove: element.all(by.buttonText("Remove")).get(1),
    edit: element.all(by.buttonText("Edit")).get(1),
    size10: element(by.linkText("10")),
    updateItem: element(by.buttonText("Update Item")),
    modalView: element(by.css(".fancybox-opened")),
    header: element(by.css("h2[class='ng-binding']")),
    products: element(by.css("div[ng-if='viewModel.isBagPopulated || viewModel.lastRemovedItem']"))
  }


    this.checkAmount = function (number) {
        var _this = this;

            return _this.elements["header"].getText()
              .then(function (text) {
                return expect(text).to.be.equal("SHOPPING BAG (" + number + ")");
            })
    };

    this.checkAttribute = function (attribute, content) {
        var _this = this;
        return browser.wait(EC.presenceOf(_this.elements["products"]), 10000)
          .then(function(){
              return element(by.css("li[ng-if='item." + attribute + "Name']>.ng-binding")).getText()
              .then(function (text) {
                return expect(text).to.be.equal(content);
              })
          });
    };

    this.updateItem = function () {
        var _this = this;
        return _this.elements["updateItem"].click()
          .then(function() {
            return browser.wait(EC.invisibilityOf(_this.elements["modalView"]), 10000);
          })
    };

};

inheritance.inherits(BasePage,BagPage);
module.exports = new BagPage();
