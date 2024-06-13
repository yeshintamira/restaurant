(()=>{"use strict";var n,A={249:(n,A,e)=>{e.d(A,{A:()=>g});var t=e(354),a=e.n(t),r=e(314),o=e.n(r),i=e(417),d=e.n(i),p=new URL(e(77),e.b),s=new URL(e(921),e.b),l=new URL(e(789),e.b),c=o()(a()),B=d()(p),C=d()(s),E=d()(l);c.push([n.id,`*, *:before, *:after {\n  box-sizing: border-box;\n}\nhtml, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  font-family: Lato, sans-serif;\n  font-weight: bold;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background: #000;\n  color: white;\n  padding: 8px 16px;\n  z-index: 100;\n  transition: top 0.3s;\n  text-decoration: none;\n}\n\n.skip-link:focus {\n  top: 10px;\n}\n\n\n.nav {\n  background-color: #2c3e50; \n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 10px; \n  font-size: 16px;\n  border-bottom: 3px solid #34495e; \n}\n\n.nav .logo {\n  flex-grow: 1;\n  font-size: 20px; \n  font-weight: bold;\n}\n\n.navbar-menu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n\n.navbar-menu li {\n  padding: 0 10px;\n}\n\n.navbar-menu a {\n  text-decoration: none;\n  color: white;\n  font-size: 16px; \n}\n\n.navbar-menu a:hover {\n  color: #c7c7c7;\n}\n\n#menuIcon {\n  display: none; \n  background-color: transparent; \n  border: none;  \n  color: white;  \n  font-size: 24px;  \n  cursor: pointer;  \n  padding: 10px;  \n}\n\nbutton, .navbar-menu a, input[type="text"], textarea {\n  min-width: 44px;  \n  min-height: 44px;\n  padding: 10px;    \n  font-size: 16px;  \n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#menuIcon {\n  width: 44px;\n  height: 44px;\n}\n\n\n@media (max-width: 600px) {\n  #menuIcon {\n      display: block;  \n  }\n\n.navbar-menu {\n    flex-direction: column;\n    text-align: center;\n    display: none;\n    width: 100%;\n    position: absolute;\n    top: 60px;\n    left: 0;\n    background-color: #2c3e50;\n  }\n  #drawer.open {\n    display: flex;\n  }\n  #drawer li a {\n    display: block;\n    padding: 10px;\n  }\n}\n\n.hero {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  background-image: url(${B});\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.heroInner {\n  margin: 0 auto;\n  max-width: 960px;\n}\n.heroTitle {\n  font-size: 2.5em;\n  color: #333;\n  margin-bottom: 0.5em;\n}\n.heroTagline {\n  font-size: 1.2em;\n  color: #666;\n}\n\n/* Tablet and Small Desktop */\n@media only screen and (min-width: 601px) and (max-width: 1024px) {\n  .navbar-menu li {\n    padding: 0 10px;\n  }\n}\n\n/* Desktop */\n@media only screen and (min-width: 1025px) {\n  .navbar-menu li {\n    padding: 0 10px;\n  }\n}\n\n/* Mobile */\n@media only screen and (max-width: 600px) {\n  .navbar-menu li {\n    padding: 0 5px;\n  }\n  .hero {\n    background: url(${C});\n    background-size: cover;\n    background-position: center;\n  }\n}\n\n/* Responsive Hero Image */\n@media only screen and (min-width: 601px) and (max-width: 650px) {\n  .hero {\n    background: url(${C});\n    background-size: cover;\n    background-position: center;\n  }\n}\n\n@media only screen and (min-width: 651px) {\n  .hero {\n    background: url(${E});\n    background-size: cover;\n    background-position: center;\n  }\n}\n\n\n\n.container {\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n  text-align: center;\n}\n\n\n.restaurant-tit {\n  font-size: 2em;\n  color: #333;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #e2e2e2;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.restaurant-daftar {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.restaurant-item {\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n  transition: box-shadow 0.3s;\n}\n\n.restaurant-item:hover {\n  box-shadow: 0 8px 16px rgba(0,0,0,0.2);\n}\n\n.restaurant-item img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n\n.restaurant-info {\n  padding: 15px;\n  text-align: left;\n}\n\n.restaurant-name a {\n  display: inline-block;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.restaurant-city, .restaurant-rating {\n  font-size: 1em;\n  color: #666;\n  margin-bottom: 5px;\n}\n\n.restaurant-description {\n  font-size: 0.9em;\n  color: #777;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.restaurant-daftar-detail {\n  width: 100%;\n  max-width: 800px; \n  margin: 0 auto;\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap; \n  justify-content: space-between; \n}\n\n\n.restaurant-item-detail {\n  width: calc(50% - 20px); \n  margin-bottom: 40px; \n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n  transition: box-shadow 0.3s;\n}\n\n\n.restaurant-item-detail:hover {\n  box-shadow: 0 8px 16px rgba(0,0,0,0.2);\n}\n\n.restaurant__image {\n  width: 100%;\n  max-height: 50vh; \n  height: auto;\n  display: block;\n  border-radius: 8px 8px 0 0;\n}\n\n\n.restaurant-info-detail {\n  padding: 15px;\n}\n\n\n.restaurant-name-detail {\n  font-size: 1.5em;\n  color: #333;\n  margin-bottom: 5px;\n}\n\n.restaurant-city-detail, .restaurant-rating-detail {\n  font-size: 1em;\n  color: #666;\n  margin-bottom: 5px;\n}\n\n.restaurant-description-detail {\n  font-size: 0.9em;\n  color: #777;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.menu-container {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}\n\n.menu-section {\n  text-align: center;\n}\n\n.menu-section h4 {\n  margin-bottom: 10px;\n}\n\n.restaurant__foods p, .restaurant__drinks p {\n  font-size: 0.9em;\n  color: #555;\n}\n\n.restaurant__categories {\n  list-style: none; \n  padding: 0; \n}\n\n.restaurant__categories li {\n  display: inline-block;\n  margin-right: 10px; \n}\n\n.restaurant__categories li:last-child {\n  margin-right: 0; \n}\n\n.restaurant__categories li a {\n  text-decoration: none;\n  background-color: #f2f2f2; \n  padding: 5px 10px; \n  border-radius: 5px; \n  color: #333; \n}\n\n.restaurant__categories li a:hover {\n  background-color: #ddd; \n}\n\n\n.restaurant__reviews {\n  margin-top: 20px;\n}\n\n.review-card {\n  margin-bottom: 20px;\n}\n\n\n@media (max-width: 767px) {\n  .restaurant-daftar {\n    grid-template-columns: 1fr;\n  }\n}\n\n.restaurant__menu {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.menu-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n\n.restaurant__reviews {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.review-card {\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 10px;\n  margin-bottom: 10px;\n  box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n}\n\n.review-card p {\n  margin: 5px 0;\n}\n\n\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n \n\nfooter {\n  padding: 16px;\n}\nfooter {\n  background-color: #2c3e50;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px 10px;\n  font-size: 16px;\n  border-top: 3px solid #34495e;\n}\n`,"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAAA;EACE,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,UAAU;EACV,WAAW;EACX,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,OAAO;EACP,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX;;;AAGA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,eAAe;EACf,aAAa;AACf;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;;AAGA;EACE;MACI,cAAc;EAClB;;AAEF;IACI,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,yBAAyB;EAC3B;EACA;IACE,aAAa;EACf;EACA;IACE,cAAc;IACd,aAAa;EACf;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,yDAAgE;EAChE,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;AAC9B;AACA;EACE,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,WAAW;EACX,oBAAoB;AACtB;AACA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA,6BAA6B;AAC7B;EACE;IACE,eAAe;EACjB;AACF;;AAEA,YAAY;AACZ;EACE;IACE,eAAe;EACjB;AACF;;AAEA,WAAW;AACX;EACE;IACE,cAAc;EAChB;EACA;IACE,mDAA4D;IAC5D,sBAAsB;IACtB,2BAA2B;EAC7B;AACF;;AAEA,0BAA0B;AAC1B;EACE;IACE,mDAA4D;IAC5D,sBAAsB;IACtB,2BAA2B;EAC7B;AACF;;AAEA;EACE;IACE,mDAA4D;IAC5D,sBAAsB;IACtB,2BAA2B;EAC7B;AACF;;;;AAIA;EACE,WAAW;EACX,gBAAgB;EAChB,cAAc;EACd,aAAa;EACb,yBAAyB;EACzB,qCAAqC;EACrC,kBAAkB;AACpB;;;AAGA;EACE,cAAc;EACd,WAAW;EACX,oBAAoB;EACpB,gCAAgC;EAChC,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,4DAA4D;AAC9D;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,qCAAqC;EACrC,2BAA2B;AAC7B;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,oBAAoB;EACpB,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,cAAc;EACd,aAAa;EACb,aAAa;EACb,eAAe;EACf,8BAA8B;AAChC;;;AAGA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,qCAAqC;EACrC,2BAA2B;AAC7B;;;AAGA;EACE,sCAAsC;AACxC;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,cAAc;EACd,0BAA0B;AAC5B;;;AAGA;EACE,aAAa;AACf;;;AAGA;EACE,gBAAgB;EAChB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,oBAAoB;EACpB,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,cAAc;EACd,2DAA2D;AAC7D;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,sBAAsB;AACxB;;;AAGA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;;AAGA;EACE;IACE,0BAA0B;EAC5B;AACF;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;;AAGA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,aAAa;AACf;;;;AAIA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;;EAEzB,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,SAAS;;EAET,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;;AAGA;EACE,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,6BAA6B;AAC/B",sourcesContent:['*, *:before, *:after {\n  box-sizing: border-box;\n}\nhtml, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  font-family: Lato, sans-serif;\n  font-weight: bold;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background: #000;\n  color: white;\n  padding: 8px 16px;\n  z-index: 100;\n  transition: top 0.3s;\n  text-decoration: none;\n}\n\n.skip-link:focus {\n  top: 10px;\n}\n\n\n.nav {\n  background-color: #2c3e50; \n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 10px; \n  font-size: 16px;\n  border-bottom: 3px solid #34495e; \n}\n\n.nav .logo {\n  flex-grow: 1;\n  font-size: 20px; \n  font-weight: bold;\n}\n\n.navbar-menu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n\n.navbar-menu li {\n  padding: 0 10px;\n}\n\n.navbar-menu a {\n  text-decoration: none;\n  color: white;\n  font-size: 16px; \n}\n\n.navbar-menu a:hover {\n  color: #c7c7c7;\n}\n\n#menuIcon {\n  display: none; \n  background-color: transparent; \n  border: none;  \n  color: white;  \n  font-size: 24px;  \n  cursor: pointer;  \n  padding: 10px;  \n}\n\nbutton, .navbar-menu a, input[type="text"], textarea {\n  min-width: 44px;  \n  min-height: 44px;\n  padding: 10px;    \n  font-size: 16px;  \n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#menuIcon {\n  width: 44px;\n  height: 44px;\n}\n\n\n@media (max-width: 600px) {\n  #menuIcon {\n      display: block;  \n  }\n\n.navbar-menu {\n    flex-direction: column;\n    text-align: center;\n    display: none;\n    width: 100%;\n    position: absolute;\n    top: 60px;\n    left: 0;\n    background-color: #2c3e50;\n  }\n  #drawer.open {\n    display: flex;\n  }\n  #drawer li a {\n    display: block;\n    padding: 10px;\n  }\n}\n\n.hero {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  background-image: url(\'../public/images/heros/hero-image_2.jpg\');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.heroInner {\n  margin: 0 auto;\n  max-width: 960px;\n}\n.heroTitle {\n  font-size: 2.5em;\n  color: #333;\n  margin-bottom: 0.5em;\n}\n.heroTagline {\n  font-size: 1.2em;\n  color: #666;\n}\n\n/* Tablet and Small Desktop */\n@media only screen and (min-width: 601px) and (max-width: 1024px) {\n  .navbar-menu li {\n    padding: 0 10px;\n  }\n}\n\n/* Desktop */\n@media only screen and (min-width: 1025px) {\n  .navbar-menu li {\n    padding: 0 10px;\n  }\n}\n\n/* Mobile */\n@media only screen and (max-width: 600px) {\n  .navbar-menu li {\n    padding: 0 5px;\n  }\n  .hero {\n    background: url("/dist/images/heros/hero-image_2-small.jpg");\n    background-size: cover;\n    background-position: center;\n  }\n}\n\n/* Responsive Hero Image */\n@media only screen and (min-width: 601px) and (max-width: 650px) {\n  .hero {\n    background: url("/dist/images/heros/hero-image_2-small.jpg");\n    background-size: cover;\n    background-position: center;\n  }\n}\n\n@media only screen and (min-width: 651px) {\n  .hero {\n    background: url("/dist/images/heros/hero-image_2-large.jpg");\n    background-size: cover;\n    background-position: center;\n  }\n}\n\n\n\n.container {\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n  text-align: center;\n}\n\n\n.restaurant-tit {\n  font-size: 2em;\n  color: #333;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #e2e2e2;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.restaurant-daftar {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.restaurant-item {\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n  transition: box-shadow 0.3s;\n}\n\n.restaurant-item:hover {\n  box-shadow: 0 8px 16px rgba(0,0,0,0.2);\n}\n\n.restaurant-item img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n\n.restaurant-info {\n  padding: 15px;\n  text-align: left;\n}\n\n.restaurant-name a {\n  display: inline-block;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.restaurant-city, .restaurant-rating {\n  font-size: 1em;\n  color: #666;\n  margin-bottom: 5px;\n}\n\n.restaurant-description {\n  font-size: 0.9em;\n  color: #777;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.restaurant-daftar-detail {\n  width: 100%;\n  max-width: 800px; \n  margin: 0 auto;\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap; \n  justify-content: space-between; \n}\n\n\n.restaurant-item-detail {\n  width: calc(50% - 20px); \n  margin-bottom: 40px; \n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n  transition: box-shadow 0.3s;\n}\n\n\n.restaurant-item-detail:hover {\n  box-shadow: 0 8px 16px rgba(0,0,0,0.2);\n}\n\n.restaurant__image {\n  width: 100%;\n  max-height: 50vh; \n  height: auto;\n  display: block;\n  border-radius: 8px 8px 0 0;\n}\n\n\n.restaurant-info-detail {\n  padding: 15px;\n}\n\n\n.restaurant-name-detail {\n  font-size: 1.5em;\n  color: #333;\n  margin-bottom: 5px;\n}\n\n.restaurant-city-detail, .restaurant-rating-detail {\n  font-size: 1em;\n  color: #666;\n  margin-bottom: 5px;\n}\n\n.restaurant-description-detail {\n  font-size: 0.9em;\n  color: #777;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.menu-container {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}\n\n.menu-section {\n  text-align: center;\n}\n\n.menu-section h4 {\n  margin-bottom: 10px;\n}\n\n.restaurant__foods p, .restaurant__drinks p {\n  font-size: 0.9em;\n  color: #555;\n}\n\n.restaurant__categories {\n  list-style: none; \n  padding: 0; \n}\n\n.restaurant__categories li {\n  display: inline-block;\n  margin-right: 10px; \n}\n\n.restaurant__categories li:last-child {\n  margin-right: 0; \n}\n\n.restaurant__categories li a {\n  text-decoration: none;\n  background-color: #f2f2f2; \n  padding: 5px 10px; \n  border-radius: 5px; \n  color: #333; \n}\n\n.restaurant__categories li a:hover {\n  background-color: #ddd; \n}\n\n\n.restaurant__reviews {\n  margin-top: 20px;\n}\n\n.review-card {\n  margin-bottom: 20px;\n}\n\n\n@media (max-width: 767px) {\n  .restaurant-daftar {\n    grid-template-columns: 1fr;\n  }\n}\n\n.restaurant__menu {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.menu-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n\n.restaurant__reviews {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.review-card {\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 10px;\n  margin-bottom: 10px;\n  box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n}\n\n.review-card p {\n  margin: 5px 0;\n}\n\n\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n \n\nfooter {\n  padding: 16px;\n}\nfooter {\n  background-color: #2c3e50;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px 10px;\n  font-size: 16px;\n  border-top: 3px solid #34495e;\n}\n'],sourceRoot:""}]);const g=c},810:(n,A,e)=>{var t=e(72),a=e.n(t),r=e(825),o=e.n(r),i=e(659),d=e.n(i),p=e(56),s=e.n(p),l=e(540),c=e.n(l),B=e(113),C=e.n(B),E=e(249),g={};g.styleTagTransform=C(),g.setAttributes=s(),g.insert=d().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=c(),a()(E.A,g),E.A&&E.A.locals&&E.A.locals}},e={};function t(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={id:n,exports:{}};return A[n](r,r.exports,t),r.exports}t.m=A,n=[],t.O=(A,e,a,r)=>{if(!e){var o=1/0;for(s=0;s<n.length;s++){for(var[e,a,r]=n[s],i=!0,d=0;d<e.length;d++)(!1&r||o>=r)&&Object.keys(t.O).every((n=>t.O[n](e[d])))?e.splice(d--,1):(i=!1,r<o&&(o=r));if(i){n.splice(s--,1);var p=a();void 0!==p&&(A=p)}}return A}r=r||0;for(var s=n.length;s>0&&n[s-1][2]>r;s--)n[s]=n[s-1];n[s]=[e,a,r]},t.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return t.d(A,{a:A}),A},t.d=(n,A)=>{for(var e in A)t.o(A,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:A[e]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var A=t.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var e=A.getElementsByTagName("script");if(e.length)for(var a=e.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=e[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{t.b=document.baseURI||self.location.href;var n={446:0};t.O.j=A=>0===n[A];var A=(A,e)=>{var a,r,[o,i,d]=e,p=0;if(o.some((A=>0!==n[A]))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(d)var s=d(t)}for(A&&A(e);p<o.length;p++)r=o[p],t.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return t.O(s)},e=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];e.forEach(A.bind(null,0)),e.push=A.bind(null,e.push.bind(e))})(),t.nc=void 0;var a=t.O(void 0,[109,608,208,74,720],(()=>t(956)));a=t.O(a)})();
//# sourceMappingURL=app~04e4ec69.bundle.js.map