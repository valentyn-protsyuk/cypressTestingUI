//selectors
const selectField = "#newButtonName"
const selectBtn = "#updatingButton"

//testing data
const inputText = 'test'

describe("Testing textBox", () => {
    it("first test",()=>{
        //go to website
        cy.visit("/textinput")

        //perform action, test
        cy.get(selectField).type(inputText);
        cy.get(selectBtn).click()

        //check result, assertion
        cy.get(selectBtn).then(el=>{
            cy.wrap(el).should('have.text', inputText)
        })


        // cy.contains("button", inputText); //("selector", "value")
        // cy.get("#updatingButton").contains(inputText); // alternative 1
        // cy.get("#updatingButton").should("have.text",inputText); //alternative 2
        // cy.get("#updatingButton").then(element => { //alternative 3
        //     expect(element.text()).to.equal(inputText);
        // })
    })
})