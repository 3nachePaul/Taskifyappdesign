import { useState } from 'react';
import { motion } from 'motion/react';
import { opportunities } from '../data/mockData';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Briefcase, Calendar, Gift, Star, MapPin } from 'lucide-react';

interface OpportunityFeedProps {
  onCompanyClick: (companyId: string) => void;
}

export default function OpportunityFeed({ onCompanyClick }: OpportunityFeedProps) {
  const [filterType, setFilterType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('recent');

  const filteredOpportunities = opportunities.filter((opp) => {
    if (filterType === 'all') return true;
    return opp.type === filterType;
  });

  const sortedOpportunities = [...filteredOpportunities].sort((a, b) => {
    if (sortBy === 'points') {
      return b.points - a.points;
    }
    return 0; // Default recent order
  });

  const getOpportunityIcon = (type: string) => {
    switch (type) {
      case 'job':
        return Briefcase;
      case 'internship':
        return Star;
      case 'event':
        return Calendar;
      case 'promotion':
        return Gift;
      default:
        return Briefcase;
    }
  };

  const getOpportunityColor = (type: string) => {
    switch (type) {
      case 'job':
        return 'bg-blue-50 text-blue-700';
      case 'internship':
        return 'bg-purple-50 text-purple-700';
      case 'event':
        return 'bg-orange-50 text-orange-700';
      case 'promotion':
        return 'bg-green-50 text-green-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl mb-4 text-[#0A3A0B]">Opportunities</h1>
          <p className="text-gray-600">
            Discover jobs, internships, events, and promotions from local businesses
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="job">Jobs</SelectItem>
              <SelectItem value="internship">Internships</SelectItem>
              <SelectItem value="event">Events</SelectItem>
              <SelectItem value="promotion">Promotions</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="points">Highest Points</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex-1" />
          
          <Badge variant="secondary" className="self-start text-[#0A3A0B] bg-[#0A3A0B]/10">
            {sortedOpportunities.length} opportunities
          </Badge>
        </motion.div>

        {/* Opportunity List */}
        <div className="space-y-4">
          {sortedOpportunities.map((opportunity, index) => {
            const Icon = getOpportunityIcon(opportunity.type);
            return (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true, margin: '-50px' }}
                className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => onCompanyClick(opportunity.companyId)}
                    className="text-4xl hover:scale-110 transition-transform"
                  >
                    {opportunity.companyLogo}
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm capitalize ${getOpportunityColor(opportunity.type)}`}>
                        <Icon className="w-3 h-3 mr-1" />
                        {opportunity.type}
                      </span>
                      <button
                        onClick={() => onCompanyClick(opportunity.companyId)}
                        className="text-sm text-gray-600 hover:text-[#0A3A0B] hover:underline"
                      >
                        {opportunity.companyName}
                      </button>
                      <span className="text-sm text-gray-500 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {opportunity.location}
                      </span>
                    </div>
                    
                    <h3 className="text-xl mb-2 text-[#0A3A0B]">
                      {opportunity.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">{opportunity.description}</p>
                    
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-[#0A3A0B]">
                        <span className="font-semibold">+{opportunity.points}</span> points
                      </span>
                      {opportunity.deadline && (
                        <span className="text-sm text-gray-500">
                          Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button className="bg-[#0A3A0B] hover:bg-[#0A3A0B]/90 self-start">
                    Apply
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
