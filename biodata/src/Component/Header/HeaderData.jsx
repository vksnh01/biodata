import Home from '../NavButton/Home';
import Skill from '../NavButton/Skill'
import Education from '../NavButton/Education/Education'
import Certification from '../NavButton/Certification'
import Contact from '../NavButton/Contact'
import Interest from '../NavButton/Interest'
import Link from '../NavButton/Link';
// import About from '../NavButton/About'
const  data = [
    {
        id:"1",
        name:"home",
        path:"/",
        link:<Home />,
    },
    {
        id:"2",
        name:"education",
        path:"/education",
        link:<Education />
    },
    {
        id:"3",
        name:"skills",
        path:"/skills",
        link:<Skill />
    },
    // {
    //     id:"4",
    //     name:"certification",
    //     path:"/certification",
    //     link:<Certification />
    // },
    {
        id:"5",
        name:"Links",
        path:"/projectLinks",
        link:<Link />
    },
    // {
    //     id:"6",
    //     name:"about",
    //     path:"/about",
    //     link:<About />
    // },
    {
        id:"7",
        name:"contact",
        path:"/contact",
        link:<Contact />
    }
];
export default data;