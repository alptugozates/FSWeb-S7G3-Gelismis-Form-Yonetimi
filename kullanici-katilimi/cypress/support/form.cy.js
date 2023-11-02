describe("Input kontrolleri", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })
    it("İsim input validation kontrolü", () => {
        cy.get("#name").type("")

        cy.get("#name-validation")
            .should("be.visible")
            .should("no.have.text", "")
    })


}) 