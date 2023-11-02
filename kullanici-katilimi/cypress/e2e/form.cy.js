describe("Input kontrolleri", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })
    it("İsim input validation kontrolü", () => {

        cy.get("#name-input")
            .clear()
        cy.get("#name-validation")
            .should("be.visible")
            .and("have.text", "İsim, Soyisim adresi boş bırakılamaz. ")



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
    it("Email hatalıysa hata mesajı gönder", () => {
        cy.get("#email-input")
            .type("invalidemail")
        cy.get("#email-validation")
            .should("be.visible")
            .should("have.text", "Lütfen geçerli bir mail adresi giriniz.")


    })
    it("Email formatı doğruysa hata mesajı gönderme", () => {
        cy.get("#email-input")
            .type("validemail@gmail.com")
        cy.get("email-validation")
            .should(".not.be.visible");
    })
    it("Email formatı boşsa hata gönder", () => {
        cy.get("#email-input")
            .clear()
        cy.get("#email-validation")
            .should("be.visible")
            .and("have.text", "Email adresi boş bırakılamaz. ")
    })

    it("Checkbox işaretlenmediyse hata mesajı gönder", () => {
        cy.get("#terms")
            .uncheck()
        cy.get("#terms-validation")
            .should("be.visible")
            .and("have.text", "Kayıt sözleşmesini kabul etmeden işlem gerçekleştirilemez.")

    })
    it("Checkbox işaretliyse hata mesajı gönderme", () => {
        cy.get("#terms")
            .check()
        cy.get("#terms-validation")
            .should("not.be.visible")
    })




})

