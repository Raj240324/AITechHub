// Events and workshops data
export const events = [
  {
    id: 'free-webinar-react-2026',
    title: 'Free Webinar: Introduction to React.js 2026',
    type: 'webinar',
    date: '2026-02-05T18:00:00',
    duration: '2 hours',
    mode: 'Online (Zoom)',
    speaker: {
      name: 'Arun Kumar',
      role: 'Senior Full Stack Developer',
      avatar: 'https://i.pravatar.cc/150?u=arun-event'
    },
    description: 'Learn the fundamentals of React.js in this beginner-friendly session. We\'ll cover components, props, state, and build a simple todo app together.',
    topics: ['React Basics', 'Components & Props', 'State Management', 'Hands-on Project'],
    registrationLink: '#',
    isFree: true,
    seatsLeft: 45,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600',
    status: 'upcoming'
  },
  {
    id: 'python-bootcamp-weekend',
    title: 'Weekend Python Bootcamp for Beginners',
    type: 'workshop',
    date: '2026-02-08T09:00:00',
    duration: '2 days (10 hours each)',
    mode: 'Offline (Campus)',
    speaker: {
      name: 'Priya Sharma',
      role: 'Python Instructor',
      avatar: 'https://i.pravatar.cc/150?u=priya-event'
    },
    description: 'Intensive 2-day hands-on bootcamp to kickstart your Python journey. Perfect for absolute beginners with no prior coding experience.',
    topics: ['Python Basics', 'Data Types', 'Control Flow', 'Functions', 'Mini Projects'],
    registrationLink: '#',
    isFree: false,
    price: '₹999',
    seatsLeft: 15,
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=600',
    status: 'upcoming'
  },
  {
    id: 'career-guidance-session',
    title: 'Free Career Guidance Session: IT Paths for 2026',
    type: 'seminar',
    date: '2026-02-12T16:00:00',
    duration: '3 hours',
    mode: 'Hybrid',
    speaker: {
      name: 'Senthil Kumar',
      role: 'Placement Head',
      avatar: 'https://i.pravatar.cc/150?u=senthil-event'
    },
    description: 'Confused about which IT career path to choose? Join our free career guidance session and get personalized advice from industry experts.',
    topics: ['IT Career Paths', 'Salary Trends', 'Skills in Demand', 'Q&A Session'],
    registrationLink: '#',
    isFree: true,
    seatsLeft: 100,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
    status: 'upcoming'
  },
  {
    id: 'hackathon-march-2026',
    title: 'Raj Institute Hackathon 2026: Code for Tomorrow',
    type: 'hackathon',
    date: '2026-03-15T08:00:00',
    duration: '24 hours',
    mode: 'Offline (Campus)',
    speaker: {
      name: 'Industry Panel',
      role: 'Multiple Judges from Top Companies',
      avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=200'
    },
    description: 'Build innovative solutions, compete with fellow developers, and win exciting prizes! Open to all skill levels.',
    topics: ['Team Building', '24-Hour Coding', 'Mentorship', 'Cash Prizes'],
    registrationLink: '#',
    isFree: true,
    seatsLeft: 80,
    prizes: ['₹50,000 First Place', '₹25,000 Second Place', '₹10,000 Third Place'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600',
    status: 'upcoming'
  },
  {
    id: 'ai-ml-workshop',
    title: 'AI/ML Hands-on Workshop: Build Your First ML Model',
    type: 'workshop',
    date: '2026-02-22T10:00:00',
    duration: '6 hours',
    mode: 'Online',
    speaker: {
      name: 'Dr. Lakshmi Venkat',
      role: 'Data Science Head',
      avatar: 'https://i.pravatar.cc/150?u=lakshmi-event'
    },
    description: 'Learn machine learning by building! Create your first ML model from scratch using Python and Scikit-Learn.',
    topics: ['ML Basics', 'Data Preprocessing', 'Model Training', 'Evaluation Metrics'],
    registrationLink: '#',
    isFree: false,
    price: '₹499',
    seatsLeft: 30,
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600',
    status: 'upcoming'
  }
];

// Past events for showcase
export const pastEvents = [
  {
    id: 'annual-fest-2025',
    title: 'Raj Institute Annual Tech Fest 2025',
    type: 'fest',
    date: '2025-12-15',
    attendees: 500,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600',
    highlights: ['Guest Lectures', 'Project Expo', 'Cultural Events', 'Award Ceremony']
  },
  {
    id: 'placement-drive-2025',
    title: 'Mega Placement Drive 2025',
    type: 'placement',
    date: '2025-11-20',
    attendees: 200,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600',
    highlights: ['15+ Companies', '150+ Job Offers', 'On-spot Selection', 'Highest CTC: 18 LPA']
  }
];

// Event types for filtering
export const eventTypes = [
  'All',
  'webinar',
  'workshop',
  'seminar',
  'hackathon'
];
