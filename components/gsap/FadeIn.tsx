/* eslint-disable react/display-name */
import * as React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";


type FadeInProps = {
  children: React.ReactNode;
  stagger?: number;
  x?: number;
};

const FadeIn = React.forwardRef(
  ({ children, stagger = 0, x = 0 }: FadeInProps, ref) => {
    const el = React.useRef<HTMLSpanElement>(null);
    const animation = React.useRef<any>();

    useGSAP(() => {
      if (el.current) {
        animation.current = gsap.fromTo(
          el.current.children,
          {
            opacity: 0,
            x: x,
            visibility: "hidden", // Hide elements initially
          },
          {
            opacity: 1,
            x: 0,
            visibility: "visible", // Reveal elements during animation
            stagger: stagger,
            duration: 0.5,
          }
        );
      }
    });

    useGSAP(() => {
      // forward the animation instance
      if (typeof ref === "function") {
        ref(animation.current);
      } else if (ref) {
        ref.current = animation.current;
      }
    }, [ref]);

    return (
      <span
        ref={el}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
      >
        {children}
      </span>
    );
  }
);

export default FadeIn;
