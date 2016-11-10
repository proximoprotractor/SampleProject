/**
 * Helper functions used by different specs are defined in this class
 */
// Added a line
"use strict";

function getRandomString(charLength){
    var randomText = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < charLength; i++)
        randomText += possible.charAt(Math.floor(Math.random() * possible.length));
    return randomText;
}

/**
 * Returns a random integer between range [min, max] including both min and max
 * @param min - smallest integer of the range
 * @param max - largest integer of the range
 * @returns {*} - an integer between min and max (both inclusive)
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// This function requires webelement as parameter and will take you that particular webelement on page
function scrollToWebElement(el){
    return browser.executeScript('arguments[0].scrollIntoView()', el.getWebElement());
}

// This function will scroll to bottom of page
function scrollToBottom(){
    return browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
}

function scrollToTop(){
    return browser.executeScript('window.scrollTo(0,0)');
}

module.exports = {
    getRandomString: getRandomString,
    getRandomInteger: getRandomInteger,
    scrollToWebElement: scrollToWebElement,
    scrollToBottom: scrollToBottom,
    scrollToTop: scrollToTop
};
