import { Icons } from "@/components/icons";
import { HomeIcon} from "lucide-react";

export const DATA = {
  name: "Himanshu Mandal",
  initials: "DV",
  url: "https://profoliohim.netlify.app/",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/Dwarka,+Delhi/@28.5733101,77.0450953,13z/data=!3m1!4b1!4m6!3m5!1s0x390d1a9c31eec4e1:0x39493976cba4c89a!8m2!3d28.5822999!4d77.0499762!16s%2Fm%2F025xsf1?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D",
  description:
    "As a Software Engineer turned Entrepreneur, I specialize in creating innovative solutions and empowering others to achieve their goals efficiently. I value optimization and automation, leveraging my skills to simplify complex processes for maximum productivity.",
  summary:
    "I am a highly driven Computer Science Engineering student actively pursuing an internship in the software industry. With a strong foundation in algorithms, data structures, and web development, I excel in developing efficient, scalable solutions. Proficient in C/C++, and experienced in Python, Java, HTML, CSS, JavaScript,Typescript, React (Next.js), Node.js, Appwrite, and MySQL, I have successfully solved 350+ problems on, and hold a 5-star rating on HackerRank. I am eager to apply my skills and grow within a fast-paced, innovation-driven environment.",
  avatarUrl: "/img.jpg",
  skills: [
    "HTML",
    "CSS(Bootstrap)",
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "Python",
    "Java",
    "C++",
    "Mongodb",
    "SQL",
    "Tailwind",
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "himmandal21@gmail.com",
    tel: "+91 8178406687",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Himanshumandal",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/himanshu-mandal-aa5193199/",
        icon: Icons.linkedin,

        navbar: true,
      },
      leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/u/LeetcoderHimanshu21/",
        icon: Icons.leetcode,

        navbar: true,
      },
      Hackerrank: {
        name: "Hackerrank",
        url: "https://www.hackerrank.com/profile/himanshum214bte1",
        icon: Icons.hackerrank,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/himmandal21@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "JP Tech Studio",
      href: "https://www.jptechstudio.com/",
      badges: [],
      location: "Remote",
      title: "Web Development Intern",
      logoUrl: "/jptech.jpg",
      start: "April 2024",
      end: "July 2024",
      description:
        "implementing website designs, handling complex layouts, and ensuring full functionality across the site. This includes translating design concepts into responsive, user-friendly web interfaces while integrating dynamic features to enhance user experience and optimize performance.",
    },
   
  ],
  education: [
    {
      school: "KCC Institute of Technology and Management",
      href: "https://www.kccitm.edu.in/",
      degree: "B.Tech (Computer Science Engineering)",
      logoUrl: "/kcc.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Nav Jeewan Academy SR. SEC. School",
      href: "http://www.navjeewanacademy.org/",
      degree: "12th ",
      logoUrl: "/nav.jpg",
      start: "2019",
      end: "2020",
    },
    {
      school: "Nav Jeewan Academy SR. SEC. School",
      href: "http://www.navjeewanacademy.org/",
      degree: "10th",
      logoUrl: "/nav.jpg",
      start: "2017",
      end: "2018",
    },
  ],
  projects: [

    {
      title: "Travel Trip",
      href: "https://traveltript.netlify.app/",
      dates: "September 2024 ",
      active: true,
      description:
        "I am implementing a travel website using Next.js, featuring a fully responsive design and optimized for SEO. The platform enables users to plan trips between destinations, offering a seamless user experience across devices. By leveraging Next.js's built-in capabilities, the website ensures fast performance, server-side rendering, and enhanced discoverability, making it an ideal tool for users looking to efficiently organize their travel plans.",
      technologies: [
       "HTML",
       "CSS",
       "Nextjs",
       "Typescript",
       "Rapid API",
       "Tailwind",
       "FontAwesome"
      ],
      links: [
        {
          type: "Website",
          href: "https://traveltript.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Himanshumandal/Travel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/travel.webp",
    },
    {
      title: "Royal Carshowcase",
      href: "https://github.com/Himanshumandal/Royal",
      dates: "September 2024 ",
      active: true,
      description:
        "I am developing a car showcase website using Next.js, with a fully responsive design optimized for SEO. The platform allows users to explore a wide range of cars, displaying detailed specifications, features, and manufacturing years for each model. Leveraging Next.js's powerful server-side rendering capabilities and performance optimization features, the website ensures fast load times and enhanced visibility across search engines. This makes it an ideal solution for users seeking an intuitive and efficient way to discover and compare cars.",
      technologies: [
       "HTML",
       "CSS",
       "Nextjs",
       "Typescript",
       "Rapid API",
       "Tailwind",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Himanshumandal/Royal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/carshow.jpg",
    },
    {
      title: "Zepp",
      href: "https://github.com/Himanshumandal/Ecommerce",
      dates: "November 2023 ",
      active: true,
      description:
        "We chose Node.js for its high performance, scalability, and real-time capabilities, making it ideal for managing thousands of concurrent connections efficiently. By integrating Express.js as the web framework, token-based authentication for secure user sessions, and MongoDB for scalable data storage, we ensure a seamless, responsive shopping experience. This tech stack enables rapid API handling, secure transactions, and persistent data management, providing an optimal solution for modern e-commerce platforms.",
      technologies: [
       "Javascript",
       "Expressjs",
       "MongoDB",
       "Nodejs",
       "Middlewares"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Himanshumandal/Ecommerce",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shopping.png",
    },
    {
      title: "Yumm",
      href: "https://github.com/Himanshumandal/Yumm",
      dates: "December 2023 ",
      active: true,
      description:
        "We chose Node.js for its high performance, scalability, and real-time capabilities, making it ideal for managing thousands of concurrent connections efficiently. By integrating Express.js as the web framework, token-based authentication for secure user sessions, and MongoDB for scalable data storage, we ensure a seamless, responsive Food experience. This tech stack enables rapid API handling, secure transactions, and persistent data management, providing an optimal solution for modern food platforms.",
      technologies: [
       "Javascript",
       "Nodejs",
       "Expressjs",
       "Middleware",
       "Mongoose"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Himanshumandal/Yumm",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/yumm.png",
    },
    {
      title: "Is Done",
      href: "https://isdone.netlify.app/",
      dates: "August 2024 ",
      active: true,
      description:
        "I developed a React-based project called 'ToDo App' to deepen my expertise in React and its hooks, focusing on implementing state management and real-time functionality. The application allows users to efficiently add, edit, and delete tasks, providing a dynamic user experience. A key feature of the app is persistent data storage, ensuring that tasks remain unchanged even after the app is closed and reopened. This enhances usability by allowing users to manage their to-do lists without losing progress. The app demonstrates a robust approach to task management, making it both practical and intuitive for daily use.",
      technologies: [
       "HTML",
       "CSS",
       "Javascript",
       "React",
       "Material UI",
       "Rapid API",
       "FontAwesome"
      ],
      links: [
        {
          type: "Website",
          href: "https://isdone.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Himanshumandal/isdone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/todo.jpg",
    },
    {
      title: "Desi Cryto",
      href: "https://cryptodesi.netlify.app/",
      dates: "July 2024 ",
      active: true,
      description:
        "I developed a React-based project named Desi Crypto to enhance my skills with React and its hooks. The website provides users with real-time data on various cryptocurrencies, displaying detailed graphs for each coin and offering relevant video content for further insights.",
      technologies: [
       "HTML",
       "CSS",
       "Javascript",
       "React",
       "Material UI",
       "Rapid API",
       "FontAwesome"
      ],
      links: [
        {
          type: "Website",
          href: "https://cryptodesi.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Himanshumandal/desicrypto",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/crypto.webp",
    },
    {
      title: "CodeCanvas",
      href: "https://himanshumandal.github.io/Portfolio/",
      dates: "Jan 2023 - Jan 2023",
      active: true,
      description:
        "I have committed to developing a comprehensive website utilizing HTML, CSS (Bootstrap), and JavaScript. The project will focus on delivering a fully responsive design, ensuring optimal performance across devices, and implementing complex layouts to enhance user engagement and experience.",
      technologies: [
        "Figma",
        "Javascript",
        "HTML",
        "CSS",
        "Bootstrap"
      ],
      links: [
        {
          type: "Website",
          href: "https://himanshumandal.github.io/Portfolio/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Himanshumandal/Portfolio",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/personal.jpg",
      
    },
    {
      title: "PassMaster",
      href: "https://hidegen.netlify.app/",
      dates: "Jan 2024 - Jan 2024",
      active: true,
      description:
        "As part of my JavaScript learning process, I developed a random password generator as a practice project. This tool generates secure and unique passwords, helping users create complex, hard-to-guess credentials to enhance security. It was designed to reinforce my understanding of core JavaScript concepts while providing practical functionality.",
      technologies: [
        "Figma",
        "Javascript (core)",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://hidegen.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pass.png",
      
    },
    {
      title: "MastMasala",
      href: "https://mastmasala.netlify.app/",
      dates: "Nov 2023 - Nov 2023",
      active: true,
      description:
        "As part of my Frontend learning process, I developed a Gaana or Song as a practice project. This website provide limited No Copyring sounds, helping users to download and listen the music. It was designed to reinforce my understanding of core JavaScript concepts while providing practical functionality.",
      technologies: [
        "Javascript (core)",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://mastmasala.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Himanshumandal/Spotify-clone",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/mast.jpg",
      
    },
    
  ],
  hackathons: [
   
    //  {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },

    {
      title: "Vihaan Hackathon",
      dates: "April 11 ,2024",
      location: "New Delhi,India",
      image:
        "/hack1.webp",
    },

    {
      title: "InnovateX E-cell Hackathon",
      dates: "July 21 ,2024",
      location: "New Delhi,India",
      image:
        "/hack2.jpg",
      
    },
  ],
} as const;