const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Engineer",
      company: "Zoca",
      period: "Nov, 2024 - Present",
      description: "Built websites for SMBs based out of USA, so that their business can be boosted by local SEO."
    },
    {
      title: "Software Engineer",
      company: "Microsoft",
      period: "Nov, 2021 - June, 2024",
      description: "Worked for Microsoft Viva Goals, a product that helps teams to set OKRs and track progress."
    },
    {
      title: "Software Engineer",
      company: "Ally.io",
      period: "June, 2021 - Nov, 2024",
      description: "Worked for Ally.io, a SaaS company that helps teams to set OKRs and track progress."
    },
    // Add more experiences as needed
  ];

  return (
    <section className="py-10 px-6 backdrop-blur-md bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
        Experience
      </h2>
      <div className="relative">
        {/* Vertical dotted line */}
        <div className="absolute left-2 top-0 h-full border-l-2 border-solid border-gray-300 dark:border-gray-600" />
        
        {/* End point marker */}
        <div className="absolute left-2 bottom-0 -translate-x-1/2 w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600" />
        
        {/* Experience items */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 mb-8">
              {/* Dot on the timeline */}
              <div className={`absolute left-2 -translate-x-1/2 w-4 h-4 rounded-full ${index === 0 ? 'bg-blue-500 dark:bg-blue-400' : 'bg-blue-300 dark:bg-blue-600'}`} />
              
              <div className="bg-white/50 dark:bg-gray-700/50 px-4 rounded-lg">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 