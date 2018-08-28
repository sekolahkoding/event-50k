// counter.js library dipakai untuk counter member dan jumlah subscribers sosial media
var options = {
  useEasing: true, 
  useGrouping: true, 
  separator: ',',
};

// membuat objek animasi
var numAnim = new CountUp("counter", 0, 50000, 0, 2.5, options);
// animasi langsung di eksekusi ketika selesai di load
$(document).ready(function() {
    numAnim.start();
});


// animasi dilakukan nanti, ketika icon social media ada di viewport
var numAnim2 = new CountUp("Twitter-counter", 0, 1700, 0, 4.5, options);
var numAnim3 = new CountUp("Facebook-counter", 0, 19000, 0, 4.5, options);
var numAnim4 = new CountUp("Youtube-counter", 0, 23000, 0, 4.5, options);
var numAnim5 = new CountUp("Instagram-counter", 0, 1400, 0, 4.5, options);

function isElementInViewport (el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

$('#fullpage').fullpage({
    onLeave: function(index, nextIndex, direction){
        var leavingSection = $(this);

        // ketika memasuki section social media animasi start
        if(index == 3 && direction =='down'){
            numAnim2.start();
            numAnim3.start();
            numAnim4.start();
            numAnim5.start();
        }
    }
});