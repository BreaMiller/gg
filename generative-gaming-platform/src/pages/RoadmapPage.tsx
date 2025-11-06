import React from 'react';
import { Timeline } from '../components/ui/Timeline';

const RoadmapPage: React.FC = () => {
  const timelineData = [
    {
      title: "Q4 2024",
      content: (
        <div className="text-sm md:text-base text-slate-300">
          <p className="mb-4">Launched AI game generation engine with basic arcade game templates. Successfully onboarded 1,000+ users in the first month.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Core AI game generator prototype</li>
            <li>Basic arcade game templates</li>
            <li>User authentication system</li>
            <li>Leaderboards and achievements</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Q1 2025",
      content: (
        <div className="text-sm md:text-base text-slate-300">
          <p className="mb-4">Expanded to 20+ game templates across multiple genres. Added social features and community marketplace for game sharing.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>20+ game templates</li>
            <li>Community marketplace</li>
            <li>Social features (follows, messages)</li>
            <li>Advanced analytics dashboard</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Q2 2025",
      content: (
        <div className="text-sm md:text-base text-slate-300">
          <p className="mb-4">Implemented monetization system with creator revenue sharing. Introduced mobile support and cross-platform compatibility.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Monetization & revenue sharing</li>
            <li>Mobile app launch</li>
            <li>Cross-platform compatibility</li>
            <li>Creator tools and publishing</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Q3 2025",
      content: (
        <div className="text-sm md:text-base text-slate-300">
          <p className="mb-4">Reached 100,000+ active users. Introduced advanced AI features for game customization and neural network-based game balancing.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Advanced AI customization</li>
            <li>Neural network balancing</li>
            <li>100K+ active users</li>
            <li>Global tournaments</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-b border-white/10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Development Roadmap</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Follow our journey as we build the future of AI-powered game creation. Watch as we grow, innovate, and bring new features to our community.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <Timeline data={timelineData} />

      {/* Footer CTA */}
      <div className="bg-slate-900 border-t border-white/10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to be part of the journey?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Join thousands of creators building the future of gaming. Start creating your own AI-powered games today.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold rounded-lg transition-all duration-200">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
