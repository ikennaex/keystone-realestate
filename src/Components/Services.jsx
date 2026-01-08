import React from "react";
import {
  Home,
  Building2,
  TrendingUp,
  Briefcase,
  Truck,
  BarChart3,
} from "lucide-react";

const services = [
  {
    title: "Residential Real Estate",
    description:
      "Comprehensive support for buying, selling, and leasing residential properties, guided by local market expertise and client focused service.",
    icon: Home,
  },
  {
    title: "Commercial Real Estate",
    description:
      "Advisory and transaction services for office, retail, and industrial properties aligned with business growth and long term value.",
    icon: Building2,
  },
  {
    title: "Investment Consulting",
    description:
      "Strategic property investment guidance focused on returns, risk assessment, and portfolio optimization.",
    icon: TrendingUp,
  },
  {
    title: "Property Management",
    description:
      "End to end property management services ensuring asset protection, tenant satisfaction, and consistent income performance.",
    icon: Briefcase,
  },
  {
    title: "Relocation Services",
    description:
      "Seamless relocation assistance for individuals and organizations, simplifying transitions across residential and commercial markets.",
    icon: Truck,
  },
  {
    title: "Market Analysis & Valuation",
    description:
      "In depth market research and property valuation services to support informed decision making and accurate pricing strategies.",
    icon: BarChart3,
  },
];

const Services = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-slate-600">
            Keystone Real Estate provides a full spectrum of real estate services
            designed to support residential, commercial, and investment
            objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-customBlue-50 p-8 transition hover:bg-white hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-customBlue text-white">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* <div className="mt-6">
                  <button className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
                    Learn More
                  </button>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
