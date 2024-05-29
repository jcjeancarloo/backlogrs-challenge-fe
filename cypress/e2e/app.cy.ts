class PetAdoption {
  elements = {
    emailInput: () => cy.get('#email'),
    passwordInput: () => cy.get('#password'),
    submitBtn: () => cy.get('#submit-btn'),
    ctaBtn: () => cy.get('#cta-hero'),
  }

  typeEmail(text: string) {
    if (!text) return
    this.elements.emailInput().type(text)
  }

  typePassword(text: string) {
    if (!text) return
    this.elements.passwordInput().type(text)
  }

  clickSubmit() {
    this.elements.submitBtn().click()
  }

  clickCta() {
    this.elements.ctaBtn().click()
  }
}

const petAdoption = new PetAdoption()

describe('Pet Adotion', () => {
  describe('Autasdsaa', () => {
    const input = {
      email: '',
      password: '',
    }
    it('Give I am on the main page', () => {
      cy.visit('/')
    })

    it('Then I click the call to action button on hero section', () => {
      petAdoption.clickCta()
    })
  })
})
