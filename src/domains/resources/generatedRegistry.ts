import { websiteToEnquiryFlowMap } from '@/domains/resources/content/WebsiteToEnquiryFlowMap';
import { localTrustChecklist } from '@/domains/resources/content/LocalTrustChecklist';
import { missedCallResponsePath } from '@/domains/resources/content/MissedCallResponsePath';
import { followUpOwnershipMap } from '@/domains/resources/content/FollowUpOwnershipMap';
import { reviewRequestTimingGuide } from '@/domains/resources/content/ReviewRequestTimingGuide';
import { implementationPathFitChecklist } from '@/domains/resources/content/ImplementationPathFitChecklist';
import { specialistClinicWebsiteFrontDoorChecklist } from '@/domains/resources/content/SpecialistClinicWebsiteFrontDoorChecklist';
import { patientTrustAndBookingPathMap } from '@/domains/resources/content/PatientTrustAndBookingPathMap';
import { homeServiceQuoteFollowUpMap } from '@/domains/resources/content/HomeServiceQuoteFollowUpMap';
import type { ResourceData } from '@/domains/resources/types';

export const RESOURCE_REGISTRY: Record<string, ResourceData> = {
  'website-to-enquiry-flow-map': websiteToEnquiryFlowMap,
  'local-trust-checklist': localTrustChecklist,
  'missed-call-response-path': missedCallResponsePath,
  'follow-up-ownership-map': followUpOwnershipMap,
  'review-request-timing-guide': reviewRequestTimingGuide,
  'implementation-path-fit-checklist': implementationPathFitChecklist,
  'specialist-clinic-website-front-door-checklist': specialistClinicWebsiteFrontDoorChecklist,
  'patient-trust-and-booking-path-map': patientTrustAndBookingPathMap,
  'home-service-quote-follow-up-map': homeServiceQuoteFollowUpMap,
};

export const resources = Object.values(RESOURCE_REGISTRY);
