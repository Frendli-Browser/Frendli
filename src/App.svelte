<script>
  import WindowControls from "./windowcontrols.svelte";

  let tabsandwebviews = [{ number: 1, tab: "", tabfavicon: "", webview: "" }];

  let searchinput, currenturlhovered;

  function openTabAndIframe(number) {
    let webviews = document.querySelectorAll("webview");
    let webview = document.getElementById(number);
    let tabs = document.querySelectorAll(".tab");
    let tab = document.getElementById("tab" + number);

    webviews.forEach((elmnt) => (elmnt.className = ""));
    webview.classList.add("active");
    tabs.forEach((elmnt) => (elmnt.className = "tab"));
    tab.classList.add("active");

    if (
      webview.src !== "" &&
      webview.src !== undefined &&
      !webview.src.includes("dummyurl")
    ) {
      webview.style.display = "flex";
    }
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
</script>

<div id="loading">
  <object class="loadingimg" aria-label="Loading..." data="./loading.svg" />
</div>

<div id="topbar">
  <div id="webviewnavigation">
    <button on:click={() => document.querySelector("webview.active").goBack()}>
      <i class="fa-solid fa-caret-left" />
    </button>
  </div>
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
        on:click={() => openTabAndIframe(tabandwebview.number)}
        bind:this={tabandwebview.tab}
      >
        <img
          alt="favicon"
          class="tabfavicon"
          bind:this={tabandwebview.tabfavicon}
        />
        <p>New Tab</p>
      </button>
    {/each}
  </div>
</div>

<div id="homepage">
  <h1>
    <span style="font-family: Norican;font-size: 1.5em;">F</span>rendli
  </h1>
  <form
    on:submit|preventDefault={() => {
      let webview = document.querySelector("webview.active");

      let url = searchinput;
      if (url == undefined) return;

      if (!isUrl(url)) url = "https://search.brave.com/search?q=" + url;
      else if (!(url.startsWith("https://") || url.startsWith("http://")))
        url = "https://" + url;

      if (url.startsWith("http://")) url.replace("http://", "https://");

      webview.loadURL(url);
      webview.style.display = "flex";
    }}
  >
    <input
      type="search"
      placeholder="What do you want to know?"
      bind:value={searchinput}
    />
    <button type="submit">
      <i class="fa-solid fa-magnifying-glass" />
    </button>
  </form>
</div>

{#each tabsandwebviews as tabandwebview}
  <webview
    src="dummyurl"
    id={tabandwebview.number}
    on:dom-ready={(event) => {
      if (!event.target.src.includes("dummyurl")) {
        document.querySelector("#tab" + tabandwebview.number + " p").innerHTML =
          event.target.getTitle();
        searchinput = event.target.src;
        tabandwebview.tabfavicon.src = "./loadingfavicon.svg";
      }
    }}
    on:did-frame-finish-load={() => {
      if (!event.target.src.includes("dummyurl")) {
        let faviconurl = event.target.src.replace("https://", "");
        tabandwebview.tabfavicon.src =
          // "https://s2.googleusercontent.com/s2/favicons?domain_url=" +
          "http://democratic-gray-boar.faviconkit.com/" +
          faviconurl.split("/")[0];
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
    plugins
  />
{/each}

<div id="urlhover">
  <p>
    {currenturlhovered}
  </p>
</div>

<svelte:window
  on:load={() => {
    openTabAndIframe(1);
  }}
/>
