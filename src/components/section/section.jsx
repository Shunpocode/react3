import React, { lazy, Suspense } from "react";
import "./section.css";
import Button from '../button/button';

const LazyBg = lazy(() => import('./LazyBg'));

export default function Section({type}) {
  return (
    <section className={type}>
      <div>
        <h1>
          Test assignment for front-end developer
        </h1>
        <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
      </div>
      <Button text={'Sign up'} type={'yellow'} />
      <LazyBg />
    </section>
  )
}