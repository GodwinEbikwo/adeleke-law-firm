import styled from "styled-components";

export function Burger({ open, setOpen }) {
  return (
    <BurgerMenu
      className="hide-for-desktop"
      title="menu"
      aria-label="hamburger menu"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </BurgerMenu>
  );
}

const BurgerMenu = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 100;
  cursor: pointer;
  mix-blend-mode: difference;

  &:focus {
    outline: none;
  }

  span {
    display: block;
    width: 2.5rem;
    height: 1.75px;
    background: white;
    transition: all 0.25s ease-in-out;
    position: relative;
    transform-origin: 8.5px;
    will-change: transform;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      @media (max-width: 768px) {
        margin-left: ${({ open }) => (open ? "0.15rem" : "0")};
      }
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      @media (max-width: 768px) {
        margin-left: ${({ open }) => (open ? "0.15rem" : "0")};
      }
    }
  }
`;
