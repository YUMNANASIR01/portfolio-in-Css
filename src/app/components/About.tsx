import Image from 'next/image';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid">
        <div className="about__img">
          <Image src="/main.img.png" alt="About image" layout="responsive" width={500} height={500} />
        </div>

        <div>
          <h2 className="about__subtitle">I&apos;m Yumna</h2>
          <p className="about__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora,
            assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias
            accusamus atque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
