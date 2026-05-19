import { whyServiceBusinessWebsitesFailToConvert } from '@/domains/blog/content/WhyServiceBusinessWebsitesFailToConvert';
import { authoritySignalsForLocalSearch } from '@/domains/blog/content/AuthoritySignalsForLocalSearch';
import { leadResponseTimeForServiceBusinesses } from '@/domains/blog/content/LeadResponseTimeForServiceBusinesses';
import { roofingEstimateFollowUpDelays } from '@/domains/blog/content/RoofingEstimateFollowUpDelays';
import { customerFeedbackLoopFrameworkForServiceBusinesses } from '@/domains/blog/content/CustomerFeedbackLoopFrameworkForServiceBusinesses';
import { servicePageArchitectureForServiceBusinesses } from '@/domains/blog/content/ServicePageArchitectureForServiceBusinesses';
import { websiteAsFrontDoorForSpecialistClinics } from '@/domains/blog/content/WebsiteAsFrontDoorForSpecialistClinics';
import { whyClinicConsultationRequestsSlipAway } from '@/domains/blog/content/WhyClinicConsultationRequestsSlipAway';
import { howHomeServiceQuotesGoColdAfterTheFirstCall } from '@/domains/blog/content/HowHomeServiceQuotesGoColdAfterTheFirstCall';
import type { BlogPostData } from '@/domains/blog/types';

export const BLOG_POSTS: Record<string, BlogPostData> = {
  'why-service-business-websites-fail-to-convert': whyServiceBusinessWebsitesFailToConvert,
  'authority-signals-for-local-search': authoritySignalsForLocalSearch,
  'lead-response-time-for-service-businesses': leadResponseTimeForServiceBusinesses,
  'roofing-estimate-follow-up-delays': roofingEstimateFollowUpDelays,
  'customer-feedback-loop-framework-for-service-businesses': customerFeedbackLoopFrameworkForServiceBusinesses,
  'service-page-architecture-for-service-businesses': servicePageArchitectureForServiceBusinesses,
  'website-as-front-door-for-specialist-clinics': websiteAsFrontDoorForSpecialistClinics,
  'why-clinic-consultation-requests-slip-away': whyClinicConsultationRequestsSlipAway,
  'how-home-service-quotes-go-cold-after-the-first-call': howHomeServiceQuotesGoColdAfterTheFirstCall,
};

export const blogPosts = Object.values(BLOG_POSTS);
