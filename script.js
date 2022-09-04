function dNews() {
  alert("hi");
}

function post(data) {
  let div = document.getElementById("here");

  //console.log(data);

  for (const dd of data) {
    let div1 = document.createElement("div1");
    //console.log(dd.thumbnail_url);
    div1.innerHTML = `
  <div>
          <div
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-c11"
          >
            <a href="#">
              <img
                class="rounded-t-lg mx-auto mt-5"
                src="${dd.thumbnail_url}"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  ${dd.title}
                </h5>
              </a>
              <p class="mb-3 truncate font-normal text-gray-700 dark:text-gray-400">
                ${dd.details}
              </p>

              <div class="my-5 flex text-slate-100 justify-between">
                <div>
                  <span
                    ><img
                      class="w-12 ml-3 rounded-full"
                      src="${dd.author.img}"
                      alt="user photo"
                  /></span>
                  <p> ${dd.author.name}</p>
                </div>
                <div class="pr-10">
                  <span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span class="text-2xl"> ${dd.total_view}M</span>
                </div>
              </div>
              <button
                class=" inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onclick="dNews()"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
   
    `;
    div.appendChild(div1);
  }
}

function showNews() {
  //alert("hi");
  try {
    fetch("https://openapi.programming-hero.com/api/news/category/")
      .then((res) => res.json())
      .then((data) => post(data.data));
  } catch (error) {
    alert("Error fetching DAta");
  }
}
//console.log(data.data[0].title)
