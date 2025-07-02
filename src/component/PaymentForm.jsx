import { useState } from 'react';

const PaymentForm = ({ total, onPaymentSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleStripePayment = async () => {
    setIsProcessing(true);
    
    // Simulate Stripe payment processing
    setTimeout(() => {
      onPaymentSuccess({
        method: 'Stripe',
        transactionId: 'stripe_' + Date.now(),
        amount: total
      });
      setIsProcessing(false);
    }, 2000);
  };

  const handlePaystackPayment = async () => {
    setIsProcessing(true);
    
    // Simulate Paystack payment processing
    setTimeout(() => {
      onPaymentSuccess({
        method: 'Paystack',
        transactionId: 'paystack_' + Date.now(),
        amount: total
      });
      setIsProcessing(false);
    }, 2000);
  };

  const handlePayment = () => {
    if (paymentMethod === 'stripe') {
      handleStripePayment();
    } else {
      handlePaystackPayment();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <input
            type="radio"
            id="stripe"
            name="payment"
            value="stripe"
            checked={paymentMethod === 'stripe'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-3"
          />
          <label htmlFor="stripe" className="flex items-center">
            <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium mr-2">
              Stripe
            </span>
            Credit/Debit Card
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="radio"
            id="paystack"
            name="payment"
            value="paystack"
            checked={paymentMethod === 'paystack'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-3"
          />
          <label htmlFor="paystack" className="flex items-center">
            <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium mr-2">
              Paystack
            </span>
            African Payment Gateway
          </label>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-2xl font-bold text-purple-600">${total.toFixed(2)}</span>
        </div>
        
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-medium disabled:opacity-50"
        >
          {isProcessing ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Processing Payment...
            </div>
          ) : (
            `Pay $${total.toFixed(2)} with ${paymentMethod === 'stripe' ? 'Stripe' : 'Paystack'}`
          )}
        </button>
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          🔒 Your payment information is secure and encrypted
        </p>
      </div>
    </div>
  );
};

export default PaymentForm;
