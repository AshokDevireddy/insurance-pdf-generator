export interface FormData {
    personalInfo: {
      name: string;
      address: string;
      dateOfBirth: string;
      ssn: string;
      gender: 'male' | 'female' | 'other';
      phone: string;
      email: string;
      isLegalResident: boolean;
    };
    healthInfo: {
      tobaccoUse: boolean;
      confined: boolean;
      receivingHomeCare: boolean;
      requireWheelchair: boolean;
      usedOxygen: boolean;
      advisedMedicalProcedure: boolean;
      organTransplant: boolean;
      diagnosedAIDS: boolean;
      louGehrig: boolean;
      alzheimers: boolean;
      heartFailure: boolean;
      cerebralPalsy: boolean;
      chemotherapy: boolean;
      multipleCancer: boolean;
      alcoholAbuse: boolean;
      diabetesComplications: boolean;
      kidneyDisease: boolean;
      anginaHistory: boolean;
      strokeHistory: boolean;
      anginaDiagnosed: boolean;
      strokeDiagnosed: boolean;
      parkinsonsDisease: boolean;
      copd: boolean;
    };
    insuranceDetails: {
      initialAmount: string;
      planRequested: 'Preferred Level Plan' | 'Standard Level Plan' | 'Modified Plan';
      effectiveDate: string;
      hasExistingInsurance: 'Yes' | 'No';
      willReplaceInsurance: 'Yes' | 'No';
      nonforfeitureOption: 'Automatic premium loan' | 'Paid-up insurance' | 'Extended Term Insurance';
      initialPremiumType: 'Draft Initial premium upon policy approval' | 'Draft initial premium on policy effective date';
      paymentDay: string;
      willingToAcceptAnyPlan: 'Yes' | 'No';
      preferredOption: 'Adjust the face amount to match the premium' | 'Keep the same amount of insurance and adjust the premium';
      mailPolicy: 'Applicant' | 'Agent';
      premiumDetails: {
        initialAmount: string;
        paymentMode: 'monthly' | 'quarterly' | 'semi-annually' | 'annually';
        paymentMethod: 'EFT' | 'Check or money order' | 'Credit card';
      };
    };
    beneficiaries: {
      primary: Array<{
        name: string;
        relationship: string;
        sharePercentage: string;
        phone: string;
        address: string;
      }>;
    };
    bankingInfo: {
      institutionName: string;
      accountType: 'checking' | 'savings';
      routingNumber: string;
      accountNumber: string;
    };
    signatures: {
      applicantSignature: string;
      dateSigned: string;
      signedLocation: string;
      agentSignature: string;
    };
  }