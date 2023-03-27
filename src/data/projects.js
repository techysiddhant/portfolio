import Unfold from "../assets/projects/unfold.png"
import notes from "../assets/projects/notes.png";
import mba from '../assets/projects/mba.png'
export const projects = [{
        id: 1,
        title: "Unfold Page",
        desc: {
            p1: "The web app is built using Node.js, Express.js, and MongoDB, and includes JWT authentication to ensure secure access for users.",
            p2: "Unfold Page is a web app that allows users to publish short stories anonymously, without revealing their identity.",
            p3: "Users can publish both public and private stories, with the option to keep their private stories hidden from other users.",
            p4: "The app also includes a password reset feature that sends a reset link to the user's email, allowing them to reset their password securely.",
        },
        img: Unfold,
        github: "https://github.com/techysiddhant/unfold-page",
        live: "https://www.unfoldpage.live/login",
    },
    {
        id: 2,
        title: "Notes App",
        desc: {
            p1: "This notes taking web app is built using React JS and Firebase, making it a reliable and efficient tool for managing notes.",
            p2: "The app features a Google sign-in feature that allows for easy access to notes from any device, ensuring seamless workflow.",
            p3: "Users have the option to switch between two different color schemes with the dark mode and light mode feature, making the app suitable for any preference.",
            p4: "The user interface is simple and intuitive, with functions such as creating, editing, and deleting notes and a search feature for quick access."
        },
        img: notes,
        github: "https://github.com/techysiddhant/notes-app-react",
        live: "https://siddhant-notesapp.netlify.app/",
    },
    {
        id: 3,
        title: "MBA Chaiwala Clone",
        desc: {
            p1: "The MBA Chaiwala clone website is built using ReactJS and designed with SCSS to create a dynamic and interactive user experience.",
            p2: "The website provides detailed information about the different types of chai offered by MBA Chaiwala.",
            p3: "he MBA Chaiwala website is designed to build a community around the brand. It features a blog with articles on chai culture, entrepreneurship, and business, as well as a forum where visitors can connect with other chai enthusiasts.",
            p4: "The website tells the story of the MBA Chaiwala and his journey to success. Visitors can learn about the founder's experience."
        },
        img: mba,
        github: "https://github.com/techysiddhant/mba-chaiwala-clone-react",
        live: "https://mbachaiwala-clone.netlify.app/",
    }
]