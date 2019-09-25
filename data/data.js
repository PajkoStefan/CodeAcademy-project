function DataLayer() {
    this.persistanceObject = new DeezerApi();

    this.albums = [];
    this.albumsPage = [];

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

}


//podobruvanje da se proveri pri povikuvanje na traki, albumi
//i slicno dali se povtoruvaat(mala verojatnost) .includes()