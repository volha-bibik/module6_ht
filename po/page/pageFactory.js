var HomePage = require('./homePage'),
    CatalogPage = require('./catalogPage'),
    ProductPage = require('./productPage'),
    BagPage = require('./bagPage');

var PageFactory = function(){

    var _this = this;

    _this.currentPage = 'undefined';

    _this.getPageObjects = function(page){
        var pages = {
            'home': HomePage,
            'catalog': CatalogPage,
            'product': ProductPage,
            'bag': BagPage
        };
        if(!pages[page]){
            throw new Error('Wrong page name: '+pages[page]);
        }
        _this.currentPage = pages[page];
        return _this.currentPage;
        };
};

module.exports = new PageFactory();
