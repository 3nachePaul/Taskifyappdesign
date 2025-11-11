import { motion } from 'motion/react';
import { userRewards, badges } from '../data/mockData';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Trophy, Award, Gift, TrendingUp, Lock, Check } from 'lucide-react';

export default function UserProfile() {
  const totalPoints = 1450;
  const nextMilestone = 2000;
  const progressPercentage = (totalPoints / nextMilestone) * 100;
  const earnedBadges = badges.filter((b) => b.earned);

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl mb-2 text-[#0A3A0B]">My Profile</h1>
              <p className="text-gray-600">Track your progress and rewards</p>
            </div>
            <div className="text-5xl">👤</div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Points Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-[#0A3A0B]/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-[#0A3A0B] flex items-center gap-2">
                      <Trophy className="w-6 h-6" />
                      Your Points
                    </CardTitle>
                    <span className="text-3xl text-[#0A3A0B]">{totalPoints}</span>
                  </div>
                  <CardDescription>
                    {nextMilestone - totalPoints} points until next milestone
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={progressPercentage} className="h-3" />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>Current: {totalPoints}</span>
                    <span>Next: {nextMilestone}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0A3A0B] flex items-center gap-2">
                    <Award className="w-6 h-6" />
                    Badges ({earnedBadges.length}/{badges.length})
                  </CardTitle>
                  <CardDescription>
                    Complete challenges to unlock new badges
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {badges.map((badge, index) => (
                      <motion.div
                        key={badge.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`relative p-4 rounded-lg border-2 text-center ${
                          badge.earned
                            ? 'border-[#0A3A0B] bg-[#0A3A0B]/5'
                            : 'border-gray-200 bg-gray-50 opacity-60'
                        }`}
                      >
                        {!badge.earned && (
                          <div className="absolute top-2 right-2">
                            <Lock className="w-4 h-4 text-gray-400" />
                          </div>
                        )}
                        {badge.earned && (
                          <div className="absolute top-2 right-2">
                            <Check className="w-4 h-4 text-[#0A3A0B]" />
                          </div>
                        )}
                        <div className="text-3xl mb-2">{badge.icon}</div>
                        <h4 className="text-sm mb-1 text-[#0A3A0B]">{badge.name}</h4>
                        <p className="text-xs text-gray-600">{badge.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Activity Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid sm:grid-cols-3 gap-4"
            >
              <Card className="border-blue-200 bg-blue-50/50">
                <CardContent className="pt-6">
                  <div className="text-3xl text-blue-700 mb-2">12</div>
                  <p className="text-sm text-gray-600">Applications</p>
                </CardContent>
              </Card>
              <Card className="border-orange-200 bg-orange-50/50">
                <CardContent className="pt-6">
                  <div className="text-3xl text-orange-700 mb-2">7</div>
                  <p className="text-sm text-gray-600">Events Attended</p>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-green-50/50">
                <CardContent className="pt-6">
                  <div className="text-3xl text-green-700 mb-2">15</div>
                  <p className="text-sm text-gray-600">Promotions Claimed</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar - Rewards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A3A0B] flex items-center gap-2">
                    <Gift className="w-5 h-5" />
                    Available Rewards
                  </CardTitle>
                  <CardDescription>Redeem your points</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userRewards.map((reward, index) => (
                    <motion.div
                      key={reward.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className={`p-4 rounded-lg border ${
                        reward.claimed
                          ? 'bg-gray-50 border-gray-200 opacity-60'
                          : 'bg-white border-[#0A3A0B]/20'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-sm text-[#0A3A0B]">{reward.name}</h4>
                        {reward.claimed && (
                          <Check className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mb-3">{reward.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#0A3A0B]">
                          {reward.points} points
                        </span>
                        {!reward.claimed && (
                          <Button
                            size="sm"
                            variant={totalPoints >= reward.points ? 'default' : 'outline'}
                            disabled={totalPoints < reward.points}
                            className={
                              totalPoints >= reward.points
                                ? 'bg-[#0A3A0B] hover:bg-[#0A3A0B]/90'
                                : ''
                            }
                          >
                            Redeem
                          </Button>
                        )}
                        {reward.claimed && (
                          <span className="text-xs text-gray-500">Claimed</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-[#0A3A0B] to-[#1B4332] text-white">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 mb-4" />
                  <h4 className="mb-2">Keep Going!</h4>
                  <p className="text-sm text-white/90 mb-4">
                    You're doing great! Complete more opportunities to earn points and unlock rewards.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Explore Opportunities
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
