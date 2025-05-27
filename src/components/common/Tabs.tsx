'use client'; // Add this line at the very top

import React, { useState } from 'react';
import { TabType } from '@/lib/types';

type TabsProps = {
  tabs: TabType[];
  defaultTab?: number;
};

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div>
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === index
                ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};