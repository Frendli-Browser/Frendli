<script>
  let maximizebutton, restorebutton;

  window.api.handle(
    "is-window-maximized",
    (event, data) =>
      function (event, data) {
        if (data == true) {
          maximizebutton.style.display = "none";
          restorebutton.style.display = "flex";
        }
      },
    event
  );

  window.api.handle(
    "unmaximize",
    (event, data) =>
      function (event, data) {
        maximizebutton.style.display = "flex";
        restorebutton.style.display = "none";
      },
    event
  );
</script>

<button on:click={() => window.api.send("minimize")} id="minimizebutton">
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.9647058823529412"
      d="M 75.5 235 L 435.5 235 Q 442.7 236.8 446 242.5 Q 449 246.5 448 254.5 L 442.5 263 L 433.5 267 L 78.5 267 Q 71 265.6 67 260.5 Q 63.1 256.4 64 247.5 Q 65.8 240.3 71.5 237 L 75.5 235 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0"
      d="M 0 0 L 512 0 L 512 512 L 0 512 L 0 0 Z M 76 235 L 72 237 Q 66 240 64 248 Q 63 256 67 261 Q 71 266 79 267 L 434 267 L 443 263 L 448 255 Q 449 247 446 243 Q 443 237 436 235 L 76 235 Z "
    /></svg
  >
</button>

<button
  on:click={() => {
    window.api.send("maximize");
    maximizebutton.style.display = "none";
    restorebutton.style.display = "flex";
  }}
  id="maximizebutton"
  bind:this={maximizebutton}
