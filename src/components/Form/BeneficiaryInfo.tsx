import React from 'react';
import { FormData } from '../../types/forms';

interface Props {
  data: FormData;
  onChange: (data: Partial<FormData>) => void;
}

export default function BeneficiaryInfo({ data, onChange }: Props) {
  const handleBeneficiaryChange = (index: number, field: string, value: string) => {
    const newBeneficiaries = [...data.beneficiaries.primary];
    newBeneficiaries[index] = {
      ...newBeneficiaries[index],
      [field]: value,
    };

    onChange({
      beneficiaries: {
        primary: newBeneficiaries,
      },
    });
  };

  const addBeneficiary = () => {
    onChange({
      beneficiaries: {
        primary: [
          ...data.beneficiaries.primary,
          {
            name: '',
            relationship: '',
            sharePercentage: '',
            phone: '',
            address: '',
          },
        ],
      },
    });
  };

  const removeBeneficiary = (index: number) => {
    const newBeneficiaries = data.beneficiaries.primary.filter((_, i) => i !== index);
    onChange({
      beneficiaries: {
        primary: newBeneficiaries,
      },
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Beneficiary Information</h2>

      {data.beneficiaries.primary.map((beneficiary, index) => (
        <div key={index} className="border p-4 rounded-md space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Primary Beneficiary {index + 1}</h3>
            {index > 0 && (
              <button
                type="button"
                onClick={() => removeBeneficiary(index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                value={beneficiary.name}
                onChange={(e) => handleBeneficiaryChange(index, 'name', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Relationship to Insured
              </label>
              <input
                type="text"
                value={beneficiary.relationship}
                onChange={(e) => handleBeneficiaryChange(index, 'relationship', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Share Percentage
              </label>
              <input
                type="text"
                value={beneficiary.sharePercentage}
                onChange={(e) => handleBeneficiaryChange(index, 'sharePercentage', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                value={beneficiary.phone}
                onChange={(e) => handleBeneficiaryChange(index, 'phone', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                value={beneficiary.address}
                onChange={(e) => handleBeneficiaryChange(index, 'address', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addBeneficiary}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add Beneficiary
      </button>
    </div>
  );
}