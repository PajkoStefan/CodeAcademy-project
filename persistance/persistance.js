function DeezerApi() {

    this.getAlbums = (album) => {
        return new Promise((resolve, reject) => {
            let cors = "https://cors-anywhere.herokuapp.com/";
            $.ajax({
                url:
                // cors + "https://api.deezer.com/artist/" + album,
                    cors + 'https://api.deezer.com/album/' + album,

                type: "GET",
                success: function (data) {
                    resolve(data);
                },
                error: function (error) {
                    reject(error);
                }
            });
        });

    };

    this.getSongs = (songname) => {
        return new Promise((resolve, reject) => {
            let cors = "https://cors-anywhere.herokuapp.com/";
            $.ajax({
                url:
                    cors + 'https://api.deezer.com/track/' + songname,

                type: "GET",
                success: function (data) {
                    resolve(data);
                },
                error: function (error) {
                    reject(error);
                }
            });
        });

    };





}

//c8556c8d1222e406a83cb9fc8894b71a key