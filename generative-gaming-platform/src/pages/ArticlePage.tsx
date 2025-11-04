import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Share2, ArrowRight, Bookmark } from 'lucide-react';
import FadeInSection from '../components/ui/FadeInSection';

interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  content: React.ReactNode;
  tags: string[];
  recommendedArticles: string[];
}

const ArticlePage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();

  // Article database
  const articles: Record<string, Article> = {
    'maximizing-credit-earnings': {
      id: 'maximizing-credit-earnings',
      title: 'Maximizing Your Credit Earnings',
      author: 'Sarah Chen',
      date: 'November 4, 2025',
      readTime: 8,
      category: 'Monetization',
      tags: ['Credits', 'Earnings', 'Strategy', 'Monetization'],
      recommendedArticles: ['getting-best-value', 'credit-economy'],
      content: (
        <>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Credits are the lifeblood of the Good Games platform, and learning how to maximize your earnings can significantly accelerate your success as a creator. Whether you're just starting out or already an established developer, this guide will help you unlock your full earning potential.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Understanding Credit Sources</h3>
          <p className="text-slate-300 mb-4 leading-relaxed">
            There are multiple ways to earn credits on the platform. The primary source for most creators is game downloads and plays. When other users interact with your games, you receive a percentage of the credits they spend. This creates a win-win situation where quality games naturally earn more credits.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Optimizing Game Quality</h3>
          <p className="text-slate-300 mb-4 leading-relaxed">
            The first step to maximizing earnings is creating high-quality games. Use detailed prompts that specify your game's mechanics, visuals, and unique features. Games with higher ratings earn significantly more credits because they appear higher in search results and trending sections. Aim for 4+ star ratings to see exponential earning growth.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Leveraging Community Challenges</h3>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Participate in weekly community challenges to earn bonus credits and get featured placement. Winners can earn 100-500 bonus credits per challenge, and the exposure often leads to increased plays and downloads of your entire game library. Challenge participation also boosts your creator tier ranking.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Achievement Unlocking</h3>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Unlock platform achievements to earn bonus credits. From "First Steps" (publish your first game) to "Legendary Creator" (maintain 4.5+ rating across all games), each achievement rewards credits. Some legendary achievements unlock exclusive features and credit multipliers.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Advanced Strategies</h3>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Create games in trending genres to maximize visibility. Monitor the community's interests and create games that match current trends. Also, build a follower base by engaging in the community—followers get notifications about your new releases, leading to more consistent earnings over time.
          </p>
        </>
      )
    },
    'getting-best-value': {
      id: 'getting-best-value',
      title: 'Getting the Best Value for Your Investment',
      author: 'Marcus Rodriguez',
      date: 'November 3, 2025',
      readTime: 7,
      category: 'Purchasing',
      tags: ['Credits', 'Packages', 'Value', 'Purchasing'],
      recommendedArticles: ['credit-economy', 'maximizing-credit-earnings'],
      content: (
        <>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Investing in credits on Good Games is an important decision. Whether you're a casual player or a serious creator, getting the best value for your money is crucial. This guide will help you choose the right credit package and maximize your investment.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Understanding Credit Packages</h3>
          <p className="text-slate-300 mb-4 leading-relaxed">
            We offer three main credit packages: Starter Pack (2,000 credits for $10), Creator Pack (5,500 credits for $25, with 10% bonus), and Pro Pack (12,000 credits for $50, with 20% bonus). The larger packages offer better per-credit pricing, so if you're committed to the platform, the Pro Pack provides exceptional value.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">When to Buy Each Package</h3>
          <p className="text-slate-300 mb-4 leading-relaxed">
            The Starter Pack is perfect for testing the platform. The Creator Pack offers the best bang-for-buck if you're actively creating and playing games. The Pro Pack is ideal for competitive creators who generate multiple games monthly and want the best discounts.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Bonus Opportunities</h3>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Don't miss the welcome bonus! New accounts receive 1,000 free credits upon signup. Additionally, seasonal promotions offer discounts up to 30% during platform milestones. Join our newsletter to stay updated on bonus opportunities and special offers.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Credit Planning Strategy</h3>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Calculate your monthly spending and purchase accordingly. If you generate 5 games monthly at 100 credits each (500 credits), the Creator Pack lasting approximately 11 months provides excellent value. Track your earnings to see how platform revenue can offset your investments.
          </p>
        </>
      )
    },
    'credit-economy': {
      id: 'credit-economy',
      title: 'Credit Economy Explained',
      author: 'Dr. Alex Thompson',
      date: 'November 2, 2025',
      readTime: 10,
      category: 'Economics',
      tags: ['Credits', 'Economy', 'System', 'Marketplace'],
      recommendedArticles: ['maximizing-credit-earnings', 'getting-best-value'],
      content: (
        <>
          <p className="text-slate-300 mb-4 leading-relaxed">
            The credit economy is the backbone of Good Games, creating a sustainable ecosystem where creators are rewarded and players enjoy quality content. Understanding how this system works will give you strategic advantages in navigating the platform.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Supply and Demand Balance</h3>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Our economy is designed to maintain balance between credit supply and demand. When too many credits enter the system, we adjust earnings rates. When demand exceeds supply, we may introduce new earning opportunities. This prevents inflation while keeping the system dynamic.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Credit Distribution Model</h3>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Credits flow through multiple channels: players spend them to play/download games, creators earn them from player engagement, achievements reward completion milestones, and challenges distribute prize pools. This circular economy ensures continuous engagement from both creators and players.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Price Stability Mechanisms</h3>
          <p className="text-slate-300 mb-4 leading-relaxed">
            The platform implements several mechanisms to prevent price volatility. Credit costs are normalized quarterly based on economic metrics. Sinks (ways to remove credits) are periodically adjusted. Special editions and premium items provide alternative value stores that don't inflate base credits.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Future Projections</h3>
          <p className="text-slate-300 mb-4 leading-relaxed">
            As our player base grows, we expect modest credit deflation—meaning credits become more valuable. Early adopters who build strong game libraries may see their earnings increase as competition drives quality up. Participating in the economy now positions you for long-term success.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Pro Tips</h3>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Track economic indicators on our dashboard. Monitor trending credit-to-play ratios. Diversify your game portfolio across genres. Build during economic upturns when player participation is highest. These strategies help you optimize your position within our thriving ecosystem.
          </p>
        </>
      )
    }
  };

  const article = articleId ? articles[articleId] : null;

  if (!article) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Article not found</h2>
        <button
          onClick={() => navigate('/pricing')}
          className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 justify-center"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Pricing
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Back Button */}
      <button
        onClick={() => navigate('/pricing')}
        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Pricing Guide
      </button>

      {/* Article Header */}
      <FadeInSection>
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {article.category}
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Article Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-8 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} min read</span>
            </div>
            <span className="text-sm">{article.date}</span>
          </div>
        </div>
      </FadeInSection>

      {/* Article Content */}
      <FadeInSection delay={200}>
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <div className="text-white leading-relaxed">
            {article.content}
          </div>
        </div>
      </FadeInSection>

      {/* Tags */}
      <FadeInSection delay={300}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-slate-600/50 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Share and Save Buttons */}
      <FadeInSection delay={300}>
        <div className="max-w-4xl mx-auto flex gap-4 py-6 border-y border-white/10">
          <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10">
            <Share2 className="w-5 h-5" />
            Share
          </button>
          <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10">
            <Bookmark className="w-5 h-5" />
            Save
          </button>
        </div>
      </FadeInSection>

      {/* Recommended Articles */}
      {article.recommendedArticles.length > 0 && (
        <FadeInSection delay={400}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Recommended Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {article.recommendedArticles.map((recId) => {
                const recArticle = articles[recId];
                if (!recArticle) return null;
                return (
                  <Link
                    key={recId}
                    to={`/article/${recId}`}
                    className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-xl border border-white/10 p-6 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="inline-block bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs font-medium mb-3">
                      {recArticle.category}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {recArticle.title}
                    </h4>
                    <p className="text-slate-400 text-sm mb-4">{recArticle.readTime} min read</p>
                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </FadeInSection>
      )}
    </div>
  );
};

export default ArticlePage;
