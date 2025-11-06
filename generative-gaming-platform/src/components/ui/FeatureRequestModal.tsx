import React, { useState } from 'react';
import { X, Send, AlertCircle } from 'lucide-react';

interface FeatureRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeatureRequestModal: React.FC<FeatureRequestModalProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('gameplay');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      setSubmitted(true);
      // Reset form
      setTitle('');
      setDescription('');
      setCategory('gameplay');
      // Reset submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 border border-white/10 rounded-2xl max-w-2xl w-full shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">Request a Feature</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Thank you!</h3>
              <p className="text-slate-400">Your feature request has been submitted successfully. Our team will review it soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="gameplay">Gameplay</option>
                  <option value="graphics">Graphics & Visuals</option>
                  <option value="ai">AI & Generation</option>
                  <option value="social">Social Features</option>
                  <option value="monetization">Monetization</option>
                  <option value="performance">Performance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Feature Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Multiplayer game support"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Description *
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell us more about this feature and how it would benefit the platform..."
                  rows={4}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  required
                />
              </div>

              {/* Info */}
              <div className="flex gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-sm text-blue-300">
                  Your feedback is valuable! We review all feature requests and prioritize based on community interest.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureRequestModal;
