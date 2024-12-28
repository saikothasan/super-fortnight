import React from 'react';
import { Check } from 'lucide-react';

interface PricingTableProps {
  pricing: {
    free: string[];
    pro: string[];
    enterprise: string[];
  };
}

const PricingTable: React.FC<PricingTableProps> = ({ pricing }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {Object.entries(pricing).map(([tier, features], index) => (
        <div
          key={tier}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 capitalize">
            {tier}
          </h3>
          <ul className="space-y-4">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="mt-8 w-full py-3 px-6 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
            {tier === 'free' ? 'Get Started' : 'Contact Sales'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;