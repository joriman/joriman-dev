import CPUImage from "@/assets/svg/cpu-image";
import OfficeImage from "@/assets/svg/office-image";

const AboutSection = () => {
    return (
        <div className="bg-royal-navy dark:bg-yellow-500">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:mx-36 py-4 space-x-4 space-between text-white dark:text-royal-navy '>
                <article className="flex flex-col justify-center mx-6">
                        <h2 className='text-3xl font-bold py-4'>What I enjoy! 👋</h2>
                        <p className="font-medium text-lg">As a passionate computer scientist, I thrive on turning ideas into powerful digital solutions.</p>
                        <p className="font-medium text-lg">In my almost 2 years in the industry, I&apos;ve had the opportunity to work on diverse </p> 
                        <p className="font-medium text-lg">projects, collaborate with clients, and build innovative websites and software.</p>
                </article>
                <div className='flex justify-center items-center md:mx-6'>
                    <CPUImage />
                </div>
            </div>
                
            <div className='grid grid-cols-1 md:grid-cols-2 lg:mx-36 py-4 space-x-4 space-between text-white dark:text-royal-navy'>
                <div className='flex justify-center items-center order-last md:order-1'>
                    <OfficeImage />
                </div>
                <article className='flex flex-col justify-center mx-6 md:order-2'>
                    <h2 className='text-3xl font-bold py-4'>Always Learning! 🚀</h2>
                    <p className="font-medium text-lg">I believe in continuous learning and embrace challenges head-on.</p> 
                    <p className="font-medium text-lg">Whether it&apos;s diving into the latest technologies or solving complex problems, I approach</p>
                    <p className="font-medium text-lg">every project with enthusiasm and a commitment to deliver exceptional results.</p>
                </article>
            </div>
        </div>
    );
}
 
export default AboutSection;