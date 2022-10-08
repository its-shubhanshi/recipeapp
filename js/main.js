
          "use strict";
          var form = document.querySelector("#myform");
          form.addEventListener("submit", function (e) {
               e.preventDefault();
               var search = document.querySelector("#search").value;
               var originalName = search.split(' ').join('');
               fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + originalName).then(res => res.json()).then(json => {
                    let html="";
                    if(json.meals){
                    console.log(json);
                    json.meals.forEach(meal => {
                         document.querySelector("#result").innerHTML += `
               <div class="col4 col-t-4 col-m-6 col-p-12 meal">
               <img src="${meal.strMealThumb}">
               <h2>${meal.strMeal}</h2>
               <button class="btn get">Get Recipe</button>
               </div>       
               `
                    })
               }
               else{
                    html="sorry";
                    document.querySelector(".error").innerHTML="<h2>Sorry, We didn't find any meal !</h2>"
                    
               }

               })
          })
