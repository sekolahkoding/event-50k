    var model = {
        socialMedia: [
            {
                name : "Youtube",
                color :"#dc472e",
                subscribers : 23000,
                link : "https://www.youtube.com/sekolahkoding"
            },
            {
                name : "Facebook",
                color : "#3a549f",
                subscribers : 19000,
                link : "https://facebook.com/sekolahkoding" 
            },
            {
                name : "Twitter",
                color : "#50abf1",
                subscribers : 1700,
                link : "https://twitter.com/sekolahkoding"

            },
            {
                name : "Instagram",
                imgSrc : "#c536a4",
                subscribers : 1300,
                link : "https://www.instagram.com/sekolahkoding/"
            }
        ],
        attribution : '<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>'

    };

    var controller = {

    init: function() {
        // tell our views to initialize
        socialMediaView.init();
    },

    getSocialMedia: function() {
        return model.socialMedia;
    },

    getAttribution: function() {
        return model.attribution;
    },
};

    var socialMediaView = {

        init: function(){
            this.socialMediaElem = $(".social-media");

            this.render();
        },

        render: function() {
            var socialMedia, i;
            //get the social medias from the controller
            var allSocialMedia = controller.getSocialMedia();
            //empty the social media div
            $(".social-media ul").html("");
            var options = {
                  useEasing: true, 
                  useGrouping: true, 
                  separator: ',',
            };
            var nA1, nA2, nA3, nA4; // var holder for countup object
            var numAnim = [nA1, nA2, nA3, nA4]; // put the holder inside an array, that will be looped over
            //loop over the socmed
            for (i = 0; i < allSocialMedia.length; i++) {
                // this is the socmed we are currently looping over
                    // counter 50k
                socialMedia = allSocialMedia[i];
                numAnim[i] = new CountUp(socialMedia.name+i, 0, socialMedia.subscribers, 0, 5, options);
                numAnim[i].start();
                this.socialMediaElem.append(`
                        <a href="${socialMedia.link}" class="icons" id="${socialMedia.name}" target="_blank">
                            <div class="sosmed-text">
                                <div class="name" id="${socialMedia.name}">${socialMedia.name}</div>
                                <div id="${socialMedia.name}-counter" class="subscribers"></div>
                            </div>
                            
                        </a>`)
            }
        }
    }

    controller.init();