function BusinessLayer() {
    this.dataObject = new DataLayer();
    this.resolvedAlbums = [];
    this.resolvedSongs = [];
    this.resolvedArtists = [];
    this.resolvedSearch = [];

    let i;
    let getResAlbums = (setAllAlbums) => {
        for (i = 0; i < setAllAlbums.length; i++) {
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

    let getResSongs = (setAllSongs) => {
        for (i = 0; i < setAllSongs.length; i++) {
            var temp = {
                song: {
                    songName: setAllSongs[i].title,
                    songId: setAllSongs[i].id,
                    songLink: setAllSongs[i].link,
                    songDur: setAllSongs[i].duration,
                    songRelDate: setAllSongs[i].release_date,
                    songPreview: setAllSongs[i].preview,
                    artistName: setAllSongs[i].artist.name,
                    artistId: setAllSongs[i].artist.id,
                    albumName: setAllSongs[i].album.title,
                    albumId: setAllSongs[i].album.id
                }
            };
            this.resolvedSongs.push(temp);
        }

    };
    let getResArtists = (setAllArtists) => {
        for (i = 0; i < setAllArtists.length; i++) {
            var temp = {
                artist: {
                    artistName: setAllArtists[i].name,
                    artistId: setAllArtists[i].id,
                    artistLink: setAllArtists[i].link,
                    artistPic: setAllArtists[i].picture_medium,
                    artistFans: setAllArtists[i].nb_fan,
                    artistAlbums: setAllArtists[i].nb_album
                }
            };
            this.resolvedArtists.push(temp);
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
        this.resolvedAlbums = [];
        getResAlbums(allAlbums);
        console.log(this.resolvedAlbums);

        localStorage.setItem("DeezerApiData", JSON.stringify(this.resolvedAlbums));
    };

    this.getResolvedAlbums = () => {
        return this.resolvedAlbums;
    };

    this.getResolvedSongs = async () => {
        await this.dataObject.populateSongs();
        var allSongs = this.dataObject.getSongs();
        getResSongs(allSongs);
        // console.log(this.resolvedSongs);
        // localStorage.setItem("DeezerApiData", JSON.stringify(this.resolvedAlbums));
    };
    this.returnResolvedSongs = () => {
        return this.resolvedSongs;
    };
    let sortArtistsbyFans = (artists) => {
        let arrayArtists = [...artists];
        let array = [];
        let temp1;
        let temp2;
        var j = 0;
        var p;
        var ind;
        let count = arrayArtists.length;
        while (count) {
            temp1 = arrayArtists[j];
            ind = j;
            for (p = (j + 1); p < arrayArtists.length; p++) {
                temp2 = arrayArtists[p];
                if (temp1.artist.artistFans < temp2.artist.artistFans) {
                    temp1 = temp2;
                    ind = p;
                }
            }
            array.push(arrayArtists[ind]);
            arrayArtists.splice(ind, 1);
            count--;
        }
        console.log("sorted:");
        console.log(array);
        this.resolvedArtists = [];
        this.resolvedArtists = array;
    };

    this.getResolvedArtists = async () => {
        await this.dataObject.populateArtists();
        var allArtists = this.dataObject.getArtists();
        getResArtists(allArtists);
    };
    this.returnResolvedArtists = () => {
        sortArtistsbyFans(this.resolvedArtists);
        return this.resolvedArtists;
    };

    let checkSearch = (entered, checked) => {
        entered = entered.toLowerCase();
        checked = checked.toLowerCase();
        var temp1 = entered.substr(0, 4);
        var temp2 = checked.substr(0, 4);
        if (temp2.includes(temp1)) {
            return true;
        } else {
            return false;
        }
    };

    let getResSearch = (setSearch, searchTerm, typeSearch) => {
        console.log(typeSearch);
        console.log(searchTerm);
        console.log(setSearch);

        if (searchTerm && typeSearch === "Album") {
            console.log("We are in Album");
            for (i = 0; i < setSearch.data.length; i++) {
                let ranking = getRandomNumber(1, 300);
                let temp;
                if (checkSearch(searchTerm, setSearch.data[i].album.title)) {
                    temp = {
                        type: setSearch.data[i].album.type,
                        id: setSearch.data[i].album.id,
                        artist: setSearch.data[i].artist.name,
                        title: setSearch.data[i].album.title,
                        link: 'https://api.deezer.com/album/' + setSearch.data[i].album.id,
                        picture: setSearch.data[i].album.cover_medium,
                        rank: ranking
                    };
                    this.resolvedSearch.push(temp);
                    break;
                }
            }

        } else if (searchTerm && typeSearch === "Artist") {
            console.log("We are in artist");
            for (i = 0; i < setSearch.data.length; i++) {
                let temp;
                if (checkSearch(searchTerm, setSearch.data[i].artist.name)) {
                    temp = {
                        type: setSearch.data[i].artist.type,
                        id: setSearch.data[i].artist.id,
                        name: setSearch.data[i].artist.name,
                        link: setSearch.data[i].artist.link,
                        picture: setSearch.data[i].artist.picture_medium
                    };
                    this.resolvedSearch.push(temp);
                    console.log(temp);
                    break;
                }
            }
        } else if (searchTerm && typeSearch === "Song") {
            console.log("We are in Song");
            for (i = 0; i < setSearch.data.length; i++) {
                let ranking = getRandomNumber(1, 300);
                let temp;
                if (checkSearch(searchTerm, setSearch.data[i].title)) {
                    temp = {
                        type: setSearch.data[i].type,
                        id: setSearch.data[i].id,
                        title: setSearch.data[i].title_short,
                        link: setSearch.data[i].link,
                        artist: setSearch.data[i].artist.name,
                        album: setSearch.data[i].album.title,
                        duration: setSearch.data[i].duration,
                        rank: setSearch.data[i].rank,
                        preview: setSearch.data[i].preview
                    };
                    this.resolvedSearch.push(temp);
                    break;
                }
            }
        }
        console.log(this.resolvedSearch);
    };

    this.getResolvedSearch = async (searchTerm, typeSearch) => {
        await this.dataObject.populateSearch(searchTerm);
        var search = this.dataObject.getSearch();
        this.resolvedSearch = [];
        getResSearch(search, searchTerm, typeSearch);
    };
    this.returnResolvedSearch = () => {
        return this.resolvedSearch;
    };


}

