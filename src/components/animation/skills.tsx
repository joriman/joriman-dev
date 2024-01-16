import { motion } from "framer-motion";

const fadeInAnimationsVariants ={ 
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    })
}

export default function SkillsTab() {
    const skillsData = [
        { id: 1, name: 'JavaScript/TypeScript' },
        { id: 2, name: 'HTML/CSS' },
        { id: 3, name: 'Node.js' },
        { id: 4, name: 'Python/Java/C#' },
      
        { id: 5, name: 'React.js' },
        { id: 6, name: 'Redux' },
        { id: 7, name: 'HTML5/CSS3' },
      
        { id: 8, name: 'Express.js' },
        { id: 9, name: 'Django/Flask' },
        { id: 10, name: 'Spring Boot' },
    
      ];

    return (
        <section className="flex justify-center items-center w-full mt-14 bg-[#a000ff]">
    <div className="w-full">
        <h2 className="text-center justify-center py-16 text-4xl font-bold text-gray-100">My Skills</h2>
        <div className="flex flex-row pt-6 pb-24 px-4 justify-center space-x-4">
            {skillsData.map((skill, index) => (
                <motion.div
                    className="bg-white border border-black rounded-lg px-5 py-3"
                    key={index}
                    variants={fadeInAnimationsVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={index}
                >
                        {skill.name}
                </motion.div>
            ))}
        </div>
    </div>
</section>
    )
}
