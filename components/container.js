import styled from "styled-components";

export const ContainerBox = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  min-height: calc(100vh - 34px);

  &.has-mw {
    max-width: var(--max-width);
  }
`;

export const SectionBox = styled.section`
  /* top: calc(100vh - 0px); */
  position: relative;
  background: var(--bg);
  z-index: 3;
  padding: calc(var(--spacing-lg) + 1rem) 0;
  @media (min-width: 1024px) {
    padding: calc(var(--spacing-lg) * 2) 0 99px;
    &:not(:last-child) {
      border-top: 1px solid var(--border-color);
    }
  }
`;
