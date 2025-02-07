import React from 'react';
import { FormData } from '../../types/forms';

interface Props {
  data: FormData;
  onChange: (data: Partial<FormData>) => void;
}

export default function InsuranceDetails({ data, onChange }: Props) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    nestedField?: string
  ) => {
    const { name, value } = e.target;

    if (nestedField === 'premiumDetails') {
      onChange({
        insuranceDetails: {
          ...data.insuranceDetails,
          premiumDetails: {
            ...data.insuranceDetails.premiumDetails,
            [name]: value,
          },
        },
      });
    } else {
      onChange({
        insuranceDetails: {
          ...data.insuranceDetails,
          [name]: value,
        },
      });
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Insurance Details</h2>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Initial Insurance Amount
          </label>
          <input
            type="text"
            name="initialAmount"
            value={data.insuranceDetails.initialAmount}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Plan Requested
          </label>
          <select
            name="planRequested"
            value={data.insuranceDetails.planRequested}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="Preferred Level Plan">Preferred Level Plan</option>
            <option value="Standard Level Plan">Standard Level Plan</option>
            <option value="Modified Plan">Modified Plan</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Effective Date
          </label>
          <input
            type="date"
            name="effectiveDate"
            value={data.insuranceDetails.effectiveDate}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nonforfeiture Option
          </label>
          <select
            name="nonforfeitureOption"
            value={data.insuranceDetails.nonforfeitureOption}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="Automatic premium loan">Automatic premium loan</option>
            <option value="Paid-up insurance">Paid-up insurance</option>
            <option value="Extended Term Insurance">Extended Term Insurance</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Initial Premium
          </label>
          <select
            name="initialPremiumType"
            value={data.insuranceDetails.initialPremiumType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="Draft Initial premium upon policy approval">
              Draft Initial premium upon policy approval
            </option>
            <option value="Draft initial premium on policy effective date">
              Draft initial premium on policy effective date
            </option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Payment Day
          </label>
          <input
            type="text"
            name="paymentDay"
            value={data.insuranceDetails.paymentDay}
            onChange={handleChange}
            placeholder="Enter day of month"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Willing to Accept Any Plan
          </label>
          <select
            name="willingToAcceptAnyPlan"
            value={data.insuranceDetails.willingToAcceptAnyPlan}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Which do you prefer?
          </label>
          <select
            name="preferredOption"
            value={data.insuranceDetails.preferredOption}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="Adjust the face amount to match the premium">
              Adjust the face amount to match the premium
            </option>
            <option value="Keep the same amount of insurance and adjust the premium">
              Keep the same amount of insurance and adjust the premium
            </option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mail Policy To
          </label>
          <select
            name="mailPolicy"
            value={data.insuranceDetails.mailPolicy}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="Applicant">Applicant</option>
            <option value="Agent">Agent</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Does the proposed insured currently have any life insurance or annuity in force?
          </label>
          <select
            name="hasExistingInsurance"
            value={data.insuranceDetails.hasExistingInsurance}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Will insurance applied for in this application replace, reduce, or modify any existing life insurance or annuity in force?
          </label>
          <select
            name="willReplaceInsurance"
            value={data.insuranceDetails.willReplaceInsurance}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-lg font-medium mb-4">Premium Details</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Initial Premium Amount
              </label>
              <input
                type="text"
                name="initialAmount"
                value={data.insuranceDetails.premiumDetails.initialAmount}
                onChange={(e) => handleChange(e, 'premiumDetails')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Payment Mode
              </label>
              <select
                name="paymentMode"
                value={data.insuranceDetails.premiumDetails.paymentMode}
                onChange={(e) => handleChange(e, 'premiumDetails')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="semi-annually">Semi-annually</option>
                <option value="annually">Annually</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={data.insuranceDetails.premiumDetails.paymentMethod}
                onChange={(e) => handleChange(e, 'premiumDetails')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="EFT">EFT</option>
                <option value="Check or money order">Check or money order</option>
                <option value="Credit card">Credit card</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}