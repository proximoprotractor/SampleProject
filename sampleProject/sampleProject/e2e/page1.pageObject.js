"use strict";

var extend = require('extend');

var defaultConfig = {
	pageUrl:                             "http://gmail.com",
    submitYourAngularJsAppButtonCSS :     ".btn-large.btn-info",
    searchQueryTextBoxCSS:               ".search-query",
    paragarpthTextCSS:                     '.bwa-project-desc.ng-binding'
    };
	
	function page1(selectorConfig) {
    if (!(this instanceof page1)) {
        return new page1(selectorConfig);
    }
    extend(this, defaultConfig);

    if (selectorConfig) {
        extend(this, selectorConfig);
    }
}

page1.prototype.clickSubmitYourAppButton = function() {
    element(by.css(this.submitYourAngularJsAppButtonCSS)).click();
};


page1.prototype.enterTextInSearchEditBox = function(searchText,index) {
    if (index == undefined) index =0;
    /*var elem = element(by.css(this.searchQueryTextBoxCSS));
    elem.sendKeys(searchText);
    elem.sendKeys(protractor.Key.ENTER); */
    element.all(by.css(this.searchQueryTextBoxCSS)).get(index).sendKeys(searchText+protractor.Key.ENTER);
};

page1.prototype.getTextFromParaByLastIndex = function() {
    return element.all(by.css(this.paragarpthTextCSS)).last().getText();
};


page1.prototype.IsPresentSubmitYourAngularJSAppButton = function() {
    return element(by.css(this.submitYourAngularJsAppButtonCSS)).isDisplayed();
};


page1.prototype.selectValueFromThemeHackyDropdown = function(optionName) {
    element(by.css(".dropdown-toggle")).click();
    return element(by.linkText(optionName)).click();
};

page1.prototype.getTextFromThemeHackyDropdown = function() {
    element(by.css(".dropdown-toggle")).click();
    return element(by.css('.dropdown-menu')).getText();
};

module.exports = page1;