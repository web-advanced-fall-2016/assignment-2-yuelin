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
                    profileTemp.innerHTML = '\n                    <div class="pic">\n                    <img src="' +

                    baseURL + res.profile_picture + '">\n                    </div>\n                    <div class="name">\n                    <h3>' +


                    res.first_name + ' ' + res.last_name + '</h3>\n                    </div>\n                    <div class="description">\n                    <p>' +


                    res.excerpt + '</p>\n                    </div>\n                    ';


                    myModal.appendChild(profileTemp);
                    myModal.style.display = "block";
                    window.onclick = function (event) {
                        if (myModal.style.display === "block") {
                            myModal.style.display = "none";
                            myModal.removeChild(profileTemp);
                            // myModal.sibilingNo
                        }
                    };
                });
            }
        });
    }
    function app() {
        getStudentThumb();
        // let modal = new SimpleModal('mymodal');
        getProfile();
    }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYmFzZVVSTCIsImNvbnRlbnRXcmFwcGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibXlNb2RhbCIsInJlYWR5U3RhdGUiLCJhcHAiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0U3R1ZGVudFRodW1iIiwiJCIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJkb25lIiwicmVzcG9uc2UiLCJzdHVkZW50IiwiaWQiLCJyZXMiLCJ0aHVtYlRlbXAiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwicHJvZmlsZV9waWN0dXJlIiwiYXBwZW5kQ2hpbGQiLCJnZXRQcm9maWxlIiwiZXZudCIsInRhcmdldCIsImNvbnRhaW5zIiwiZGF0YXNldCIsInByb2ZpbGVUZW1wIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImV4Y2VycHQiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJvbmNsaWNrIiwiZXZlbnQiLCJyZW1vdmVDaGlsZCJdLCJtYXBwaW5ncyI6ImFBQUEsQ0FBQyxZQUFZO0FBQ1QsUUFBSUEsVUFBVSw0QkFBZDtBQUNBLFFBQUlDLGlCQUFpQkMsU0FBU0MsYUFBVCxDQUF1QixVQUF2QixDQUFyQjtBQUNBLFFBQUlDLFVBQVVGLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDs7QUFFQSxRQUFJRCxTQUFTRyxVQUFULElBQXVCLFNBQTNCLEVBQXNDO0FBQ2xDQztBQUNILEtBRkQsTUFFTztBQUNISixpQkFBU0ssZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDdEREO0FBQ0gsU0FGRCxFQUVHLEtBRkg7QUFHSDs7QUFFRDtBQUNBLGFBQVNFLGVBQVQsR0FBMEI7QUFDdEJDLFVBQUVDLElBQUYsQ0FBTztBQUNIQyxvQkFBUSxLQURMO0FBRUhDLGlCQUFRWixPQUFSLGNBRkcsRUFBUDtBQUdHYSxZQUhILENBR1EsVUFBVUMsUUFBVixFQUFvQjtBQUN4QixxQ0FBb0JBLFFBQXBCLDhIQUE4QixLQUFyQkMsT0FBcUI7QUFDMUJOLHNCQUFFQyxJQUFGLENBQU87QUFDSEMsZ0NBQVEsS0FETDtBQUVIQyw2QkFBUVosT0FBUixrQkFBNEJlLFFBQVFDLEVBRmpDLEVBQVA7QUFHR0gsd0JBSEgsQ0FHUSxVQUFTSSxHQUFULEVBQWE7QUFDakI7QUFDQSw0QkFBSUMsWUFBWWhCLFNBQVNpQixhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0FELGtDQUFVRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixRQUF4QjtBQUNBSCxrQ0FBVUksU0FBVjtBQUM0QnRCLCtCQUQ1QixHQUNzQ2lCLElBQUlNLGVBRDFDLG1CQUN1RU4sSUFBSUQsRUFEM0U7O0FBR0FmLHVDQUFldUIsV0FBZixDQUEyQk4sU0FBM0I7QUFDSCxxQkFYRDtBQVlILGlCQWR1QjtBQWUzQixTQWxCRDtBQW1CSDs7QUFFRDtBQUNBLGFBQVNPLFVBQVQsQ0FBb0JWLE9BQXBCLEVBQTZCO0FBQ3pCZCx1QkFBZU0sZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBVW1CLElBQVYsRUFBZ0I7QUFDckQsZ0JBQUdBLEtBQUtDLE1BQUwsQ0FBWVAsU0FBWixDQUFzQlEsUUFBdEIsQ0FBK0IsT0FBL0IsQ0FBSCxFQUEyQztBQUN2Q25CLGtCQUFFQyxJQUFGLENBQU87QUFDSEMsNEJBQU8sS0FESjtBQUVIQyx5QkFBUVosT0FBUixrQkFBNEIwQixLQUFLQyxNQUFMLENBQVlFLE9BQVosQ0FBb0JiLEVBRjdDLEVBQVA7QUFHR0gsb0JBSEgsQ0FHUSxVQUFTSSxHQUFULEVBQWE7QUFDakIsd0JBQUlhLGNBQWM1QixTQUFTaUIsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBVyxnQ0FBWVYsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsU0FBMUI7QUFDQVMsZ0NBQVlSLFNBQVo7O0FBRVl0QiwyQkFGWixHQUVzQmlCLElBQUlNLGVBRjFCOzs7QUFLTU4sd0JBQUljLFVBTFYsU0FLd0JkLElBQUllLFNBTDVCOzs7QUFRS2Ysd0JBQUlnQixPQVJUOzs7QUFXQTdCLDRCQUFRb0IsV0FBUixDQUFvQk0sV0FBcEI7QUFDQTFCLDRCQUFROEIsS0FBUixDQUFjQyxPQUFkLEdBQXdCLE9BQXhCO0FBQ0FDLDJCQUFPQyxPQUFQLEdBQWlCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDN0IsNEJBQUlsQyxRQUFROEIsS0FBUixDQUFjQyxPQUFkLEtBQTBCLE9BQTlCLEVBQXVDO0FBQ25DL0Isb0NBQVE4QixLQUFSLENBQWNDLE9BQWQsR0FBd0IsTUFBeEI7QUFDQS9CLG9DQUFRbUMsV0FBUixDQUFvQlQsV0FBcEI7QUFDQTtBQUNIO0FBQ0oscUJBTkQ7QUFPSCxpQkExQkQ7QUEyQkg7QUFDSixTQTlCRDtBQStCSDtBQUNELGFBQVN4QixHQUFULEdBQWU7QUFDWEU7QUFDQTtBQUNBaUI7QUFDSDtBQUNKLENBM0VEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGxldCBiYXNlVVJMID0gXCJodHRwOi8vMTQ4Ljc1LjI1MS4xODU6ODg4OFwiO1xuICAgIGxldCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgbGV0IG15TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9IFwibG9hZGluZ1wiKSB7XG4gICAgICAgIGFwcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhcHAoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8vZGlzcGxheSB0aGUgc3R1ZGVudHMnIHByb2ZpbGUgdGh1bWJuYWlsXG4gICAgZnVuY3Rpb24gZ2V0U3R1ZGVudFRodW1iKCl7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICB1cmw6IGAke2Jhc2VVUkx9L3N0dWRlbnRzYFxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgc3R1ZGVudCBvZiByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIHVybDogYCR7YmFzZVVSTH0vc3R1ZGVudHMvJHtzdHVkZW50LmlkfWBcbiAgICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5wcm9maWxlcGljdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0aHVtYlRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJUZW1wLmNsYXNzTGlzdC5hZGQoJ3BlcnNvbicpO1xuICAgICAgICAgICAgICAgICAgICB0aHVtYlRlbXAuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzID0gXCJ0aHVtYlwiIHNyYz1cIiR7YmFzZVVSTH0ke3Jlcy5wcm9maWxlX3BpY3R1cmV9XCIgZGF0YS1pZD1cIiR7cmVzLmlkfVwiPlxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0aHVtYlRlbXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgY2xpY2sgZXZlbnQsIGdpdmUgZnVsbCBwcm9maWxlIG9mIHRoZSBzdHVkZW50XG4gICAgZnVuY3Rpb24gZ2V0UHJvZmlsZShzdHVkZW50KSB7XG4gICAgICAgIGNvbnRlbnRXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2bnQpIHtcbiAgICAgICAgICAgIGlmKGV2bnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGh1bWInKSl7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOlwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogYCR7YmFzZVVSTH0vc3R1ZGVudHMvJHtldm50LnRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9maWxlVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9maWxlVGVtcC5jbGFzc0xpc3QuYWRkKCdwcm9maWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVUZW1wLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpY1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7YmFzZVVSTH0ke3Jlcy5wcm9maWxlX3BpY3R1cmV9XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+JHtyZXMuZmlyc3RfbmFtZX0gJHtyZXMubGFzdF9uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+JHtyZXMuZXhjZXJwdH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICBteU1vZGFsLmFwcGVuZENoaWxkKHByb2ZpbGVUZW1wKTtcbiAgICAgICAgICAgICAgICAgICAgbXlNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXlNb2RhbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteU1vZGFsLnJlbW92ZUNoaWxkKHByb2ZpbGVUZW1wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBteU1vZGFsLnNpYmlsaW5nTm9cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwKCkge1xuICAgICAgICBnZXRTdHVkZW50VGh1bWIoKTtcbiAgICAgICAgLy8gbGV0IG1vZGFsID0gbmV3IFNpbXBsZU1vZGFsKCdteW1vZGFsJyk7XG4gICAgICAgIGdldFByb2ZpbGUoKTtcbiAgICB9XG59KSgpO1xuXG4iXX0=
