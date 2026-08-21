const comparisonData = [
    {
        factor: "Team management",
        teamExtension: "You manage directly",
        deliveryPods: "ValueCoders manages pod",
        developmentCentres: "You manage, VC handles ops",
    },
    {
        factor: "Governance structure",
        teamExtension: "Your PM, your rituals",
        deliveryPods: "VC sprint governance + metrics",
        developmentCentres: "Your brand and standards",
    },
    {
        factor: "Billing model",
        teamExtension: "Per-engineer, monthly",
        deliveryPods: "Monthly pod rate",
        developmentCentres: "Cost-plus or managed",
    },
    {
        factor: "Ramp speed",
        teamExtension: "Per-engineer, monthly",
        deliveryPods: "1–2 week pod formation",
        developmentCentres: "4–6 week centre setup",
    },
    {
        factor: "Minimum commitment",
        teamExtension: "3 months",
        deliveryPods: "3 months",
        developmentCentres: "12 months",
    },
];

export default function ComparisonTable() {
    return (
        <section className="w-full bg-white mt-6 md:mt-16">
            <div className=" w-full">
                {/* Table wrapper */}
                <div className="relative overflow-x-scroll lg:overflow-x-hidden rounded-[18px] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                    <div className="rounded-[18px] w-310">
                        {/* Header */}
                        <div className="grid grid-cols-4 bg-[#f4f4f6]">
                            <div className="flex items-center p-6.25 w-full">
                                <span className="text-[18px] font-medium text-[#1C2024]">
                                    FACTOR
                                </span>
                            </div>

                            <div className="flex items-center bg-[#DCE7FF] p-6.25 w-full">
                                <span className="text-[18px] font-medium text-[#2563EB]">
                                    TEAM EXTENSION
                                </span>
                            </div>

                            <div className="flex items-center border-l border-[#e4e4e7] p-6.25 w-full">
                                <span className="text-[18px] font-medium  text-[#1C2024]">
                                    DELIVERY PODS
                                </span>
                            </div>

                            <div className="flex items-center border-l border-[#e4e4e7] p-6.25 w-full">
                                <span className="whitespace-nowrap text-[18px] font-medium text-[#1C2024]">
                                    DEVELOPMENT CENTRES
                                </span>
                            </div>
                        </div>

                        {/* Body */}
                        {comparisonData.map((row, index) => (
                            <div
                                key={row.factor}
                                className="relative grid grid-cols-4"
                            >
                                {/* Factor */}
                                <div
                                    className={`flex  items-center bg-white p-6.25 w-full shadow-[0px_3.1px_10.85px_2.32px_rgba(0,0,0,0.06)] ${index !== comparisonData.length - 1
                                            ? "border-b border-[#eeeeef]"
                                            : ""
                                        }`}
                                >
                                    <span className="text-[16px] font-medium tracking-[-0.01em] text-[#20232a]">
                                        {row.factor}
                                    </span>
                                </div>

                                {/* Team Extension */}
                                <div
                                    className={`flex p-6.25 w-full  items-center bg-[#f8faff] shadow-[0px_3.1px_10.85px_2.32px_rgba(0,0,0,0.06)] ${index !== comparisonData.length - 1
                                            ? "border-b border-[#eeeeef]"
                                            : ""
                                        }`}
                                >
                                    <span className="text-[16px] font-medium tracking-[-0.01em] text-[#656a75]">
                                        {row.teamExtension}
                                    </span>
                                </div>

                                {/* Delivery Pods */}
                                <div
                                    className={`flex p-6.25 w-full  items-center border-l border-[#eeeeef] bg-white shadow-[0px_3.1px_10.85px_2.32px_rgba(0,0,0,0.06)] ${index !== comparisonData.length - 1
                                            ? "border-b border-[#eeeeef]"
                                            : ""
                                        }`}
                                >
                                    <span className="text-[16px] font-medium tracking-[-0.01em] text-[#656a75]">
                                        {row.deliveryPods}
                                    </span>
                                </div>

                                {/* Development Centres */}
                                <div
                                    className={`flex p-6.25 w-full  items-center border-l border-[#eeeeef] bg-white shadow-[0px_3.1px_10.85px_2.32px_rgba(0,0,0,0.06)] ${index !== comparisonData.length - 1
                                            ? "border-b border-[#eeeeef]"
                                            : ""
                                        }`}
                                >
                                    <span className="text-[16px] font-medium tracking-[-0.01em] text-[#656a75]">
                                        {row.developmentCentres}
                                    </span>
                                </div>

                                {/* Blue indicator */}
                                {index === 3 && (
                                    <div className="pointer-events-none absolute left-[50%] top-1/1 z-20 h-8.5 w-8.5 -translate-x-1/2 -translate-y-1/2 rounded-full"> 
                                     <img src="/down-arrow-gif.gif" alt="down-arrow" className="w-full h-auto object-cover"/>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}