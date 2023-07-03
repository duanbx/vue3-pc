/*
 * @Author: 段本显
 * @FilePath: \Vue3\cypress\e2e\home.cy.ts
 * @Date: 2023-07-01 19:21:50
 * @LastEditors: 段本显
 * @LastEditTime: 2023-07-01 19:22:02
 * @Email: duanbenxian@appiron.cn
 * 如果有bug，那肯定不是我的锅，噜噜噜
 */
describe('Home page', function () {
  it('Home page e2e', function () {
    cy.visit('/');

    cy.getById('count').should('include.text', 'count is 0');
    cy.getById('double_count').should('include.text', 'double count is 0');

    cy.getById('inc_btn').click();
    cy.getById('count').should('include.text', 'count is 1');
    cy.getById('double_count').should('include.text', 'double count is 2');

    cy.getById('inc_btn').click();
    cy.getById('count').should('include.text', 'count is 2');
    cy.getById('double_count').should('include.text', 'double count is 4');

    cy.getById('dec_btn').click();
    cy.getById('count').should('include.text', 'count is 1');
    cy.getById('double_count').should('include.text', 'double count is 2');
  });
});
