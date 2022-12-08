import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Smart contract in 5 minutes',
    Svg: require('@site/static/img/academy1.svg').default,
    description: (
      <>
        Tutorial to build and deploy a smart contract in 5 minutes.
        <br/>
        <br/>
        <a href="/docs/tutorials/minute_kickstart/create_new_flow" class="button button--secondary">
            Start tutorial
        </a>
      </>
    ),
  },
  {
    title: 'Video walkthroughs',
    Svg: require('@site/static/img/academy2.svg').default,
    description: (
      <>
        Learn aspects of Toolblox by following along our video tutorials.
        <br/>
        <br/>
        <i>Coming soon!</i>
      </>
    ),
  },
  {
    title: 'Documentation',
    Svg: require('@site/static/img/academy3.svg').default,
    description: (
      <>
        Objects, states, transitions and everything in between.
        <br/>
        <br/>
        <a href="/docs/intro" class="button button--secondary">
            Open docs
        </a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
