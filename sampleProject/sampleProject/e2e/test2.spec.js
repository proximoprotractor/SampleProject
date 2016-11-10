"use strict";

var Page1 = require('./page1.pageObject.js'),
	Page2 = require('./page2.pageObject.js');
	
	describe('Dummy Test Suite', function() {
            var pag1obj, pag2obj;

            beforeAll(function() {
                Page1 = new Page1();
                Page2 = new Page2();
                console.log("We are in Before All of Spec2");
                browser.manage().window().maximize();
            });

            afterAll(function() {


                console.log("We are in  After All  of Spec2");
            });

            beforeEach(function() {

                console.log("We are in  before each  of Spec2");
            });

            it("Should verify that user is able to launch login page", function() {
            //browser.ignoreSynchronization = true;
                browser.get("https://builtwith.angularjs.org");
                Page1.clickSubmitYourAppButton();

            });
});
