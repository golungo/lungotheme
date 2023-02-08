const useState = (defaultValue) => {
  let state = defaultValue;

  const setState = (newValue) => {
    state = newValue
  }

  return [
    () => state, 
    setState
  ];
}

function __Tabs(element) {
  const _header = element.querySelector("[data-tabs-header]");
  const _headerItems = _header.querySelectorAll("[data-tab]");

  if (!_headerItems.length) return;

  const [$active, $setActive] = useState(_headerItems[0].dataset.tab);

  for (let i = 0; i < _headerItems.length; i++) {
    const item = _headerItems[i];

    function setActiveTab(e) {
      const _tabs = element.querySelectorAll("[data-tabs-itemId]");

      if (_tabs.length) {
        for(let i = 0; i < _tabs.length; i++) {
          const _current = _tabs[i];
          const itemId = _current.dataset.tabsItemid

          if (itemId === item.dataset.tab) {
            _current.classList.add("tabs__item-active");
          } else {
            _current.classList.remove("tabs__item-active");
          }
        }

        for (let i = 0; i < _headerItems.length; i++) {
          const _current = _headerItems[i];
          const itemId = _current.dataset.tab

          if (itemId === item.dataset.tab) {
            _current.classList.add("tabs__header__item-active");
          } else {
            _current.classList.remove("tabs__header__item-active");
          }
        }

        $setActive(item.dataset.tab);
      }
    }

    item.addEventListener("click", setActiveTab, true);
  }
}

(() => {
  feather.replace()
  hljs.highlightAll()

  const _tabs = document.querySelectorAll("[data-tabs]");

  if (_tabs.length) {
    for (let i = 0; i < _tabs.length; i++) {
      __Tabs(_tabs[i])
    }
  }
})()