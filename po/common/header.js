var EC = protractor.ExpectedConditions;

var Header = function () {

    this.elements = {
      women: element(by.css("#nav>.sticky-header>li:nth-child(2)")),
      men: element(by.css("#nav>.sticky-header>li:nth-child(3)"))
    }

      this.choose = function (elementName) {
        var _this = this;
          return _this.elements[elementName].click()
            .then(function() {
              return _this.elements[elementName].click()
                .then(function(){
                  return browser.wait(EC.urlContains(elementName), 10000)
                });
            });
        };

};

module.exports = new Header();
