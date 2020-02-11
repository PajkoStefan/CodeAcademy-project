function PresentationLayer() {
    this.resolvedAlbumData = JSON.parse(localStorage.getItem("DeezerApiData"));
    this.business = new BusinessLayer();

    let body = $('body');
    let i;

    let checkEnterFromRateInput = (rate, selRate) => {
        if (!(rate.length === 1)) {
            selRate.val("");
        }
        else {
            if (!(parseInt(rate) >= 1 && parseInt(rate) <= 5 )) {
                selRate.val("");
            }
        }
    };
    let setEventOnRate = (setElement, classname) => {
        for (i = 1; i <= setElement.length; i++) {
            var rate = $(".rate" + classname + i);
            var div1 = $('.div' + i);
            var divDiv1 = $('<div>');
            var mainBody = $('#main-body');
            rate.on('click', (event) => {
                rate.remove();
                divDiv1.append(div1.children());
                divDiv1.addClass("displayFlex rateLeft").css({
                    "justify-content": "center",
                    "align-items": "center",
                    "flex-direction": "column",
                    width: "50%"
                });

                div1.prepend(divDiv1);
                div1.css({
                    "flex-direction": "row"
                });

                div1.addClass("displayFlex");
                rate.css({
                    "font-size": "30px"
                });
                var divReview = $('<div>');
                console.log(divReview.remove());
                divReview.css({
                    width: "50%",
                    padding: "0 15px"
                });
                var p1 = $('<p>');
                p1.css({
                    "font-size": "left",
                    "padding-left": "30px",
                    "margin-bottom": "5px"

                }).text("Review: ");
                var textarea = $('<textarea>');
                textarea.css({
                    width: "100%",
                    "border-radius": "10px",
                    "padding": "10px 5px",
                    "font-size": "16px"
                }).attr({
                    rows: "5"
                });
                var inputRate = $('<input>');
                inputRate.css({
                    width: "50px",
                    "text-align": "center",
                    "margin-bottom": "10px"
                }).attr({
                    type: "text",
                    placeholder: "1-5",
                    class: "inputRate"
                });

                inputRate.on('keyup', (event) => {
                    var selRate = $('.inputRate');
                    checkEnterFromRateInput(selRate.val(), selRate);
                });
                var inputRateSubmit = $('<input>');

                inputRateSubmit.css({
                    "border-radius": "10px",
                    padding: "5px 10px",
                    "margin-top" : "10px",
                    "margin-left" : "10px",
                    border: "none",
                    "background-color": "#ff791a"
                }).attr({
                    type: "submit"
                });
                div1.append(inputRate);
                divReview.append(p1, textarea, inputRate, inputRateSubmit);
                div1.append(divReview);

            });
        }
    };

    let addAlbums = (setAlbumsDetails) => {
        for (i = 1; i <= setAlbumsDetails.length; i++) {
            var index = (i - 1);
            var div1 = $(".div" + i);
            div1.css({
                padding: "10px 10px 0 10px"
            });
            var p1 = $("<p>");
            var p2 = $("<p>");
            var p3 = $("<p>");
            var p4 = $("<p>");
            var span1 = $("<span>");
            var span2 = $("<span>");
            var span3 = $("<span>");
            var span4 = $("<span>");

            var div2 = $("<div>");
            div2.addClass("divImg");
            var img = $("<img>");
            img.attr({
                class: "img img" + i,
                src: setAlbumsDetails[index].album.albumCover
            });
            div2.append(img.css("cursor", "pointer"));
            div1.append(div2);
            span1.addClass("bold").text("Artist Name: ");
            span2.addClass("bold").text("Album Name: ");
            span4.addClass("bold blue rateAlbum" + i).text("*** Rate Album ***");
            span3.addClass("bold").text("Tracks#: ");
            p1.text(setAlbumsDetails[index].artist.artistName);
            p2.text(setAlbumsDetails[index].album.albumName);
            p3.text(setAlbumsDetails[index].tracks.tracks.length);
            p1.prepend(span1);
            p2.prepend(span2);
            p4.addClass("rate").append(span4.css("cursor", "pointer"));
            p3.prepend(span3);
            div2.before(p1, p2, p3);
            div2.after(p4);
            // console.log(setAlbumsDetails[index].tracks.tracks.length);
        }
        for (i = 1; i <= setAlbumsDetails.length; i++) {
            var selPic = $(".img" + i);
            var rateAlbum = $(".rateAlbum" + i);
            selPic.on('click', (event) => {
                console.log("img: " + event.target.className.split(" ")[1]);
            });
        }
        setEventOnRate(setAlbumsDetails, "Album");
    };

    let addArtists = (setArtistsDetails) => {
        for (i = 1; i <= setArtistsDetails.length; i++) {
            var index = (i - 1);
            var div1 = $(".div" + i);
            div1.css({
                padding: "10px 10px 0 10px"
            });
            var p1 = $("<p>"); //artist name
            var p2 = $("<p>"); // artists albums#
            var p3 = $("<p>"); // artists fans#
            var p4 = $("<p>"); // rate
            var span1 = $("<span>");
            var span2 = $("<span>");
            var span3 = $("<span>");
            var span4 = $("<span>");

            var div2 = $("<div>");
            div2.addClass("divImg");
            var img = $("<img>");
            img.attr({
                class: "img img" + i,
                src: setArtistsDetails[index].artist.artistPic
            });
            div2.append(img.css("cursor", "pointer"));
            div1.append(div2);
            span1.addClass("bold").text("Artist Name: ");
            span2.addClass("bold").text("Album#: ");
            span3.addClass("bold").text("Fans#: ");
            span4.addClass("bold blue rateArtist" + i).text("*** Rate Artist ***");
            p1.text(setArtistsDetails[index].artist.artistName);
            p2.text(setArtistsDetails[index].artist.artistAlbums);
            p3.text(setArtistsDetails[index].artist.artistFans);
            p1.prepend(span1);
            p2.prepend(span2);
            p4.addClass("rate").append(span4.css("cursor", "pointer"));
            p3.prepend(span3);
            div2.before(p1, p2, p3);
            div2.after(p4);
            // console.log(setAlbumsDetails[index].tracks.tracks.length);
        }
        for (i = 1; i <= setArtistsDetails.length; i++) {
            var selPic = $(".img" + i);
            var rateArtist = $(".rateArtist" + i);
            selPic.on('click', (event) => {
                console.log("img: " + event.target.className.split(" ")[1]);
            });
        }
        setEventOnRate(setArtistsDetails);
    };

    let addSongs = (setSongsDetails) => {
        for (var i = 1; i <= setSongsDetails.length; i++) {
            var index = (i - 1);
            var div1 = $(".div" + i);
            div1.css({
                justifyContent: "",
                padding: "10px 10px 0 10px"
            });
            var p1 = $("<p>"); // artist name
            var p2 = $("<p>"); // album name
            var p3 = $("<p>"); // track name
            var p4 = $("<p>"); // release date
            var p5 = $("<p>"); // duration
            var p6 = $("<p>"); // listen full track
            var p7 = $("<p>"); // is not available
            var p8 = $("<p>");
            var span1 = $("<span>");
            var span2 = $("<span>");
            var span3 = $("<span>");
            var span4 = $("<span>");
            var span5 = $("<span>");
            var span6 = $("<span>");
            var span8 = $("<span>");
            var aTag = $("<a>");

            var div2 = $("<div>");
            div2.addClass("divSong");
            div2.css({
                padding: "10px 0"
            });
            div1.append(div2);
            span1.addClass("bold").text("Artist Name: ");
            span2.addClass("bold").text("Album Name: ");
            span3.addClass("bold").text("Track Name: ");
            span4.addClass("bold").text("Release Date: ");
            span5.addClass("bold").text("Duration: ");
            aTag.attr({
                href: setSongsDetails[index].song.songLink,
                class: "bold blue"
            }).css({
                "text-decoration": "none",
                "font-size": "20px"
            }).text("Here!");
            span6.append(aTag);
            p1.text(setSongsDetails[index].song.artistName);
            p2.text(setSongsDetails[index].song.albumName);
            p3.text(setSongsDetails[index].song.songName);
            p4.text(setSongsDetails[index].song.songRelDate);
            p5.text(setSongsDetails[index].song.songDur + " seconds");
            p6.text("Listen to a Track, ").append(span6);

            p1.prepend(span1);
            p2.prepend(span2);
            p3.prepend(span3);
            p4.prepend(span4);
            p5.prepend(span5);
            div2.before(p1, p2, p3, p4, p5);
            if (setSongsDetails[index].song.songPreview !== "") {
                var audio = $('<audio />');
                audio.attr({
                    controls: "true",
                    class: "audioPreview"
                });
                var source = $('<source />');
                source.attr({
                    src: setSongsDetails[index].song.songPreview,
                    type: "audio/mpeg"
                });
                audio.append(source);
                div2.append(audio);
            } else {
                p7.addClass("bold red").css("fontSize", "20px").text("Preview for this track is not available!");
                div2.append(p7);
            }
            div1.append(p6);
            span8.addClass("bold blue rateSong" + i).text("*** Rate Song ***");
            p8.addClass("rate").append(span8.css("cursor", "pointer"));
            div1.append(p8.css("paddingTop", "10px"));
            // div2.after(p3);
        }
        setEventOnRate(setSongsDetails, "Song");
    };

    this.displayPageAlbums = async () => {
        await this.business.getResolvedPageAlbums();
        // console.log(this.resolvedAlbumData);
        var albumsDetails = this.business.getResolvedAlbums();
        addAlbums(albumsDetails);


        // ne brisi

        // for (i = 1; i <= albumsDetails.length; i++){
        //   var index = (i-1);
        //   var div1 = $(".div" +i);
        //   div1.css({
        //     padding: "10px"
        //   });
        //   var p1 = $("<p>");
        //   var p2 = $("<p>");
        //   var p3 = $("<p>");
        //   var p4 = $("<p>");
        //   var span1 = $("<span>");
        //   var span2 = $("<span>");
        //   var span3 = $("<span>");
        //   var span4 = $("<span>");
        //
        //   var div2 = $("<div>");
        //   div2.addClass("divImg");
        //   var img = $("<img>");
        //   img.attr({
        //     class : "img img" + i,
        //     src : albumsDetails[index].album.albumCover
        //   });
        //   div2.append(img.css("cursor" , "pointer"));
        //   div1.append(div2);
        //   span1.addClass("bold").text("Artist Name: ");
        //   span2.addClass("bold").text("Album Name: " );
        //   span3.addClass("bold blue rateAlbum" +i).text("*** Rate album ***");
        //   span4.addClass("bold").text("Tracks#: ");
        //   p1.text(albumsDetails[index].artist.artistName);
        //   p2.text(albumsDetails[index].album.albumName);
        //   p4.text(albumsDetails[index].tracks.tracks.length);
        //   p1.prepend(span1);
        //   p2.prepend(span2);
        //   p3.append(span3.css("cursor" , "pointer"));
        //   p4.prepend(span4);
        //   div2.before(p1,p2,p4);
        //   div2.after(p3);
        //   console.log(albumsDetails[index].tracks.tracks.length);
        // }
        //ne brisi

        //za open album rate

        // for (i = 1; i <= albumsDetails.length; i++) {
        //     var selPic = $(".img" + i);
        //     var rateAlbum = $(".rateAlbum" + i);
        //     selPic.on('click', (event) => {
        //         console.log("img: " + event.target.className.split(" ")[1]);
        //     });
        //
        //     rateAlbum.on('click', (event) => {
        //         console.log("rate: ");
        //     });
        // }

    };

    this.displayNAlbums = async (howmuch) => {
        await this.business.getResolvedNAlbums(howmuch);
        var albumsDetails = this.business.getResolvedAlbums();
        console.log(albumsDetails);
        addAlbums(albumsDetails);
    };

    this.displaySongs = async () => {
        await this.business.getResolvedSongs();
        var songsDetails = this.business.returnResolvedSongs();
        console.log(songsDetails);
        addSongs(songsDetails);
    };

    this.displayArtists = async () => {
        await this.business.getResolvedArtists();
        var artistsDetails = this.business.returnResolvedArtists();
        console.log(artistsDetails);
        addArtists(artistsDetails);
    };
    let addSearchResult = (setSearchDetails) => {

        var index = 0;

        if (setSearchDetails[index] && setSearchDetails[index].type === "artist") {
            console.log("artist");
            var div1 = $(".div1");
            div1.css({
                padding: "50px 0px",
                width: "100%"
            });
            var p1 = $("<p>");
            var p2 = $("<p>");
            var p3 = $("<p>");
            var p4 = $("<p>");
            var span1 = $("<span>");
            var span2 = $("<span>");
            var span3 = $("<span>");
            var span4 = $("<span>");

            var div2 = $("<div>");
            div2.addClass("divImg");
            var img = $("<img>");
            img.attr({
                class: "img img1",
                src: setSearchDetails[index].picture
            });
            div2.append(img.css("cursor", "pointer"));
            div1.append(div2);
            span1.addClass("bold").text("Artist Name: ");
            span2.addClass("bold").text("Rank: ");
            span3.addClass("bold").text("Link: ");
            span4.addClass("bold blue rateArtist1").text("*** Rate Artist***");
            p1.text(setSearchDetails[index].name);
            p2.text(setSearchDetails[index].id);
            p3.text(setSearchDetails[index].link);
            p1.prepend(span1);
            p2.prepend(span2);
            p3.prepend(span3);
            p4.addClass("rate").append(span4.css("cursor", "pointer"));
            div2.before(p1, p2, p3);
            div2.after(p4);
            div1.children().css({
                "text-align": "center"
            });
            // console.log(setAlbumsDetails[index].tracks.tracks.length);


            var selPic = $(".img1");
            selPic.on('click', (event) => {
                console.log("img: " + event.target.className.split(" ")[1]);
            });
        } else if (setSearchDetails[index] && setSearchDetails[index].type === "album") {
            var div1 = $(".div1");
            div1.css({
                padding: "50px 0px",
                width: "100%",
            });
            var p1 = $("<p>");
            var p2 = $("<p>");
            var p3 = $("<p>");
            var p4 = $("<p>");
            var p5 = $("<p>");
            var span1 = $("<span>");
            var span2 = $("<span>");
            var span3 = $("<span>");
            var span4 = $("<span>");
            var span5 = $("<span>");

            var div2 = $("<div>");
            div2.addClass("divImg");
            var img = $("<img>");
            img.attr({
                class: "img img1",
                src: setSearchDetails[index].picture
            });
            div2.append(img.css("cursor", "pointer"));
            div1.append(div2);
            span1.addClass("bold").text("Album Name: ");
            span2.addClass("bold").text("Artist Name: ");
            span3.addClass("bold").text("Album Link: ");
            span4.addClass("bold").text("Rank: ");
            span5.addClass("bold blue rateAlbum1    ").text("*** Rate Album***");
            p1.text(setSearchDetails[index].title);
            p2.text(setSearchDetails[index].artist);
            p3.text(setSearchDetails[index].link);
            p4.text(setSearchDetails[index].rank);

            p1.prepend(span1);
            p2.prepend(span2);
            p3.prepend(span3);
            p4.prepend(span4);
            p5.addClass("rate").append(span5.css("cursor", "pointer"));
            div2.before(p1, p2, p3, p4);
            div2.after(p5);
            div1.children().css({
                "text-align": "center"
            });
            // console.log(setAlbumsDetails[index].tracks.tracks.length);


            var selPic = $(".img1");
            selPic.on('click', (event) => {
                console.log("img: " + event.target.className.split(" ")[1]);
            });
        } else if (setSearchDetails[index] && setSearchDetails[index].type === "track") {
            var div1 = $(".div1");
            div1.css({
                padding: "50px 0px",
                width: "100%"
            });
            var p1 = $("<p>");
            var p2 = $("<p>");
            var p3 = $("<p>");
            var p4 = $("<p>");
            var p5 = $("<p>");
            var p6 = $("<p>");
            var p7 = $("<p>");
            var p8 = $("<p>");

            var span1 = $("<span>");
            var span2 = $("<span>");
            var span3 = $("<span>");
            var span4 = $("<span>");
            var span5 = $("<span>");
            var span6 = $("<span>");
            var span7 = $("<span>");

            var div2 = $("<div>");
            div2.addClass("divSong");
            div2.css({
                padding: "10px 0"
            });
            div1.append(div2);
            span1.addClass("bold").text("Song Name: ");
            span2.addClass("bold").text("Artist Name: ");
            span3.addClass("bold").text("Album Name: ");
            span4.addClass("bold").text("Link: ");
            span5.addClass("bold").text("Duration: ");
            span6.addClass("bold").text("Rank: ");
            span7.addClass("bold blue rateSong1    ").text("*** Rate Song***");
            p1.text(setSearchDetails[index].title);
            p2.text(setSearchDetails[index].artist);
            p3.text(setSearchDetails[index].album);
            p4.text(setSearchDetails[index].link);
            p5.text(setSearchDetails[index].duration);
            p6.text(setSearchDetails[index].rank);
            p1.prepend(span1);
            p2.prepend(span2);
            p3.prepend(span3);
            p4.prepend(span4);
            p5.prepend(span5);
            p6.prepend(span6);
            p7.addClass("rate").append(span7.css("cursor", "pointer"));
            div2.before(p1, p2, p3, p4, p5, p6);
            // console.log(setAlbumsDetails[index].tracks.tracks.length);
            div1.children().css({
                "text-align": "center"
            });
            if (setSearchDetails[index].preview !== "") {
                var audio = $('<audio />');
                audio.attr({
                    controls: "true",
                    class: "audioPreview"
                });
                var source = $('<source />');
                source.attr({
                    src: setSearchDetails[index].preview,
                    type: "audio/mpeg"
                });
                audio.append(source);
                div2.append(audio);
            } else {
                p8.addClass("bold red").css("fontSize", "20px").text("Preview for this track is not available!");
                div2.append(p8);
            }

            // div2.after(p3);

            var selPic = $(".img1");
            selPic.on('click', (event) => {
                console.log("img: " + event.target.className.split(" ")[1]);
            });
        }
        console.log(setSearchDetails[index]);
        if (setSearchDetails[index]) {
            var classname = setSearchDetails[index].type;
            console.log(classname);
            classname = classname.charAt(0).toUpperCase() + classname.slice(1);
            console.log(classname);
            setEventOnRate(setSearchDetails, classname);
        } else {
            var div1 = $(".div1");
            var p1 = $("<p>");
            div1.removeAttr("style");
            div1.css({
                padding: "50px 0px",
                width: "100%"
            });
            p1.css({
                "text-align": "center",
                "font-size": "25px"
            }).addClass("red").text("Not found! Try Again");
            div1.append(p1);
        }
    };
    this.displaySearch = async (searchTerm, typeSearch) => {
        await this.business.getResolvedSearch(searchTerm, typeSearch);
        var search = this.business.returnResolvedSearch();
        console.log(search);
        addSearchResult(search);
    };


}
