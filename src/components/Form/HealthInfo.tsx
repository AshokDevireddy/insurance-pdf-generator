import React from 'react';
import { FormData } from '../../types/forms';

interface Props {
  data: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const HEALTH_QUESTIONS: Array<{
  key: keyof FormData['healthInfo'];
  text: string;
}> = [
  {
    key: "tobaccoUse",
    text: "Have you used tobacco products in the last 12 months?"
  },
  {
    key: "confined",
    text: "Confined in or have been advised to enter a hospital, nursing home, skilled nursing facility, psychiatric facility, correctional facility?"
  },
  {
    key: "receivingHomeCare",
    text: "Receiving or been advised to receive home health care or hospice care?"
  },
  {
    key: "requireWheelchair",
    text: "Do you require long term use of a wheelchair or mobility scooter, do you have any physical or mental impairment requiring assistance from anyone with the following activities of daily living: taking medications, bathing, dressing, eating, toileting, getting in or out of bed or chair, or moving about?"
  },
  {
    key: "usedOxygen",
    text: "Used or been advised to use oxygen equipment to assist with breathing (excluding CPAP for sleep apnea) or had or been advised to have kidney dialysis?"
  },
  {
    key: "advisedMedicalProcedure",
    text: "Been advised to have any medical procedure, surgery, or diagnostic test (other than for routine screening purposes such as vision and hearing exams) which has not been started, completed, or for which results are not known, excluding tests related to the Human Immunodeficiency Virus (HIV)?"
  },
  {
    key: "organTransplant",
    text: "Have you ever received, or been advised to receive, an organ or bone marrow transplant or an amputation due to any disease or complications of diabetes?"
  },
  {
    key: "diagnosedAIDS",
    text: "Have you ever been diagnosed by a member of the medical profession with AIDS Related Complex (ARC) or Acquired Immune Deficiency Syndrome (AIDS), or have you taken a test for Human Immunodeficiency Virus (HIV) for purposes of obtaining insurance, and had a positive result?"
  },
  {
    key: "louGehrig",
    text: "Amyotrophic Lateral Sclerosis (Lou Gehrig's Disease), Huntington's Disease, or sickle cell anemia?"
  },
  {
    key: "alzheimers",
    text: "Alzheimer's disease, dementia, or mental incapacity?"
  },
  {
    key: "heartFailure",
    text: "Congestive heart failure, pulmonary fibrosis, any terminal condition or end-stage disease?"
  },
  {
    key: "cerebralPalsy",
    text: "Cerebral palsy, cystic fibrosis, muscular dystrophy or un-operated heart defects?"
  },
  {
    key: "chemotherapy",
    text: "Within the past 2 years have you been diagnosed with, received or been advised to receive chemotherapy or radiation for any form of cancer (excluding Basal or Squamous cell skin cancer)?"
  },
  {
    key: "multipleCancer",
    text: "Have you ever been diagnosed with more than one occurrence of the same or different type of cancer (excluding Basal or Squamous cell skin cancer)?"
  },
  {
    key: "alcoholAbuse",
    text: "Within the past 2 years: Alcohol or drug abuse (prescribed or illegal), or used illegal drugs; or been convicted or pled guilty to driving under the influence?"
  },
  {
    key: "diabetesComplications",
    text: "Complications of diabetes such as diabetic coma, insulin shock, retinopathy (eye disorder), nephropathy (kidney disorder), or neuropathy (nerve, circulatory disorder)?"
  },
  {
    key: "kidneyDisease",
    text: "Kidney or liver disease?"
  },
  {
    key: "anginaHistory",
    text: "Within past year: Angina, heart attack, cardiomyopathy, or heart/circulatory surgery?"
  },
  {
    key: "strokeHistory",
    text: "Stroke or transient ischemic attack (TIA/mini-stroke), aneurysm or brain tumor?"
  },
  {
    key: "anginaDiagnosed",
    text: "Within past year: Angina, heart attack, cardiomyopathy, or heart/circulatory surgery?"
  },
  {
    key: "strokeDiagnosed",
    text: "Stroke or transient ischemic attack (TIA/mini-stroke), aneurysm or brain tumor?"
  },
  {
    key: "parkinsonsDisease",
    text: "Parkinson's disease, Multiple Sclerosis or Systemic Lupus (SLE)?"
  },
  {
    key: "copd",
    text: "Chronic obstructive pulmonary disease (COPD), chronic bronchitis, emphysema, or any other chronic respiratory condition?"
  },
];

export default function HealthInfo({ data, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    onChange({
      healthInfo: {
        ...data.healthInfo,
        [name]: checked,
      }
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Health Information</h2>
      <div className="space-y-4">
        {HEALTH_QUESTIONS.map(({ key, text }) => (
          <div key={key} className="flex items-center">
            <input
              type="checkbox"
              name={key}
              checked={data.healthInfo[key]}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="ml-2 block text-sm text-gray-900">
              {text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}