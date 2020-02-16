const element = React.createElement("div", {
  className: "center"
}, React.createElement("div", {
  className: "name"
}, "VANDANA SINGH"), React.createElement("img", {
  className: "image",
  src: "/images/vandanaProfilePic.png"
}), React.createElement("div", {
  className: "intro"
}, " I am pursuing my Master's in Computer Science at SDSU. In the past, I have worked as Quality Assurance Engineer at HiveMedia Group, Carlsbad. I am planning to get into Full Stack Web developer role after I complete my Masters."), React.createElement("div", {
  className: "button-div"
}, React.createElement("a", {
  className: "button",
  href: "https://github.com/vandanasdev/assignment1"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(element, document.getElementById('myInfo'));