import greenSM1 from "@/app/assets/project-description/market1.png";
import greenSM2 from "@/app/assets/project-description/market2.png";
import movieLibrary1 from "@/app/assets/project-description/MLibrary.png";
import cinemax1 from "@/app/assets/project-description/movie1.png";
import cinemax2 from "@/app/assets/project-description/movie2.png";
import portfolio1 from "@/app/assets/project-description/portfolio.png";
import vLearn1 from "@/app/assets/project-description/VI.png";
import vLearn2 from "@/app/assets/project-description/VI-1.png";
import cinemax from "@/app/assets/projects/cinemax.jpg";
import dualTrackerImg2 from "@/app/assets/projects/Dual Tracker-dark mode.jpg";
import dualTrackerImg1 from "@/app/assets/projects/Dual-tracker-lightmode.jpg";
import dualTrackerImg from "@/app/assets/projects/dual-tracker.jpg";
import greenSM from "@/app/assets/projects/greenSM.jpg";
import movieLibrary from "@/app/assets/projects/movie.jpg";
import portfolio from "@/app/assets/projects/portfolio.jpg";
import vLearn from "@/app/assets/projects/VI-Learn.jpg";

const ProjectData = [
    {
        title: "Dual Money Tracker",
        description:
            "A cross-platform mobile application developed as part of my final year individual project to help users manage both personal and business finances in one place. The app supports secure user authentication, real-time tracking of income, expenses, credits, and debits using Firebase Auth and Cloud Firestore. I implemented features like add/edit/delete transactions, dynamic dashboards, and a responsive, clean UI using Flutter, Dart, and Provider for state management. The project emphasizes scalability, user-friendly design, and secure, personalized financial data handling.",
        shortdesc:
            "A mobile app for tracking both personal and business finances.Built using Flutter and Firebase for real-time updates.Features secure login, dashboards, transaction insights.",
        image: dualTrackerImg,
        image1: dualTrackerImg1,
        image2:  dualTrackerImg2,
        techStack: ["Dart", "Flutter", "Firebase", "Git"],
        category: "Mobile Development",
        liveLink: "https://github.com/minu2003/Dual-Money-Tracker.git",
    },
    {
        title: "My Portfolio",
        description:
            "A fully responsive and modern personal portfolio website built using Next.js for optimized performance and routing, and Tailwind CSS for efficient styling. The site showcases my projects, technical skills, and contact information in a clean, user-friendly layout. Designed with a mobile-first approach, the portfolio emphasizes accessibility, fast loading times, and smooth navigation to provide a seamless experience across all devices.",
        shortdesc:
            "A responsive personal website built with Next.js and Tailwind CSS. Showcases projects, skills, and contact info. Designed with fast performance and smooth navigation.",
        image: portfolio,
        image1: portfolio1,
        techStack: ["Next JS", "Tailwind CSS", "CSS", "Vercel", "Git"],
        category: "Web Application",
        liveLink: "https://github.com/minu2003/my-portfolio.git",

    },
    {
        title: "Cinemax",
        description:
            "A full-stack movie ticket booking platform developed collaboratively in a team of 8, featuring real-time seat selection, scheduling, and secure online payments. I focused on frontend development using React.js, Tailwind CSS, and JavaScript, creating reusable and optimized components that improved performance by 20–50%. On the backend, I developed RESTful APIs with Node.js and Express.js, implemented WebSocket-based real-time seat updates, and handled user authentication. The system integrates MongoDB via Mongoose for data management and supports secure payment processing through PayPal. I also used Docker for containerization to streamline deployment and ensure environment consistency.",
        shortdesc:
            "A full-stack movie ticket booking platform with real-time seat updates. Includes secure payments, login, and dynamic UI. Built with React, Node.js, MongoDB, and WebSockets.",
        image: cinemax,
        image1: cinemax1,
        image2: cinemax2,
        techStack: ["React js", "Node.js", "MongoDB","Express js","HTML","CSS","Javacript","Tailwind CSS", "Paypal"],
        category: "Web Application",
        liveLink: "https://github.com/Dinethchathurya/Movie-Booking-System.git",
      },
    {
        title: "Green Super Market",
        description:
            "An e-commerce web application built using Java, HTML, CSS, and SQL, designed to provide users with a seamless online shopping experience. The platform allows customers to browse, add to cart, and securely purchase products using the integrated PayPal Sandbox, improving transaction reliability by 95%. I optimized backend performance with efficient SQL queries, reducing execution time by 40%. A responsive and user-friendly interface boosted user engagement by 30%, making the application accessible across all device sizes.",
        shortdesc:
            "An e-commerce platform with product browsing, cart, and PayPal checkout. Backend powered by Java and SQL. Optimized for fast queries and responsive design.",
        image: greenSM,
        image1: greenSM1,
        image2: greenSM2,
        techStack: ["HTML", "CSS", "Javascript", "MUI","SQL","Java","Paypal","Git"],
        category: "Web Application",
        liveLink: "https://github.com/minu2003/Green-Super-Market.git",
      },
      {
        title: "VI Learning Platform",
        description:
            "A responsive and interactive online learning platform developed to deliver educational content in a user-friendly format. Built using React.js for dynamic UI rendering and Tailwind CSS for sleek, modern styling, the platform allows users to explore courses, view content, and navigate seamlessly. I focused on creating reusable components, responsive layouts, and smooth user interactions to ensure accessibility across devices. The project emphasizes clean design, intuitive navigation, and scalable architecture for future feature expansion.",
        shortdesc:
            "An interactive learning platform built using React and Tailwind CSS. Users can explore and view course content easily. Focused on clean design and mobile responsiveness.",
        image: vLearn,
        image1: vLearn1,
        image2: vLearn2,
        techStack: ["React JS", "Javascript", "Tailwind CSS","Html","CSS", "Git"],
        category: "Web Application",
        liveLink: "https://github.com/minu2003/VI-Learning.git",
      },
      {
        title: "Movie library",
        description:
            "A responsive and visually engaging movie library web application developed as a test project using Vue.js and Tailwind CSS. The app allows users to search and filter movies using keywords through a dynamic search bar, making it easy to explore and collect their favorite titles. It displays movie posters, titles, and descriptions in a clean card layout. The design includes a contact form and map integration for a polished, professional look. This project highlights my skills in component-based development and real-time filtering.",
        shortdesc:
            "A Vue.js-based movie browsing app with search and filter features. Clean UI displays posters and movie info in cards. Includes a contact form and Google Maps integration.",
        image: movieLibrary,
        image1: movieLibrary1,
        techStack: ["Vue JS", "Javascript", "Tailwind CSS","Html","CSS", "Git"],
        category: "Web Application",
        liveLink: "https://github.com/minu2003/movie-library.git",
      },
]

export default ProjectData;