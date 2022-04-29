import abdirahman from '../images/IMG-20220409-WA0014.jpg';
import duraan from '../images/IMG-20220410-WA0000.jpg';
import abdiasis from '../images/FB_IMG_1649578142925.jpg';



const initialState = {
    teams: [
        {
            id:"1",
            name:"Duraan Ali",
            bio:"Founder Of Alif Cloud, Software Engineer, Educator And Mentor ",
            image:{duraan}
        },
        {
            id:"2",
            name:"Abdiasis Mohamed",
            bio:"A Full Stack Software Developer in Variuos Programming Languages and Also Database Design Builder",
            image:{abdiasis}
        },
       
        {
            id:"4",
            name:"Abdirahman Abdikadir",
            bio:"Freelancer, Creative Designer, Network Engineer and  Video Productor",
            image:{abdirahman}
        }

     

    ]
};

export const TeamReducer = (state = initialState, action) => {

return {
    
}
}

