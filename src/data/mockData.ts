export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  location: string;
}

export interface Opportunity {
  id: string;
  companyId: string;
  companyName: string;
  companyLogo: string;
  title: string;
  type: 'job' | 'internship' | 'event' | 'promotion';
  location: string;
  description: string;
  points: number;
  deadline?: string;
}

export interface UserReward {
  id: string;
  name: string;
  description: string;
  points: number;
  claimed: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  earned: boolean;
  icon: string;
}

export const companies: Company[] = [
  {
    id: '1',
    name: 'GreenLeaf Cafe',
    logo: '🌿',
    description: 'Organic, locally-sourced cafe committed to sustainability',
    category: 'Food & Beverage',
    location: 'Downtown'
  },
  {
    id: '2',
    name: 'TechStart Hub',
    logo: '💻',
    description: 'Innovation center for startups and tech enthusiasts',
    category: 'Technology',
    location: 'Tech District'
  },
  {
    id: '3',
    name: 'Fitness First',
    logo: '💪',
    description: 'Modern fitness center with personal training programs',
    category: 'Health & Fitness',
    location: 'Westside'
  },
  {
    id: '4',
    name: 'BookNook Library',
    logo: '📚',
    description: 'Independent bookstore with community events',
    category: 'Retail',
    location: 'Old Town'
  },
  {
    id: '5',
    name: 'Creative Studios',
    logo: '🎨',
    description: 'Design and marketing agency for bold brands',
    category: 'Creative Services',
    location: 'Arts Quarter'
  },
  {
    id: '6',
    name: 'Urban Bites',
    logo: '🍔',
    description: 'Fast-casual restaurant with a twist',
    category: 'Food & Beverage',
    location: 'City Center'
  },
  {
    id: '7',
    name: 'EcoWear Fashion',
    logo: '👕',
    description: 'Sustainable fashion for conscious consumers',
    category: 'Retail',
    location: 'Shopping District'
  },
  {
    id: '8',
    name: 'CodeCraft Academy',
    logo: '🚀',
    description: 'Coding bootcamp and tech education',
    category: 'Education',
    location: 'University Area'
  }
];

export const opportunities: Opportunity[] = [
  {
    id: '1',
    companyId: '1',
    companyName: 'GreenLeaf Cafe',
    companyLogo: '🌿',
    title: 'Barista Position - Weekend Shifts',
    type: 'job',
    location: 'Downtown',
    description: 'Join our team as a weekend barista. Experience with espresso machines preferred.',
    points: 150,
    deadline: '2025-12-01'
  },
  {
    id: '2',
    companyId: '2',
    companyName: 'TechStart Hub',
    companyLogo: '💻',
    title: 'Software Engineering Internship',
    type: 'internship',
    location: 'Tech District',
    description: '3-month internship working on real-world projects with mentorship.',
    points: 300,
    deadline: '2025-11-25'
  },
  {
    id: '3',
    companyId: '3',
    companyName: 'Fitness First',
    companyLogo: '💪',
    title: 'Free Yoga Class - New Members',
    type: 'promotion',
    location: 'Westside',
    description: 'First-time visitors get a complimentary yoga class. Book now!',
    points: 50
  },
  {
    id: '4',
    companyId: '4',
    companyName: 'BookNook Library',
    companyLogo: '📚',
    title: 'Author Meet & Greet Event',
    type: 'event',
    location: 'Old Town',
    description: 'Meet bestselling author Jane Smith. Book signing and Q&A session.',
    points: 100,
    deadline: '2025-11-20'
  },
  {
    id: '5',
    companyId: '5',
    companyName: 'Creative Studios',
    companyLogo: '🎨',
    title: 'Graphic Designer Role',
    type: 'job',
    location: 'Arts Quarter',
    description: 'Full-time graphic designer for client projects. Portfolio required.',
    points: 200,
    deadline: '2025-12-10'
  },
  {
    id: '6',
    companyId: '6',
    companyName: 'Urban Bites',
    companyLogo: '🍔',
    title: '50% Off Your First Order',
    type: 'promotion',
    location: 'City Center',
    description: 'New customers get 50% off their first order. Use code: WELCOME50',
    points: 75
  },
  {
    id: '7',
    companyId: '7',
    companyName: 'EcoWear Fashion',
    companyLogo: '👕',
    title: 'Store Manager Position',
    type: 'job',
    location: 'Shopping District',
    description: 'Experienced retail manager needed for our flagship store.',
    points: 250,
    deadline: '2025-11-30'
  },
  {
    id: '8',
    companyId: '8',
    companyName: 'CodeCraft Academy',
    companyLogo: '🚀',
    title: 'Web Development Workshop',
    type: 'event',
    location: 'University Area',
    description: 'Free 2-hour workshop on modern web development. All levels welcome.',
    points: 120,
    deadline: '2025-11-18'
  },
  {
    id: '9',
    companyId: '2',
    companyName: 'TechStart Hub',
    companyLogo: '💻',
    title: 'Startup Pitch Night',
    type: 'event',
    location: 'Tech District',
    description: 'Watch local startups pitch their ideas. Networking opportunity.',
    points: 80,
    deadline: '2025-11-22'
  },
  {
    id: '10',
    companyId: '1',
    companyName: 'GreenLeaf Cafe',
    companyLogo: '🌿',
    title: 'Buy 2 Get 1 Free Coffee',
    type: 'promotion',
    location: 'Downtown',
    description: 'Limited time offer on all coffee drinks. Valid until end of month.',
    points: 60
  }
];

export const userRewards: UserReward[] = [
  {
    id: '1',
    name: 'Free Coffee at GreenLeaf',
    description: 'Redeem for one free coffee of any size',
    points: 200,
    claimed: false
  },
  {
    id: '2',
    name: '$10 Urban Bites Voucher',
    description: '$10 off your next meal',
    points: 150,
    claimed: true
  },
  {
    id: '3',
    name: 'Free Fitness First Day Pass',
    description: 'One-day gym access with all amenities',
    points: 100,
    claimed: false
  },
  {
    id: '4',
    name: '20% Off EcoWear Fashion',
    description: 'Discount on your next purchase',
    points: 180,
    claimed: false
  }
];

export const badges: Badge[] = [
  {
    id: '1',
    name: 'Early Bird',
    description: 'Applied to your first opportunity',
    earned: true,
    icon: '🌅'
  },
  {
    id: '2',
    name: 'Event Enthusiast',
    description: 'Attended 5 events',
    earned: true,
    icon: '🎉'
  },
  {
    id: '3',
    name: 'Job Hunter',
    description: 'Applied to 10 job postings',
    earned: false,
    icon: '🎯'
  },
  {
    id: '4',
    name: 'Community Champion',
    description: 'Engaged with 20 companies',
    earned: false,
    icon: '👑'
  },
  {
    id: '5',
    name: 'Deal Seeker',
    description: 'Claimed 10 promotions',
    earned: true,
    icon: '🏷️'
  },
  {
    id: '6',
    name: 'Rising Star',
    description: 'Earned 1000 points',
    earned: false,
    icon: '⭐'
  }
];
