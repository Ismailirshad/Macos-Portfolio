const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Aug 15, 2025",
    title:
      "Role-Based Access Control (RBAC) Explained: Simple Guide with Animated Flows",
    image: "/images/blog1.png",
    link: "https://irshadblog.hashnode.dev/role-based-access-control-rbac-simple-guide-with-animated-flow-diagrams",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "API Rate Limiting Explained: Simple Code + Animated Workflows",
    image: "/images/blog2.jpg",
    link: "https://irshadblog.hashnode.dev/understanding-rate-limiting-simple-guide-with-animated-flow-diagrams",
  },
  {
    id: 3,
    date: "Sep 2, 2025",
    title: "JWT Authentication Workflow (With Diagrams)",
    image: "/images/blog3.jpg",
    link: "https://irshadblog.hashnode.dev/understanding-jwt-json-web-tokens",
  },
];


const techStack = [
  {
    category: "Frontend Development",
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "Zustand",
      "Tailwind CSS",
      "Axios",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Socket.io",
    ],
  },
  {
    category: "Deployment & Tools",
    items: [
      "Git & GitHub",
      "Postman",
      "VPS Deployment",
      "Nginx",
      "Vercel / Render",
    ],
  },
  {
    category: "ERPNext / Frappe",
    items: [
      "ERPNext",
      "Frappe Framework",
      "DocTypes",
      "Workflows",
      "Custom Scripts",
    ],
  },
];

const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "/icons/github.svg",
    bg: "#1f2937", // dark slate
    link: "https://github.com/Ismailirshad",
  },
  {
    id: 2,
    text: "Email",
    icon: "/icons/mal.png",
    bg: "#047857", // emerald-700 (cleaner)
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=irshadsha164@gmail.com&su=Portfolio%20Contact",
  },
  {
    id: 3,
    text: "Portfolio",
    icon: "/icons/portfolio.png",
    bg: "#065f46", // emerald-800 (slightly darker)
    link: "https://www.ismailirshad.in/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#1e293b", // slate-800
    link: "https://www.linkedin.com/in/ismail-irshad/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/irshad8.jpg",
  },
  {
    id: 2,
    img: "/images/resumeDp.png",
  },
  {
    id: 3,
    img: "/images/gallery3.png",
  },
  {
    id: 4,
    img: "/images/gallery4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // Project 1
    {
      id: 8,
      name: "ELITE Hotel Management & Booking Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80 ",
      windowPosition: "top-[60vh] md:top-[60vh] md:left-100 left-50",
      children: [
        {
          id: 1,
          name: "ELITE Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "ELITE is a full-stack hotel management and booking platform designed to simplify hotel reservations and business operations with a modern, responsive user experience.",
            " The platform supports three roles: User, Hotel Admin, and Super Admin. Users can browse hotels, filter rooms, check availability, book rooms, complete secure payments, and submit ratings after checkout.",
            " Hotel Admins can manage rooms, bookings, offers, and track revenue, expenses, and profit through analytics dashboards. Super Admins can monitor all hotels, manage platform-wide operations, handle support requests, and oversee business performance.",
            " Developed using React.js, Node.js, Express.js, MongoDB, Zustand, JWT, Razorpay, Tailwind CSS, and Recharts, ELITE focuses on scalability, security, performance, and real-world hotel workflows.",
          ],
        },
        {
          id: 2,
          name: "elite.ismailirshad.in",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://elite.ismailirshad.in/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "ELITE Logo",
          icon: "/images/elite_logo.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/elite.png",
        },
      ],
    },
    {
      id: 5,
      name: "Luxora Premium Ecommerce Website Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[10vh] md:left-55 left-10 ",
      children: [
        {
          id: 1,
          name: "Luxora Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Luxora Premium is a full-stack clothing e-commerce application designed to deliver a smooth and secure online shopping experience for premium fashion products.",
            "The platform supports both customer and admin roles with proper role-based access control, allowing admins to manage products, categories, featured collections, and pagination efficiently, while customers can browse, add items to cart, and complete purchases seamlessly.",
            "The project includes secure Stripe payment integration for handling online transactions and order workflows, along with Cloudinary-based image uploads for managing high-quality product media. ",
            "Built using React, Zustand, Tailwind CSS, Node.js, Express, and MongoDB, Luxora Premium focuses on performance, scalability, and real-world e-commerce functionality.",
          ],
        },
        {
          id: 2,
          name: "luxora.ismailirshad.in",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://luxora.ismailirshad.in/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Luxora Logo",
          icon: "/images/luxoraLogo.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/luxora.png",
        },
      ],
    },

    // Project 2
    {
      id: 6,
      name: "QuickChat Real-Time Chat Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[60vh] left-7",
      children: [
        {
          id: 1,
          name: "QuickChat Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "QuickChat is a real-time chat application built to provide fast, interactive, and secure communication between users.",
            " The platform leverages Socket.io to enable instant messaging and live user interactions, including online and offline presence tracking for a more engaging chat experience.",
            " Users can share images seamlessly through Cloudinary-powered media uploads, update their profiles, and receive real-time notifications with sound alerts.",
            " The backend is secured using JWT-based authentication, protected routes, and rate limiting to ensure safe and reliable communication.",
            "Developed with React, Zustand, Tailwind CSS, Node.js, Express, and MongoDB, QuickChat focuses on real-time performance, scalability, and a polished user experience.",
          ],
        },
        {
          id: 2,
          name: "quickchat.ismailirshad.in",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://quickchat.ismailirshad.in/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "QuickChat Logo",
          icon: "/images/quickChat-logo.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/quickChat.png",
        },
      ],
    },

    // Project 3
    {
      id: 7,
      name: "InstaClone Social Media Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-50 left-70",
      windowPosition: "top-[20vh] md:left-200 lg:left-300 left-120",
      children: [
        {
          id: 1,
          name: "InstaClone Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "InstaClone is a social media application inspired by modern photo-sharing platforms, built to replicate core social networking features with a smooth and responsive user experience.",
            " The application allows users to create and share posts, engage through likes and comments, and connect with others using a follow and unfollow system supported by a suggested users algorithm.",
            " Each user has a dedicated profile page displaying posts along with follower and following statistics. Authentication is handled securely using Firebase OAuth, ensuring safe user access, while toast notifications and skeleton loaders enhance the overall UI responsiveness.",
            " Developed using React, Zustand, Tailwind CSS, and Firebase, InstaClone focuses on usability, performance, and real-world social media interactions.",
          ],
        },
        {
          id: 2,
          name: "Insta-Clone.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://orbital-builder-472004-s3.web.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "InstaClone Logo",
          icon: "/images/instaClone.jpg",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/instaClone.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/resumeDp.png",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/irshad2.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Developer Behind the Code",
      image: "/images/resumeDp.png",
      description: [
        "I’m Ismail Irshad, a self-taught Full-Stack Developer building scalable and user-friendly web applications.",
        "I work with React.js, Tailwind CSS, Zustand, Node.js, Express.js, and MongoDB to create modern full-stack solutions.",
        "I also have hands-on experience with ERPNext/Frappe, including customizations, DocTypes, workflows, POS systems, and automation.",
        "I’ve built projects like a hotel booking platform, e-commerce app, real-time chat app, and social media clone, deployed on VPS, Nginx, Vercel, and Render.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/Trash1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/Trash2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};
