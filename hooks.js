module.exports = function () {

    this.After(function () {
        return browser.executeScript('window.localStorage.clear();')
            .then(function () {
                browser.manage().deleteAllCookies();
            });
    });

};
