var provider = require('../po/page/pageFactory');


var CatalogSteps = function () {

    this.Then(/^I see result "([^"]*)" at "([^"]*)"$/, function (title, number) {
        return provider.getPageObjects("catalog").takeResult(title, number);
    });

    this.When(/^I open product "([^"]*)"$/, function (number) {
        return provider.getPageObjects("catalog").openProduct(number);
    });

};

module.exports = CatalogSteps;
