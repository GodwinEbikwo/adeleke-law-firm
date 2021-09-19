import { createGlobalStyle } from "styled-components";
export const AppStyles = createGlobalStyle`

@font-face {
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 300 900;
  font-display: optional;
  src: url("/fonts/Satoshi-Variable.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

:root{
  --golden-ratio: 1rem;
  --max-width: 90rem;

  --bg:hsla(0, 0%, 95%, 1);

  --accent: #f94b35;

  --text-white: #111;
  --text-black: #2b2b2b;

  --black: #000;
  --white: #fff;
  --gray: #eee;

  --font: "Satoshi", 'Helvetica Neue', sans-serif;
 
  --font-sm: 400;
  --font-md: 500;
  --font-lg: 700;

  --border-color: rgba(222, 222, 222, 1);
 
  --ls-sm: -0.02em;
  --ls-md: -0.03em;
  --ls-lg: -0.05em;

  --spacing-sm: 10px;
  --spacing-md: 20px;
  --spacing-lg: 30px;

  --spacer: 2rem;
  --spacer-md: 3rem;
  --spacer-lg: 5rem;
  --easing: cubic-bezier(0.215, 0.61, 0.355, 1);  
}

*,
*::before,
*::after {
  box-sizing: border-box;
  border: 0 solid #444;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button {
  font-family: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
  outline: none;
  background-color: transparent;
}

.button {
	pointer-events: auto;
	cursor: pointer;
  background: #eee;
  border: none;
  border-radius: 999px;
	padding: 1.25rem 3rem;
	margin: 0;
	font-family: inherit;
	font-size: 13.5px;
	position: relative;
  display: inline-block;
  text-transform: capitalize;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
  height: 100%;
}

.button--hyperion {
	font-family: inherit;
	font-weight: 500;
	padding: 0.6rem 1.35rem;
	overflow: hidden;
  color: var(--white);
}

.button--hyperion span {
	display: block;
	position: relative;
}

.button--hyperion > span {
	overflow: hidden;
}

.button--hyperion > span > span {
	overflow: hidden;
	mix-blend-mode: difference;
}

.button--hyperion::before {
	content: '';
	background: #000;
	transition: transform 0.35s cubic-bezier(0.7, 0, 0.2, 1);
  transform-origin: 100% 50%;
}

/* .button--hyperion:hover::before {
	transform: scale3d(0,1,1);
	transform-origin: 0% 50%;
} */

/* .button--hyperion:hover > span > span {
	animation: MoveUpInitial 0.35s forwards, MoveUpEnd 0.35s forwards 0.35s;
}

@keyframes MoveUpInitial {
	to {
		transform: translate3d(0, -115%,0);
	}
}

@keyframes MoveUpEnd {
	from {
		transform: translate3d(0,100%,0);
	}
	to {
		transform: translate3d(0,0,0);
	}
}

 */


html,
  body,
  div,
  button,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  svg,
  img,
  strong,
  ol,
  ul,
  li,
  form,
  aside,
  footer,
  header,
  input,
  optgroup,
  select,
  textarea,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: middle; 
  }

  html {
    font-size: 100%;
    background-color: var(--bg);
  }

  body {
    width: 100%;
    min-height: 100vh;
    font-feature-settings: 'kern';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
    color: var(--text-white);
    font-family: var(--font);
    font-weight: 400;
    font-size: 0.9125rem;

    &.no-scroll {
      overflow-y: hidden;
      touch-action: none;
    }    
}

  li,
  ul {
    list-style: none;
  }

  a {
    text-decoration: inherit;
    color: inherit;
    background-color: transparent;
  }

  h1 {
    font-size: 4.209rem;
  }

  h2 {font-size: 3.157rem;}

  h3 {font-size: 2.369rem;}

  h4 {font-size: 1.777rem;}

  h5 {font-size: 1.333rem;}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


.box-shadow{
  box-shadow: 0 3px 50px rgb(0 0 0 / 0.1);
}

.border-top{
  border-top: 1px solid var(--border-color);
}

.bg-2 {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow-y: auto;
  height: 100vh;
  background: var(--accent);
}

.bg {
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--text-black);
}

.line {
  height: 1px;
  transform-origin: left;
  background: var(--white);
}

  .text-center {
    text-align: center;
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  .m-auto {
    margin: auto;
  }

  .w-full{
    width: 100%;
  }

  .h-full{
    height: 100%;
  }

  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .flex {
    display: flex;
  }

  .flex-container {
    width: 100%;
    @media (min-width: 1024px) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .inline-flex {
    display: inline-flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .mt-auto {
    margin-top: auto;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .flex-column {
    flex-direction: column
  }

  .align-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .space-between {
    justify-content: space-between;
  }

  .sm-spacing {
    --absolute: 0;
    margin-right: calc(0.75rem * var(--absolute));
    margin-left: calc(0.75rem * calc(1 - var(--absolute)));
    display: block;
  }

  .block {
    display: block;
  }

  .inline-block {
    display: inline-block;
  }

  .not-selectable {
    user-select: none;
  }

  .px-2 {
    padding-left: var(--golden-ratio);
    padding-right: var(--golden-ratio);

    @media (min-width: 768px) {
      padding-left: calc(var(--golden-ratio) + 0.5rem);
      padding-right: calc(var(--golden-ratio) + 0.5rem);
    }
  }

  .py-2 {
    padding-top: var(--golden-ratio);
    padding-bottom: var(--golden-ratio);
  }

  .overflow-hidden {
    overflow: hidden;
  }

  
  .hide-for-mobile {
    @media (max-width: 767px) {
     display: none;
     visibility: hidden;
    }
  }
  
  .hide-for-desktop {
    @media (min-width: 768px) {
      display: none;
      visibility: hidden;
    }
  }

  .link {
    cursor: pointer;
    position: relative;
    white-space: nowrap;
  }

  .link::before,
  .link::after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
  }

  .link::before {
    content: '';
  }

  .link--metis {
    text-transform: inherit;
  }

  .link--metis::before {
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.5s;
  }

  .link--metis:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }

  .b-speed-block {
    position: relative;
  }

  .b-image_wrapper {
    position: relative;
    overflow: hidden;
  }

  .b-image {
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
      opacity: 0;
      transform: rotate(10deg) scale(1.4);
      transition: opacity 1.2s var(--easing), transform 1.2s var(--easing);
      will-change: transform, opacity;
      transform-origin: 50% 50%;
      transform-style: preserve-3d;
  }

    &.is-inview {
      .img {
        opacity: 1;
        transform: rotate(0deg)  scale(1);
        transition-delay: 0.65s;
    }
  }
}

.bg-full {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 1;
  display: block;

  @media (max-width: 300px) {
   display: none;
  }
}
`;
