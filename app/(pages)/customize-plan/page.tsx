import React from 'react';
import SectionLayout from '@/components/universal/SectionLayout';
import ServicePricingPlanCustomized from '@/components/unique/servicepricing/ServicePricingPlanCustomized';

const page = () => {
  return (
    <div>
      <SectionLayout bg=''>
        <ServicePricingPlanCustomized />
      </SectionLayout>
    </div>
  );
};

export default page;