>
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0"
      d="M 0 0 L 512 0 L 512 512 L 0 512 L 0 0 Z M 116 64 Q 98 67 87 76 Q 69 89 64 116 L 64 397 Q 67 414 76 426 Q 89 443 116 448 L 397 448 Q 414 445 426 436 Q 443 423 448 397 L 448 116 Q 445 98 436 87 Q 423 69 397 64 L 116 64 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0"
      d="M 119.5 96 L 392.5 96 Q 403.8 98.2 410 105.5 L 415 114.5 L 416 119.5 L 416 392.5 Q 413.8 403.8 406.5 410 L 397.5 415 L 392.5 416 L 119.5 416 Q 109 414 103 407.5 L 97 397.5 L 96 392.5 L 96 119.5 Q 98 109 104.5 103 L 114.5 97 L 119.5 96 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 115.5 64 L 120 64.5 L 115.5 65 L 115.5 64 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 392.5 64 L 397 64.5 L 392.5 65 L 392.5 64 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 105.5 66 L 108 66.5 L 105.5 67 L 105.5 66 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 404.5 66 L 407 66.5 L 404.5 67 L 404.5 66 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 92.5 72 L 91.5 74 L 92.5 72 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 419.5 72 L 420.5 74 L 419.5 72 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 89.5 74 L 88.5 76 L 89.5 74 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 422.5 74 L 423.5 76 L 422.5 74 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 86.5 76 L 83.5 80 L 86.5 76 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 425.5 76 L 428.5 80 L 425.5 76 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 80.5 82 L 76.5 87 L 80.5 82 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 431.5 82 L 435.5 87 L 431.5 82 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 75.5 88 L 74.5 90 L 75.5 88 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 436.5 88 L 437.5 90 L 436.5 88 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 73.5 91 L 72.5 93 L 73.5 91 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 438.5 91 L 439.5 93 L 438.5 91 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 116.5 96 L 119 96.5 L 116.5 97 L 116.5 96 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 393.5 96 L 396 96.5 L 393.5 97 L 393.5 96 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 112.5 97 L 114 97.5 L 109.5 100 L 110.5 98 L 112.5 97 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 398.5 97 L 403 99.5 L 401.5 99 Q 397.7 98.8 398.5 97 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 107.5 100 L 105.5 103 L 107.5 100 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 404.5 100 L 406.5 103 L 404.5 100 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 66.5 105 L 67 107.5 L 66 107.5 L 66.5 105 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 445.5 105 L 446 107.5 L 445 107.5 L 445.5 105 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 101.5 106 L 100.5 108 L 101.5 106 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 410.5 106 L 411.5 108 L 410.5 106 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 99.5 109 L 99 110.5 L 97.5 114 L 97 112.5 L 99.5 109 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 412.5 109 L 415 113.5 L 414 113.5 L 412.5 109 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 64.5 115 L 65 119.5 L 64 119.5 L 64.5 115 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 447.5 115 L 448 119.5 L 447 119.5 L 447.5 115 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 96.5 116 L 97 118.5 L 96 118.5 L 96.5 116 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 415.5 116 L 416 118.5 L 415 118.5 L 415.5 116 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 64.5 392 L 65 396.5 L 64 396.5 L 64.5 392 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 447.5 392 L 448 396.5 L 447 396.5 L 447.5 392 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 96.5 393 L 97 395.5 L 96 395.5 L 96.5 393 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 415.5 393 L 416 395.5 L 415 395.5 L 415.5 393 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 97.5 398 L 100 402.5 L 98 401.5 L 97.5 398 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 414.5 398 L 415 399.5 L 412.5 403 L 413 401.5 L 414.5 398 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 66.5 404 L 67 406.5 L 66 406.5 L 66.5 404 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 100.5 404 L 102.5 407 L 100.5 404 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 411.5 404 L 409.5 407 L 411.5 404 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 445.5 404 L 446 406.5 L 445 406.5 L 445.5 404 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 106.5 410 L 107.5 412 L 106.5 410 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 405.5 410 L 404.5 412 L 405.5 410 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 109.5 412 L 114 414.5 L 112.5 415 L 109.5 412 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 402.5 412 L 401.5 414 L 398.5 415 L 398.5 414 L 402.5 412 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 116.5 415 L 119 415.5 L 116.5 416 L 116.5 415 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 393.5 415 L 396 415.5 L 393.5 416 L 393.5 415 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 72.5 419 L 73.5 421 L 72.5 419 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 439.5 419 L 438.5 421 L 439.5 419 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 74.5 422 L 75.5 424 L 74.5 422 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 437.5 422 L 436.5 424 L 437.5 422 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 76.5 425 L 79.5 429 L 76.5 425 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 435.5 425 L 432.5 429 L 435.5 425 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 82.5 431 L 86.5 436 L 82.5 431 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 429.5 431 L 425.5 436 L 429.5 431 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 88.5 436 L 89.5 438 L 88.5 436 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 423.5 436 L 422.5 438 L 423.5 436 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 91.5 438 L 92.5 440 L 91.5 438 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 420.5 438 L 419.5 440 L 420.5 438 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 105.5 445 L 108 445.5 L 105.5 446 L 105.5 445 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 404.5 445 L 407 445.5 L 404.5 446 L 404.5 445 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 115.5 447 L 120 447.5 L 115.5 448 L 115.5 447 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7607843137254902"
      d="M 392.5 447 L 397 447.5 L 392.5 448 L 392.5 447 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="1"
      d="M 120.5 64 L 391.5 64 Q 393.3 66.8 399.5 65 L 412.5 69 L 431 81.5 L 443 99.5 L 447 112.5 Q 445.3 118.8 448 120.5 L 448 391.5 Q 445.3 393.3 447 399.5 L 443 412.5 L 430.5 431 L 412.5 443 L 399.5 447 Q 393.3 445.3 391.5 448 L 120.5 448 Q 118.8 445.3 112.5 447 L 99.5 443 Q 88.2 437.8 80 429.5 L 69 412.5 L 65 399.5 Q 66.8 393.3 64 391.5 L 64 120.5 Q 66.8 118.8 65 112.5 L 69 99.5 Q 74.2 88.2 82.5 80 L 99.5 69 L 112.5 65 Q 118.8 66.8 120.5 64 Z M 117 96 L 108 100 Q 99 106 96 117 L 96 396 L 100 405 Q 106 413 117 416 L 396 416 L 405 412 Q 413 406 416 396 L 416 117 L 412 108 Q 406 99 396 96 L 117 96 Z "
    /></svg
  >
</button>

<button
  on:click={() => {
    window.api.send("restore");
    restorebutton.style.display = "none";
    maximizebutton.style.display = "flex";
  }}
  bind:this={restorebutton}
  id="restorebutton"
  style="display: none"
