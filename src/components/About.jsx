import { useState } from "react";
import img1 from "../assets/about.jpg";

const About = () => {

    const [data, setData] = useState({
        image: img1,
        title: " B.Tech Fresh Graduate",
        desc1: `I have studied B.Tech in computer Science & Engineering from SDITS College, 
        Khandwa 2023 batch passout. During my academics, I also pursued certificate courses in 
        React JS,  Full Stack Web development that consist of Html, CSS, JavaScript,Bootstrap,
        Java, JSP , Servlet and MySql. Currently, I hold 8.88 CGPA and was ranked amongst the top 5 of my class. I also recently completed an internship with 
        Oasis Infobyte where I worked as part of their frontend team.`,
    });

    return <>
        <div className="main-container py-14 bg-gray-100 ">
            {/* <h1 className="text-4xl  pb-12 font-bold underline text-center">About Me</h1> */}
            <div className="grid md:grid-cols-2 items-center ">
                <div className="w-fit flex justify-center items-center">{/* Image Container */}
                    <img className="w-1/2 rounded-full pt-5" src={data.image} alt="Prateek Image" />
                </div>
                <div className="w-full flex justify-center mt-4">{/* text cotainer */}
                    <div className="space-y-5 w-5/6">
                        <h1 className="text-5xl font-semibold">{data.title}</h1>
                        <p className="text-1/2xl">
                            {data.desc1}
                        </p>
                        <button className="bg-orange-500 px-3 py-3 text-2xl rounded-full shadow-lg text-white">
                            <a href="https://drive.google.com/file/d/1h1dLmJtbK89TvvfHxCcbOs_lQIOkMymT/view?usp=drive_link">Resume</a>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    </>;
};
export default About