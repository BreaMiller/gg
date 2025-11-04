import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Share2, Heart } from 'lucide-react';
import FadeInSection from '../components/ui/FadeInSection';

interface HelpArticle {
  title: string;
  category: string;
  categoryColor: string;
  excerpt: string;
  readTime: number;
}

// Map of article IDs to their basic info
const articleMetadata: Record<string, HelpArticle> = {
  'what-is-good-games': {
    title: 'What is Good Games?',
    category: 'Getting Started',
    categoryColor: 'from-cyan-500 to-blue-600',
    excerpt: 'Learn about the revolutionary AI-powered gaming platform',
    readTime: 5
  },
  'how-do-i-create-my-first-game': {
    title: 'How do I create my first game?',
    category: 'Getting Started',
    categoryColor: 'from-cyan-500 to-blue-600',
    excerpt: 'Step-by-step guide to creating your first game',
    readTime: 6
  },
  'do-i-need-programming-experience': {
    title: 'Do I need programming experience?',
    category: 'Getting Started',
    categoryColor: 'from-cyan-500 to-blue-600',
    excerpt: 'Discover how anyone can create games without coding',
    readTime: 4
  },
  'how-does-the-credit-system-work': {
    title: 'How does the credit system work?',
    category: 'Credits & Economy',
    categoryColor: 'from-purple-500 to-pink-600',
    excerpt: 'Understand the credit-based economy of Good Games',
    readTime: 7
  },
  'how-do-i-earn-credits': {
    title: 'How do I earn credits?',
    category: 'Credits & Economy',
    categoryColor: 'from-purple-500 to-pink-600',
    excerpt: 'Learn multiple ways to earn and accumulate credits',
    readTime: 6
  },
  'what-can-i-do-with-credits': {
    title: 'What can I do with credits?',
    category: 'Credits & Economy',
    categoryColor: 'from-purple-500 to-pink-600',
    excerpt: 'Explore all the possibilities and uses for your credits',
    readTime: 5
  },
  'what-types-of-games-can-i-create': {
    title: 'What types of games can I create?',
    category: 'Game Creation',
    categoryColor: 'from-green-500 to-emerald-600',
    excerpt: 'Discover the incredible variety of games you can generate',
    readTime: 8
  },
  'how-detailed-should-my-game-prompt-be': {
    title: 'How detailed should my game prompt be?',
    category: 'Game Creation',
    categoryColor: 'from-green-500 to-emerald-600',
    excerpt: 'Craft the perfect prompt for optimal game generation',
    readTime: 6
  },
  'can-i-modify-the-generated-code': {
    title: 'Can I modify the generated code?',
    category: 'Game Creation',
    categoryColor: 'from-green-500 to-emerald-600',
    excerpt: 'Learn how to customize and extend your generated games',
    readTime: 5
  },
  'how-do-i-share-my-games': {
    title: 'How do I share my games?',
    category: 'Creator Hub & Community',
    categoryColor: 'from-orange-500 to-red-600',
    excerpt: 'Publish and share your games with the community',
    readTime: 5
  },
  'what-are-community-challenges': {
    title: 'What are community challenges?',
    category: 'Creator Hub & Community',
    categoryColor: 'from-orange-500 to-red-600',
    excerpt: 'Participate in exciting themed competitions',
    readTime: 6
  },
  'how-do-i-follow-other-creators': {
    title: 'How do I follow other creators?',
    category: 'Creator Hub & Community',
    categoryColor: 'from-orange-500 to-red-600',
    excerpt: 'Connect with and support other creators',
    readTime: 4
  },
  'how-do-achievements-work': {
    title: 'How do achievements work?',
    category: 'Achievements & Leaderboards',
    categoryColor: 'from-yellow-500 to-amber-600',
    excerpt: 'Unlock achievements and earn rewards',
    readTime: 6
  },
  'what-are-creator-tiers': {
    title: 'What are creator tiers?',
    category: 'Achievements & Leaderboards',
    categoryColor: 'from-yellow-500 to-amber-600',
    excerpt: 'Progress through tiers to unlock exclusive benefits',
    readTime: 6
  },
  'how-are-leaderboards-calculated': {
    title: 'How are leaderboards calculated?',
    category: 'Achievements & Leaderboards',
    categoryColor: 'from-yellow-500 to-amber-600',
    excerpt: 'Understand how rankings and leaderboards work',
    readTime: 5
  },
  'what-platforms-are-supported': {
    title: 'What platforms are supported?',
    category: 'Technical Support',
    categoryColor: 'from-blue-500 to-indigo-600',
    excerpt: 'Discover which platforms your games can run on',
    readTime: 5
  },
  'my-game-generation-failed': {
    title: 'My game generation failed. What do I do?',
    category: 'Technical Support',
    categoryColor: 'from-blue-500 to-indigo-600',
    excerpt: 'Troubleshoot and resolve game generation issues',
    readTime: 5
  },
  'can-i-export-games-to-other-platforms': {
    title: 'Can I export games to other platforms?',
    category: 'Technical Support',
    categoryColor: 'from-blue-500 to-indigo-600',
    excerpt: 'Learn how to export and publish your games everywhere',
    readTime: 5
  }
};

