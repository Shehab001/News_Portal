function dNews(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  let div = document.getElementById("here");
  let div1 = document.createElement("div1");

  //console.log(data);
  div1.innerHTML = `
  

<!-- Modal toggle -->

<!-- Main modal -->
<div id="defaultModal" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
         </div>
            <!-- Modal body -->
        
        <div>
          <div
            class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                class="rounded-t-lg mx-auto mt-5"
                src="${a}"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  ${b}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
               Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2.
              </p>

              <div class="my-5 flex text-slate-100 justify-between">
                <div>
                  <span
                    ><img
                      class="w-12 ml-3 rounded-full"
                      src="${c}"
                      alt="user photo"
                  /></span>
                  <p> ${d}</p>
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
                  <span class="text-2xl"> ${e}M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </div>
</div>


  `;
  div.appendChild(div1);
  // alert(hi);
}

function post(data) {
  let div = document.getElementById("here");

  //console.log(data);
  div.innerHTML = "";
  let count = 0;
  for (const dd of data) {
    //
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
                class=" inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-modal-toggle="popup-modal"
                onclick="dNews('${dd.thumbnail_url}','${dd.title}','${dd.author.img}','${dd.author.name}','${dd.total_view}')"
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
    count++;
    div.appendChild(div1);
  }

  let query = document.getElementById("count");
  let category = document.getElementById(data[0].category_id).innerText;
  //alert(category);

  query.innerHTML = `
  <h4 id="count" class="text-center text-gray-50 ssm:text-2xl sm:text-xl">
          ${count} items founds in ${category}
        </h4>
  `;
}

function loader(data) {
  //alert(data);
  let div = document.getElementById("here");
  let div1 = document.createElement("div1");
  div.innerHTML = "";
  div1.classList.add("loader");
  //setTimeout(post(data), 50000);
  div.appendChild(div1);
  setTimeout(function () {
    post(data);
  }, 1500);
}

function showNews(id) {
  //alert(id);
  let text1 = "https://openapi.programming-hero.com/api/news/category/";
  //console.log(text1.data.category_id);
  let result = text1.concat("", id);
  //alert(result);
  try {
    fetch(result)
      .then((res) => res.json())
      .then((data) => loader(data.data));
  } catch (error) {
    alert("Error fetching DAta");
  }
}
//console.log(data.data[0].title)
