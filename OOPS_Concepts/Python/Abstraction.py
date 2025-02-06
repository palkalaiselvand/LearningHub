# Abstraction in Python

from abc import ABC, abstractmethod

class Payment(ABC):
    @abstractmethod
    def process_payment(self):
        pass

class CreditCardPayment(Payment):
    def process_payment(self):
        print("Processing credit card payment.")

class PayPalPayment(Payment):
    def process_payment(self):
        print("Processing PayPal payment.")

payment1 = CreditCardPayment()
payment2 = PayPalPayment()

payment1.process_payment()
payment2.process_payment()
