
import CaseStudyCard from './CaseStudyCard'
import SubHeading from './ui/SubHeading';

const caseStudies = [
  {
    id: 1,
    category: "SaaS / Fintech",

    title:
      "Series B FinTech Added 4 Backend Engineers Without Slowing an Active Release Cycle",

    description:
      "Managing a designer, Shopify contractor, SEO consultant, and PPC agency separately was costing FreshThread 12 hours a week in coordination. 6 months after consolidating with PixelCrayons.",

    images: [
      {
        src: "/RedmeNote11.png",
        alt: "FinTrack Pro dashboard",
      },
      {
        src: "/Redmi Note 11 Pro.png",
        alt: "FinTrack Pro team dashboard",
      },
    ],

    stats: [
      {
        value: "4 engineers",
        label: "Added to an active team",
      },
      {
        value: "6 days",
        label: "Time to first PR merged",
      },
      {
        value: "18 mo",
        label: "Engagement duration",
      },
    ],

    link: "#",
    linkText: "Read the case study",
  },

  {
    id: 2,
    category: "ISV / Healthcare",

    title:
      "Healthcare ISV Scaled QA Automation Capacity by 300% in Three Weeks Ahead of HIPAA Audit",

    description:
      "Orbit had hit their capacity ceiling. Turning away new clients wasn't sustainable, but taking on freelancers was producing inconsistent output.",

    images: [
      {
        src: "/RedmeNote11.png",
        alt: "Healthcare patient dashboard",
      },
      {
        src: "/Redmi Note 11 Pro.png",
        alt: "Healthcare appointment booking dashboard",
      },
    ],

    stats: [
      {
        value: "3×",
        label: `QA capacity increase`,
      },
      {
        value: "21 days",
        label: "From brief to full capacity",
      },
      {
        value: "0",
        label: "Audit findings from augmented work",
      },
    ],

    link: "#",
    linkText: "Read the case study",
  },
];



function EngineeringTeams() {
  return (
    <section className='pt-16 md:pt-20 lg:pt-24'>
      <div className="container px-4 lg:px-0">
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-16'>
          <div className="section-head">
            <SubHeading title={"Proof"} className={"text-[#2563EB]"} />
            <h2 className='text-[#05164D] text-[46px] font-bold leading-12.5'>
              Engineering teams extended, shipping on their roadmap
            </h2>
          </div>
          <p className='text-[18px] text-[#60646C] md:max-w-103.75'>
            Two representative engagements. Each started as a Team Extension 
            and continued beyond the initial three months.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
          {caseStudies.map((card) => (
            <CaseStudyCard data={card} key={card.id} />
          ))}
          <div><CaseStudyCard /></div>
          <div><CaseStudyCard /></div>
        </div>
      </div>
    </section>
  )
}

export default EngineeringTeams
