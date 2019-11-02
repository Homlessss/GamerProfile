const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&q='
const YOUTUBE_VIDEO_URL = 'https://www.youtube.com/watch?v=';
const keyword = 'Hightlight lol'  

$(document).ready(function(){
  // $('.hight-light').click(function(e) {
  //   e.preventDefault();
    $('.main-body').html("");
    $('.main-body').append(`
      <div class='loading-indicator'>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      </div>
    `);
      $.ajax({
        type: 'GET',
        url: `${YOUTUBE_API_URL}${keyword}`,
        success: function(data) {
          console.log(data);
          $('.main-body').html("");
          if (data && data.items && data.items.length) {
            data.items.forEach((item) => {
              const appendedElement = `
                <div class="col-12 video-container">
                  <div class="row">
                    <div class="embed-responsive embed-responsive-16by9 col-6 col-md-6">
                      <iframe src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="col-6 col-md-12">
                        <h2 class="video-title">${item.snippet && item.snippet.title}</h2>
                      <p class="video-description">${item.snippet && item.snippet.description}</p>
                    </div>
                  <div>
                </div>
              `
              $('.main-body').append(appendedElement);
            })
          }
        },
        error: function(err) {
          console.log(err);
        }
      })
  // })
})