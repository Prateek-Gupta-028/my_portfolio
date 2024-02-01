const Services = () => {
    return (
        <>
            <div className="main-container py-12">
                <h1 className="text-4xl font-bold text-center underline">Worked Technologies</h1>
                <div className="grid space-x-5 px-6 mt-10 md:grid-cols-3 space-y-5">
                    <div className="cursor-pointer hover:bg-gray-100 bg-slate-200 mt-5 p-5 text-center service1 space-y-4 shadow-lg rounded-xl ms-4">
                        <i class="fa-solid text-5xl fa-desktop"></i>
                        <h1 className="text-4xl">Web Development</h1>
                        <p className="">
                            Web development, also known as website development, refers to the tasks associated
                            with creating, building, and maintaining websites and web applications that run
                            online on a browser. It may include web design, web programming, and
                            database management.
                        </p>
                        <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-1xl text-white">
                            <a href="">Read More..</a>
                        </button>
                    </div>
                    <div className="cursor-pointer hover:bg-gray-100 bg-slate-200 p-5 text-center space-y-4 shadow-lg rounded-xl">
                        <i class="text-5xl fa-brands fa-java"></i>
                        <h1 className="text-4xl">Java Development</h1>
                        <p className="">
                            Java is a versatile and widely-used programming language that powers a vast array of
                            applications, including web development.Java is a high-level, object-oriented programming
                            language that is designed to be platform-independent.
                        </p>
                        <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-1xl text-white">
                            <a href="">Read More..</a>
                        </button>
                    </div>
                    <div className="cursor-pointer hover:bg-gray-100 bg-slate-200 p-5 text-center space-y-4 shadow-lg rounded-xl">
                        <i class="text-5xl fa-brands fa-react"></i>
                        <h1 className="text-4xl">React JS Development</h1>
                        <p className="">
                            React JS is a free and open-source front-end JavaScript library for building user interfaces 
                            based on components. It is maintained by Meta and a community of individual developers and 
                            companies. React can be used to develop applications with frameworks like Next.js.
                        </p>
                        <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-1xl text-white">
                            <a href="">Read More..</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Services;