import React from 'react';
import { FormData } from '../../types/forms';

interface Props {
  data: FormData;
  onChange: (data: Partial<FormData>) => void;
}

export default function SignatureInfo({ data, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({
      signatures: {
        ...data.signatures,
        [name]: value,
      },
    });
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Signatures and Agreements</h2>

      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-sm text-gray-700">
            By signing below, I acknowledge that:
          </p>
          <ul className="list-disc ml-5 mt-2 text-sm text-gray-700 space-y-1">
            <li>All statements and answers in this application are true and complete to the best of my knowledge.</li>
            <li>I have reviewed the benefits and premiums of the insurance policy I am applying for.</li>
            <li>I understand that any false statements may result in denial of claims or policy cancellation.</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Applicant Signature
            </label>
            <input
              type="text"
              name="applicantSignature"
              value={data.signatures.applicantSignature}
              onChange={handleChange}
              placeholder="Type your full name as signature"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date Signed
            </label>
            <input
              type="date"
              name="dateSigned"
              value={data.signatures.dateSigned || getCurrentDate()}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Signed In (City, State)
            </label>
            <input
              type="text"
              name="signedLocation"
              value={data.signatures.signedLocation}
              onChange={handleChange}
              placeholder="e.g., Los Angeles, CA"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Agent/Insurance Producer Signature
            </label>
            <input
              type="text"
              name="agentSignature"
              value={data.signatures.agentSignature}
              onChange={handleChange}
              placeholder="Agent's full name as signature"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-md">
          <p className="text-sm text-yellow-800">
            IMPORTANT: THIS GENERATOR IS NOT A LEGALLY BINDING COPY AND SHOULD ONLY BE USED FOR SALES PUPOSES!
          </p>
        </div>
      </div>
    </div>
  );
}