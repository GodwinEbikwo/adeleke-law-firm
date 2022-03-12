/* eslint-disable react/display-name */
import React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import styled, { keyframes } from "styled-components";
import { CaretDownIcon } from "@radix-ui/react-icons";

const enterFromRight = keyframes`
    from: { transform: 'translateX(200px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
`;

const enterFromLeft = keyframes`
    from: { transform: 'translateX(-200px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
`;
const exitToRight = keyframes`
    from: { transform: 'translateX(0)', opacity: 1 },
    to: { transform: 'translateX(200px)', opacity: 0 },
`;

const exitToLeft = keyframes`
    from: { transform: 'translateX(0)', opacity: 1 },
    to: { transform: 'translateX(-200px)', opacity: 0 },
`;

const scaleIn = keyframes`
    from: { transform: rotateX(-30deg) scale(1), opacity: 1 }
    to: { transform: rotateX(-10deg) scale(0.95), opacity: 0 }
`;

const scaleOut = keyframes`
    from: { transform: rotateX(0deg) scale(1), opacity: 1 }
    to: { transform: rotateX(-10deg) scale(0.95), opacity: 0 }
`;

const fadeIn = keyframes`
from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledMenu = styled(NavigationMenuPrimitive.Root)`
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledList = styled(NavigationMenuPrimitive.List)`
  display: flex;
  justify-content: center;
  padding: 4px;
  border-radius: 6px;
  list-style: none;
  background-color: white;
`;

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger)`
  outline: none;
  user-select: none;
  border-radius: 4px;
  line-height: 1;
  padding: 8px 12px;
  margin-top: 3px;
  margin-left: -15px;

  &:focus {
    position: relative;
    box-shadow: 0 0 0 2px var(--indigo7);
  }

  &:hover {
    background-color: var(--indigo3);
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
  transition: all 300ms ease;
`;

const StyledCaret = styled(CaretDownIcon)`
  position: relative;
  top: 1px;
  color: var(--accent);
  font-size: 16px;

  [data-state="open"] & {
    transform: rotate(-180deg);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 250ms ease;
  }
`;

// eslint-disable-next-line react/display-name
const StyledTriggerWithCaret = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledCaret aria-hidden />
    </StyledTrigger>
  )
);

const StyledLink = styled(NavigationMenuPrimitive.Link)`
  outline: none;
  user-select: none;
  font-weight: 500;
  border-radius: 4px;
  line-height: 1;
  padding: 8px 12px;

  &:focus {
    position: relative;
    box-shadow: 0 0 0 2px #222;
  }

  &:hover {
    background-color: var(--indigo3);
  }

  display: block;
  text-decoration: none;
`;

const StyledContent = styled(NavigationMenuPrimitive.Content)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  @media only screen and (min-width: 600px) {
    width: auto;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: 250ms;
    animation-timing-function: ease;
    &[data-motion="from-start"] {
      animation-name: ${enterFromLeft};
    }
    &[data-motion="from-end"] {
      animation-name: ${enterFromRight};
    }
    &[data-motion="to-start"] {
      animation-name: ${exitToLeft};
    }
    &[data-motion="to-end"] {
      animation-name: ${exitToRight};
    }
  } ;
`;

const StyledIndicator = styled(NavigationMenuPrimitive.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10px;
  top: 100%;
  overflow: hidden;
  z-index: 1;

  @media (prefers-reduced-motion: no-preference) {
    transition: width, transform 250ms ease;
    &[data-state="visible"] {
      animation: ${fadeIn} 200ms ease;
    }
    &[data-state="hidden"] {
      animation: ${fadeIn} 200ms ease;
    }
  } ;
`;

const StyledArrow = styled.div`
  position: relative;
  top: 70%;
  width: 10px;
  height: 10px;
  left: -10%;
  transform: rotate(45deg);
  border-top-left-radius: 2px;
  background-color: var(--accent);
`;

const StyledIndicatorWithArrow = React.forwardRef((props, forwardedRef) => (
  <StyledIndicator {...props} ref={forwardedRef}>
    <StyledArrow />
  </StyledIndicator>
));

const StyledViewport = styled(NavigationMenuPrimitive.Viewport)`
  --height: 340px;
  --width: 600px;

  position: relative;
  transform-origin: top center;
  top: 70%;
  background-color: var(--bg);
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 10px;
  height: var(--height);
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  @media only screen and (min-width: 600px) {
    width: var(--width);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: width, height, 300ms ease;

    &[data-state="open"] {
      animation: ${scaleIn} 200ms ease;
    }
    &[data-state="closed"] {
      animation: ${scaleOut} 200ms ease;
    }
  } ;
`;

// Exports
const NavigationMenu = StyledMenu;
const NavigationMenuList = StyledList;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuTrigger = StyledTriggerWithCaret;
const NavigationMenuLink = StyledLink;
const NavigationMenuContent = StyledContent;
const NavigationMenuViewport = StyledViewport;
const NavigationMenuIndicator = StyledIndicatorWithArrow;

// Your app...
const ContentList = styled.ul`
  display: grid;
  padding: 22px;
  margin: 0px;
  column-gap: 10px;
  list-style: none;

  @media only screen and (min-width: 600px) {
    width: auto;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ListItem = styled.li`
  margin-bottom: 0.5em;
`;

const LinkTitle = styled.div`
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 6px;
`;

const LinkText = styled.p`
  all: unset;
  line-height: 1.6;
  font-weight: initial;
  color: hsl(206, 6%, 43.5%);
`;

const ContentListItem = React.forwardRef(
  ({ children, title, ...props }, forwardedRef) => (
    <ListItem>
      <NavigationMenuLink {...props} ref={forwardedRef}>
        <LinkTitle>{title}</LinkTitle>
        <LinkText>{children}</LinkText>
      </NavigationMenuLink>
    </ListItem>
  )
);

const ViewportPosition = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 85%;
  left: -12%;
  perspective: 2000px;
`;

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList>
              <ContentListItem
                title="Finacial Settlement"
                href="/docs/primitives/overview/introduction"
              >
                Our expert divorce lawyers and accountants will be by your side.
              </ContentListItem>
              <ContentListItem
                title="Unmarried Couples"
                href="/docs/primitives/overview/getting-started"
              >
                lorem ipsum dolor sit amet consectetur adipisicing elit
              </ContentListItem>
              <ContentListItem
                title="Domestic Violence"
                href="/docs/primitives/overview/styling"
              >
                lorem ipsum dolor sit amet consectetur adipisicing elit
              </ContentListItem>
              <ContentListItem
                title="Child Law"
                href="/docs/primitives/overview/animation"
              >
                lorem ipsum dolor sit amet consectetur adipisicing elit
              </ContentListItem>
              <ContentListItem
                title="International Divorce"
                href="/docs/primitives/overview/accessibility"
              >
                Tested in a range of lorem ipsum dolor sit amet consectetur
                adipisicing elit
              </ContentListItem>
              <ContentListItem
                title="Pre Nuptials"
                href="/docs/primitives/overview/releases"
              >
                Radix Primitives lorem ipsum dolor sit amet consectetur
                adipisicing elit
              </ContentListItem>
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuIndicator />
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenu>
  );
}
