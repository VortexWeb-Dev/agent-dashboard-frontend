import React, { useState } from 'react';
import { BarChart3, ChevronDown, ChevronUp, Award, Target, TrendingUp, Users, Briefcase, HelpCircle } from 'lucide-react';
import { performanceReport } from '../mockData/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const PerformanceReport = () => {
  const [showChart, setShowChart] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);



  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const renderPerformanceSection = () => {
    const isExpanded = expandedSection === 'performance';
  
    return (
      <div className="mb-6">
        <div 
          className="flex items-center justify-between cursor-pointer bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2"
          onClick={() => toggleSection('performance')}
        >
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-medium text-blue-900 dark:text-blue-100">Performance Metrics</h3>
          </div>
          {isExpanded ? <ChevronUp className="h-5 w-5 text-blue-600 dark:text-blue-400" /> : <ChevronDown className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
        </div>
  
        {isExpanded && (
          <div className="pl-4 pr-2 py-2 bg-blue-200 dark:bg-blue-950/40 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Monthly Rank', value: performanceReport.monthlyRank ? `#${performanceReport.monthlyRank}` : 'N/A' },
                { label: 'YTD Ranking', value: performanceReport.ytdRanking ? `#${performanceReport.ytdRanking}` : 'N/A' },
                { label: 'Total Earnings YTD', value: performanceReport.totalEarningsYTD ? formatCurrency(performanceReport.totalEarningsYTD) : 'N/A' },
                { label: 'Avg. Monthly Earnings', value: performanceReport.averageMonthlyEarnings ? formatCurrency(performanceReport.averageMonthlyEarnings) : 'N/A' }
              ].map(({ label, value }) => (
                <div key={label} className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-700 dark:text-blue-400 text-sm">{label}</p>
                  <p className="text-blue-900 dark:text-white text-xl font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  const renderLeadsSection = () => {
    const isExpanded = expandedSection === 'leads';
  
    return (
      <div className="mb-6">
        <div 
          className="flex items-center justify-between cursor-pointer bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2"
          onClick={() => toggleSection('leads')}
        >
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-medium text-blue-900 dark:text-blue-100">Lead Management</h3>
          </div>
          {isExpanded ? <ChevronUp className="h-5 w-5 text-blue-600 dark:text-blue-400" /> : <ChevronDown className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
        </div>
  
        {isExpanded && (
          <div className="pl-4 pr-2 py-2 bg-blue-200 dark:bg-blue-950/40 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Marketing Leads Received', value: performanceReport.marketingLeadsReceived },
                { label: 'Active Leads', value: performanceReport.activeLeads },
                { label: 'Unqualified/Reassigned', value: performanceReport.unqualifiedOrReassignedLeads || 'N/A' },
                { label: 'Leads Without Updates (2+ weeks)', value: performanceReport.leadsWithoutUpdateFor2Weeks }
              ].map(({ label, value }) => (
                <div key={label} className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-700 dark:text-blue-400 text-sm">{label}</p>
                  <p className="text-blue-900 dark:text-white text-xl font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  const renderActivitiesSection = () => {
    const isExpanded = expandedSection === 'activities';
  
    return (
      <div className="mb-6">
        <div 
          className="flex items-center justify-between cursor-pointer bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2"
          onClick={() => toggleSection('activities')}
        >
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-medium text-blue-900 dark:text-blue-100">Activities & Deals</h3>
          </div>
          {isExpanded ? <ChevronUp className="h-5 w-5 text-blue-600 dark:text-blue-400" /> : <ChevronDown className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
        </div>
  
        {isExpanded && (
          <div className="pl-4 pr-2 py-2 bg-blue-200 dark:bg-blue-950/40 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'New Deals Created', value: performanceReport.newDealsCreatedInHubspot || 'N/A' },
                { label: 'Meetings Conducted', value: performanceReport.meetingsConductedInHubspot || 'N/A' },
                { label: 'Live Ads', value: performanceReport.liveAds },
                { label: 'Leads from Property Finder', value: performanceReport.leadsFromPropertyFinderAds }
              ].map(({ label, value }) => (
                <div key={label} className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-700 dark:text-blue-400 text-sm">{label}</p>
                  <p className="text-blue-900 dark:text-white text-xl font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  const renderSalesSection = () => {
    const isExpanded = expandedSection === 'sales';
  
    return (
      <div className="mb-6">
        <div 
          className="flex items-center justify-between cursor-pointer bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2"
          onClick={() => toggleSection('sales')}
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-medium text-blue-900 dark:text-blue-100">Sales Performance</h3>
          </div>
          {isExpanded ? <ChevronUp className="h-5 w-5 text-blue-600 dark:text-blue-400" /> : <ChevronDown className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
        </div>
  
        {isExpanded && (
          <div className="pl-4 pr-2 py-2 bg-blue-200 dark:bg-blue-950/40 rounded-lg">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg mb-4">
              <p className="text-blue-700 dark:text-blue-400 text-sm">Total Worth of Properties Sold YTD</p>
              <p className="text-blue-900 dark:text-white text-xl font-semibold">{formatCurrency(performanceReport.totalWorthPropertiesSoldYTD)}</p>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  const renderChart = () => {
    return (
        <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-800 dark:text-gray-100 font-medium">Performance Metrics</h3>
          <div className="tooltip relative group">
            <HelpCircle className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            <span className="tooltip-text invisible group-hover:visible absolute right-0 w-48 p-2 mt-2 text-xs bg-gray-700 dark:bg-gray-900 text-white rounded shadow-lg z-10">
              Showing absolute values for each performance metric
            </span>
          </div>
        </div>
        
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={[
                { name: 'Marketing Leads', value: 200 },
                { name: 'Active Leads', value: 1 },
                { name: 'Meetings Conducted', value: 12 },
                { name: 'New Deals Created', value: 8 },
                { name: 'Live Ads', value: 3 }
              ]}
              margin={{ top: 5, right: 20, left: 100, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
              <XAxis 
                type="number" 
                tick={{ fill: '#64748b', fontSize: 12 }}
                domain={[0, 200]}
                // ticks={[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200]}
                className="text-gray-500 dark:text-gray-400"
              />
              <YAxis 
                dataKey="name" 
                type="category"
                tick={{ fill: '#64748b', fontSize: 12 }}
                width={100}
                className="text-gray-500 dark:text-gray-400"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#f8fafc', 
                  borderColor: '#e2e8f0',
                  color: '#1e293b',
                  borderRadius: '0.375rem',
                  padding: '0.5rem',
                  fontSize: '0.875rem'
                }}
                formatter={(value) => [`${value}`, 'Count']}
              />
              <Bar 
                dataKey="value" 
                radius={[0, 4, 4, 0]} 
                className="fill-blue-500 dark:fill-blue-400" 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-100 dark:bg-gray-300 py-1 px-8 rounded-full">
            <p className="text-gray-500 dark:text-gray-600 mb-1 text-lg">Total Metrics</p>
            <p className="text-gray-900 dark:text-gray-800 font-bold text-xl">224</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-300 py-1 px-8 rounded-full">
            <p className="text-gray-500 dark:text-gray-600 mb-1 text-lg">Conversion Rate</p>
            <p className="text-gray-900 dark:text-gray-800 font-bold text-xl">4%</p>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-white dark:bg-blue-950 text-blue-900 dark:text-white p-6 rounded-xl max-w-[100%] h-fit mx-auto shadow-xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-4 border-b border-blue-300 dark:border-blue-800">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Performance Report</h2>
          <p className="text-blue-600 dark:text-blue-400">{performanceReport.month}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
            <p className="text-blue-700 dark:text-blue-400 text-sm">Employee</p>
            <p className="text-lg font-medium text-blue-900 dark:text-blue-100">{performanceReport.employee}</p>
            <p className="text-xs text-blue-600 dark:text-blue-400">{performanceReport.role}</p>
          </div>
        </div>
      </div>
  
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100">Summary</h3>
          <button
            onClick={() => setShowChart(!showChart)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg text-sm"
          >
            <BarChart3 className="h-4 w-4" />
            {showChart ? 'Hide Chart' : 'Show Chart'}
          </button>
        </div>
  
        <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Target className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />, label: 'Marketing Leads', value: performanceReport.marketingLeadsReceived },
              { icon: <Award className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />, label: 'Properties Sold (YTD)', value: formatCurrency(performanceReport.totalWorthPropertiesSoldYTD) },
              { icon: <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />, label: 'Earnings (YTD)', value: performanceReport.totalEarningsYTD ? formatCurrency(performanceReport.totalEarningsYTD) : 'N/A' }
            ].map(({ icon, label, value }) => (
              <div key={label} className="bg-blue-200 dark:bg-blue-900/30 p-3 rounded-lg flex items-center">
                {icon}
                <div>
                  <p className="text-blue-700 dark:text-blue-400 text-sm">{label}</p>
                  <p className="text-blue-900 dark:text-white text-xl font-semibold">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  
      {showChart && renderChart()}
  
      {renderPerformanceSection()}
      {renderLeadsSection()}
      {renderActivitiesSection()}
      {renderSalesSection()}
    </div>
  
  
  );
};

export default PerformanceReport;