const HelpArticlePage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();

  const article = articleId ? articleMetadata[articleId] : null;

  if (!article) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Article not found</h1>
        <button
          onClick={() => navigate('/help')}
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Back to Help
        </button>
      </div>
    );
  }

  // Generate sample content based on article excerpt
  const contentParagraphs = [
    article.excerpt,
    `This comprehensive guide covers everything you need to know about "${article.title}". Whether you're just starting out or looking to deepen your knowledge, you'll find practical information and tips to help you make the most of Good Games.`,
    `Key topics covered in this article include the fundamental concepts, best practices, and strategies for success. We break down complex ideas into easy-to-understand sections that build on each other.`,
    `By the end of this article, you should have a clear understanding of the subject matter and be able to apply this knowledge to your own experience on Good Games. Don't hesitate to reference this article again as you explore different features.`,
    `If you have any questions after reading this article, feel free to reach out to our support team or visit our community forums. Many other creators are happy to share their experiences and help newcomers.`
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Back Button */}
      <FadeInSection>
        <button
          onClick={() => navigate('/help')}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Help
        </button>
      </FadeInSection>

      {/* Article Header */}
      <FadeInSection delay={50}>
        <div className="max-w-3xl mx-auto">
          <div className={`bg-gradient-to-r ${article.categoryColor} rounded-2xl p-8 mb-6`}>
            <p className="text-white/80 text-sm font-medium mb-2">{article.category}</p>
            <h1 className="text-4xl font-bold text-white mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime} min read
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Article Content */}
      <FadeInSection delay={100}>
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-invert max-w-none">
            {contentParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </FadeInSection>

      {/* Additional Tips Section */}
      <FadeInSection delay={125}>
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Pro Tips</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">•</span>
              <span>Take time to understand the core concepts before diving in.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">•</span>
              <span>Experiment and don't be afraid to try different approaches.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">•</span>
              <span>Join the community to learn from other creators' experiences.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">•</span>
              <span>Reference this article and others as you explore Good Games features.</span>
            </li>
          </ul>
        </div>
      </FadeInSection>

      {/* Action Buttons */}
      <FadeInSection delay={150}>
        <div className="max-w-3xl mx-auto flex gap-4 justify-center pt-6 border-t border-white/10">
          <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10">
            <Share2 className="w-5 h-5" />
            Share
          </button>
          <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10">
            <Heart className="w-5 h-5" />
            Helpful
          </button>
        </div>
      </FadeInSection>

      {/* Back to Categories */}
      <FadeInSection delay={200}>
        <div className="text-center pt-6">
          <button
            onClick={() => navigate('/help')}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Back to Help Center
          </button>
        </div>
      </FadeInSection>
    </div>
  );
};

export default HelpArticlePage;
