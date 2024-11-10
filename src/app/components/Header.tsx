// components/Home.js
import 'boxicons/css/boxicons.min.css';
import Image from 'next/image';
import Link from 'next/link';
export default function Header() {
    return (
        <section className="home bd-grid" id="home">
            <div className="home__data">
                <h1 className="home__title">Hi,<br />I'm <span className="home__title-color">YUMNA</span><br />Web Designer</h1>
    
                <Link href="#" className="button">Contact</Link>
            </div>

            <div className="home__social">
                <Link href="#" className="home__social-icon"><i className="bx bxl-linkedin"></i></Link>
                <Link href="#" className="home__social-icon"><i className="bx bxl-facebook"></i></Link>
                <Link href="#" className="home__social-icon bx bxl-github"></Link>
            </div>
            <div className="home__img"><Image src={'/main.img.png'} alt={'picture'} height={200} width={400}></Image></div>
        </section>
    );
}
