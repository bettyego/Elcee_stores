import { useState } from 'react';

const NigerianPaymentMethods = ({ total, onPaymentSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState('paystack');
  const [isProcessing, setIsProcessing] = useState(false);
  const [bankTransferDetails, setBankTransferDetails] = useState(false);

  const whatsappLink = "http://wa.me/2348153387439";

  const handlePaystackPayment = async () => {
    setIsProcessing(true);
    
    // Simulate Paystack payment processing
    setTimeout(() => {
      window.location.href = whatsappLink;
      setIsProcessing(false);
    }, 2000);
  };

  const handleFlutterwavePayment = async () => {
    setIsProcessing(true);
    
    // Simulate Flutterwave payment processing
    setTimeout(() => {
      window.location.href = whatsappLink;
      setIsProcessing(false);
    }, 2000);
  };

  const handleBankTransfer = () => {
    setBankTransferDetails(true);
  };

  const handlePayment = () => {
    if (paymentMethod === 'paystack') {
      handlePaystackPayment();
    } else if (paymentMethod === 'flutterwave') {
      handleFlutterwavePayment();
    } else if (paymentMethod === 'bank-transfer') {
      handleBankTransfer();
    } else if (paymentMethod === 'cod') {
      window.location.href = whatsappLink;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">Choose Payment Method</h3>
      
      <div className="space-y-4 mb-6">
        {/* Paystack */}
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
          <label htmlFor="paystack" className="flex items-center cursor-pointer">
            <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium mr-3">
              Paystack
            </div>
            <div>
              <p className="font-medium">Card Payment</p>
              <p className="text-sm text-gray-600">Visa, Mastercard, Verve, Bank Transfer</p>
            </div>
          </label>
        </div>
        
        {/* Flutterwave */}
        <div className="flex items-center">
          <input
            type="radio"
            id="flutterwave"
            name="payment"
            value="flutterwave"
            checked={paymentMethod === 'flutterwave'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-3"
          />
          <label htmlFor="flutterwave" className="flex items-center cursor-pointer">
            <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium mr-3">
              Flutterwave
            </div>
            <div>
              <p className="font-medium">Multiple Payment Options</p>
              <p className="text-sm text-gray-600">Cards, USSD, Bank Transfer, Mobile Money</p>
            </div>
          </label>
        </div>

        {/* Bank Transfer */}
        <div className="flex items-center">
          <input
            type="radio"
            id="bank-transfer"
            name="payment"
            value="bank-transfer"
            checked={paymentMethod === 'bank-transfer'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-3"
          />
          <label htmlFor="bank-transfer" className="flex items-center cursor-pointer">
            <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium mr-3">
              Bank Transfer
            </div>
            <div>
              <p className="font-medium">Direct Bank Transfer</p>
              <p className="text-sm text-gray-600">Transfer directly to our bank account</p>
            </div>
          </label>
        </div>

        {/* Cash on Delivery (Local only) */}
        <div className="flex items-center">
          <input
            type="radio"
            id="cod"
            name="payment"
            value="cod"
            checked={paymentMethod === 'cod'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-3"
          />
          <label htmlFor="cod" className="flex items-center cursor-pointer">
            <div className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-medium mr-3">
              Cash on Delivery
            </div>
            <div>
              <p className="font-medium">Pay When You Receive</p>
              <p className="text-sm text-gray-600">Available in Imo State only</p>
            </div>
          </label>
        </div>
      </div>

      {/* Bank Transfer Details */}
      {bankTransferDetails && paymentMethod === 'bank-transfer' && (
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
          <h4 className="font-bold text-blue-800 mb-3">Bank Transfer Details</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">Bank Name:</span>
              <span>First Bank of Nigeria</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Account Name:</span>
              <span>Elcee Stores</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Account Number:</span>
              <span className="font-mono">3085467291</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Amount:</span>
              <span className="font-bold">₦{total.toLocaleString()}</span>
            </div>
          </div>
          <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-yellow-800 text-sm">
              <strong>Important:</strong> Please send proof of payment to our WhatsApp: +234 815 338 7439
            </p>
          </div>
        </div>
      )}

      {/* Payment Summary */}
      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Total Amount:</span>
          <span className="text-2xl font-bold text-purple-600">₦{total.toLocaleString()}</span>
        </div>
        
        {paymentMethod !== 'bank-transfer' ? (
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
              `Pay ₦${total.toLocaleString()} with ${
                paymentMethod === 'paystack' ? 'Paystack' : 
                paymentMethod === 'flutterwave' ? 'Flutterwave' : 
                'Cash on Delivery'
              }`
            )}
          </button>
        ) : (
          <div className="text-center">
            <p className="text-green-600 font-medium mb-2">
              ✓ Bank transfer details displayed above
            </p>
            <p className="text-sm text-gray-600">
              Your order will be processed once payment is confirmed
            </p>
          </div>
        )}
      </div>

      {/* Security Notice */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          🔒 Your payment information is secure and encrypted
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Powered by Nigerian payment gateways
        </p>
      </div>

      {/* Popular Nigerian Banks */}
      <div className="mt-4 pt-4 border-t">
        <p className="text-sm text-gray-600 mb-2">Supported Nigerian Banks:</p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-gray-100 px-2 py-1 rounded">GTBank</span>
          <span className="bg-gray-100 px-2 py-1 rounded">First Bank</span>
          <span className="bg-gray-100 px-2 py-1 rounded">Access Bank</span>
          <span className="bg-gray-100 px-2 py-1 rounded">UBA</span>
          <span className="bg-gray-100 px-2 py-1 rounded">Zenith Bank</span>
          <span className="bg-gray-100 px-2 py-1 rounded">Fidelity Bank</span>
          <span className="bg-gray-100 px-2 py-1 rounded">FCMB</span>
          <span className="bg-gray-100 px-2 py-1 rounded">Kuda</span>
          <span className="bg-gray-100 px-2 py-1 rounded">Opay</span>
          <span className="bg-gray-100 px-2 py-1 rounded">PalmPay</span>
        </div>
      </div>
    </div>
  );
};

export default NigerianPaymentMethods;
