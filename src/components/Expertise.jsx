import bannerBackground from '../assets/banner_wallpaper.jpg';

const Expertise = () => {
    return (
        <div className="mt-2">
            <h1 className="mb-5 text-4xl font-bold underline text-center">
                My Skills
            </h1>
            {/* box section */}
            <div className="grid md:grid-cols-2 space-y-4 items-center  py-14 bg-gradient-to-r from-pink-500 to-purple-500">
                <div className="flex w-full justify-center text-white">{/* text container */}
                    <div className="w-2/3 text-center space-y-4">
                        <h1 className="text-4xl font-bold">I love these technologies</h1>
                        <p>
                            During my Academics I've learned and worked on lots of the technologies.
                            I am practiced on these technologies.
                        </p>
                        <button className="text-2xl px-2 py-2 bg-orange-500 rounded-full shadow-lg">
                            Hire Me..
                        </button>
                    </div>
                </div>
                <div className="flex w-full justify-center">{/* skills container */}
                    <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap">
                        <p className="bg-gray-300 w-fit px-3 py-3 mt-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded-full">Core Java</p>
                        <p className="bg-gray-300 w-fit px-3 py-3 mt-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded-full">Adv Java</p>
                        <p className="bg-gray-300 w-fit px-3 py-3 mt-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded-full">Html</p>
                        <p className="bg-gray-300 w-fit px-3 py-3 mt-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded-full">CSS</p>
                        <p className="bg-gray-300 w-fit px-3 py-3 mt-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded-full">JavaScript</p>
                        <p className="bg-gray-300 w-fit px-3 py-3 mt-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded-full">JDBC</p>
                        <p className="bg-gray-300 w-fit px-3 py-3 mt-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded-full">JSP</p>
                        <p className="bg-gray-300 w-fit px-3 py-3 mt-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded-full">Servlet</p>
                        <p className="bg-gray-300 w-fit px-3 py-3 mt-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded-full">Bootstrap</p>
                        <p className="bg-gray-300 w-fit px-3 py-3 mt-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded-full">SQL</p>
                        <p className="bg-gray-300 w-fit px-3 py-3 mt-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded-full">Python</p>
                        <p className="bg-gray-300 w-fit px-3 py-3 mt-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded-full">React JS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Expertise;