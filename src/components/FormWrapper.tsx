import React, { useState } from 'react';
import { FormData } from '../types/forms';
import { fillPDF } from '../utils/pdfFiller';
import PersonalInfo from './Form/PersonalInfo';
import HealthInfo from './Form/HealthInfo';
import InsuranceDetails from './Form/InsuranceDetails';
import BeneficiaryInfo from './Form/BeneficiaryInfo';
import BankingInfo from './Form/BankingInfo';
import SignatureInfo from './Form/SignatureInfo';

const initialFormData: FormData = {
  personalInfo: {
    name: '',
    address: '',
    dateOfBirth: '',
    ssn: '',
    gender: 'male',
    phone: '',
    email: '',
    isLegalResident: false,
  },
  healthInfo: {
    tobaccoUse: false,
    confined: false,
    receivingHomeCare: false,
    requireWheelchair: false,
    usedOxygen: false,
    advisedMedicalProcedure: false,
    organTransplant: false,
    diagnosedAIDS: false,
    louGehrig: false,
    alzheimers: false,
    heartFailure: false,
    cerebralPalsy: false,
    chemotherapy: false,
    multipleCancer: false,
    alcoholAbuse: false,
    diabetesComplications: false,
    kidneyDisease: false,
    anginaHistory: false,
    strokeHistory: false,
    anginaDiagnosed: false,
    strokeDiagnosed: false,
    parkinsonsDisease: false,
    copd: false,
  },
  insuranceDetails: {
    initialAmount: '',
    planRequested: 'Preferred Level Plan',
    effectiveDate: '',
    nonforfeitureOption: 'Automatic premium loan',
    initialPremiumType: 'Draft Initial premium upon policy approval',
    paymentDay: '',
    premiumDetails: {
      initialAmount: '',
      paymentMode: 'monthly',
      paymentMethod: 'EFT',
    },
    willingToAcceptAnyPlan: 'Yes',
    preferredOption: 'Adjust the face amount to match the premium',
    mailPolicy: 'Applicant',
    hasExistingInsurance: 'No',
    willReplaceInsurance: 'No',
  },
  beneficiaries: {
    primary: [{
      name: '',
      relationship: '',
      sharePercentage: '',
      phone: '',
      address: '',
    }],
  },
  bankingInfo: {
    institutionName: '',
    accountType: 'checking',
    routingNumber: 'xxxxxx',
    accountNumber: 'xxxxxx',
  },
  signatures: {
    applicantSignature: '',
    dateSigned: '',
    signedLocation: '',
    agentSignature: '',
  },
};

export default function FormWrapper() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);

  const handleGeneratePDF = async () => {
    try {
      const filledPdfBytes = await fillPDF(formData);
      const blob = new Blob([filledPdfBytes], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'filled-form.pdf';
      link.click();
    } catch (error) {
      console.error('Error filling PDF:', error);
    }
  };

  const steps = [
    { title: 'Personal Information', component: PersonalInfo },
    { title: 'Health Information', component: HealthInfo },
    { title: 'Insurance Details', component: InsuranceDetails },
    { title: 'Beneficiary Information', component: BeneficiaryInfo },
    { title: 'Banking Information', component: BankingInfo },
    { title: 'Signature', component: SignatureInfo },
  ];

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentStep(index)}
              className={`px-3 py-1 rounded ${
                currentStep === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {step.title}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <CurrentStepComponent
          data={formData}
          onChange={(updatedData: Partial<FormData>) =>
            setFormData(prev => ({ ...prev, ...updatedData }))
          }
        />

        <div className="flex justify-between mt-4">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
          )}

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(prev => prev + 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleGeneratePDF}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Generate PDF
            </button>
          )}
        </div>
      </div>
    </div>
  );
}