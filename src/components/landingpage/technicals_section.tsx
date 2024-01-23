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
import CPlusPlusLogo from "@/assets/logos/cpp_logo";
import PythonLogo from "@/assets/logos/python_logo";
import NodeLogo from "@/assets/logos/node_logo";
import PostgreSQLLogo from "@/assets/logos/postgresql_logo";
import ExpressLogo from "@/assets/logos/express_logo";
import MySQLLogo from "@/assets/logos/mysql_logo";
import MongoDBLogo from "@/assets/logos/mongodb_logo";
import GitLogo from "@/assets/logos/git_logo";
import VSCodeLogo from "@/assets/logos/vscode_logo";
import DockerLogo from "@/assets/logos/docker_logo";
import KubernetesLogo from "@/assets/logos/kubernetes_logo";
import JenkinsLogo from "@/assets/logos/jenkins_logo";

export default function Technicals() {
    return (
        <div className='justify-center items-center md:max-w-[1300px] m-auto relative w-auto shadow-xl'>
            <div className='flex m-[-1rem] rounded-xl bg-gray-100 items-center'>
                <div className="flex flex-col md:flex-row">
                    <div className='flex-grow flex-shrink basis-0 py-12 md:py-16 pb-12 px-10 md:border-r border-b md:border-b-0 font-medium text-gray-800 text-center items-center space-y-4 box-sizing'>
                        <span className='inline-block align-middle relative overflow-visible box-content'>
                            <BulbLogo />
                        </span>
                        <h2 className=' text-2xl font-bold text-gray-800'>Services I Offer 🛠️</h2>
                        <p>In my role as a computer scientist, I specialize in offering a range of services to meet your business needs. From software development to website management, my expertise encompasses:</p>
                        <ul className='list-none space-y-2'>
                            <li><b className="text-blue-700 font-bold text-lg">Software Development</b> <p>Crafting scalable and efficient software solutions tailored to your business needs.</p></li>
                            <li><b className="text-blue-700 font-bold text-lg">Web Development</b> <p>Building modern and responsive websites that leave a lasting impression.</p> </li>
                            <li><b className="text-blue-700 font-bold text-lg">Outsourcing</b> <p>Providing specialized expertise to enhance your development projects.</p></li>
                            <li><b className="text-blue-700 font-bold text-lg">Website Management</b> <p>Ensuring your online presence is always at its best, from development to maintenance.</p> </li>
                        </ul>
                    </div>
                    <div className='flex-grow flex-shrink basis-0 py-12 md:pt-16 px-10 items-center text-center space-y-4 border-b md:border-b-0'>
                        <span className='inline-block align-middle relative overflow-visible box-content'>
                            <RocketLogo />
                        </span>
                        <h2 className='text-2xl font-bold text-gray-800 '>Tech Stack ⌨️</h2>
                        <p>My technical proficiency spans a diverse range of tools, languages, and frameworks.</p>
                        <ul className="list-none space-y-2">
                            <li className="space-y-2"><b>Languages</b> <p className="flex flex-row justify-center space-x-4"> <HTMLLogo /> <CSSLogo /> <JavascriptLogo /> <TypescriptLogo /> <CPlusPlusLogo /> <PythonLogo /></p></li>
                            <li className="flex flex-row space-between justify-center space-x-12 py-2">
                                <div className="space-y-2"><b>Frontends</b> <p className="flex flex-row justify-center space-x-4"> <ReactLogo /> <NextLogo /> <SvelteLogo /> </p></div>
                                <div className="space-y-2"><b>Backends</b> <p className="flex flex-row justify-center space-x-4"> <NodeLogo /> <ExpressLogo /> </p></div>
     
                            </li>
                            <li className="space-y-2"><b>Databases</b> <p className="flex flex-row justify-center space-x-4"><PostgreSQLLogo /> <MySQLLogo /> <MongoDBLogo /> </p></li>
                            <li className="space-y-2"><b>Tools</b> <p className="flex flex-row justify-center space-x-4"> <GitLogo /> <VSCodeLogo /> <DockerLogo /> <KubernetesLogo /> <JenkinsLogo /></p></li>
                        </ul>
                    </div>
                    <div className='flex-grow flex-shrink items- basis-0 py-12 md:py-16 px-10 md:border-l items-center text-center space-y-4'>
                        <span className='inline-block align-middle relative overflow-visible box-content'>
                            <BriefcaseLogo />
                        </span>
                        <h2 className='text-2xl font-bold text-gray-800'>Project Management & Design 🛣️</h2>
                        <h4 className="text-lg font-semibold">Project Planning Experience</h4>
                        <p>I specialize in meticulous project planning, ensuring every detail is thoughtfully considered. From gathering requirements to resource allocation, I create realistic timelines for on-time project delivery.</p>
                        <h4 className="text-lg font-semibold">Pre-Development Design</h4>
                        <p>My design-centric approach starts early in the process with pre-development design:</p>
                        <ul>
                            <li><b className="text-blue-700 text-lg">User-Centric Focus</b> <p>Prioritizing user needs for enhanced satisfaction.</p></li>
                            <li><b className="text-blue-700 text-lg">Wireframing & Prototyping</b> <p>Visualizing projects early with detailed wireframes and prototypes.</p></li>
                            <li><b className="text-blue-700 text-lg">Responsive Design</b> <p>Ensuring seamless experiences across various devices.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}