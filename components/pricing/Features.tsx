// components/Features.tsx
export default function Features() {
    return (
      <div className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold">Why Choose Our Platform?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <div className="w-72 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">📍 Real-Time Tracking</h3>
            <p className="mt-2 text-gray-600">Know exactly where your shipments are at any moment.</p>
          </div>
          <div className="w-72 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">💳 Secure Payments</h3>
            <p className="mt-2 text-gray-600">Make safe transactions directly within the platform.</p>
          </div>
          <div className="w-72 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">📢 Instant Notifications</h3>
            <p className="mt-2 text-gray-600">Receive updates about shipments, payments, and more.</p>
          </div>
        </div>
      </div>
    );
  }
  