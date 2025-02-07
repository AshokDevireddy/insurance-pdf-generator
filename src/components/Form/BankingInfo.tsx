import React from 'react';
import { FormData } from '../../types/forms';

interface Props {
  data: FormData;
  onChange: (data: Partial<FormData>) => void;
}

export default function BankingInfo({ data, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({
      bankingInfo: {
        ...data.bankingInfo,
        [name]: value,
      },
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Banking Information</h2>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Financial Institution Name
          </label>
          <input
            type="text"
            name="institutionName"
            value={data.bankingInfo.institutionName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Account Type
          </label>
          <select
            name="accountType"
            value={data.bankingInfo.accountType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="checking">Checking</option>
            <option value="savings">Savings</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Routing Number
          </label>
          <input
            type="text"
            name="routingNumber"
            value={data.bankingInfo.routingNumber}
            onChange={handleChange}
            pattern="[0-9]{9}"
            maxLength={9}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Account Number
          </label>
          <input
            type="text"
            name="accountNumber"
            value={data.bankingInfo.accountNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}