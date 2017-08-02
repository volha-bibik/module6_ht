var provider = require('../po/page/pageFactory');


var CommonSteps = function () {

    this.Given(/^I am on "([^"]*)" page$/, function (pageName) {
          return provider.getPageObjects(pageName).visit(provider.currentPage.url);
    });

    this.When(/^I perform a search of "([^"]*)"$/, function (searchTerm) {
        return provider.currentPage.searchBox.performSearch(searchTerm);
    });

    this.Then(/^I should see a title "([^"]*)"$/, function (title) {
        return provider.currentPage.checkPageTitle(title);
    });

    this.Then(/^I click "([^"]*)" on "([^"]*)"$/, function (elementName, pageName) {
        return provider.getPageObjects(pageName).clickElement(elementName);
    });

    this.Then(/^I choose "([^"]*)"$/, function (elementName) {
        return provider.currentPage.header.choose(elementName);
    });

    this.Then(/^I open bag$/, function () {
        return provider.currentPage.bag.openBag();
    });

};

module.exports = CommonSteps;
