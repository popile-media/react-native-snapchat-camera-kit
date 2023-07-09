import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/camera-kit-logo.svg').default,
    description: (
      <>
        This library was designed to be easily installable and straightforward
        to use once it's installed.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/lens-studio.svg').default,
    description: (
      <>
        Easily integrate the AR into your React Native App and avoid dealing with
        native development.
      </>
    ),
  },
  {
    title: 'Powered by Snapchat',
    Svg: require('@site/static/img/snapchat-logo.svg').default,
    description: (
      <>
        The library was not written by the Snapchat Team, but we are using
        Snapchat's CameraKit SDK in the background.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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
