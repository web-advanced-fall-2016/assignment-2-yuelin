(function () {
    let baseURL = "http://148.75.251.185:8888";
    let contentWrapper = document.querySelector('.content');
    let myModal = document.querySelector('.modal');

    if (document.readyState != "loading") {
        app();
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            app();
        }, false);
    }

    //display the students' profile thumbnail
    function getStudentThumb(){
        $.ajax({
            method: "GET",
            url: `${baseURL}/students`
        }).done(function (response) {
            for (let student of response) {
                $.ajax({
                    method: 'GET',
                    url: `${baseURL}/students/${student.id}`
                }).done(function(res){
                    // console.log(res.profilepicture);
                    let thumbTemp = document.createElement('div');
                    thumbTemp.classList.add('person');
                    thumbTemp.innerHTML = `
                    <img class = "thumb" src="${baseURL}${res.profile_picture}" data-id="${res.id}">
                    `;
                    contentWrapper.appendChild(thumbTemp);
                });
            }
        });
    }

    // handle click event, give full profile of the student
    function getProfile(student) {
        contentWrapper.addEventListener('click', function (evnt) {
            if(evnt.target.classList.contains('thumb')){
                $.ajax({
                    method:"GET",
                    url: `${baseURL}/students/${evnt.target.dataset.id}`
                }).done(function(res){
                    let profileTemp = document.createElement('div');
                    profileTemp.classList.add('profile');
                    profileTemp.innerHTML = `
                    <div class = "closeIcon">X</div>
                    <div class="pic">
                    <img src="${baseURL}${res.profile_picture}">
                    </div>
                    <div class="name">
                    <h3>${res.first_name} ${res.last_name}</h3>
                    </div>
                    <div class="email">
                    <p>${res.email}</p>
                    </div>
                    <div class="description">
                    <p>${res.excerpt}</p>
                    </div>
                    `;
                    myModal.appendChild(profileTemp);
                    myModal.style.display = "block";
                    closeModal(profileTemp);
                });
            }
        });
    }

    function closeModal(tab){
        myModal.onclick = function(evnt) {
            console.log(event.target);
            if( evnt.target === this || evnt.target.classList.contains('closeIcon')){
                if (myModal.style.display === "block") {
                    myModal.style.display = "none";
                    myModal.removeChild(tab);
                    // myModal.sibilingNo
                }
            }
        }
    }

    function app() {
        getStudentThumb();
        // let modal = new SimpleModal('mymodal');
        getProfile();
    }
})();

