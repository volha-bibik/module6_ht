var Header = require('../common/header.js');
var Bag = require('../common/bagButton.js');
var SearchBox = require('../common/searchBox.js');
var chai = require('chai');
var expect = require("chai").expect;
var EC = protractor.ExpectedConditions;

var BasePage = function () {};

    BasePage.prototype.searchBox = SearchBox;
    BasePage.prototype.header = Header;
    BasePage.prototype.bag = Bag;

    BasePage.prototype.visit = function (url) {
        return browser.get(url);
    };

    BasePage.prototype.checkPageTitle = function (pageTitle) {
        return browser.getTitle().then(function (title) {
            return expect(title).to.be.equal(pageTitle);
        });
    };

    BasePage.prototype.clickElement = function (elementName) {
      var _this = this;
      return browser.wait(EC.elementToBeClickable(_this.elements[elementName]), 10000)
        .then(function(){
          return browser.executeScript("arguments[0].scrollIntoView(false);", _this.elements[elementName])
            .then(function(){
              return _this.elements[elementName].click();
            })

        })
      };


module.exports = BasePage;
