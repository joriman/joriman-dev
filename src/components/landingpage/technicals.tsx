import BriefcaseLogo from "./briefcase_icon";
import BulbLogo from "./bulb_icon";
import RocketLogo from "./rocket_icon";
import JavascriptLogo from "@/assets/logos/javascript_logo";
import HTMLLogo from "@/assets/logos/html_logo";
import ReactLogo from "@/assets/logos/react_logo";
import NextLogo from "@/assets/logos/next_logo";
import CSSLogo from "@/assets/logos/css_logo";
import SvelteLogo from "@/assets/logos/svelte_logo";
import TypescriptLogo from "@/assets/logos/typescript_logo";
import CPlusPlusLogo from "@/assets/cpp_logo";
import PythonLogo from "@/assets/logos/python_logo";
import NodeLogo from "@/assets/logos/node_logo";
import PostgreSQLLogo from "@/assets/logos/postgresql_logo";
import ExpressLogo from "@/assets/logos/express_logo";

export default function Technicals() {
    return (
        <div className='justify-center items-center md:max-w-[1300px] m-auto relative w-auto shadow-xl'>
            <div className='flex m-[-1rem] rounded-xl bg-gray-100 justify-center items-center'>
                <div className='flex-grow flex-shrink basis-0 block py-16 px-10 border-r-gray-300 border-r font-semibold text-gray-800 text-center space-y-4 '>
                    <span className='inline-block align-middle relative overflow-visible box-content'>
                        <BulbLogo />
                    </span>
                    <h2 className=' text-2xl font-bold text-gray-800'>Services I Offer 🛠️</h2>
                    <p>In my role as a computer scientist, I specialize in offering a range of services to meet your business needs. From software development to website management, my expertise encompasses:</p>
                    <ul className='list-none space-y-2'>
                        <li><b className="text-blue-800 font-bold text-lg">Software Development</b> <p>Crafting scalable and efficient software solutions tailored to your business needs.</p></li>
                        <li><b className="text-blue-800 font-bold text-lg">Web Development</b> <p>Building modern and responsive websites that leave a lasting impression.</p> </li>
                        <li><b className="text-blue-800 font-bold text-lg">Outsourcing</b> <p>Providing specialized expertise to enhance your development projects.</p></li>
                        <li><b className="text-blue-800 font-bold text-lg">Website Management</b> <p>Ensuring your online presence is always at its best, from development to maintenance.</p> </li>
                    </ul>
                    
                </div>
                <div className='flex-grow flex-shrink basis-0 block py-16 px-10 text-center space-y-4'>
                    <span className='inline-block align-middle relative overflow-visible box-content'>
                        <RocketLogo />
                    </span>
                    <h2 className='text-2xl font-bold text-gray-800'>Tech Stack</h2>
                    <p>My technical proficiency spans a diverse range of tools, languages, and frameworks.</p>
                    <ul className="list-none space-y-2">
                        <li><b>Languages</b> <p className="flex flex-row justify-center space-x-4"> <HTMLLogo /> <CSSLogo /> <JavascriptLogo /> <TypescriptLogo /> <CPlusPlusLogo /> <PythonLogo /></p></li>
                        <li><b>Frontend</b> <p className="flex flex-row justify-center space-x-4"> <ReactLogo /> <NextLogo /> <SvelteLogo /> </p></li>
                        <li><b>Backend</b><p className="flex flex-row justify-center space-x-4"><NodeLogo /> <ExpressLogo /> </p></li>
                        <li><b>Database</b> <p className="flex flex-row justify-center space-x-4"><PostgreSQLLogo /> MySQL MongoDB </p></li>
                        <li><b>Tools</b> <p>Git, VS Code, Docker, Kubernetes, Jenkins</p></li>
                    </ul>
                </div>
                <div className='flex-grow flex-shrink basis-0 block py-16 px-10 border-l-gray-300 border-l text-center'>
                    <span className='inline-block align-middle relative overflow-visible box-content'>
                        <BriefcaseLogo />
                    </span>
                    <h2 className='text-2xl font-bold text-gray-800'>Experience & Learning</h2>
                </div>
            </div>
        </div>
    )
}