>
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.9764705882352941"
      d="M 186.5 43 L 379.5 43 Q 419.7 49.8 442 74.5 Q 454.4 87.6 462 105.5 L 466 116.5 L 469 132.5 L 469 325.5 Q 463.4 353.4 444.5 368 Q 429.7 381.4 405 384 L 405 351.5 Q 405 350.5 409.5 351 Q 422.1 347.6 429 338.5 Q 434.9 331.9 437 321.5 L 437 134.5 Q 431.5 104 410.5 89 Q 397.7 78.3 377.5 75 L 190.5 75 Q 175.9 78.4 168 88.5 L 162 99.5 L 161 107 L 128.5 107 L 128 104.5 Q 133.1 73.6 153.5 58 Q 166.4 46.9 186.5 43 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.9764705882352941"
      d="M 103.5 128 L 322.5 128 Q 352.4 133.1 368 152.5 L 379 170.5 L 384 189.5 L 384 408.5 Q 378.4 438.4 358.5 454 Q 345.4 465.4 324.5 469 L 102.5 469 Q 72 463.5 57 442.5 Q 46.3 429.7 43 409.5 L 43 187.5 Q 48.4 157.9 68.5 143 Q 82.2 131.7 103.5 128 Z M 108 160 Q 94 162 87 170 Q 78 177 75 191 L 75 407 Q 77 416 82 423 Q 90 433 106 437 L 322 437 L 329 435 L 339 429 L 349 416 L 352 405 L 352 193 L 350 185 L 346 177 Q 337 164 320 160 L 108 160 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0"
      d="M 0 0 L 512 0 L 512 512 L 0 512 L 0 0 Z M 187 43 Q 166 47 154 58 Q 133 74 128 105 L 129 107 L 161 107 L 162 100 L 168 89 Q 176 78 191 75 L 378 75 Q 398 78 411 89 Q 432 104 437 135 L 437 322 Q 435 332 429 339 Q 422 348 410 351 Q 405 350 405 352 L 405 384 Q 430 381 445 368 Q 463 353 469 326 L 469 133 L 466 117 L 462 106 Q 454 88 442 75 Q 420 50 380 43 L 187 43 Z M 104 128 Q 82 132 69 143 Q 48 158 43 188 L 43 410 Q 46 430 57 443 Q 72 464 103 469 L 325 469 Q 345 465 359 454 Q 378 438 384 409 L 384 190 L 379 171 L 368 153 Q 352 133 323 128 L 104 128 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0"
      d="M 107.5 160 L 319.5 160 Q 337.4 163.6 346 176.5 L 350 184.5 L 352 192.5 L 352 404.5 L 349 415.5 L 338.5 429 L 328.5 435 L 321.5 437 L 105.5 437 Q 90 433.5 82 422.5 Q 76.9 416.1 75 406.5 L 75 190.5 Q 77.8 177.3 86.5 170 Q 94.2 162.2 107.5 160 Z "
    /></svg
  >
</button>

<button on:click={() => window.api.send("close")} id="closebutton">
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0"
      d="M 0 0 L 512 0 L 512 512 L 0 512 L 0 0 Z M 93 83 L 89 85 L 83 93 Q 82 99 85 103 L 238 256 L 85 410 L 83 415 Q 82 421 85 424 L 93 429 Q 100 430 103 427 L 256 274 L 410 427 L 414 429 L 423 428 L 429 420 Q 430 413 427 410 L 274 257 L 427 103 L 429 98 Q 430 91 427 89 L 420 83 Q 413 82 410 85 L 257 238 L 103 85 Q 99 82 93 83 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7098039215686275"
      d="M 92.5 83 L 98 83.5 L 92.5 84 L 92.5 83 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7098039215686275"
      d="M 414.5 83 L 420 83.5 L 414.5 84 L 414.5 83 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7098039215686275"
      d="M 102.5 85 L 256.5 238 L 410 85.5 L 255.5 239 L 102.5 85 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7098039215686275"
      d="M 83.5 92 L 84 97.5 L 83 97.5 L 83.5 92 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7098039215686275"
      d="M 428.5 93 L 429 97.5 L 428 97.5 L 428.5 93 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7098039215686275"
      d="M 85.5 102 L 239 256.5 L 85 409.5 L 238 255.5 L 85.5 102 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7098039215686275"
      d="M 426.5 102 L 274 255.5 L 427 409.5 L 273 256.5 L 426.5 102 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7098039215686275"
      d="M 255.5 273 L 410 426.5 L 256.5 274 L 102.5 427 L 255.5 273 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7098039215686275"
      d="M 83.5 414 L 84 419.5 L 83 419.5 L 83.5 414 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7098039215686275"
      d="M 428.5 414 L 429 419.5 L 428 419.5 L 428.5 414 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7098039215686275"
      d="M 88.5 426 L 89.5 428 L 88.5 426 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7098039215686275"
      d="M 423.5 426 L 422.5 428 L 423.5 426 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7098039215686275"
      d="M 92.5 428 L 99 428.5 L 92.5 429 L 92.5 428 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="0.7098039215686275"
      d="M 413.5 428 L 420 428.5 L 413.5 429 L 413.5 428 Z "
    /><path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      opacity="1"
      d="M 91.5 84 Q 98.3 82.7 101.5 85 L 256.5 239 L 410.5 85 Q 413.7 82.7 420.5 84 L 426 87.5 Q 429.3 91.2 428 99.5 L 273 256.5 L 427 410.5 Q 429.3 413.7 428 420.5 L 424.5 426 Q 421.3 429.8 412.5 428 L 255.5 273 L 101.5 427 Q 98 429.5 90.5 428 L 86 424.5 Q 82.7 420.8 84 412.5 L 239 255.5 L 85 101.5 Q 82.7 98.3 84 91.5 L 87.5 86 L 91.5 84 Z "
    /></svg
  >
</button>

<svelte:window
  on:load={() => {
    window.api.send("check-window-maximized");
  }}
/>
