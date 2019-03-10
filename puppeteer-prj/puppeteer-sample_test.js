
Feature('Puppeteer Sample');

Scenario('test something', (I) => {
    I.amOnPage('/');
    I.fillField({xpath: '//*[@id="id1"]'}, 'test');
    I.click({xpath: '//*[@id="id2"]'});
    I.selectOption({xpath: '/html/body/form/select'}, 'select3');
    I.click({xpath: '/html/body/form/input[4]'});
    I.see('Your message has been sent.');

});
