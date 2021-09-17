/* eslint-disable react/prop-types */
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import styled from "styled-components";

export const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ContentPlaceholder = ({ content }) => (
  <m.div
    variants={{
      collapsed: { opacity: 0 },
      open: { opacity: 1 },
    }}
    transition={{ duration: 0.9 }}
    className="content-placeholder"
  >
    <p>{content}</p>
  </m.div>
);

const AccordionComponent = ({ i, expanded, setExpanded, title, content }) => {
  const isOpen = i === expanded;

  return (
    <AnimatedBody>
      <m.header initial={false} onClick={() => setExpanded(isOpen ? false : i)}>
        <div className="flex space-between">
          <p>{title}</p>
          <m.span
            className="inline-block"
            initial={false}
            animate={{
              transform: isOpen ? "rotate(90deg)" : "rotate(45deg)",
              willChange: "transform",
            }}
          >
            <CloseIcon />
          </m.span>
        </div>
      </m.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            className="content-body"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            <ContentPlaceholder content={content} />
          </m.div>
        )}
      </AnimatePresence>
    </AnimatedBody>
  );
};

const Accordion = ({ id, title, content }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AccordionComponent
      i={id}
      expanded={expanded}
      setExpanded={setExpanded}
      title={title}
      content={content}
    />
  );
};

export default Accordion;

const AnimatedBody = styled.div`
  header {
    background: transparent;
    border-top: 1px solid var(--border-color);
    cursor: pointer;
    padding: var(--golden-ratio) 0;
    width: 100%;
  }

  p {
    text-align: left;
    text-transform: capitalize;
  }

  .content-body {
    overflow: hidden;
  }

  .content-placeholder {
    padding: 0.5rem 0 2rem 0;

    p {
      line-height: 1.5;
      text-transform: lowercase;
    }
  }
`;
