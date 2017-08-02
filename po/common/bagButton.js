var EC = protractor.ExpectedConditions;

var BagButton = function () {

    this.bagButton = element(by.css('.shopping-bag-link'));

    this.openBag = function () {
        var _this = this;
            return browser.executeScript("arguments[0].scrollIntoView(false);", _this.bagButton)
              .then(function(){
                  return browser.wait(EC.elementToBeClickable(_this.bagButton), 10000)
                    .then(function(){
                      return _this.bagButton.click();
                    })
              })

            };

};

module.exports = new BagButton();
