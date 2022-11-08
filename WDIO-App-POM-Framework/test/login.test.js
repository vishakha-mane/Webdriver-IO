const { assert } = require('chai')
const loginPage = require('./pages/login.page')
const configData=require('../config');

describe('Login page feature test', function(){

    it('verify login page title',function(){
        browser.url('/')
        browser.maximizeWindow()
        const title=loginPage.getPageTitle()
        console.log('login page title is',title);
        assert.equal('HubSpot Login',title, 'title is not found')
    })

    it('verify sign up link', function(){
        assert.equal(true, LoginPage.isSignUpLinkExist(),'sign up Link is not present')
    })

    it('verify login', function(){
       LoginPage.doLogin('vishakhamane04@gmail.com','Test@1234')
    })








})