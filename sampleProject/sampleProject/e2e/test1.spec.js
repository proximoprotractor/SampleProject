"use strict";
var exec = require('child_process').execFile;

var Page1 = require('./page1.pageObject.js'),
	Page2 = require('./page2.pageObject.js'),
    util = require('../helpers/util.js'),
    testData = require('../helpers/testData.json');
	
	describe('Dummy Test Suite', function() {
            var pag1obj, pag2obj;

            beforeAll(function() {
                console.log("This is Praveena's project")
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


                browser.get("http://ng-table.com/#/");

                //Page1.clickFirstRadioButton();
                expect(Page1.getAgeBasedOnName("Christian")).toBe('aaa');
                //browser.pause();
                //browser.sleep(5000);
                //expect(Page1.getTextFromParaByLastIndex()).toBe('aaa');

            });

        it("CSS Value example", function() {

            browser.get("https://material.angularjs.org/latest/demo/colors");
            expect(Page1.getValueByCSS()).toBe('aaa');
        });

        fit("google log in", function() {
            browser.ignoreSynchronization = true;


            browser.get("http://www.gmail.com");

            element(by.css("#Email")).sendKeys(testData.userInfo[1].user);
           
        });

    });
