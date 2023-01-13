<script>
  import WindowControls from "./windowcontrols.svelte";

  let nextid = 1,
    newnextid;
  let isnewtablink = false;
  let newtablinkstr = "";

  let tabsandwebviews = [];

  let homepageurl, urlbarurl, currenturlhovered;

  function go(url) {
    let webview = document.querySelector("webview.active");

    if (url == undefined) return;
    if (url == "") return;

    if (!isUrl(url)) url = "https://search.brave.com/search?q=" + url;
    else if (!(url.startsWith("https://") || url.startsWith("http://")))
      url = "https://" + url;

    if (url.startsWith("http://")) url.replace("http://", "https://");

    homepageurl = url;
    urlbarurl = url;

    webview.loadURL(url);
    webview.style.display = "flex";
  }

  function isUrl(val = "") {
    if (
      /^http(s?):\/\//.test(val) ||
      (val.includes(".") && val.substr(0, 1) !== " ")
    )
      return true;
    return false;
  }

  document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == "complete") {
      document.getElementById("loading").style.display = "none";
    }
  };

  window.api.handle(
    "new-tab-url",
    (event, data) =>
      function (event, data) {
        isnewtablink = true;
        newtablinkstr = data;
        document.getElementById("newtabbutton").click();
      },
    event
  );
</script>

<div id="loading">
  <object class="loadingimg" aria-label="Loading..." data="./loading.svg" />
</div>

<div id="topbar">
  <div id="webviewnavigation">
    <button on:click={() => document.querySelector("webview.active").goBack()}>
      <i id="back" class="fa-solid fa-caret-left" />
    </button>
    <button on:click={() => document.querySelector("webview.active").reload()}>
      <i class="fa-solid fa-rotate-right" />
    </button>
    <button
      on:click={() => {
        document.querySelector("webview.active").goForward();
        document.querySelector("webview.active").style.display = "flex";
      }}
    >
      <i id="forward" class="fa-solid fa-caret-right" />
    </button>
  </div>

  <form on:submit|preventDefault={() => go(urlbarurl)} id="urlbar">
    <input
      bind:value={urlbarurl}
      type="text"
      placeholder="What do you want to know?"
    />
  </form>

  <div id="windowcontrols">
    <WindowControls />
  </div>
</div>

