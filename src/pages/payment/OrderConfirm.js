import React from 'react';

const OrderConfirmationPage = () => {
  return (
    <div className="max-w-md mx-auto mt-8 text-center">
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Success!</strong>
        <span className="block sm:inline"> Your order has been placed successfully.</span>
      </div>
      <div className="mt-4">
        <p>Thank you for shopping at Travtronics Ecom. We appreciate your business!</p>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/012/528/063/small/verified-icon-illustration-guaranteed-stamp-or-verified-badge-trendy-design-vector.jpg" alt="Green tick" className="mx-auto mt-4 h-16" />
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
