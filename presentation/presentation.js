function PresentationLayer() {
    this.resolvedAlbumData = JSON.parse(localStorage.getItem("DeezerApiData"));
    this.business = new BusinessLayer();

    let body = $('body');
    let i;
    let addAlbums = (setAlbumsDetails) => {
        for (i = 1; i <= setAlbumsDetails.length; i++) {
            var index = (i - 1);
            var div1 = $(".div" + i);
            div1.css({
                padding: "10px"
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
            span3.addClass("bold blue rateAlbum" + i).text("*** Rate album ***");
            span4.addClass("bold").text("Tracks#: ");
            p1.text(setAlbumsDetails[index].artist.artistName);
            p2.text(setAlbumsDetails[index].album.albumName);
            p4.text(setAlbumsDetails[index].tracks.tracks.length);
            p1.prepend(span1);
            p2.prepend(span2);
            p3.append(span3.css("cursor", "pointer"));
            p4.prepend(span4);
            div2.before(p1, p2, p4);
            div2.after(p3);
            // console.log(setAlbumsDetails[index].tracks.tracks.length);
        }
      for (i = 1; i <= setAlbumsDetails.length; i++) {
        var selPic = $(".img" + i);
        var rateAlbum = $(".rateAlbum" + i);
        selPic.on('click', (event) => {
          console.log("img: " + event.target.className.split(" ")[1]);
        });

        rateAlbum.on('click', (event) => {
          console.log("rate: ");
        });
      }
    };

    // console.log(this.business.getPageAlbums());
    // console.log(this.business.getAlbums());
    this.displayPageAlbums = async () => {
        await this.business.getResolvedPageAlbums();
        // console.log(this.resolvedAlbumData);
        var albumsDetails = this.business.getResolvedAlbums();
        var mainBody = $("#main-body");
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

}
