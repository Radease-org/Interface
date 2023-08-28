import React from "react";

const Benefits = () => {
  const keyFeatures = [
    {
      id: 0,
      title: "Pay Later",
      subtitle: "Buy Now",
      icon: "/icons/pay-later.svg",
      iconBg: "bg-[#ecfdf5]",
      line: "/icons/green-line.svg"
    },
    {
      id: 1,
      title: "Free Access",
      subtitle: "Unlimited supplies",
      icon: "/icons/free-access.svg",
      iconBg: "bg-[#FFFBEB]",
      line: "/icons/yellow-line.svg"
    },
    {
      id: 2,
      title: "Free Delivery",
      subtitle: "Door step",
      icon: "/icons/free-delivery.svg",
      iconBg: "bg-[#FFF1F2]",
      line: "/icons/red-line.svg"
    }
  ];
  const medicalSupplyFeatures = [
    {
      id: 0,
      icon: "/icons/always-stocked.svg",
      title: "Always stocked",
      description:
        "Benefit from the great discounts we achieve through bulk-buying and our relationship with world's top manufacturers."
    },
    {
      id: 1,
      icon: "/icons/access-to-supplies.svg",
      title: "Access to scarce supplies",
      description:
        "A central hub means no more administrative nightmare of dealing with numerous suppliers or visiting the market"
    },
    {
      id: 2,
      icon: "/icons/purchase-with-ease.svg",
      title: "Purchase with ease",
      description:
        "A central hub means no more administrative nightmare of dealing with numerous suppliers or visiting the market"
    },
    {
      id: 3,
      icon: "/icons/save-on-spend.svg",
      title: "Save on spend",
      description:
        "Benefit from the great discounts we achieve through bulk-buying and our relationship with world's top manufacturers."
    },
    {
      id: 4,
      icon: "/icons/purchase-with-ease.svg",
      title: "Purchase with ease",
      description:
        "A central hub means no more administrative nightmare of dealing with numerous suppliers or visiting the market"
    },
    {
      id: 5,
      icon: "/icons/buy-with-trust.svg",
      title: "Buy with trust",
      description:
        "A central hub means no more administrative nightmare of dealing with numerous suppliers or visiting the market"
    }
  ];
  return (
    <>
      {/* first section */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-32 my-28 md:mt-20 md:mb-52">
        {keyFeatures.map(feature => {
          return (
            <div className="flex gap-3" key={feature.id}>
              <div
                className={`w-8 h-8 md:w-14 md:h-14 rounded-lg ${feature.iconBg} flex justify-center items-center`}
              >
                <img
                  src={feature.icon}
                  alt=""
                  className="w-4 h-4 md:w-8 md:h-8"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] md:text-xs font-medium text-[#94a3b8]">
                  {feature.subtitle}
                </span>
                <span className="text-sm md:text-base font-bold">
                  {feature.title}
                </span>
                <img src={feature.line} alt="" className="mt-1" />
              </div>
            </div>
          );
        })}
      </div>
      {/* second section */}
      <section className="mt-24 md:my-32">
        <h2 className="text-lg md:text-4xl text-center font-black">
          Get medical supplies in a smart way
        </h2>
        <div className="container  px-4 mt-24 md:mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-14">
            {medicalSupplyFeatures.map((feature, idx) => {
              return (
                <div
                  className="relative border border-[#e2e8f0] py-12 px-4 rounded-lg flex justify-center items-center flex-col text-center"
                  key={idx}
                >
                  <div className="icon-container w-16 h-16  flex justify-center items-center shadow-[0_16px_24px_0_rgba(11,26,68,0.15)] rounded-full absolute top-[-32px] bg-[#f8fafc]">
                    <img src={feature.icon} alt="" />
                  </div>
                  <h3 className="font-bold">{feature.title}</h3>
                  <span className="text-sm font-medium w-72">
                    {feature.description}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* third section */}
      <section className="mt-24 md:my-32">
        <div className="container px-4">
          <div className="flex gap-28 flex-wrap items-center justify-center">
            <div className="max-w-[590px]">
              <span className="text-[#059669] bg-[#ECFDF5] font-bold text-sm p-1.5">
                The digital way
              </span>
              <h2 className="text-4xl font-black mb-6 mt-3">
                Get your supplies hassle free
              </h2>
              <p className="font-medium">
                Benefit from the great discounts we achieve through bulk-buying
                and our relationship with world's top manufacturers.
              </p>
            </div>
            <div className="img-container">
              <img src="/images/hassle-free.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
