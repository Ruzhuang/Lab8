describe('Party Horn Tests', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
    });

    it('First Test', () => {
        expect(true).to.equal(true);
    });

    it('Slider changes when volume input changes', () => {
        cy.get('#volume-number').clear().type('75');
        cy.get('#volume-slider').then(function($el) {
            expect($el).to.have.value(75)
        })
    })

    it('Volume input changes when slider changes', () => {
        cy.get('#volume-slider').invoke('val', 33).trigger('input');
        cy.get('#volume-number').then(function($el) {
            expect($el).to.have.value(33)
        })
    })

    it('Volume of <audio> changes when slider changes', () => {
        cy.get('#volume-slider').invoke('val', 33).trigger('input');
        cy.get('audio').then(function($el) {
            expect($el).to.have.prop('volume', 0.33);
        })
    })

    it('Image and sound sources change when select the party horn radio button', () => {
        cy.get('#radio-party-horn').check();
        cy.get('#sound-image').then(function($el) {
            expect($el).to.have.attr('src', "./assets/media/images/party-horn.svg")
        });
        cy.get("#horn-sound").then(function($el) {
            expect($el).to.have.attr('src', "./assets/media/audio/party-horn.mp3")
        })
    })

    it('Volume image changes when increasing volumes', () => {
        cy.get('#volume-number').clear().type('0');
        cy.get("#volume-image").then(function($el) {
            expect($el).to.have.attr('src', "./assets/media/icons/volume-level-0.svg");
        });
        cy.get('#volume-number').clear().type('3');
        cy.get("#volume-image").then(function($el) {
            expect($el).to.have.attr('src', "./assets/media/icons/volume-level-1.svg");
        });
        cy.get('#volume-number').clear().type('40');
        cy.get("#volume-image").then(function($el) {
            expect($el).to.have.attr('src', "./assets/media/icons/volume-level-2.svg");
        });
        cy.get('#volume-number').clear().type('89');
        cy.get("#volume-image").then(function($el) {
            expect($el).to.have.attr('src', "./assets/media/icons/volume-level-3.svg");
        })
    });
    it('Honk button is disabled when the textbox input is empty or a non-number', () => {
        cy.get('#volume-number').clear();
        cy.get("#honk-btn").then(function($el) {
            expect($el).to.have.attr('disabled', "disabled");
        });
        cy.get('#volume-number').clear().type('e3');
        cy.get("#honk-btn").then(function($el) {
            expect($el).to.have.attr('disabled', "disabled");
        });
    });

    it('An error is shown when you type a number outside of the given range for the volume textbox input', () => {
        cy.get('#volume-number').clear().type('133');
        cy.get("input:invalid").then(function($el) {
            expect($el).to.have.id("volume-number");
        });
        cy.get('#volume-number').clear().type('-2');
        cy.get("input:invalid").then(function($el) {
            expect($el).to.have.id("volume-number");
        });
    });


});