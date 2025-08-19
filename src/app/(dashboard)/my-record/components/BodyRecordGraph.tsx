'use client';

import { forwardRef } from 'react';
import LazyBodyWeightChart from '@/components/charts/LazyBodyWeightChart';

const BodyRecordGraph = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="bg-[#414141] p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="text-white">
          <span className="text-orange-400 text-sm">BODY</span>
          <br />
          <span className="text-orange-400 text-sm">RECORD</span>
        </div>
        <div className="text-white text-lg">2021.05.21</div>
      </div>
      
      <LazyBodyWeightChart height={256} showLegend={true} className="mb-4" />
    </div>
  );
});

BodyRecordGraph.displayName = 'BodyRecordGraph';

export default BodyRecordGraph;
