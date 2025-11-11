import { motion } from 'motion/react';
import { companies } from '../data/mockData';
import { MapPin, ChevronRight } from 'lucide-react';

interface CompanyDirectoryProps {
  onCompanyClick: (companyId: string) => void;
}

export default function CompanyDirectory({ onCompanyClick }: CompanyDirectoryProps) {
  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl mb-4 text-[#0A3A0B]">Company Directory</h1>
          <p className="text-gray-600">
            Browse all businesses on Taskify. Click any company to explore their opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <motion.button
              key={company.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => onCompanyClick(company.id)}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-left"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{company.logo}</div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#0A3A0B] transition-colors group-hover:translate-x-1 transform duration-200" />
              </div>
              
              <h3 className="text-xl mb-2 text-[#0A3A0B] group-hover:underline">
                {company.name}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                {company.description}
              </p>
              
              <div className="flex items-center gap-4 text-sm">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#0A3A0B]/5 text-[#0A3A0B]">
                  {company.category}
                </span>
                <span className="flex items-center text-gray-500">
                  <MapPin className="w-3 h-3 mr-1" />
                  {company.location}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
