export type StoreLink = {
  label: "Google Play" | "App Store" | "Website";
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  highlights: string[];
  stack: string[];
  role: string;
  accent: string;
  links: StoreLink[];
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  bullets: string[];
};

export const profile = {
  name: "Zubair Khalid",
  title: "Senior Software Engineer — Mobile",
  location: "Lahore, Pakistan",
  phone: "+92-312-4579459",
  email: "zabi.butt1989@gmail.com",
  linkedin: "https://www.linkedin.com/in/zubair-khalid-20bb769a",
  linkedinLabel: "linkedin.com/in/zubair-khalid-20bb769a",
  pitch:
    "I ship Android and cross-platform apps that people can actually download — from native work to Ionic and React Native — with a focus on performance and the full release cycle.",
  summary:
    "Senior Software Engineer specializing in mobile application development. I lead delivery of production apps with a practical mix of native Android, cross-platform (React Native, Ionic, Flutter), and full-stack work. Comfortable owning the lifecycle: implementation, UI integration, release, and ongoing optimization.",
  skills: {
    Android: ["Android Studio", "Kotlin", "Java", "BLE"],
    "Cross-platform": ["React Native", "Flutter", "Ionic", "React", "TypeScript", "Dart"],
    Backend: [".NET", "C#", "Microsoft SQL Server", "Visual Studio"],
    Tools: ["IntelliJ", "Git"],
  },
  education: [
    {
      school: "The University of Lahore",
      credential: "Bachelor in Electronics and Communications",
      place: "Lahore, Pakistan",
      dates: "02/2010 – 03/2014",
    },
    {
      school: "Board of Intermediate and Secondary Education Lahore",
      credential: "HSSC, Science Group",
      place: "Lahore, Pakistan",
      dates: "04/2007 – 05/2009",
    },
  ],
  certifications: ["Certified Android Application Development"],
  experience: [
    {
      title: "Senior Software Engineer - Mobile",
      company: "3S Solutions (Pvt) Ltd",
      location: "Pakistan",
      start: "04/2023",
      end: "Present",
      summary:
        "Lead mobile delivery for client products, covering native Android and cross-platform stacks.",
      bullets: [
        "Lead crafting and shipping of production mobile applications across native Android, React Native, and Ionic.",
        "Own the full app lifecycle: implementation, UI/UX integration, release, and ongoing performance work.",
        "Keep delivery aligned with current platform capabilities rather than one-off feature dumps.",
      ],
    },
    {
      title: "Android App Developer",
      company: "3S Solutions (Pvt) Ltd",
      location: "Pakistan",
      start: "02/2021",
      end: "04/2023",
      summary:
        "Technology firm specializing in mobile and web application development.",
      bullets: [
        "Developed Android applications with a focus on usability and optimization.",
        "Collaborated on team projects and code reviews.",
        "Applied standard mobile development practices across features and releases.",
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "Graffitecs Solutions",
      location: "Pakistan",
      start: "08/2020",
      end: "02/2021",
      summary: "Digital solutions provider focusing on full-stack development.",
      bullets: [
        "Contributed to both front-end and back-end development.",
        "Worked across the stack to deliver complete software features for client projects.",
      ],
    },
    {
      title: "Mobile Application & .NET Backend Developer",
      company: "CoinBitSolution (Pvt) Ltd",
      location: "Pakistan",
      start: "08/2018",
      end: "07/2020",
      summary:
        "Company focused on cryptocurrency solutions and mobile applications.",
      bullets: [
        "Developed Android application features and .NET MVC backend services.",
        "Worked on mobile functionality alongside server-side APIs for product flows.",
      ],
    },
    {
      title: "Junior Software Developer",
      company: "Inovedia Technologies Ltd",
      location: "Pakistan",
      start: "06/2018",
      end: "08/2018",
      summary: "IT services company specializing in technology development.",
      bullets: [
        "Gained practical experience in Android app development.",
        "Assisted in ERC-20 Ethereum token development.",
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      slug: "essential-emotions",
      name: "Essential Emotions",
      tagline: "Emotional health, on the phone",
      summary:
        "A mobile app focused on emotional health — helping people look up emotions and stay engaged with the product’s guidance tools.",
      highlights: [
        "Emotions-focused product experience rather than a generic wellness template.",
        "Built and iterated as a shipped store listing, not a demo.",
      ],
      stack: ["Mobile", "Android"],
      role: "Mobile engineer at 3S Solutions",
      accent: "#7c6cff",
      links: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.essentialemotion.guru",
        },
        {
          label: "Website",
          href: "https://essentialemotions.com/app/",
        },
      ],
    },
    {
      slug: "savor",
      name: "Savor Leftover Food",
      tagline: "Less food waste, clearer next step",
      summary:
        "A mobile app aimed at reducing food waste through a simple, user-facing experience for leftover and surplus food.",
      highlights: [
        "Consumer-facing flows designed for everyday use.",
        "Available on public stores so the work can be opened and reviewed.",
      ],
      stack: ["Mobile", "Android", "iOS"],
      role: "Mobile engineer at 3S Solutions",
      accent: "#e8a54b",
      links: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.budgetbites",
        },
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/savor-eats/id6450114350",
        },
      ],
    },
    {
      slug: "martoo",
      name: "Martoo Grocery",
      tagline: "Grocery ordering without the friction",
      summary:
        "A grocery shopping app focused on convenience: browse, order, and get through checkout with a streamlined mobile experience.",
      highlights: [
        "Consumer grocery flows built for everyday shopping.",
        "Paired with the public Martoo product presence in the UAE market.",
      ],
      stack: ["Mobile", "Android"],
      role: "Mobile engineer at 3S Solutions",
      accent: "#3dd6c6",
      links: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.martoo.grocery",
        },
        {
          label: "Website",
          href: "https://martoo.ae/",
        },
      ],
    },
    {
      slug: "mr-rebounder",
      name: "Mr. Rebounder",
      tagline: "Virtual trainer, on your schedule",
      summary:
        "A virtual trainer app for customisable, flexible workouts — pick a pre-made routine or build your own and follow along.",
      highlights: [
        "Pre-defined exercise routines plus room to customise.",
        "Fitness product shipped as a public Android listing.",
      ],
      stack: ["Mobile", "Android"],
      role: "Mobile engineer at 3S Solutions",
      accent: "#f07167",
      links: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.cellercise.rebounder",
        },
      ],
    },
  ] satisfies Project[],
} as const;

export const skillGroups = Object.entries(profile.skills);

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
