import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "NPM Packages",
    image: "/img/home/box.png",
    description: (
      <>
        What dependecies we brought in and what purpose they serve in order to
        give context to how everything works together.
      </>
    ),
  },
  {
    title: "React Components",
    image: "/img/home/void.png",
    description: (
      <>
        Every component explained with UI screenshots and <code>import</code>/
        <code>export</code> details to understand its part in the greater app.
      </>
    ),
  },
  {
    title: "State Management",
    image: "/img/home/chipboard.png",
    description: (
      <>
        Walkthrough of the auction process, how Redux is used, and how data
        flows throughout the app.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>

      {/* ANIMATE BOUNCE
      <div className="stage">
        <div className="box bounce-5 text--center">
          <img src={image} alt={title} />
        </div>
      </div> */}

      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
