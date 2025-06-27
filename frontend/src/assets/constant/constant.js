const API_URL = 'http://localhost:8000/api/';
const MEDIA_URL = 'http://localhost:8000/media/';

async function fetchSomething(params) {
  const response = await fetch(`${API_URL}${params}`);
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return await response.json();
}

async function fetchProjects() {
    return fetchSomething('projects')
}

async function fetchProjectsDetails(project_id) {
    return fetchSomething(`projects/${project_id}`)
}

async function fetchServices() {
    return fetchSomething('services')
}

async function fetchImages(imageName) {
    return `${MEDIA_URL}images/me/${imageName}`;
}


async function sendMessage(data) {
  const response = await fetch(`${API_URL}messages/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error("Failed to send message");
  }
  return await response.json();
}


const navItems = [
  {label: 'Home', path: '/'},
  {label: 'Portfolio', path: '/portfolio'},
  {label: 'About', path: '/about'},
  {label: 'Services', path: '/services'},
  {label: 'Contact', path: '/contact'},
];
const bio = "I'm a web developer with a passion for creating dynamic and responsive web applications. My goal is to deliver high-quality code and innovative solutions that meet the needs of my clients.";





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


export {
    navItems,
    bio,
    tabsAbout,
    skills,
    fetchProjects,
    fetchServices,
    fetchImages,
    sendMessage,
    fetchProjectsDetails,
}