<div id="sidebar">
  <div id="tabs">
    {#each tabsandwebviews as tabandwebview, i (tabandwebview.number)}
      <button
        class="tab"
        id={"tab" + tabandwebview.number}
        on:click={(event) => {
          let webviews = document.querySelectorAll("webview");
          let webview = document.getElementById(tabandwebview.number);
          let tabs = document.querySelectorAll(".tab");
          let tab = event.target;

          webviews.forEach((elmnt) => {
            elmnt.className = "";
            elmnt.style.display = "none";
          });
          webview.classList.add("active");
          tabs.forEach((elmnt) => (elmnt.className = "tab"));
          tab.classList.add("active");

          if (tabandwebview.webview.src.includes("dummypage.html")) {
            homepageurl = "";
            urlbarurl = "";
          } else {
            homepageurl = tabandwebview.webview.src;
            urlbarurl = tabandwebview.webview.src;
          }

          if (
            webview.src !== "" &&
            webview.src !== undefined &&
            !webview.src.includes("dummypage.html")
          ) {
            webview.style.display = "flex";
          }
        }}
        bind:this={tabandwebview.tab}
      >
        <img
          alt="favicon"
          src="./newtab.png"
          class="tabfavicon"
          bind:this={tabandwebview.tabfavicon}
        />
        <p>New Tab</p>
      </button>
    {/each}
  </div>
  <button
    id="newtabbutton"
    on:click={() => {
      let newtabsandwebviews = [
        ...tabsandwebviews,
        {
          number: nextid,
          tab: "",
          tabfavicon: "",
          webview: "",
          alreadydummypage: false,
        },
      ];

      newnextid = nextid;

      tabsandwebviews = newtabsandwebviews;
      function checkIfTabExists() {
        if (document.getElementById(newnextid) == null) {
          window.setTimeout(checkIfTabExists, 100);
        } else {
          document.querySelector("#tab" + newnextid).click();
          if (
            document.getElementById(newnextid).isLoadingMainFrame() == false
          ) {
            window.setTimeout(checkIfTabExists, 100);
          }
          if (isnewtablink == true) {
            go(newtablinkstr);
            document.querySelector("#tab" + newnextid).src =
              "./loadingfavicon.svg";
            isnewtablink = false;
            newtablinkstr = "";
          } else {
            homepageurl = "";
            urlbarurl = "";
            document.querySelector("#urlbar input").focus();
          }
        }
      }
      checkIfTabExists();
      nextid = nextid + 1;
    }}>New tab</button
  >
</div>

<div id="homepage">
  <h1>
    <span style="font-family: Norican;font-size: 1.5em;">F</span>rendli
  </h1>
  <form on:submit|preventDefault={() => go(homepageurl)}>
    <input
      type="search"
      placeholder="Learn something new today"
      bind:value={homepageurl}
    />
    <button type="submit">
      <i class="fa-solid fa-magnifying-glass" />
    </button>
  </form>
</div>

{#each tabsandwebviews as tabandwebview}
  <webview
    src="dummypage.html"
    id={tabandwebview.number}
    plugins
    on:did-start-loading={(event) => {
      if (
        event.target.src.includes("dummypage.html") &&
        tabandwebview.alreadydummypage == false
      ) {
        tabandwebview.alreadydummypage = true;
        event.target.style.display = "none";
        document.querySelector("#tab" + tabandwebview.number + " p").innerHTML =
          "New Tab";
        homepageurl = "";
        urlbarurl = "";
        tabandwebview.tabfavicon.src = "./newtab.png";
      } else {
        tabandwebview.alreadydummypage = false;
        if (event.target.src.includes("dummypage.html")) {
          event.target.style.display = "flex";
        }
        tabandwebview.tabfavicon.src = "./loadingfavicon.svg";
      }
      if (event.target.canGoBack() == true) {
        document.getElementById("back").style.color = "black";
        document.getElementById("back").classList.add("active");
      } else {
        document.getElementById("back").style.color = "lightgrey";
        document.getElementById("back").classList.remove("active");
      }
      if (event.target.canGoForward() == true) {
        document.getElementById("forward").style.color = "black";
        document.getElementById("forward").classList.add("active");
      } else {
        document.getElementById("forward").style.color = "lightgrey";
        document.getElementById("forward").classList.remove("active");
      }
    }}
    on:did-frame-finish-load={() => {
      if (tabandwebview.alreadydummypage == false) {
        let faviconurl = event.target.src.replace("https://", "");
        tabandwebview.tabfavicon.src =
          // "https://s2.googleusercontent.com/s2/favicons?domain_url=" +
          "http://democratic-gray-boar.faviconkit.com/" +
          faviconurl.split("/")[0];
      }
    }}
    on:page-title-updated={(event) => {
      document.querySelector("#tab" + tabandwebview.number + " p").innerHTML =
        event.title;
      if (event.target.classList[0].includes("active")) {
        homepageurl = event.target.src;
        urlbarurl = event.target.src;
      }
    }}
    on:update-target-url={(event) => {
      let urlhoverdiv = document.querySelector("#urlhover");

      if (event.url == "") {
        urlhoverdiv.style.display = "none";
      } else {
        urlhoverdiv.style.display = "initial";
        currenturlhovered = event.url;
      }
    }}
    bind:this={tabandwebview.webview}
  />
{/each}

<div id="urlhover">
  <p>
    {currenturlhovered}
  </p>
</div>

<svelte:window
  on:load={() => {
    document.querySelector("#newtabbutton").click();
  }}
/>
