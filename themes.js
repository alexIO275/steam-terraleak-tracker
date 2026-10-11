/* Theme selector — persists to localStorage. Skins scraped/adapted from:
   - Classic 2003: MapleAtMorning/OldSteam-Theme (universal.css palette,
     navbar/client rules) + eyedine2/Classic-Steam-Library images/* glyphs
   - 2013: eyedine2/Classic-Steam-Library (vars2013.css) +
     allenvox/steamui-2013 (steam.styles tokens + TGA chrome)
   See assets/img/ for web-ready art, assets/vendor/ for upstream copies.
   (Late-2000s skin retired in v1.6; styles.css is structural base only.) */
(function(){
  var THEMES = {
    og:    {label: "Classic 2003", title: "Steam 2003", hint: "OG-Steam VGUI: flat greens, maize, outset bevels", icon: "assets/img/v2003/logo.svg"},
    y2013: {label: "2013", title: "Steam 2013", hint: "dark warm greys + 9-slice buttons", icon: "assets/img/v2013/steam-logo-2013.png"}
  };
  var KEY = "terraleak-theme";
  function apply(name){
    if(!THEMES[name]) name = "og"; /* migrate retired skins */
    document.documentElement.setAttribute("data-theme", name);
    try{ localStorage.setItem(KEY, name); }catch(e){}
    document.querySelectorAll(".skin-btn").forEach(function(b){
      b.classList.toggle("active", b.dataset.skin === name);
    });
    var fav = document.querySelector('link[rel="icon"]');
    if(fav && THEMES[name].icon) fav.setAttribute("href", THEMES[name].icon);
    var piston = document.querySelector(".steam-piston");
    if(piston && THEMES[name]) piston.title = THEMES[name].title + " — " + THEMES[name].hint;
  }
  function current(){
    try{ return localStorage.getItem(KEY) || "og"; }catch(e){ return "og"; }
  }
  document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll(".skin-btn").forEach(function(b){
      b.addEventListener("click", function(){ apply(b.dataset.skin); });
    });
    apply(current());
  });
  window.TerraSkins = {apply: apply, list: THEMES};
})();
