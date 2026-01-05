import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Import images
import airportImg from '@/assets/projects/airport.jpg';
import corporateImg from '@/assets/projects/corporate.jpg';
import datacenterImg from '@/assets/projects/datacenter.jpg';
import hospitalImg from '@/assets/projects/hospital.jpg';

const Projects = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isArabic = language === 'ar';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'all', label: isArabic ? 'جميع المشاريع' : 'All Projects' },
    { id: 'government', label: isArabic ? 'حكومي' : 'Government' },
    { id: 'aviation', label: isArabic ? 'الطيران' : 'Aviation' },
    { id: 'infrastructure', label: isArabic ? 'البنية التحتية' : 'Infrastructure' },
  ];

  const featuredProject = {
    title: isArabic ? 'مطار الملك خالد الدولي' : 'King Khalid International Airport',
    location: isArabic ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
    image: airportImg,
    stats: [
      { value: '200+', label: isArabic ? 'كاميرات مراقبة' : 'CCTV Cameras' },
      { value: '600+', label: isArabic ? 'نقاط تحكم' : 'Access Points' },
      { value: '98%', label: isArabic ? 'الموثوقية' : 'Uptime' },
    ],
  };

  const otherProjects = [
    {
      title: isArabic ? 'المقر الحكومي المركزي' : 'Ministry Complex',
      image: corporateImg,
      category: isArabic ? 'أمن حكومي' : 'Government Security',
    },
    {
      title: isArabic ? 'مركز البيانات الوطني' : 'Petrochemical Facility',
      image: datacenterImg,
      category: isArabic ? 'البنية التحتية' : 'Infrastructure',
    },
    {
      title: isArabic ? 'المركز الطبي المتخصص' : 'Private Security Campus',
      image: hospitalImg,
      category: isArabic ? 'الرعاية الصحية' : 'Corporate',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className={`inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isArabic ? 'font-arabic' : ''}`}
          >
            {isArabic ? 'مشاريعنا' : 'OUR PROJECTS'}
          </span>
          <h2
            className={`text-section font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isArabic ? 'font-arabic' : 'font-display'}`}
            style={{ transitionDelay: '100ms' }}
          >
            {isArabic ? (
              <>
                حماية البنية التحتية الحيوية
                <br />
                <span className="gradient-text">في المملكة العربية السعودية</span>
              </>
            ) : (
              <>
                Protecting Saudi Arabia's
                <br />
                <span className="gradient-text">Critical Infrastructure</span>
              </>
            )}
          </h2>
        </div>

        {/* Project Tabs */}
        <div
          className={`flex justify-center flex-wrap gap-2 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'gradient-primary text-primary-foreground shadow-glow'
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
              } ${isArabic ? 'font-arabic' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Featured Project */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="relative rounded-3xl overflow-hidden group">
            <img 
              src={featuredProject.image} 
              alt={featuredProject.title}
              className="w-full h-[400px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center gap-2 text-primary mb-3">
                <MapPin className="w-4 h-4" />
                <span className={`text-sm ${isArabic ? 'font-arabic' : ''}`}>{featuredProject.location}</span>
              </div>
              
              <h3 className={`text-2xl md:text-3xl font-bold text-foreground mb-6 ${isArabic ? 'font-arabic' : 'font-display'}`}>
                {featuredProject.title}
              </h3>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-4 md:gap-8">
                {featuredProject.stats.map((stat, index) => (
                  <div key={index} className="glass-card px-5 py-3">
                    <p className="text-xl md:text-2xl font-bold gradient-text font-display">{stat.value}</p>
                    <p className={`text-sm text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className={`inline-block text-xs text-primary font-medium mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                  {project.category}
                </span>
                <h4 className={`text-lg font-bold text-foreground ${isArabic ? 'font-arabic' : ''}`}>
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
