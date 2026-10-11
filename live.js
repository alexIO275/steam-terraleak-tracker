/* Live data — auto-fetches on site open, no clicks needed.
   Source: Hidden Palace MediaWiki API (CORS open: ACAO *).
   - generator=links on "Steam2 Content Server" -> live prototype count
   - prop=revisions -> live wiki activity feed (catalog progression)
   Falls back to embedded cache when offline. Refreshes every 5 min. */
(function(){
  "use strict";
  var API = "https://hiddenpalace.org/w/api.php";
  var PAGE = "Steam2 Content Server";
  var EST_DEPOTS = 4500; /* torrent-scale estimate, see forensics */
  var TIMEOUT_MS = 12000;
  var REFRESH_MS = 5 * 60 * 1000;

  function qs(o){
    var u = new URL(API);
    Object.keys(o).forEach(function(k){ u.searchParams.set(k, o[k]); });
    return u.toString();
  }
  function get(url){
    var ctl = new AbortController();
    var t = setTimeout(function(){ ctl.abort(); }, TIMEOUT_MS);
    return fetch(url, {signal: ctl.signal}).then(function(r){
      clearTimeout(t);
      if(!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    });
  }
  function fetchLinkCount(){
    var seen = {}, total = 0, cont = null, guard = 0;
    function page(){
      var p = {action:"query", generator:"links", titles:PAGE,
               gplnamespace:"0", gpllimit:"500", format:"json", origin:"*"};
      if(cont) p.gplcontinue = cont;
      return get(qs(p)).then(function(d){
        var pages = (d.query && d.query.pages) || {};
        Object.keys(pages).forEach(function(id){
          var t = pages[id].title;
          if(!seen[t]){ seen[t] = 1; total++; }
        });
        cont = (d["continue"] && d["continue"].gplcontinue) || null;
        guard++;
        return (cont && guard < 10) ? page() : total;
      });
    }
    return page();
  }
  function fetchRevisions(){
    return get(qs({action:"query", prop:"revisions", titles:PAGE,
      rvprop:"timestamp|user|comment", rvlimit:"8",
      format:"json", origin:"*"})
    ).then(function(d){
      var pages = (d.query && d.query.pages) || {};
      var id = Object.keys(pages)[0];
      return (pages[id] && pages[id].revisions) || [];
    });
  }
  function fmtTime(iso){
    try{ return iso.slice(0,10) + " " + iso.slice(11,16) + " UTC"; }
    catch(e){ return iso; }
  }
  function setBadge(mode, text){
    var b = document.getElementById("liveBadge");
    if(!b) return;
    b.className = "live-badge " + mode;
    b.textContent = text;
  }
  function paintLive(count, revs){
    var pct = (count / EST_DEPOTS * 100).toFixed(1);
    var sp = document.getElementById("statProtos");
    if(sp) sp.textContent = count;
    var fc = document.getElementById("footCatalog");
    if(fc) fc.textContent = count + " protos (live)";
    var tp = document.getElementById("triagePct");
    if(tp) tp.textContent = pct;
    var tf = document.getElementById("triageFill");
    if(tf) tf.style.width = Math.min(100, parseFloat(pct)) + "%";
    var st = document.getElementById("scrapeTime");
    if(st) st.textContent = "live · " + new Date().toUTCString().slice(17,22) + " UTC · " + count + " protos";
    var feed = document.getElementById("liveFeed");
    if(feed){
      if(revs && revs.length){
        feed.innerHTML = revs.map(function(r){
          var c = r.comment ? " — " + r.comment : "";
          return '<div class="live-row"><span class="live-date">' +
            fmtTime(r.timestamp) + '</span><br><b>' + r.user + '</b>' + c + '</div>';
        }).join("");
      } else {
        feed.innerHTML = '<div class="live-row">No recent edits — catalog stable.</div>';
      }
    }
    setBadge("live", "● LIVE");
  }
  function paintCached(){
    setBadge("cached", "● CACHED — offline, Oct 11 2026 data");
    var feed = document.getElementById("liveFeed");
    if(feed && !feed.children.length)
      feed.innerHTML = '<div class="live-row">Live wiki unreachable — showing embedded cache.</div>';
  }
  var inFlight = false;
  function refresh(manual){
    if(inFlight) return Promise.resolve(false);
    inFlight = true;
    setBadge("", "● SYNCING…");
    return Promise.all([fetchLinkCount(), fetchRevisions()]).then(function(res){
      paintLive(res[0], res[1]);
      return true;
    }).catch(function(){
      paintCached();
      return false;
    }).then(function(ok){
      inFlight = false;
      return ok;
    });
  }
  document.addEventListener("DOMContentLoaded", function(){
    refresh(false);                 /* auto-fetch on open */
    setInterval(function(){ refresh(false); }, REFRESH_MS);
  });
  window.LiveTracker = {refresh: refresh};
})();
