var BasePage = require('./basePage');
var inheritance = require('./inheritance');

function HomePage() {

    this.url = 'https://www.landsend.com/';

}

inheritance.inherits(BasePage,HomePage);
module.exports = new HomePage();
