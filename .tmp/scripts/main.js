'use strict';(function () {
    var baseURL = "http://148.75.251.185:8888";
    var contentWrapper = document.querySelector('.content');
    var myModal = document.querySelector('.modal');

    if (document.readyState != "loading") {
        app();
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            app();
        }, false);
    }

    //display the students' profile thumbnail
    function getStudentThumb() {
        $.ajax({
            method: "GET",
            url: baseURL + '/students' }).
        done(function (response) {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
                for (var _iterator = response[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var student = _step.value;
                    $.ajax({
                        method: 'GET',
                        url: baseURL + '/students/' + student.id }).
                    done(function (res) {
                        // console.log(res.profilepicture);
                        var thumbTemp = document.createElement('div');
                        thumbTemp.classList.add('person');
                        thumbTemp.innerHTML = '\n                    <img class = "thumb" src="' +
                        baseURL + res.profile_picture + '" data-id="' + res.id + '">\n                    ';

                        contentWrapper.appendChild(thumbTemp);
                    });
                }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
        });
    }

    // handle click event, give full profile of the student
    function getProfile(student) {
        contentWrapper.addEventListener('click', function (evnt) {
            if (evnt.target.classList.contains('thumb')) {
                $.ajax({
                    method: "GET",
                    url: baseURL + '/students/' + evnt.target.dataset.id }).
                done(function (res) {
                    var profileTemp = document.createElement('div');
                    profileTemp.classList.add('profile');
                    profileTemp.innerHTML = '\n                    <div class = "closeIcon">X</div>\n                    <div class="pic">\n                    <img src="' +


                    baseURL + res.profile_picture + '">\n                    </div>\n                    <div class="name">\n                    <h3>' +


                    res.first_name + ' ' + res.last_name + '</h3>\n                    </div>\n                    <div class="email">\n                    <p>' +


                    res.email + '</p>\n                    </div>\n                    <div class="description">\n                    <p>' +


                    res.excerpt + '</p>\n                    </div>\n                    ';


                    myModal.appendChild(profileTemp);
                    myModal.style.display = "block";
                    closeModal(profileTemp);
                });
            }
        });
    }

    function closeModal(tab) {
        myModal.onclick = function (evnt) {
            console.log(event.target);
            if (evnt.target === this || evnt.target.classList.contains('closeIcon')) {
                if (myModal.style.display === "block") {
                    myModal.style.display = "none";
                    myModal.removeChild(tab);
                    // myModal.sibilingNo
                }
            }
        };
    }

    function app() {
        getStudentThumb();
        // let modal = new SimpleModal('mymodal');
        getProfile();
    }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYmFzZVVSTCIsImNvbnRlbnRXcmFwcGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibXlNb2RhbCIsInJlYWR5U3RhdGUiLCJhcHAiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0U3R1ZGVudFRodW1iIiwiJCIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJkb25lIiwicmVzcG9uc2UiLCJzdHVkZW50IiwiaWQiLCJyZXMiLCJ0aHVtYlRlbXAiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwicHJvZmlsZV9waWN0dXJlIiwiYXBwZW5kQ2hpbGQiLCJnZXRQcm9maWxlIiwiZXZudCIsInRhcmdldCIsImNvbnRhaW5zIiwiZGF0YXNldCIsInByb2ZpbGVUZW1wIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwiZXhjZXJwdCIsInN0eWxlIiwiZGlzcGxheSIsImNsb3NlTW9kYWwiLCJ0YWIiLCJvbmNsaWNrIiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiJhQUFBLENBQUMsWUFBWTtBQUNULFFBQUlBLFVBQVUsNEJBQWQ7QUFDQSxRQUFJQyxpQkFBaUJDLFNBQVNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBckI7QUFDQSxRQUFJQyxVQUFVRixTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7O0FBRUEsUUFBSUQsU0FBU0csVUFBVCxJQUF1QixTQUEzQixFQUFzQztBQUNsQ0M7QUFDSCxLQUZELE1BRU87QUFDSEosaUJBQVNLLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RERDtBQUNILFNBRkQsRUFFRyxLQUZIO0FBR0g7O0FBRUQ7QUFDQSxhQUFTRSxlQUFULEdBQTBCO0FBQ3RCQyxVQUFFQyxJQUFGLENBQU87QUFDSEMsb0JBQVEsS0FETDtBQUVIQyxpQkFBUVosT0FBUixjQUZHLEVBQVA7QUFHR2EsWUFISCxDQUdRLFVBQVVDLFFBQVYsRUFBb0I7QUFDeEIscUNBQW9CQSxRQUFwQiw4SEFBOEIsS0FBckJDLE9BQXFCO0FBQzFCTixzQkFBRUMsSUFBRixDQUFPO0FBQ0hDLGdDQUFRLEtBREw7QUFFSEMsNkJBQVFaLE9BQVIsa0JBQTRCZSxRQUFRQyxFQUZqQyxFQUFQO0FBR0dILHdCQUhILENBR1EsVUFBU0ksR0FBVCxFQUFhO0FBQ2pCO0FBQ0EsNEJBQUlDLFlBQVloQixTQUFTaUIsYUFBVCxDQUF1QixLQUF2QixDQUFoQjtBQUNBRCxrQ0FBVUUsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsUUFBeEI7QUFDQUgsa0NBQVVJLFNBQVY7QUFDNEJ0QiwrQkFENUIsR0FDc0NpQixJQUFJTSxlQUQxQyxtQkFDdUVOLElBQUlELEVBRDNFOztBQUdBZix1Q0FBZXVCLFdBQWYsQ0FBMkJOLFNBQTNCO0FBQ0gscUJBWEQ7QUFZSCxpQkFkdUI7QUFlM0IsU0FsQkQ7QUFtQkg7O0FBRUQ7QUFDQSxhQUFTTyxVQUFULENBQW9CVixPQUFwQixFQUE2QjtBQUN6QmQsdUJBQWVNLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFVBQVVtQixJQUFWLEVBQWdCO0FBQ3JELGdCQUFHQSxLQUFLQyxNQUFMLENBQVlQLFNBQVosQ0FBc0JRLFFBQXRCLENBQStCLE9BQS9CLENBQUgsRUFBMkM7QUFDdkNuQixrQkFBRUMsSUFBRixDQUFPO0FBQ0hDLDRCQUFPLEtBREo7QUFFSEMseUJBQVFaLE9BQVIsa0JBQTRCMEIsS0FBS0MsTUFBTCxDQUFZRSxPQUFaLENBQW9CYixFQUY3QyxFQUFQO0FBR0dILG9CQUhILENBR1EsVUFBU0ksR0FBVCxFQUFhO0FBQ2pCLHdCQUFJYSxjQUFjNUIsU0FBU2lCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQVcsZ0NBQVlWLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLFNBQTFCO0FBQ0FTLGdDQUFZUixTQUFaOzs7QUFHWXRCLDJCQUhaLEdBR3NCaUIsSUFBSU0sZUFIMUI7OztBQU1NTix3QkFBSWMsVUFOVixTQU13QmQsSUFBSWUsU0FONUI7OztBQVNLZix3QkFBSWdCLEtBVFQ7OztBQVlLaEIsd0JBQUlpQixPQVpUOzs7QUFlQTlCLDRCQUFRb0IsV0FBUixDQUFvQk0sV0FBcEI7QUFDQTFCLDRCQUFRK0IsS0FBUixDQUFjQyxPQUFkLEdBQXdCLE9BQXhCO0FBQ0FDLCtCQUFXUCxXQUFYO0FBQ0gsaUJBeEJEO0FBeUJIO0FBQ0osU0E1QkQ7QUE2Qkg7O0FBRUQsYUFBU08sVUFBVCxDQUFvQkMsR0FBcEIsRUFBd0I7QUFDcEJsQyxnQkFBUW1DLE9BQVIsR0FBa0IsVUFBU2IsSUFBVCxFQUFlO0FBQzdCYyxvQkFBUUMsR0FBUixDQUFZQyxNQUFNZixNQUFsQjtBQUNBLGdCQUFJRCxLQUFLQyxNQUFMLEtBQWdCLElBQWhCLElBQXdCRCxLQUFLQyxNQUFMLENBQVlQLFNBQVosQ0FBc0JRLFFBQXRCLENBQStCLFdBQS9CLENBQTVCLEVBQXdFO0FBQ3BFLG9CQUFJeEIsUUFBUStCLEtBQVIsQ0FBY0MsT0FBZCxLQUEwQixPQUE5QixFQUF1QztBQUNuQ2hDLDRCQUFRK0IsS0FBUixDQUFjQyxPQUFkLEdBQXdCLE1BQXhCO0FBQ0FoQyw0QkFBUXVDLFdBQVIsQ0FBb0JMLEdBQXBCO0FBQ0E7QUFDSDtBQUNKO0FBQ0osU0FURDtBQVVIOztBQUVELGFBQVNoQyxHQUFULEdBQWU7QUFDWEU7QUFDQTtBQUNBaUI7QUFDSDtBQUNKLENBdkZEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGxldCBiYXNlVVJMID0gXCJodHRwOi8vMTQ4Ljc1LjI1MS4xODU6ODg4OFwiO1xuICAgIGxldCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgbGV0IG15TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9IFwibG9hZGluZ1wiKSB7XG4gICAgICAgIGFwcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhcHAoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8vZGlzcGxheSB0aGUgc3R1ZGVudHMnIHByb2ZpbGUgdGh1bWJuYWlsXG4gICAgZnVuY3Rpb24gZ2V0U3R1ZGVudFRodW1iKCl7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICB1cmw6IGAke2Jhc2VVUkx9L3N0dWRlbnRzYFxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgc3R1ZGVudCBvZiByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIHVybDogYCR7YmFzZVVSTH0vc3R1ZGVudHMvJHtzdHVkZW50LmlkfWBcbiAgICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5wcm9maWxlcGljdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0aHVtYlRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJUZW1wLmNsYXNzTGlzdC5hZGQoJ3BlcnNvbicpO1xuICAgICAgICAgICAgICAgICAgICB0aHVtYlRlbXAuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzID0gXCJ0aHVtYlwiIHNyYz1cIiR7YmFzZVVSTH0ke3Jlcy5wcm9maWxlX3BpY3R1cmV9XCIgZGF0YS1pZD1cIiR7cmVzLmlkfVwiPlxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0aHVtYlRlbXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgY2xpY2sgZXZlbnQsIGdpdmUgZnVsbCBwcm9maWxlIG9mIHRoZSBzdHVkZW50XG4gICAgZnVuY3Rpb24gZ2V0UHJvZmlsZShzdHVkZW50KSB7XG4gICAgICAgIGNvbnRlbnRXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2bnQpIHtcbiAgICAgICAgICAgIGlmKGV2bnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGh1bWInKSl7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOlwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogYCR7YmFzZVVSTH0vc3R1ZGVudHMvJHtldm50LnRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9maWxlVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9maWxlVGVtcC5jbGFzc0xpc3QuYWRkKCdwcm9maWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVUZW1wLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY2xvc2VJY29uXCI+WDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGljXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtiYXNlVVJMfSR7cmVzLnByb2ZpbGVfcGljdHVyZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz4ke3Jlcy5maXJzdF9uYW1lfSAke3Jlcy5sYXN0X25hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD4ke3Jlcy5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+JHtyZXMuZXhjZXJwdH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICBteU1vZGFsLmFwcGVuZENoaWxkKHByb2ZpbGVUZW1wKTtcbiAgICAgICAgICAgICAgICAgICAgbXlNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKHByb2ZpbGVUZW1wKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCh0YWIpe1xuICAgICAgICBteU1vZGFsLm9uY2xpY2sgPSBmdW5jdGlvbihldm50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgaWYoIGV2bnQudGFyZ2V0ID09PSB0aGlzIHx8IGV2bnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2VJY29uJykpe1xuICAgICAgICAgICAgICAgIGlmIChteU1vZGFsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICAgICAgICAgICAgICBteU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgbXlNb2RhbC5yZW1vdmVDaGlsZCh0YWIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBteU1vZGFsLnNpYmlsaW5nTm9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHAoKSB7XG4gICAgICAgIGdldFN0dWRlbnRUaHVtYigpO1xuICAgICAgICAvLyBsZXQgbW9kYWwgPSBuZXcgU2ltcGxlTW9kYWwoJ215bW9kYWwnKTtcbiAgICAgICAgZ2V0UHJvZmlsZSgpO1xuICAgIH1cbn0pKCk7XG5cbiJdfQ==
