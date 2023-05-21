import{n as e,j as s}from"./index-f7af74d9.js";const r=""+new URL("goitlogo-ee9d84e1.png",import.meta.url).href,o=""+new URL("movies-a4aeb14f.jpg",import.meta.url).href,a=""+new URL("nyt-242f343d.jpg",import.meta.url).href,i=""+new URL("shopgamers-ba2109f0.jpg",import.meta.url).href,n=e.img`
  display: block;
  margin: 0 auto;
  width: 900px;
  transition: animation 500ms ease-in-out;
  animation: radar 2000ms ease infinite;

  @keyframes radar {
    0% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    50% {
      -webkit-transform: scale(1.05, 1.05);
      transform: scale(1.05, 1.05);
    }
    100% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  }
`,p=e.h1`
  text-align: center;
`,m=e.ul`
  margin-top: 30px;
  display: flex;
  gap: 30px;
`,t=e.li`
  position: relative;
  width: calc((100% - 60px) / 3);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
    -webkit-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
    -moz-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
    box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
  }

  & img {
    width: 100%;
    height: 100%;
  }

  & p {
    position: absolute;
    background: rgba(75, 41, 153, 0.5);
    color: #fff;
    right: 0;
    font-size: 25px;
    padding: 10px;
    border-bottom-left-radius: 5px;
  }
`,l=()=>s.jsxs("div",{children:[s.jsx(n,{src:r,alt:"GoIT"}),s.jsx(p,{children:"MY WORKS"}),s.jsxs(m,{children:[s.jsx(t,{children:s.jsxs("a",{href:"https://vyzhimov.github.io/goit-react-hw-05-movies",target:"_blank",children:[s.jsx("p",{children:"MOVIES"}),s.jsx("img",{src:o,alt:"movies"})]})}),s.jsx(t,{children:s.jsxs("a",{href:"https://olgamunaieva.github.io/news-project-9/",target:"_blank",children:[s.jsx("p",{children:"NEWS PORTAL"}),s.jsx("img",{src:a,alt:"movies"})]})}),s.jsx(t,{children:s.jsxs("a",{href:"https://vyzhimov.github.io/project11-shopforgamers/",target:"_blank",children:[s.jsx("p",{children:"SHOP FOR GAMERS"}),s.jsx("img",{src:i,alt:"movies"})]})})]})]}),h=l;export{h as default};
