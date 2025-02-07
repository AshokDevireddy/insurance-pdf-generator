import { useState } from 'react';

export default function Banner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Failed to join waitlist');

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="flex justify-center p-4">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-6 max-w-2xl">
        <div className="text-white space-y-4">
          <h2 className="text-2xl font-bold">Stop Wasting Time and Start Dialing!</h2>
          <div className="text-lg font-medium space-y-2">
            <p>Coming Soon: Your Personal AI Insurance Assitant</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Auto-calling carriers to ask questions about pending policies</li>
              <li>Auto-collecting documents from clients when carrier needs more info</li>
              <li>Auto-reminding clients to have enough money in their bank account</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to join waitlist"
                className="flex-1 px-4 py-2 rounded-md text-gray-900 placeholder-gray-500"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-50 disabled:opacity-50"
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
            {status === 'success' && (
              <p className="text-green-200">✓ You've been added to the waitlist!</p>
            )}
            {status === 'error' && (
              <p className="text-red-200">Failed to join waitlist. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}