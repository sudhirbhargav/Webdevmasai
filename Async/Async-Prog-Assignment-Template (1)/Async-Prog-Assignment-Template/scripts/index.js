let poster=[{url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/687/1280687-h-0b90e870875c"},
{url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1517/1161517-h-c376fd164ba2"},
{url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9947/1279947-h-d5d3ff34dad1"}]

let movies=[{url:"https://i.ytimg.com/vi/qJaVj7bCB8Y/maxresdefault.jpg",
name:"MAGNIFICENT FIVE",
release:"1958",
imdb:8.0,},
{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXdYABxiSgb3GkpPAYs-BEs6Sb_lIVZ3XPg&usqp=CAU",
name:"Shershaah",
release:"2021",
imdb:7.9},
{
url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aHZN4cT8T50jluq7pN-Mw1wazQfGUR4wOQ&usqp=CAU",
name:"Border",
release:"2022",
imdb:7.8,},
{url:"https://m.media-amazon.com/images/M/MV5BN2M4NDM2NDItMzgzNy00OWRiLThhNjEtZDA2OWMyNTcwYzRjXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg",
name:"Gangubai Kathiawadi",
release:"2022",
imdb:7.9,},
{url:"https://i.ytimg.com/vi/XFKz1DACGdE/maxresdefault.jpg",
name:"Antim",
release:"2021",
imdb:8.2,},
{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3HRXtNVbSts4aXM9jTR-v1Rs-_VYiSsi1Q&usqp=CAU",
name:"Sooryayanshi",
release:"2021",
imdb:9.2,},
{url:"https://images.firstpost.com/wp-content/uploads/2019/12/KGF-2-759-min.jpg",
name:"KGF 2",
release:"2022",
imdb:9.7,},
{url:"https://m.media-amazon.com/images/M/MV5BZjI0YmMzNDctZGFkZi00NmIyLTk5NWEtMTU1MGRmMDQwNWU2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
name:"The Kashmir Files",
release:"2022",
imdb:8.8,},
{url:"https://i.ytimg.com/vi/P2KRKxAb2ek/maxresdefault.jpg",
name:"Turning Rebhool bhulaiyaa 2",
release:"2022",
imdb:7.9,},
]

// console.log(movies)
localStorage.setItem("movies",JSON.stringify(movies))

let slideshow_img = document.getElementById("slideshow_img")

let i = 0
let x = setInterval(() => {
    if(i==poster.length){
        i = 0
    }
    slideshow_img.src = poster[i].url
    i++ 
}, 2000);

function sortfung(){

    let sort_select  = document.getElementById("sort_select").value
    console.log(sort_select)

    if(sort_select=="highfirst"){
        hightolow()
    }
    else{
        lowtohigh()
    }
}

function sortreleacefung(){
    let sort_select = document.getElementById("sortreleace_select").value
    if(sort_select=="highfirst"){
        highfirst()
    }
    else{
        lowfirst()
    }

}
function highfirst(){
    movies.sort((a,b)=>{
        if(a.release < b.release) return 1;
        if(a.release > b.release) return -1;
        return 0;
    })
    document.getElementById("movies").innerHTML=""
    displaydata()
}
function lowfirst(){
    movies.sort((a,b)=>{
        if(a.release > b.release) return 1;
        if(a.release < b.release) return -1;
        return 0;
    })
    document.getElementById("movies").innerHTML=""
    displaydata()
}

function hightolow(){
    movies.sort((a,b)=>{
        if(a.imdb < b.imdb) return 1;
        if(a.imdb > b.imdb) return -1;
        return 0;
    })
    document.getElementById("movies").innerHTML=""
      displaydata()

}
function lowtohigh(){

    movies.sort((a,b)=>{
        if(a.imdb > b.imdb) return 1;
        if(a.imdb < b.imdb) return -1;
        return 0;
    })
    document.getElementById("movies").innerHTML=""
      displaydata()

}

function displaydata (){
    movies.map((ele)=>{
        let div=document.createElement("div")
        let poster=document.createElement("img")
        let p1=document.createElement("h2")
        let p2=document.createElement("p")
        let p3=document.createElement("p")

        poster.src = ele.url
        p1.innerText =`Movie: ${ele.name}`
        p2.innerText = `Release: ${ele.release}`
        p3.innerText = `IMBD rating: ${ele.imdb}`
        console.log(ele)
        div.append(poster,p1,p2,p3)
        document.querySelector("#movies").append(div)
    })
}
displaydata()
