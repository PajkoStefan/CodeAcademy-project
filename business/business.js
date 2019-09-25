function BusinessLayer() {
    this.dataObject = new DataLayer();
    this.resolvedAlbums = [];

    let getResAlbums = (setAllAlbums) =>{
        for (var i = 0; i < setAllAlbums.length; i++) {
            var temp = {
                album: {
                    albumName: setAllAlbums[i].title,
                    albumId: setAllAlbums[i].id,
                    albumLink: setAllAlbums[i].link,
                    albumCover: setAllAlbums[i].cover_medium
                },
                artist: {
                    artistName: setAllAlbums[i].artist.name,
                    artistId: setAllAlbums[i].artist.id
                },
                tracks: {
                    tracks: setAllAlbums[i].tracks.data
                }

            };
            this.resolvedAlbums.push(temp);
        }
    };

    this.getResolvedPageAlbums = async () => {
        await this.dataObject.populatePageAlbums();
        // console.log(this.dataObject.getPageAlbums());
        //show albumsPage, populateAlbumsPage


        var allPageAlbums = this.dataObject.getPageAlbums();
        getResAlbums(allPageAlbums);
        console.log(this.resolvedAlbums);

        // for (var i = 0; i < allPageAlbums.length; i++) {
        //     var temp = {
        //         album: {
        //             albumName: allPageAlbums[i].title,
        //             albumId: allPageAlbums[i].id,
        //             albumLink: allPageAlbums[i].link,
        //             albumCover: allPageAlbums[i].cover_medium
        //         },
        //         artist: {
        //             artistName: allPageAlbums[i].artist.name,
        //             artistId: allPageAlbums[i].artist.id
        //         },
        //         tracks: {
        //             tracks: allPageAlbums[i].tracks.data
        //         }
        //
        //     };
        //     this.resolvedAlbums.push(temp);
        // }
        // console.log(this.resolvedAlbums);

        localStorage.setItem("DeezerApiData", JSON.stringify(this.resolvedAlbums));
    };

    this.getResolvedNAlbums = async (howmuch) => {
        await this.dataObject.populateNAlbums(howmuch);
        // console.log(this.dataObject.getAlbums());
        //show albums, populateAlbums

        var allAlbums = this.dataObject.getNAlbums();
        this.resolvedAlbums=[];
        getResAlbums(allAlbums);
        console.log(this.resolvedAlbums);

        localStorage.setItem("DeezerApiData", JSON.stringify(this.resolvedAlbums));
    };

    this.getResolvedAlbums = () => {
        return this.resolvedAlbums;
    }


}

