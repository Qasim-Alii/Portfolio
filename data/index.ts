export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently engaged in the product creation of startup company",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: " UberEats (Food Delivery Service)",
    des: "Created Uber Eats, a dedicated food delivery service by partnering your favoriterestaurant specializing in providing a seamless experience for customers craving fast and reliable access to their favorite meals.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.ubereats.com/",
  },
  {
    id: 2,
    title: "OurStory (Chat Application)",
    des: "Led the creation of functional components for Our Story, ensuring a smooth user experience for real-time chatting, notifications, and social interactions.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://ourstory.andrewamgad.com/",
  },
  {
    id: 3,
    title: "AMZGeeks (Automation and Brand Management)",
    des: "Developed AMZGeeks,apremier platform aimed at revolutionizing the e-commerce landscape by offering tailored solutions for online sellers.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://amzgeeks.com/",
  },
  {
    id: 4,
    title: "Dogtor (All-in-One Marketplace)",
    des: "Designed and implemented an integrated e-commerce platform catering to diverse needs, including shopping, dining, delivery, and restaurant services.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://dogtor-webapp.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Qasim demonstrated exceptional technical skills. Timely delivery, clean code, and excellent problem-solving skills. Our many projects wouldn't have been a success without such attention to detail and expertise in JavaScript across the stack.",
    name: "Sarah Johnson",
    title: "Product Owner at Our Story",
  },
  {
    quote:
      "The project demanded seamless integration between the frontend and backend, and the results were beyond expectations. The application is responsive, efficient, and handles heavy traffic effortlessly. Truly professional work!",
    name: "Jhon Doe",
    title: "CTO of AMZ Geeks",
  },
  {
    quote:
      "It's refreshing to collaborate with a developer who communicates effectively and understands both the technical and business aspects of a project. Every milestone was met with professionalism and expertise. His enthusiasm for every facet of development truly stands out.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "I've worked with many developers, but Qasim stands out with his dedication and technical prowess. Whether debugging complex backend issues or optimizing frontend interfaces, he always delivers excellence.",
    name: "Moin Khan",
    title: "CEO at Code Rivals",
  },
  {
    quote:
      "Collaborating with Qasim was a fantastic experience. His knowledge of modern JavaScript frameworks and dedication to delivering high-quality code made a significant impact on our project's success.",
    name: "Michael Brown",
    title: "CEO of Dogtor",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern - Wide Dimension (April 2022 - Aug 2022)",
    desc: "Collaborated with senior developers to build and optimize user-friendly interfaces using modern JavaScript frameworks, ensuring responsiveness and cross-browser compatibility. Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "JavaScript Associate Dev - Code Rivals (Aug 2022 - Feb 2024)",
    desc: "Collaborated with cross-functional teams (designers, QA and product managers) to deliver client-centric solutions within agile sprints. Optimized performance using React and Next.js, Contributed to building and maintaining component libraries for consistent across applications.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web App Project - Dogtor (All-in-One Marketplace)",
    desc: "Led the Developent and deployed a full-stack web application of Dogtor for a client, integrating React for the frontend and Node.js with Express for the backend, ensuring seamless functionality across the platform,",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "JavaScript Developer - Code Rivals (March 2024 - Present)",
    desc: "Architected and  maintained scalable Full Stack infrastructure for large-scale applications, ensuring code reusability. Also Implemented RESTful API's and integrated third-party services to enhance functionality and efficiency. Designed and built custom web applications such as doctor appointment systems, marketplaces, e-commerce, and chat applications with high modularity.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Qasim-Alii",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/qasim-ali7/",
  },
];
