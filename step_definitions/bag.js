var provider = require('../po/page/pageFactory');


var BagSteps = function () {

    this.Then(/^I check amount "([^"]*)"$/, function (number) {
        return provider.getPageObjects("bag").checkAmount(number);
    });

    this.Then(/^I check "([^"]*)" "([^"]*)"$/, function (attribute, content) {
        return provider.getPageObjects("bag").checkAttribute(attribute, content);
    });

    this.Then(/^I update item$/, function () {
        return provider.getPageObjects("bag").updateItem();
    });

};

module.exports = BagSteps;
