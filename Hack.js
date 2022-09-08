(async () => {
  function reactHandler() {
      return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
  };

  const stateNode = reactHandler().stateNode;

  let element = document.createElement('h3');
  let visible = 'visible';

  element.style = `font-size: 14px; color: #DADADA; position: absolute; right: 10px; bottom: 0px; user-select: none;`;
  let text = document.createTextNode("1: Set Cash 2: Megabot Increase 3: Powerup Panel");
  element.appendChild(text);
  document.body.appendChild(element);
  
  document.addEventListener("keyup", e => {
    if (e.code == "KeyF") {
      visible = visible == 'visible' ? 'hidden' : 'visible';
      element.style.visibility = visible;
    }
  })
})();
