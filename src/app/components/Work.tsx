// components/WorkSection.js

import Image from 'next/image';
import Link from 'next/link';

const Work = () => {
    return (
        <section className="work section" id="work">
            <h2 className="section-title">Work</h2>

            <div className="work__container bd-grid">
                <Link href="https://github.com/YUMNANASIR01/Countdown_Timer.git" className="work__img" target="_blank" rel="noopener noreferrer">
                    <Image src="/work1.jpg" alt="Work 1" width={300} height={200} />
                </Link>
                <Link href="https://github.com/YUMNANASIR01/oop_my_bank.git" className="work__img" target="_blank" rel="noopener noreferrer">
                    <Image src="/work2.jpg" alt="Work 2" width={300} height={200} />
                </Link>
                <Link href="https://github.com/YUMNANASIR01/Adventure-Game.git" className="work__img" target="_blank" rel="noopener noreferrer">
                    <Image src="/work3.jpg" alt="Work 3" width={300} height={200} />
                </Link>
                <Link href="https://github.com/YUMNANASIR01/students_Management_system.git" className="work__img" target="_blank" rel="noopener noreferrer">
                    <Image src="/work4.jpg" alt="Work 4" width={300} height={200} />
                </Link>
                <Link href="https://github.com/YUMNANASIR01/Word_counter_project.git" className="work__img" target="_blank" rel="noopener noreferrer">
                    <Image src="/work5.jpg" alt="Work 5" width={300} height={200} />
                </Link>
                <Link href="https://github.com/YUMNANASIR01/Todos_list.git" className="work__img" target="_blank" rel="noopener noreferrer">
                    <Image src="/work6.jpg" alt="Work 6" width={300} height={200} />
                </Link>
            </div>
        </section>
    );
};

export default Work;
