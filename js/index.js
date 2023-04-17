var Menu = {
    el: {
      ham: document.querySelector('.menu-burger'),
      menuTop: document.querySelector('.menu-top'),
      menuMiddle: document.querySelector('.menu-middle'),
      menuBottom: document.querySelector('.menu-bottom'),
      active: document.querySelector('.menu-hamburg-active'),
    },
    
    init: function() {
      this.bindUIactions();
    },
    
    bindUIactions: function() {
        this.el.ham.addEventListener('click', function(event) {
            Menu.activateMenu(event);
            event.preventDefault();
          })
    },
    
    activateMenu: function() {
      this.el.menuTop.classList.add('menu-top-click');
      this.el.menuMiddle.classList.add('menu-middle-click');
      this.el.menuBottom.classList.add('menu-bottom-click'); 
      this.el.active.style = 'display: flex;';
      this.el.ham.style = 'display: none;'
    }
  };
  
  Menu.init();