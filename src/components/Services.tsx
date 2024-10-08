interface ServiceProps {
    title: string;
    icon: React.ReactNode;
    number: string;
  }
  
  const ServiceCard: React.FC<ServiceProps> = ({ title, icon, number }) => (
    <div className="relative bg-blue-700 text-white p-8 rounded-lg transition-all duration-300 transform hover:bg-blue-300 hover:text-blue-800 hover:shadow-lg hover:scale-105 ease-in-out">
      <div className="absolute top-4 left-4 text-3xl font-bold text-blue-100">
        {number}
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-5xl mb-6">{icon}</div>
        <h3 className="font-bold text-2xl">{title}</h3>
      </div>
    </div>
  );
  
  const Services: React.FC = () => (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-5">
      <ServiceCard
        title="Website Development"
        number="01"
        icon={<i className="fas fa-code"></i>}
      />
      <ServiceCard
        title="Graphic Designing"
        number="02"
        icon={<i className="fas fa-paint-brush"></i>}
      />
      <ServiceCard
        title="SEO & Content Writing"
        number="03"
        icon={<i className="fas fa-search"></i>}
      />
      <ServiceCard
        title="SEO & Content Writing"
        number="03"
        icon={<i className="fas fa-search"></i>}
      />
      <ServiceCard
        title="SEO & Content Writing"
        number="03"
        icon={<i className="fas fa-search"></i>}
      />
      <ServiceCard
        title="SEO & Content Writing"
        number="03"
        icon={<i className="fas fa-search"></i>}
      />
    </div>
  );
  
  export default Services;
  