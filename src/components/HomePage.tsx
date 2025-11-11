import { Button } from './ui/button';
import { Search, Briefcase, Gift, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

type Page = 'home' | 'companies' | 'opportunities' | 'profile' | 'company-profile';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onLogin: () => void;
}

export default function HomePage({ onNavigate, onLogin }: HomePageProps) {
  const features = [
    {
      icon: Search,
      title: 'Find',
      description: 'Discover jobs, internships, events, and promotions from local businesses'
    },
    {
      icon: Briefcase,
      title: 'Engage',
      description: 'Apply to opportunities and participate in challenges that match your interests'
    },
    {
      icon: Gift,
      title: 'Get Rewarded',
      description: 'Earn points, unlock badges, and claim exclusive rewards for your engagement'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-[#0A3A0B]">
              Your Marketplace of Opportunities
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Connect with local businesses, discover amazing opportunities, and get rewarded for your engagement. Join a community where everyone wins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('opportunities')}
                size="lg"
                className="bg-[#0A3A0B] hover:bg-[#0A3A0B]/90"
              >
                <Search className="w-5 h-5 mr-2" />
                Find Opportunities
              </Button>
              <Button
                onClick={onLogin}
                size="lg"
                variant="outline"
                className="border-[#0A3A0B] text-[#0A3A0B] hover:bg-[#0A3A0B]/5"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                List Your Business
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-[#0A3A0B]">How It Works</h2>
            <p className="text-gray-600">
              Three simple steps to unlock opportunities and rewards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-[#0A3A0B]/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#0A3A0B]" />
                </div>
                <h3 className="text-2xl mb-3 text-[#0A3A0B]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#0A3A0B] text-white rounded-2xl p-10"
            >
              <h3 className="text-3xl mb-4">For Users</h3>
              <p className="text-white/90 mb-6">
                Find jobs, internships, events, and exclusive deals from businesses you love. Earn rewards while building your career.
              </p>
              <Button
                onClick={() => onNavigate('opportunities')}
                variant="secondary"
                size="lg"
                className="bg-white text-[#0A3A0B] hover:bg-white/90"
              >
                Explore Opportunities
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-10 border border-gray-200"
            >
              <h3 className="text-3xl mb-4 text-[#0A3A0B]">For Entrepreneurs</h3>
              <p className="text-gray-600 mb-6">
                Increase your visibility, attract talent, and build a loyal community. Post opportunities and connect with engaged users.
              </p>
              <Button
                onClick={onLogin}
                size="lg"
                className="bg-[#0A3A0B] hover:bg-[#0A3A0B]/90"
              >
                List Your Business
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
