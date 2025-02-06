class Payment {
    processPayment() {
        throw new Error('Method not implemented.');
    }
}

class CreditCardPayment extends Payment {
    processPayment() {
        console.log('Processing credit card payment.');
    }
}

class PayPalPayment extends Payment {
    processPayment() {
        console.log('Processing PayPal payment.');
    }
}

const payment1 = new CreditCardPayment();
const payment2 = new PayPalPayment();

payment1.processPayment();
payment2.processPayment();
