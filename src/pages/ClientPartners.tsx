const partners = [
  {
    name: "Giant Bicycles",
    logo: "https://png.pngtree.com/png-clipart/20230513/original/pngtree-new-motorbike-logo-design-png-image_9160405.png",
    url: "https://www.giant-bicycles.com/",
  },
  {
    name: "Trek Bikes",
    logo: "https://png.pngtree.com/png-clipart/20230513/original/pngtree-new-motorbike-logo-design-png-image_9160405.png",
    url: "https://www.trekbikes.com/",
  },
  {
    name: "Specialized",
    logo: "https://png.pngtree.com/png-clipart/20230513/original/pngtree-new-motorbike-logo-design-png-image_9160405.png",
    url: "https://www.specialized.com/",
  },
  {
    name: "Cannondale",
    logo: "https://png.pngtree.com/png-clipart/20230513/original/pngtree-new-motorbike-logo-design-png-image_9160405.png",
    url: "https://www.cannondale.com/",
  },
  // Add more as needed
];

const ClientPartners = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:px-20">
      <h1 className="text-3xl font-bold text-center mb-8">
        Our Trusted Partners
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center  justify-center p-4 bg-white rounded-lg hover:shadow-lg transition"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ClientPartners;
