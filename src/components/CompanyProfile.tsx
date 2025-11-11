import { motion } from 'motion/react';
import { companies, opportunities } from '../data/mockData';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, MapPin, Briefcase, Calendar, Gift, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface CompanyProfileProps {
  companyId: string | null;
  onBack: () => void;
}

export default function CompanyProfile({ companyId, onBack }: CompanyProfileProps) {
  const company = companies.find((c) => c.id === companyId);
  const companyOpportunities = opportunities.filter((o) => o.companyId === companyId);

  if (!company) {
    return (
      <div className="min-h-screen px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">Company not found</p>
          <Button onClick={onBack} className="mt-4">Go Back</Button>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-[#0A3A0B]/5 to-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-8 text-[#0A3A0B] hover:text-[#0A3A0B]/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Directory
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-6"
          >
            <div className="text-7xl">{company.logo}</div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl mb-3 text-[#0A3A0B]">{company.name}</h1>
              <p className="text-gray-600 mb-4 text-lg">{company.description}</p>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="bg-[#0A3A0B]/10 text-[#0A3A0B]">
                  {company.category}
                </Badge>
                <span className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  {company.location}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="opportunities" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="opportunities">
                Opportunities ({companyOpportunities.length})
              </TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>

            <TabsContent value="opportunities">
              {companyOpportunities.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  No opportunities available at the moment.
                </div>
              ) : (
                <div className="space-y-4">
                  {companyOpportunities.map((opportunity, index) => {
                    const Icon = getOpportunityIcon(opportunity.type);
                    return (
                      <motion.div
                        key={opportunity.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm capitalize ${getOpportunityColor(opportunity.type)}`}>
                                <Icon className="w-3 h-3 mr-1" />
                                {opportunity.type}
                              </span>
                              <span className="text-sm text-gray-500 flex items-center">
                                <MapPin className="w-3 h-3 mr-1" />
                                {opportunity.location}
                              </span>
                            </div>
                            
                            <h3 className="text-xl mb-2 text-[#0A3A0B] group-hover:underline">
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
                          
                          <Button className="bg-[#0A3A0B] hover:bg-[#0A3A0B]/90">
                            Apply
                          </Button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </TabsContent>

            <TabsContent value="about">
              <div className="bg-white border border-gray-100 rounded-lg p-8">
                <h3 className="text-2xl mb-4 text-[#0A3A0B]">About {company.name}</h3>
                <p className="text-gray-600 mb-6">{company.description}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="mb-2 text-[#0A3A0B]">Category</h4>
                    <p className="text-gray-600">{company.category}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-[#0A3A0B]">Location</h4>
                    <p className="text-gray-600">{company.location}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
