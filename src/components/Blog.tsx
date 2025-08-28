import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Business Automation",
      excerpt: "Exploring how artificial intelligence is revolutionizing business processes and creating new opportunities for growth.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & ML",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Building Scalable SaaS Architectures",
      excerpt: "Best practices for designing software-as-a-service platforms that can handle millions of users efficiently.",
      author: "Michael Chen",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "SaaS",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Digital Transformation in Africa",
      excerpt: "How African businesses are leveraging technology to compete globally and drive economic growth.",
      author: "Amara Okafor",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Digital Transformation",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="blog" className="py-40 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-blue-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,112,243,0.15)_0%,rgba(0,0,0,0)_100%)]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-10">
            Latest <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
            Stay ahead of the curve with our thoughts on technology trends, best practices, and industry insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:bg-white/10 transition-all duration-300"
            >
              {/* Featured Image Placeholder */}
              <div className={`h-64 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-6 left-6">
                  <span className="backdrop-blur-xl bg-white/10 border border-white/10 text-white px-5 py-2 rounded-full text-sm font-medium tracking-wide">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-medium text-white mb-6 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-base text-gray-400 mb-8">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      <span className="font-light">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span className="font-light">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-light">{post.readTime}</span>
                  </div>
                </div>

                <button className="group flex items-center gap-3 text-blue-400 hover:text-blue-300 font-medium tracking-wide transition-colors duration-300">
                  Read More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-5 rounded-full text-xl font-medium tracking-wide transition-all duration-300 shadow-lg shadow-blue-500/25">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;