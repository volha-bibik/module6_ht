var provider = require('../po/page/pageFactory');


var ProductSteps = function () {

    this.Then(/^I set "([^"]*)" "([^"]*)"$/, function (elementName, number) {
        return provider.getPageObjects("product").setAmount(elementName, number);
    });

    this.Then(/^I add to bag$/, function () {
        return provider.getPageObjects("product").addToBag();
    });

    this.Then(/^I proceed to checkout$/, function () {
        return provider.getPageObjects("product").proceedToCheckout();
    });

};

module.exports = ProductSteps;
