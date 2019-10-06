function DataLayer() {
    this.persistanceObject = new DeezerApi();

    this.albums = [];
    this.albumsPage = [];
    this.songs = []; // top 12 tracks
    this.artists = [];
    this.search = [];

    let i;

    this.populateNAlbums = async (howmuch) => {
        for (i = 0; i < howmuch; i++) {
            const randomAlbum = getRandomNumber(40000, 1000000);
            var temp = await this.persistanceObject.getAlbums(randomAlbum);
            var regex = /[0-9]+/;
            if (String(temp.id).match(regex)) {
                this.albums.push(temp);
            } else {
                i--;
            }
        }
        // console.log(this.albums);
    };

    this.getNAlbums = () => {
        return this.albums;
    };

    //300+

    this.populatePageAlbums = async () => {

        for (i = 0; i < 9; i++ && (i === 5)) {
            const randomAlbum = getRandomNumber(40000, 1000000);
            var temp = await this.persistanceObject.getAlbums(randomAlbum);
            var regex = /[0-9]+/;
            if (String(temp.id).match(regex)) {
                this.albumsPage.push(temp);
            } else {
                i--;
            }
        }
        // console.log(this.albumsPage);
    };
    this.getPageAlbums = () => {
        return this.albumsPage;
    };
    // //   console.log("kaka");
    // //   console.log(this.albums);
    // //   console.log(this.albumsPage);

    // console.log(this.persistanceObject.getAlbums());

    this.populateSongs = async () => {

        for (i = 0; i < 12; i++) {
            const randomSong = getRandomNumber(200000, 199999999);
            var temp = await this.persistanceObject.getSongs(randomSong);
            var regex = /[0-9]+/;
            if (String(temp.id).match(regex)) {
                this.songs.push(temp);
            } else {
                i--;
            }
        }
        // console.log(this.songs);
    };

    this.getSongs = () => {
        return this.songs;
    };

    this.populateArtists = async () => {
        this.artists = [];
        for (i = 0; i < 12; i++) {
            const randomArtist = getRandomNumber(1, 200);
            var temp = await this.persistanceObject.getArtists(randomArtist);
            var regex = /[0-9]+/;
            if (this.artists.length === 0) {
                if (String(temp.id).match(regex) && (temp.nb_album !== 0) && (temp.nb_fan !== 0)) {//nb_fan > 2000 - 3000 - 4000..
                    this.artists.push(temp);
                } else {
                    i--;
                }
            } else {
                if (String(temp.id).match(regex) && (temp.nb_album !== 0) && (temp.nb_fan !== 0)) {
                    var flag = 0;

                    for (var j = 0; j < this.artists.length; j++) {
                        if (temp.id === this.artists[j].id) {
                            flag = 1; // flag za povtoruvanje
                            i--; // ako se povtoruva element
                        }
                    }
                    if (flag === 0) {
                        this.artists.push(temp);
                    }
                }
                else{
                    i--; // ako nema id
                }
            }

        }
        console.log(this.artists);
    };
    this.getArtists = () => {
        return this.artists;
    };
    this.populateSearch = async (searchTerm) =>{
        this.search = await this.persistanceObject.getSearch(searchTerm);
        console.log(this.search);
    };

    this.getSearch = () =>{
        return this.search;
    };
}

//podobruvanje da se proveri pri povikuvanje na traki, albumi
//i slicno dali se povtoruvaat(mala verojatnost) .includes()