// background video playing and pausing

const back = document.querySelector('.back');
const logo = document.querySelector('#logo');
const navbar = document.querySelector('nav');

back.style.visibility = "hidden";
logo.onmouseover = function () {
    back.play();
    back.style.visibility = "visible";
    navbar.style.backgroundColor = "transparent";
};
logo.onmouseout = function () {
    back.pause()
    back.style.visibility = "hidden";
    navbar.style.backgroundColor = "black";
};

//for active class in navbar
const sections = document.querySelectorAll('section');
const navlist = document.querySelectorAll('.navbar-heading a');
window.addEventListener('scroll', () => {
    let currentSection = ""
    sections.forEach(section => {
        var sectionTop = section.offsetTop;
        var sectionHight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 150)) {
            currentSection = section.getAttribute('id')
        }
        
    });
    navlist.forEach(li => {
        li.classList.remove('active')
        if(li.classList.contains(currentSection)){
            li.classList.add('active')
        }
    })  
    
});

//slide show
bbfImages = [
    "/static/img/bbf/bbf1.jpg",
    "/static/img/bbf/bbf2.jpg",
    "/static/img/bbf/bbf3.jpg",
    "/static/img/bbf/bbf-b (1).jpg",
    "/static/img/bbf/bbf-b (2).jpg",
    "/static/img/bbf/bbf-b (3).jpg"

]
familyImages = [
    "/static/img/family/bbf fam (1).jpg",
    "/static/img/family/bbf fam (2).jpg",
    "/static/img/family/bbf fam (3).jpg",
    "/static/img/family/bbf-fam.jpg",
    "/static/img/family/bbf-fam1.jpg",
    "/static/img/family/bbf-fam2.jpg",
    "/static/img/family/bbf fam (3).jpg",
    "/static/img/family/bbf fam (1).jpg"

]
var i = 0;
function changeBBF() {
    if (i < (bbfImages.length -1 )) {
        i++;
    }
    else {
        i = 0;
    }
    document.querySelector("#personal-images").src = bbfImages[i]
    document.querySelector("#family-images").src = familyImages[i]
}
setInterval(changeBBF, 5000);

//yoututube data  

//channel ids
const feelingzz_id = "UC_3Ln19Q8SG9oEJs_DfON0Q"
const bbf_id = "UC584DzeQj96Th92eQT3ovug"
const noobGamerBBF_id = "UCcTe0EPM_Qiz51Jg7lGCG_g"
const bbflive_id = "UCADEoefqbQNqCoQ7hXN7zvw"
const sissoTube_id ="UCMuqLckRfhhNNMkeU8SLY5Q"

function youtube_channel_data(id) {
    const key = 'PASTE-YOUR-KKEY-HERE'; //youtube data v3 api key for you tube datareeze 
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=${key}`)
        .then(Response => {
            return Response.json()
        })
        .then(data => {
            var subs = data["items"][0].statistics.subscriberCount
            var videos = data["items"][0].statistics.videoCount
            var views = data["items"][0].statistics.viewCount
            if (id == feelingzz_id) {
                document.querySelector('#live-subscribers-feeling').innerHTML = subs;
                document.querySelector('#live-videos-feeling').innerHTML = videos;
                document.querySelector('#live-views-feeling').innerHTML = views;

            } else if (id == bbf_id) {
                document.querySelector('#live-subscribers-bbf').innerHTML = subs;
                document.querySelector('#live-videos-bbf').innerHTML = videos;
                document.querySelector('#live-views-bbf').innerHTML = views;
            } else if (id == noobGamerBBF_id) {
                document.querySelector('#live-subscribers-noobbbf').innerHTML = subs;
                document.querySelector('#live-videos-noobbbf').innerHTML = videos;
                document.querySelector('#live-views-noobbbf').innerHTML = views;
            } else if (id == bbflive_id) {
                document.querySelector('#live-subscribers-bbflive').innerHTML = subs;
                document.querySelector('#live-videos-bbflive').innerHTML = videos;
                document.querySelector('#live-views-bbflive').innerHTML = views;
            } else if (id == sissoTube_id) {
                document.querySelector('#live-subscribers-sisso').innerHTML = subs;
                document.querySelector('#live-videos-sisso').innerHTML = videos;
                document.querySelector('#live-views-sisso').innerHTML = views;
            }
        })
};
setInterval(youtube_channel_data(feelingzz_id), 10000);
setInterval(youtube_channel_data(bbf_id), 10000);
setInterval(youtube_channel_data(noobGamerBBF_id), 10000);
setInterval(youtube_channel_data(bbflive_id), 10000);
setInterval(youtube_channel_data(sissoTube_id), 10000);

// achivement picture

achive = [
    "/static/img/achivement/bbf-achi2.jpg",
    "/static/img/achivement/bbf-achi1.jpg",
    "/static/img/achivement/bbf-achi3.jpg"
]

var il = 0;
function changeACHI() {

    if (il < (achive.length-1)) {
        il++;
    }
    else {
        il = 0;
    }
    document.querySelector(".achivements").style.backgroundImage = `url("${achive[il]}")`;
};
setInterval(changeACHI, 5000)
document.querySelector(".btn").onclick = function(){changeACHI(il++)};

