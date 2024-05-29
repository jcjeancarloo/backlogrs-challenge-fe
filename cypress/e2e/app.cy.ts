describe('Pet Adotion', () => {
  it('should redirect user to find pets page when clicks on call to action "Adotar um pet"', () => {
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.visit('/')
    cy.get('#cta-hero').click()
  })

  it('should redirect user to auth page when clicks on adopt button on pets card', () => {
    cy.get('#adoption-btn').click()
  })

  it('should fill the fields, auth successfully', () => {
    cy.get('#email').should('exist').type('email@email.com')
    cy.get('#password').should('exist').type('1234')
    cy.get('#submit-btn').click()
  })

  it('should click on find pets menu', () => {
    cy.get('#find-pets').wait(1000).click()
  })

  it('should click on adopt button and show the confirmation modal', () => {
    cy.get('#heart-adopt').click()
  })
  it('should accept the terms and click on "Adotar"', () => {
    cy.get('#terms').click()
    cy.get('#confirm-adoption').click()
  })
})
