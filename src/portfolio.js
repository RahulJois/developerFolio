/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 3000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rahul Jois",
  title: "Hi all, I'm Rahul",
  subTitle: emoji(
    "I'm a Computer Engineering Graduate Student at UC Irvine, with a passion for data engineering and problem solving. I am working as a Cloud Software Development Intern at HPE Aruba Networking, where I use Big Data solutions to find anomalies in enterprise Wi-Fi networks. I'm eager to continue learning, and I'm looking for opportunities to use my skills to make an impact."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cFe8MBP-RV80b4obGky8N9GnKP-gyaz-/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/RahulJois",
  linkedin: "https://www.linkedin.com/in/rahul-jois/",
  gmail: "rjois@uci.edu",
  leetcode: "https://leetcode.com/rjois43/",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  //subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "si python"
    },
    {
      skillName: "Apache Spark",
      fontAwesomeClassname: "si apache-spark"
    },
    {
      skillName: "Apache Hadoop",
      fontAwesomeClassname: "si apache-hadoop"
    },
    {
      skillName: "Apache Cassandra",
      fontAwesomeClassname: "si apache-cassandra"
    },
    {
      skillName: "Apache Kafka",
      fontAwesomeClassname: "si apache-kafka"
    },
    {
      skillName: "Apache Airflow",
      fontAwesomeClassname: "si apache-airflow"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "si kubernetes"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "si docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "si aws"
    },
    {
      skillName: "AWS S3",
      fontAwesomeClassname: "si aws-s3"
    },
    {
      skillName: "AWS EC2",
      fontAwesomeClassname: "si aws-ec2"
    },
    {
      skillName: "AWS EKS",
      fontAwesomeClassname: "si aws-eks"
    },
    {
      skillName: "AWS Lambda",
      fontAwesomeClassname: "si aws-lambda"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "si mysql"
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "si ansible"
    }, 
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "si fastapi"
    }, 
    {
      skillName: "Grafana",
      fontAwesomeClassname: "si grafana"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "si jenkins"
    },
    {
      skillName: "Groovy",
      fontAwesomeClassname: "si apachegroovy"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, Irvine",
      logo: require("./assets/images/uciLogo.png"),
      subHeader: "Master of Science in Computer Engineering",
      duration: "September 2022 - April 2024",
      desc: "",
      coursework: "Machine Learning, Data Privacy, Algorithms, Computer Networks, Software Architecture, Operating Systems",
      descBullets: [
        "Worked on course projects such as Privacy Analysis of Fitness Applications, Study of Accessibility Features in Android Applications, QoS metric analysis",
        "Worked as a Teaching Assistant for a class of over 300 people and aided students in learning programming."
      ]
    },
    {
      schoolName: "R. V. College of Engineering",
      logo: require("./assets/images/rvce_logo.png"),
      subHeader: "Bachelor of Engineering in Electronics and Communications Engineering",
      duration: "August 2015 - May 2019",
      desc: "",
      coursework: "Computer Networks, Java & J2EE, Operating Systems, C++, Data Structures",
      descBullets: [
        "Built an IoT enabled real-time communication and location tracking system for vehicular emergency"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cloud Developer Intern",
      company: "HPE Aruba Networking",
      companylogo: require("./assets/images/HPEArubaNetworkingLogo.png"),
      date: "June 2023 – Present",
      desc: "I am currently working as an intern at HPE Aruba Networking, where I develop algorithms to detect anomalies in Wi-Fi networks leveraging Big Data tools",
      descBullets: [
        "Developed algorithms to correlate anomalies in network switches with wireless clients, aiming to pinpoint the root causes of network issues.",
        "Detected and resolved a network switch anomaly code issue that over-reported alerts by 50%."
      ]
    },
    {
      role: "Graduate Teaching Assistant",
      company: "UCI",
      companylogo: require("./assets/images/uci_icslogo.jpeg"),
      date: "Jan 2023 – Jun 2023",
      desc: "Worked as Teaching Assistant for Introduction to Programming ICS 31 and ICS 32",
      descBullets: [
        "Developed algorithms to correlate anomalies in network switches with wireless clients, aiming to pinpoint the root causes of network issues.",
        "Detected and resolved a network switch anomaly code issue that over-reported alerts by 50 %."
      ]
    },
    {
      role: "Reader",
      company: "UCI",
      companylogo: require("./assets/images/uci_englogo.png"),
      date: "Sep 2022 – Dec 2022",
      desc: "Graduate reader for EECS 144 - Antenna Design for Wireless Communication Links course",
      descBullets: [
        "Responsible for grading assignments and exams.",
      ]
    },
    {
      role: "Software Designer",
      company: "Aruba Networks",
      companylogo: require("./assets/images/ArubaNetworks.jpeg"),
      date: "Jul 2019 – Aug 2022",
      descBullets: [
        "Created an engineering dashboard to resolve Wi-Fi related issues in customer networks facilitating in a reduction of failure detection from 4 hours to near real-time.",
        "Implemented spark batch jobs by consuming the streaming data that processed various controller metrics resulting in detection of failures in the network with minimal delay.",
        "Lead the operational efforts to migrate Spark compute from Hadoop to Kubernetes which made the applications scalable and reduced the network costs by $ 250,000.",
      ]
    },
    {
      role: "Intern",
      company: "Aruba Networks",
      companylogo: require("./assets/images/ArubaNetworks.jpeg"),
      date: "Jan 2019 – Jul 2019",
      descBullets: [
        "Worked on performance tuning of Spark-Cassandra write operations and reduced runtime of Spark applications by 25%",
        "Devised a test automation framework using Selenium enhancing the test coverage by 20%."
        ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS THAT I HAVE WORKED ON...",
  projects: [
    {
      image: require("./assets/images/strava.png"),
      projectName: "Strava Privacy Analysis",
      projectDesc: "Explored privacy vulnerabilities in fitness app Strava by analyzing publicly available user activity data, spatial clustering, and temporal patterns, highlighting potential risks and proposing countermeasures for enhanced privacy.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/RahulJois/strava-privacy-analysis"
        },
        {
          name: "Report",
          url: "https://drive.google.com/file/d/1J4FJU5CDWPazLRjb4iKWUjq5r-OfWGfP"
        }
      ]
    },
    {
      image: require("./assets/images/rvce_logo.png"),
      projectName: "IoT Enabled Real-Time Communication and Location Tracking System for Vehicular Emergency",
      projectDesc: "An IoT enabled system that provides emergency communication and location tracking services in a remote car that meets an unfortunate accident or in any other emergency. The emergency data is stored in Firebase and the Central Hub is hosted on AWS. The emergency history can be checked using the Android application.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/RahulJois/real-time-vehicle-monitoring"
        },
        {
          name: "Report",
          url: "https://drive.google.com/drive/u/0/folders/1GhM3koW1TdB_26pNiT_7WEozJ5TtQWOaP"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle:
        "Passed the SAA-CO2 exam with a score of 833.",
      image: require("./assets/images/aws_saa.png"),
      imageAlt: "AWS Solutions Architect",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.credly.com/badges/aad86c43-115b-467a-b9f0-fc21770fade5/public_url"
        }

      ]
    },
    {
      title: "Aruba Town Hall Award",
      subtitle:
        "Awarded for contribution to data engineering in displaying insightful data and key metrics of customer network.",
      image: require("./assets/images/ArubaNetworks.jpeg"),
      imageAlt: "Aruba Networks",
      footerLink: [
      ]
    },
    {
      title: "2nd Place in AAC (Augmentative Alternative Communications) Hackathon",
      subtitle: "Issued by IEEE Bangalore section for developing an assistive device for the visually impaired people.",
      image: require("./assets/images/IEEE-Logo.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
      ]
    },
    {
      title: "First place in Hack2Help Social Innovation Hackathon",
      subtitle: "Designed and implemented an Arduino based portable multiparameter health module with multiple health sensors. Conducted by Learning Links foundation in association with US Consulate, Chennai.",
      image: require("./assets/images/learning_links_logo.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (949) 337-2599",
  email_address: "rjois@uci.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
