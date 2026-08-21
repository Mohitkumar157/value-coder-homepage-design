function CaseStudyCard({ data }) {
  console.log(data);

  if (!data) return null;

  return (
    <article className={`w-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden rounded-[20px] border ${data.id === 1 ? "border-[#2563EB]" : "border-white"} bg-white p-10`}>
      {/* Hero */}
      <div className="flex h-65 w-full items-end justify-between gap-1 overflow-hidden rounded-[20px] bg-[#699bf3] px-6">
        {/* Phone mockups */}
        {data.images.map((image, index) => (
          <div key={index} className="shadow-xl">
            <img
              src={image.src}
              alt={image.alt}
              className="block"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="mt-7">
        {/* Category */}
        <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
          {data.category}
        </p>

        {/* Title */}
        <h2 className="mt-3 text-[22px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#1C2024]">
          {data.title}
        </h2>

        {/* Description */}
        <p className="mt-3 text-[16px] font-medium leading-[1.6] text-[#60646C]">
          {data.description}
        </p>

        {/* Stats */}
        <div className="my-8 border-t border-gray-200 pt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 md:gap-4 gap-1">
            {data.stats.map((stat, index) => (
              <div key={index}>
                <p className="text-[24px] font-semibold text-[#20242B]">
                  {stat.value}
                </p>

                <p className="mt-2 text-[14px] lg:pr-9 leading-5 text-[#80838D]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href={data.link}
          className="inline-flex items-center gap-2 text-[16px] font-medium text-[#1D5BC4] transition hover:text-blue-700"
        >
          {data.linkText}
          <span className="text-xl">→</span>
        </a>
      </div>
    </article>
  );
}

export default CaseStudyCard;
