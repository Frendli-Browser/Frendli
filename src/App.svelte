<script>
  let tabsandwebviews = [{ number: 1, webview: "" }];

  let searchinput;

  function openTabAndIframe(number) {
    let webviews = document.querySelectorAll("webview");
    let webview = document.getElementById(number);
    let tabs = document.querySelectorAll(".tab");
    let tab = document.getElementById("tab" + number);

    webviews.forEach((elmnt) => (elmnt.className = ""));
    webview.classList.add("active");
    tabs.forEach((elmnt) => (elmnt.className = "tab"));
    tab.classList.add("active");

    if (webview.src !== "" && webview.src !== undefined) {
      webview.style.display = "inline-flex";
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

<div id="sidebar">
  <div id="tabs">
    {#each tabsandwebviews as tabsandwebview, i (tabsandwebview.number)}
      <button
        class="tab"
        id={"tab" + tabsandwebview.number}
        on:click={() => openTabAndIframe(tabsandwebview.number)}
      >
        <img
          src={"https://s2.googleusercontent.com/s2/favicons?domain_url=" +
            tabsandwebview.webview.src}
          on:error={() =>
            (document.querySelector(
              "#tab" + tabsandwebview.number + " .tabfavicon"
            ).src =
              "data:image/png;base64,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")}
          alt="favicon"
          class="tabfavicon"
        />
        <p>Tab</p>
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

      if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
      else if (!(url.startsWith("https://") || url.startsWith("http://")))
        url = "https://" + url;

      webview.src = url;
      webview.style.display = "inline-flex";
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

{#each tabsandwebviews as tabsandwebview}
  <webview
    bind:this={tabsandwebview.webview}
    id={tabsandwebview.number}
    on:did-finish-load={() => {
      searchinput = tabsandwebview.webview.src;
      tabsandwebviews = tabsandwebviews;
    }}
  />
{/each}

<svelte:window
  on:load={() => {
    openTabAndIframe(1);
  }}
/>
