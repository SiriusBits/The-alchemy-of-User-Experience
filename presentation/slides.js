import React from 'react';
import { Slide, Text, Heading } from 'spectacle';
import { MDXProvider } from '@mdx-js/tag';
import components from './components';
import theme from './theme';
import VideoBg from './video-bg';
import VideoPl from './gr-video';

// DEFAULT LAYOUT

export const DefaultSlide = ({ children, ...rest }) => (
   <div style={{
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -2,
  }}>
  <style>{`.vsc-controller{display: none;}.spectacle-content{max-width: 1200px!important;}'`}</style>
  <VideoBg />
  <Slide bgColor="rgba(255,255,255,0.7)" height="90vh" width="100vw" padding="0 0 3rem 0" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
  <footer style={{
    width: '100vw',
    height: '10vh',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    fontSize: '0.6em!important',
    padding: '0 4.2rem'
  }}><a style={{
    textShadow: '#6C6782 1px 2px 7px',
    color: '#fff',
    textDecoration: 'none'
    }} href="https://www.twitter.com/Sirius_B">@Sirius_B</a>
    <a style={{
    textShadow: '#6C6782 1px 2px 7px',
    color: '#fff',
    textDecoration: 'none'
    }} href="https://twitter.com/hashtag/uxalchemist">#UX ALCHEMIST</a>
    <a style={{
    textShadow: '#6C6782 1px 2px 7px',
    color: '#fff',
    textDecoration: 'none'
    }} href="https://www.w3rdofmouth.com/">W3rdOfMouth.com</a></footer>
  </div>
);



export const TwoColSlide = ({ children, ...rest }) => (
  <div style={{
   width: '100vw',
   height: '100vh',
   position: 'fixed',
   top: 0,
   left: 0,
   zIndex: -2,
 }}>
 <style>{`.vsc-controller{display: none;}`}</style>
 <VideoBg />
 <div style={{
   display: 'grid'

 }}>
 <Slide bgColor="rgba(255,255,255,0.7)" height="90vh" padding="0 0 3rem 0" {...rest}>
   <MDXProvider components={components}>{children}</MDXProvider>
 </Slide>
 </div>
 <footer style={{
   width: '100vw',
   height: '10vh',
   position: 'fixed',
   bottom: 0,
   left: 0,
   zIndex: 0,
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   backgroundColor: 'rgba(255,255,255,0.7)',
   fontSize: '0.6em!important',
   padding: '0 4.2rem'
 }}><a style={{
   textShadow: '#6C6782 1px 2px 7px',
   color: '#fff',
   textDecoration: 'none'
   }} href="https://www.twitter.com/Sirius_B">@Sirius_B</a>
   <a style={{
   textShadow: '#6C6782 1px 2px 7px',
   color: '#fff',
   textDecoration: 'none'
   }} href="https://twitter.com/hashtag/uxalchemy">#UX ALCHEMY</a>
   <a style={{
   textShadow: '#6C6782 1px 2px 7px',
   color: '#fff',
   textDecoration: 'none'
   }} href="https://www.w3rdofmouth.com/">W3rdOfMouth.com</a></footer>
 </div>
);


// DARK LAYOUT

const darkComponents = {
  ...components,
  h2: ({ children }) => <Heading size={2} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h3: ({ children }) => <Heading size={3} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h4: ({ children }) => <Heading size={4} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h5: ({ children }) => <Heading size={5} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h6: ({ children }) => <Heading size={6} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  p: ({ children }) => <Text textColor="white">{children}</Text>
}

export const DarkSlide = ({ children, ...rest }) => (
  <div>
  <Slide bgColor="rgba(242,242,242,1)" height="90vh" padding="0 0 3rem 0" {...rest}>
    <MDXProvider components={darkComponents}>{children}</MDXProvider>
  </Slide>
  <footer style={{
   width: '100vw',
   height: '10vh',
   position: 'fixed',
   bottom: 0,
   left: 0,
   zIndex: 0,
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   backgroundColor: 'rgba(242,242,242,1)',
   fontSize: '0.6em!important',
   padding: '0 4.2rem'
 }}><a style={{
   textShadow: '#6C6782 1px 2px 7px',
   color: '#fff',
   textDecoration: 'none'
   }} href="https://www.twitter.com/Sirius_B">@Sirius_B</a>
   <a style={{
   textShadow: '#6C6782 1px 2px 7px',
   color: '#fff',
   textDecoration: 'none'
   }} href="https://twitter.com/hashtag/uxalchemy">#UX ALCHEMY</a>
   <a style={{
   textShadow: '#6C6782 1px 2px 7px',
   color: '#fff',
   textDecoration: 'none'
   }} href="https://www.w3rdofmouth.com/">W3rdOfMouth.com</a></footer>
 </div>
);

// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);


export const VideoSlide = ({ children, ...rest }) => (
<div>
 <style>{`.vsc-controller{display: none;}.spectacle-content{max-width: 80vw!important; max-height: 80vh!important; margin-top: -10rem;}'`}</style>
 <Slide bgColor="#1d1f21" height="100vh" {...rest}>
   <MDXProvider components={components}>{children}</MDXProvider>
   <VideoPl />
 </Slide>
 </div>
);