describe("Input kontrolleri", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })
    it("İsim input validation kontrolü", () => {

        cy.get("#name-input").type("ads")
            .type("{backspace}{backspace}{backspace}")


        cy.get("#name-validation")
            .should("be.visible")
            .should("have.text", "İsim alanı boş bırakılamaz")


    })
    it("Şifre input validation kontrolü", () => {

        cy.get("#password-input")
            .type("12312")
        cy.get("#password-validation")
            .should("be.visible")
            .should("have.text", "İsim alanı 6 karakterden az olamaz.")

        cy.get("#password-input")
            .clear()
        cy.get("#password-validation")
            .should("be.visible")
            .should("have.text", "Şifre alanı boş bırakılamaz")


    })
    it("Email input validation kontrolü", () => {
        cy.get("#email-input")
            .type("@gmail.com")
            .clear()
        cy.get("#email-validation")
            .should("be.visible")
            .should("have.text", "Eposta formatı hatalıdır")

    })

})

