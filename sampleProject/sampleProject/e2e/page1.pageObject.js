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

page1.prototype.clickFirstCheckBox = function() {
    return element(by.xpath("//demo-include/div/div/div/fieldset/div/div[1]/md-checkbox")).click();
};

page1.prototype.isSelectedFirstCheckBox = function() {
    return element(by.xpath("//demo-include/div/div/div/fieldset/div/div[1]/md-checkbox")).getAttribute('aria-checked').then(function(checkboxValue){
        console.log("Following is the checkbox value: " +checkboxValue);
            if(checkboxValue == "true") return true;
            else return false;
        })
};

page1.prototype.clickFirstRadioButton = function() {
    return element(by.css("#radio_11")).click();
};

page1.prototype.isSelectedDemoRadioButton = function() {
    return element(by.css("#radio_11")).getAttribute("class").then(function(radioButtonValue){
        if (radioButtonValue.indexOf("md-checked") >-1) return true;
        else return false;
        })
};

page1.prototype.getIndexBasedOnName = function(name) {
    return element.all(by.xpath("//tbody/tr/td[1]")).getText().then(function(nameArr){
        for (var i=0;i<nameArr.length;i++)
        {
            if(nameArr[i] == name)
                return i;
        }})
};

page1.prototype.getAgeBasedOnName = function(name) {
    return element.all(by.xpath("//tbody/tr/td[2]")).get(this.getIndexBasedOnName(name)).getText().then(function(age){
        return age;
    })
};

page1.prototype.getValueByCSS = function(name) {
    return element.all(by.xpath("//p")).last().getCssValue('background-color');

};


module.exports = page1;