function PresentationLayer() {
    this.resolvedAlbumData = JSON.parse(localStorage.getItem("DeezerApiData"));
    this.business = new BusinessLayer();

    let body = $('body');
    let i;
    let setEventOnRate = (setElement) =>{
        for (i = 1; i <= setElement.length; i++) {
            var rateAlbum = $(".rateAlbum" + i);
            rateAlbum.on('click', (event) => {
                console.log("rate: ");
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
            span4.addClass("bold blue rateAlbum" + i).text("*** Rate album ***");
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
        setEventOnRate(setAlbumsDetails);
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
        for(var i = 1; i <= setSongsDetails.length; i++) {
            var index = (i - 1);
            var div1 = $(".div" + i);
            div1.css({
                justifyContent : "",
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
                padding : "10px 0"
            });
            div2.append();
            div1.append(div2);
            span1.addClass("bold").text("Artist Name: ");
            span2.addClass("bold").text("Album Name: ");
            span3.addClass("bold").text("Track Name: ");
            span4.addClass("bold").text("Release Date: ");
            span5.addClass("bold").text("Duration: ");
            aTag.attr({
                href : setSongsDetails[index].song.songLink,
                class : "bold blue"
            }).css({
                "text-decoration" : "none",
                "font-size" : "20px"
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
            if(setSongsDetails[index].song.songPreview !== ""){
                var audio = $('<audio />');
                audio.attr({
                   controls : "true",
                   class : "audioPreview"
                });
                var source = $('<source />');
                source.attr({
                    src : setSongsDetails[index].song.songPreview,
                    type : "audio/mpeg"
                });
                audio.append(source);
                div2.append(audio);
            }
            else{
                p7.addClass("bold red").css("fontSize" , "20px").text("Preview for this track is not available!");
                div2.append(p7);
            }
            div1.append(p6);
            span8.addClass("bold blue rateAlbum" + i).text("*** Rate album ***");
            p8.addClass("rate").append(span8.css("cursor", "pointer"));
            div1.append(p8.css("paddingTop" , "10px"));
            // div2.after(p3);
        }
        setEventOnRate(setSongsDetails);
    };
    // console.log(this.business.getPageAlbums());
    // console.log(this.business.getAlbums());
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

    this.displaySearch = async (searchTerm) =>{
        await this.business.getResolvedSearch(searchTerm);
        var search = this.business.returnResolvedSearch();
        // console.log(search);
    };



}
