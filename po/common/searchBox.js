var SearchBox = function () {

    this.searchInput = element.all(by.css('#site-search-input')).get(0);
    this.searchButton = element.all(by.css('.search-button')).get(0);

    this.performSearch = function (searchTerm) {
        var _this = this;
        return _this.searchInput.sendKeys(searchTerm)
            .then(function () {
                return _this.searchButton.click();
            });
    };

};

module.exports = new SearchBox();
