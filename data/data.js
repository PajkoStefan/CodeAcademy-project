function DataLayer() {
    this.persistanceObject = new DeezerApi();

    this.albums = [];
    this.albumsPage = [];
    this.songs = []; // top 12 tracks


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
    };
    this.getPageAlbums = () => {
        return this.albumsPage;
    };
    // //   console.log("kaka");
    // //   console.log(this.albums);
    // //   console.log(this.albumsPage);

    // console.log(this.persistanceObject.getAlbums());

    this.populateSongs = async () => {

        for (i = 0; i < 12; i++ ) {
            const randomSong = getRandomNumber(200000, 199999999);
            var temp = await this.persistanceObject.getSongs(randomSong);
            var regex = /[0-9]+/;
            if (String(temp.id).match(regex)) {
                this.songs.push(temp);
            } else {
                i--;
            }
        }
        console.log(this.songs);
    };
    this.getSongs = () =>{
      return this.songs;
    };

}


//podobruvanje da se proveri pri povikuvanje na traki, albumi
//i slicno dali se povtoruvaat(mala verojatnost) .includes()