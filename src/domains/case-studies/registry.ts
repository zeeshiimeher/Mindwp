import { HvacSeasonalEnquiryFollowUpCaseStudy } from '@/domains/case-studies/data/hvac-seasonal-enquiry-follow-up';
import { PlumbingWebsiteToResponsePathCaseStudy } from '@/domains/case-studies/data/plumbing-website-to-response-path';
import { RoofingQuoteFollowUpCaseStudy } from '@/domains/case-studies/data/roofing-quote-follow-up';
import { FoundationRepairConsultationPathCaseStudy } from '@/domains/case-studies/data/foundation-repair-consultation-path';
import { SepticServiceReminderAndRepeatBookingCaseStudy } from '@/domains/case-studies/data/septic-service-reminder-and-repeat-booking';
import { DentalImplantConsultationFollowUpCaseStudy } from '@/domains/case-studies/data/dental-implant-consultation-follow-up';
import { OrthodonticTreatmentEnquiryPathCaseStudy } from '@/domains/case-studies/data/orthodontic-treatment-enquiry-path';
import { DermatologyBookingAndTrustPathCaseStudy } from '@/domains/case-studies/data/dermatology-booking-and-trust-path';
import { EntSinusConsultationRequestPathCaseStudy } from '@/domains/case-studies/data/ent-sinus-consultation-request-path';
import { HearingAidClinicFollowUpAndReviewsCaseStudy } from '@/domains/case-studies/data/hearing-aid-clinic-follow-up-and-reviews';
import type { CaseStudyData } from '@/domains/case-studies/types';

export const CASE_STUDY_REGISTRY: Record<string, CaseStudyData> = {
  'hvac-seasonal-enquiry-follow-up': HvacSeasonalEnquiryFollowUpCaseStudy,
  'plumbing-website-to-response-path': PlumbingWebsiteToResponsePathCaseStudy,
  'roofing-quote-follow-up': RoofingQuoteFollowUpCaseStudy,
  'foundation-repair-consultation-path': FoundationRepairConsultationPathCaseStudy,
  'septic-service-reminder-and-repeat-booking': SepticServiceReminderAndRepeatBookingCaseStudy,
  'dental-implant-consultation-follow-up': DentalImplantConsultationFollowUpCaseStudy,
  'orthodontic-treatment-enquiry-path': OrthodonticTreatmentEnquiryPathCaseStudy,
  'dermatology-booking-and-trust-path': DermatologyBookingAndTrustPathCaseStudy,
  'ent-sinus-consultation-request-path': EntSinusConsultationRequestPathCaseStudy,
  'hearing-aid-clinic-follow-up-and-reviews': HearingAidClinicFollowUpAndReviewsCaseStudy,
};

export const caseStudies = Object.values(CASE_STUDY_REGISTRY);
