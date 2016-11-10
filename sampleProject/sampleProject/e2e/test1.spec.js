"use strict";

var Page1 = require('./page1.pageObject.js'),
	Page2 = require('./page2.pageObject.js'),
    util = require('../helpers/util.js');
	
	describe('Dummy Test Suite', function() {
            var pag1obj, pag2obj;

            beforeAll(function() {
                Page1 = new Page1();
                Page2 = new Page2();
                console.log("We are in Before All");
                browser.manage().window().maximize();
            });

            afterAll(function() {


                console.log("We are in  After All");
            });

            beforeEach(function() {

                console.log("We are in  before each");
            });

            it("Should verify that user is able to launch login page", function() {
                browser.ignoreSynchronization = true;

                browser.get("http://www.thiagofelix.com/hackynote/app/#/");
                expect(Page1.getAllValuesFromThemeHackyDropdown()).toContain('Swiss');

                //browser.pause();
                //browser.sleep(5000);
                //expect(Page1.getTextFromParaByLastIndex()).toBe('aaa');
                //expect(Page1.IsPresentSubmitYourAngularJSAppButton()).toBe(false);
            });
});
