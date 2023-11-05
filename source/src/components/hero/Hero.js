import SentenceWrapper from "../wrapper/sentence-wrapper/SentenceWrapper";
import WordWrapper from "../wrapper/word-wrapper/WordWrapper";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero__section">
      <h1 className="hero__section__title">
        <WordWrapper word="Hello," />
        <WordWrapper word="I'm" />
        <WordWrapper className="colorized" word="Tony!" />
      </h1>
      <h2 className="hero__section__title">
        <WordWrapper word="I'm" />
        <WordWrapper word="a" />
        <WordWrapper className="colorized" word="fullstack" />
        <WordWrapper className="colorized" word="web" />
        <WordWrapper className="colorized" word="developer." />
      </h2>
      <div className="hero__section__text">
        <SentenceWrapper
          sentence="I'm a fullstack developer since 2021. I can create websites from the
          most basic to the most complex depending on the client's request. I'm
          specialized in Java for the backend and in ReactJS for the frontend."
        />
      </div>
    </section>
  );
}

export default Hero;
