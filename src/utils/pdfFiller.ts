import { PDFDocument, rgb, StandardFonts, degrees } from 'pdf-lib';
import { FormData } from '../types/forms';

export async function fillPDF(formData: FormData): Promise<Uint8Array> {
  try {
    const response = await fetch('/emptyaflacdoc_Redacted.pdf');
    const pdfBytes = await response.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);

    // Embed the default font
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Get all pages
    const pages = pdfDoc.getPages();

    // Add watermark to each page
    const watermarkText = 'THIS COPY IS NOT LEGALLY BINDING\nAND IS ONLY FOR SALES PURPOSES';
    pages.forEach(page => {
      const { width, height } = page.getSize();
      const textWidth = font.widthOfTextAtSize(watermarkText.split('\n')[0], 48);
      page.drawText(watermarkText, {
        x: (width / 2) - (textWidth / 2) + 250,
        y: (height / 2) - 24, // Offset by half the line height to center vertically
        size: 48,
        font,
        color: rgb(0.8, 0.8, 0.8), // Light gray
        opacity: 0.5,
        rotate: degrees(45), // 45 degrees rotation
        lineHeight: 48,
        maxWidth: width - 100 // Add some margin
      });
    });

    // Helper function to draw text (with default styling)
    const drawText = (text: string, x: number, y: number, pageNum: number = 0, size: number = 8) => {
      const page = pages[pageNum];
      const { height } = page.getSize();

      page.drawText(text.toString(), {
        x,
        y: height - y, // Subtract from height because PDF coordinates start from bottom
        size,
        font,
        color: rgb(1, 0, 0),
      });
    };

    // Personal Information (adjust x,y coordinates as needed)
    drawText(formData.personalInfo.name, 88, 262, 0);
    drawText(formData.personalInfo.address, 97, 278, 0);
    drawText(formData.personalInfo.dateOfBirth, 179, 295, 0);
    drawText(formData.personalInfo.ssn, 162, 312, 0);
    drawText(formData.personalInfo.phone, 146, 346, 0);
    drawText(formData.personalInfo.email, 86, 361, 0);
    if (formData.personalInfo.isLegalResident) {
        drawText('X', 259, 383, 0, 14); // Adjust position for checkbox
      } else {
        drawText('X', 304, 383, 0, 14); // Adjust position for checkbox
      }

    // Health Info
    if (formData.healthInfo.tobaccoUse) {
        drawText('X', 408, 405, 0, 14); // Adjust position for checkbox
    } else {
        drawText('X', 459, 403, 0, 14); // Adjust position for checkbox
    }

    if (formData.healthInfo.confined) {
        drawText('X', 491, 169, 1, 14); // Yes position
    } else {
        drawText('X', 491, 181, 1, 14); // No position
    }

    if (formData.healthInfo.receivingHomeCare) {
        drawText('X', 491, 221, 1, 14);
    } else {
        drawText('X', 491, 235, 1, 14);
    }

    if (formData.healthInfo.requireWheelchair) {
        drawText('X', 491, 280, 1, 14);
    } else {
        drawText('X', 491, 292, 1, 14);
    }

    if (formData.healthInfo.usedOxygen) {
        drawText('X', 491, 349, 1, 14);
    } else {
        drawText('X', 491, 361, 1, 14);
    }

    if (formData.healthInfo.advisedMedicalProcedure) {
        drawText('X', 491, 391, 1, 14);
    } else {
        drawText('X', 491, 405, 1, 14);
    }

    if (formData.healthInfo.organTransplant) {
        drawText('X', 491, 459, 1, 14);
    } else {
        drawText('X', 491, 473, 1, 14);
    }

    if (formData.healthInfo.diagnosedAIDS) {
        drawText('X', 491, 505, 1, 14);
    } else {
        drawText('X', 491, 515, 1, 14);
    }

    if (formData.healthInfo.louGehrig) {
        drawText('X', 491, 600, 1, 14);
    } else {
        drawText('X', 491, 613, 1, 14);
    }

    if (formData.healthInfo.alzheimers) {
        drawText('X', 491, 643, 1, 14);
    } else {
        drawText('X', 491, 657, 1, 14);
    }

    if (formData.healthInfo.heartFailure) {
        drawText('X', 491, 682, 1, 14);
    } else {
        drawText('X', 491, 696, 1, 14);
    }

    if (formData.healthInfo.cerebralPalsy) {
        drawText('X', 491, 80, 2, 14);
    } else {
        drawText('X', 491, 94, 2, 14);
    }

    if (formData.healthInfo.chemotherapy) {
        drawText('X', 491, 124, 2, 14);
    } else {
        drawText('X', 491, 137, 2, 14);
    }

    if (formData.healthInfo.multipleCancer) {
        drawText('X', 491, 180, 2, 14);
    } else {
        drawText('X', 491, 192, 2, 14);
    }

    if (formData.healthInfo.alcoholAbuse) {
        drawText('X', 491, 294, 2, 14);
    } else {
        drawText('X', 491, 307, 2, 14);
    }

    if (formData.healthInfo.diabetesComplications) {
        drawText('X', 491, 332, 2, 14);
    } else {
        drawText('X', 491, 349, 2, 14);
    }

    if (formData.healthInfo.kidneyDisease) {
        drawText('X', 491, 392, 2, 14);
    } else {
        drawText('X', 491, 405, 2, 14);
    }

    if (formData.healthInfo.anginaHistory) {
        drawText('X', 491, 460, 2, 14);
    } else {
        drawText('X', 491, 473, 2, 14);
    }

    if (formData.healthInfo.strokeHistory) {
        drawText('X', 491, 505, 2, 14);
    } else {
        drawText('X', 491, 515, 2, 14);
    }

    if (formData.healthInfo.anginaDiagnosed) {
        drawText('X', 491, 602, 2, 14);
    } else {
        drawText('X', 491, 614, 2, 14);
    }

    if (formData.healthInfo.strokeDiagnosed) {
        drawText('X', 491, 644, 2, 14);
    } else {
        drawText('X', 491, 656, 2, 14);
    }

    if (formData.healthInfo.parkinsonsDisease) {
        drawText('X', 491, 712, 2, 14);
    } else {
        drawText('X', 491, 726, 2, 14);
    }

    if (formData.healthInfo.copd) {
        drawText('X', 491, 88, 3, 14);
    } else {
        drawText('X', 491, 100, 3, 14);
    }




    // Insurance Details
    drawText(formData.insuranceDetails.initialAmount, 73, 347, 3);
    if (formData.insuranceDetails.planRequested === 'Preferred Level Plan') {
        drawText('X', 233, 353, 3, 14);
      } else if (formData.insuranceDetails.planRequested === 'Standard Level Plan') {
        drawText('X', 360, 353, 3, 14);
      } else {
        drawText('X', 486, 353, 3, 14);
      }
    drawText(formData.insuranceDetails.effectiveDate, 246, 453, 3);
    if (formData.insuranceDetails.nonforfeitureOption === 'Automatic premium loan') {
        drawText('X', 63, 504, 3, 14);
      } else if (formData.insuranceDetails.nonforfeitureOption === 'Paid-up insurance') {
        drawText('X', 236, 504, 3, 14);
      } else {
        drawText('X', 398, 504, 3, 14);
      }
    if (formData.insuranceDetails.initialPremiumType === 'Draft Initial premium upon policy approval') {
        drawText('X', 62, 563, 3, 14);
      } else if (formData.insuranceDetails.initialPremiumType === 'Draft initial premium on policy effective date') {
        drawText('X', 236, 564, 3, 14);
      }

    drawText(formData.insuranceDetails.paymentDay, 286, 604, 3);
    drawText(formData.insuranceDetails.premiumDetails.initialAmount, 75, 668, 3);


    if (formData.insuranceDetails.premiumDetails.paymentMode === 'monthly') {
        drawText('X', 235, 131, 4, 14);
      } else if (formData.insuranceDetails.premiumDetails.paymentMode === 'quarterly') {
        drawText('X', 234, 101, 4, 14);
      } else if (formData.insuranceDetails.premiumDetails.paymentMode === 'semi-annually') {
        drawText('X', 60, 130, 4, 14);
      } else {
        drawText('X', 60, 100, 4, 14);
      }

    if (formData.insuranceDetails.premiumDetails.paymentMethod === 'EFT') {
        drawText('X', 62, 189, 4, 14);
      } else if (formData.insuranceDetails.premiumDetails.paymentMethod === 'Check or money order') {
        drawText('X', 234, 190, 4, 14);
      } else {
        drawText('X', 401, 188, 4, 14);
      }


    if (formData.insuranceDetails.willingToAcceptAnyPlan === 'Yes') {
        drawText('X', 65, 494, 4, 14);
      }

    if (formData.insuranceDetails.preferredOption === 'Adjust the face amount to match the premium') {
        drawText('X', 65, 530, 4, 14);
      } else {
        drawText('X', 65, 543, 4, 14);
      }

    if (formData.insuranceDetails.mailPolicy === 'Applicant') {
        drawText('X', 122, 607, 4, 14);
      } else {
        drawText('X', 227, 608, 4, 14);
      }

    //Beneficiaries
    // Beneficiary Information - handle up to 4 beneficiaries
    formData.beneficiaries.primary.forEach((beneficiary, index) => {
        if (index === 0) {
        // First beneficiary positions
            drawText(beneficiary.name, 237, 410, 5);
            drawText(beneficiary.relationship, 160, 428, 5);
            drawText(beneficiary.sharePercentage, 94, 447, 5);
            drawText(beneficiary.phone, 88, 461, 5);
            drawText(beneficiary.address, 96, 478, 5);
        } else if (index === 1) {
        // Second beneficiary positions
            drawText(beneficiary.name, 237, 528, 5);
            drawText(beneficiary.relationship, 160, 547, 5);
            drawText(beneficiary.sharePercentage, 94, 563, 5);
            drawText(beneficiary.phone, 88, 581, 5);
            drawText(beneficiary.address, 96, 597, 5);
        } else if (index === 2) {
        // Third beneficiary positions
            drawText(beneficiary.name, 249, 646, 5);
            drawText(beneficiary.relationship, 160, 664, 5);
            drawText(beneficiary.sharePercentage, 94, 681, 5);
            drawText(beneficiary.phone, 88, 698, 5);
            drawText(beneficiary.address, 96, 715, 5);
        } else if (index === 3) {
            // Fourth beneficiary positions
            drawText(beneficiary.name, 249, 92, 6);
            drawText(beneficiary.relationship, 160, 109, 6);
            drawText(beneficiary.sharePercentage, 94, 127, 6);
            drawText(beneficiary.phone, 88, 143, 6);
            drawText(beneficiary.address, 96, 160, 6);
        }
    });

    if (formData.insuranceDetails.hasExistingInsurance === 'Yes') {
        drawText('X', 495, 263, 6, 14);
      } else {
        drawText('X', 496, 275, 6, 14);
      }

    if (formData.insuranceDetails.willReplaceInsurance === 'Yes') {
        drawText('X', 494, 317, 6, 14);
      } else {
        drawText('X', 494, 329, 6, 14);
      }


    // Signatures
    drawText(formData.signatures.applicantSignature, 58, 319, 8);
    drawText(formData.signatures.applicantSignature, 58, 640, 8);
    drawText(formData.signatures.dateSigned, 336, 320, 8);
    drawText(formData.signatures.dateSigned, 372, 149, 9);

    drawText(formData.signatures.signedLocation, 58, 410, 8);
    drawText(formData.signatures.agentSignature, 58, 148, 9);


    // Banking Info
    drawText(formData.bankingInfo.institutionName, 190, 258, 10);
    if (formData.bankingInfo.accountType === 'checking') {
        drawText('X', 126, 292, 10, 14);
      } else if (formData.bankingInfo.accountType === 'savings') {
        drawText('X', 183, 292, 10, 14);
      }
    drawText(formData.bankingInfo.routingNumber, 145, 310, 10);
    drawText(formData.bankingInfo.accountNumber, 147, 336, 10);








    return await pdfDoc.save();
  } catch (error) {
    console.error('Error filling PDF:', error);
    throw error;
  }
}
