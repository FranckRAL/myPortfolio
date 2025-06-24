const navItems = [
  {label: 'Home', path: '/'},
  {label: 'Portfolio', path: '/portfolio'},
  {label: 'About', path: '/about'},
  {label: 'Services', path: '/services'},
  {label: 'Contact', path: '/contact'},
];
const bio = "I'm a web developer with a passion for creating dynamic and responsive web applications. My goal is to deliver high-quality code and innovative solutions that meet the needs of my clients.";

const projects = [
  {
    title: 'Project One',
    description: 'A web application that allows users to manage their tasks efficiently.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '',
    img: 'https://yavuzceliker.github.io/sample-images/image-27.jpg'
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform that provides a seamless shopping experience.',
    technologies: ['Vue.js', 'Express', 'MySQL'],
    link: '',
    img: 'https://yavuzceliker.github.io/sample-images/image-37.jpg'
  },
  {
    title: 'Project Three',
    description: 'A social media application that connects users with similar interests.',
    technologies: ['Angular', 'Django', 'PostgreSQL'],
    link: '',
    img: 'https://yavuzceliker.github.io/sample-images/image-250.jpg'
  }
];

const tabsAbout = [
    { id: "tab1", label: "Bio" },
    { id: "tab2", label: "Education" },
    { id: "tab3", label: "Skills"},
  ];

  const skills = [
    {
      name: 'Python',
      value: 80
    },
    {
      name: 'Javascript',
      value: 70
    },
    {
      name: 'Django',
      value: 60
    },
    {
      name: 'React',
      value: 50
    },
    {
      name: 'MySQL',
      value: 70
    },
  ];

const servicesList = [
  {
    title: 'Web Development',
    description: 'Building responsive and dynamic web applications using modern technologies.',
    icon: 'https://yavuzceliker.github.io/sample-images/image-1.jpg'
  },
  {
    title: 'UI/UX Design',
    description: 'Creating user-friendly interfaces and enhancing user experience.',
    icon: 'https://yavuzceliker.github.io/sample-images/image-2.jpg'
  },
  {
    title: 'SEO Optimization',
    description: 'Improving website visibility and search engine rankings.',
    icon: 'https://yavuzceliker.github.io/sample-images/image-3.jpg'
  },
  {
    title: 'Mobile App Development',
    description: 'Developing a cross plateforms mobile applications.',
    icon: 'https://yavuzceliker.github.io/sample-images/image-4.jpg'
  }
];
export {
    navItems,
    bio,
    projects,
    tabsAbout,
    skills,
    servicesList
}