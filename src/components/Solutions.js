import { 
  Store, 
  CalendarDays, 
  Building2, 
  Factory,
  Truck,
  BarChart3,
  ChevronRight,
  Award,
  Users,
  LineChart,
  Smartphone,
  Tag,
  Badge,
  MessageSquare,
  Share2,
  Zap,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Eye,
  Layers
} from 'lucide-react';

const Solutions = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#4ecca3]/10 to-gray-50">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block bg-[#4ecca3]/10 rounded-full px-4 py-1 text-[#4ecca3] text-sm font-semibold mb-4">
            Intelligent Technology
          </div>
          <h2 className="text-5xl font-bold mb-6">Smart Operations Reimagined</h2>
          <p className="text-gray-600 text-xl leading-relaxed">
          Welcome to the next generation of intelligent operations. Where retail spaces become interactive shopping experiences, events transform into immersive journeys, and every touchpoint creates meaningful connections. Turn everyday interactions into extraordinary opportunities.

          </p>
        </div>

        {/* Featured Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-[#4ecca3] mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-4">Intelligent Operations</h3>
            <p className="text-gray-600 mb-6">
              Leverage precision tracking and real-time visibility to streamline operations and make 
              data-driven decisions instantly.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm group-hover:translate-x-1 transition-transform duration-200">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2 flex-shrink-0" />
                <span>Enterprise-grade accuracy</span>
              </div>
              <div className="flex items-center text-sm group-hover:translate-x-1 transition-transform duration-200 delay-75">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2 flex-shrink-0" />
                <span>Intelligent alerting system</span>
              </div>
              <div className="flex items-center text-sm group-hover:translate-x-1 transition-transform duration-200 delay-100">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2 flex-shrink-0" />
                <span>Smart space monitoring</span>
              </div>
            </div>
          </div>

          <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-[#4ecca3] mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <Layers className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-4">Seamless Experiences</h3>
            <p className="text-gray-600 mb-6">
              Create magical moments with tap-to-interact technology that transforms physical touchpoints 
              into digital experiences.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm group-hover:translate-x-1 transition-transform duration-200">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2 flex-shrink-0" />
                <span>Instant mobile access</span>
              </div>
              <div className="flex items-center text-sm group-hover:translate-x-1 transition-transform duration-200 delay-75">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2 flex-shrink-0" />
                <span>No-app interactions</span>
              </div>
              <div className="flex items-center text-sm group-hover:translate-x-1 transition-transform duration-200 delay-100">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2 flex-shrink-0" />
                <span>Personalized journeys</span>
              </div>
            </div>
          </div>

          <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-[#4ecca3] mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-4">Actionable Intelligence</h3>
            <p className="text-gray-600 mb-6">
              Turn data into decisions with AI-powered analytics that reveal opportunities and predict 
              trends before they happen.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm group-hover:translate-x-1 transition-transform duration-200">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2 flex-shrink-0" />
                <span>Predictive insights</span>
              </div>
              <div className="flex items-center text-sm group-hover:translate-x-1 transition-transform duration-200 delay-75">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2 flex-shrink-0" />
                <span>Real-time analytics</span>
              </div>
              <div className="flex items-center text-sm group-hover:translate-x-1 transition-transform duration-200 delay-100">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2 flex-shrink-0" />
                <span>Performance optimization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="space-y-40">
          {/* Retail Solution */}
          <div className="relative px-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4ecca3]/5 to-transparent rounded-3xl" />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center bg-white shadow-md rounded-full px-6 py-2 mb-6">
                    <Store className="w-5 h-5 text-[#4ecca3] mr-2" />
                    <span className="font-semibold">Retail Innovation</span>
                  </div>
                  <h2 className="text-4xl font-bold mb-4">Revolutionize Retail Experiences</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Create the future of shopping today. Combine intelligent inventory management with 
                    interactive customer experiences that blend the best of digital and physical retail.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="group bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-2xl font-bold text-[#4ecca3] group-hover:scale-110 transition-transform duration-300">99.9%</div>
                    <div className="text-sm text-gray-600">Inventory Accuracy</div>
                  </div>
                  <div className="group bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-2xl font-bold text-[#4ecca3] group-hover:scale-110 transition-transform duration-300">40%</div>
                    <div className="text-sm text-gray-600">Faster Checkout</div>
                  </div>
                  <div className="group bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-2xl font-bold text-[#4ecca3] group-hover:scale-110 transition-transform duration-300">25%</div>
                    <div className="text-sm text-gray-600">Higher Sales</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="flex items-center text-lg font-bold mb-6">
                    <Award className="w-6 h-6 text-[#4ecca3] mr-2" />
                    Intelligent Inventory
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start group-hover:translate-x-1 transition-transform duration-200">
                      <ShieldCheck className="w-5 h-5 text-[#4ecca3] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium block mb-1">Real-time Stock Management</span>
                        <span className="text-sm text-gray-600">Automated counting and smart reordering</span>
                      </div>
                    </li>
                    <li className="flex items-start group-hover:translate-x-1 transition-transform duration-200 delay-75">
                      <ShieldCheck className="w-5 h-5 text-[#4ecca3] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium block mb-1">Loss Prevention</span>
                        <span className="text-sm text-gray-600">Advanced security and monitoring</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="flex items-center text-lg font-bold mb-6">
                    <Zap className="w-6 h-6 text-[#4ecca3] mr-2" />
                    Interactive Shopping
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start group-hover:translate-x-1 transition-transform duration-200">
                      <Tag className="w-5 h-5 text-[#4ecca3] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium block mb-1">Interactive Product Discovery</span>
                        <span className="text-sm text-gray-600">Unlock rich product content with a simple tap</span>
                      </div>
                    </li>
                    <li className="flex items-start group-hover:translate-x-1 transition-transform duration-200 delay-75">
                      <Tag className="w-5 h-5 text-[#4ecca3] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium block mb-1">Smart Labels</span>
                        <span className="text-sm text-gray-600">NFC-enabled instant checkout experience</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Events Solution */}
          <div className="relative px-8">
            <div className="absolute inset-0 bg-gradient-to-l from-[#4ecca3]/5 to-transparent rounded-3xl" />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="flex items-center text-lg font-bold mb-6">
                    <Award className="w-6 h-6 text-[#4ecca3] mr-2" />
                    Smart Event Management
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start group-hover:translate-x-1 transition-transform duration-200">
                      <ShieldCheck className="w-5 h-5 text-[#4ecca3] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium block mb-1">Equipment Intelligence</span>
                        <span className="text-sm text-gray-600">Real-time tracking and automated inventory</span>
                      </div>
                    </li>
                    <li className="flex items-start group-hover:translate-x-1 transition-transform duration-200 delay-75">
                      <ShieldCheck className="w-5 h-5 text-[#4ecca3] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium block mb-1">Smart Space Optimization</span>
                        <span className="text-sm text-gray-600">Real-time crowd insights and flow optimization</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="flex items-center text-lg font-bold mb-6">
                    <Zap className="w-6 h-6 text-[#4ecca3] mr-2" />
                    Interactive Engagement
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start group-hover:translate-x-1 transition-transform duration-200">
                      <Badge className="w-5 h-5 text-[#4ecca3] mr-3 mt-1 flex-shrink-0" />
                      <div>
                      <span className="font-medium block mb-1">Smart Access</span>
                        <span className="text-sm text-gray-600">Seamless check-ins and secure authentication</span>
                      </div>
                    </li>
                    <li className="flex items-start group-hover:translate-x-1 transition-transform duration-200 delay-75">
                      <MessageSquare className="w-5 h-5 text-[#4ecca3] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium block mb-1">Interactive Touchpoints</span>
                        <span className="text-sm text-gray-600">Live polling and dynamic content delivery</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="order-1 md:order-2 space-y-8">
                <div>
                  <div className="inline-flex items-center bg-white shadow-md rounded-full px-6 py-2 mb-6">
                    <CalendarDays className="w-5 h-5 text-[#4ecca3] mr-2" />
                    <span className="font-semibold">Event Innovation</span>
                  </div>
                  <h2 className="text-4xl font-bold mb-4">Create Memorable Events</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Transform traditional events into dynamic, connected experiences. From seamless 
                    check-ins to interactive engagement, make every moment count with intelligent 
                    event technology.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="group bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-2xl font-bold text-[#4ecca3] group-hover:scale-110 transition-transform duration-300">90%</div>
                    <div className="text-sm text-gray-600">Faster Check-in</div>
                  </div>
                  <div className="group bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-2xl font-bold text-[#4ecca3] group-hover:scale-110 transition-transform duration-300">85%</div>
                    <div className="text-sm text-gray-600">Higher Engagement</div>
                  </div>
                  <div className="group bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-2xl font-bold text-[#4ecca3] group-hover:scale-110 transition-transform duration-300">75%</div>
                    <div className="text-sm text-gray-600">More Networking</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <Share2 className="w-6 h-6 text-[#4ecca3] mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-semibold mb-2">Smart Networking</h4>
                    <p className="text-sm text-gray-600">Tap-to-connect profiles and instant content sharing</p>
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <Users className="w-6 h-6 text-[#4ecca3] mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-semibold mb-2">Real-time Analytics</h4>
                    <p className="text-sm text-gray-600">Live engagement tracking and optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;