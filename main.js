function main() {
    let businessObject = new BusinessLayer();
    let presentationObject = new PresentationLayer();
    let dataObject = new DataLayer();
    let deezerApi = new DeezerApi();


    presentationObject.displayPageAlbums();
    // presentationObject.getAlbums(//howmuch);

    let createDivBody = (numOfDivs) => {
        for (i = 1; i <= numOfDivs; i++) {
            var divBody2 = $("<div>");
            divBody2.css({
                width: "33%",
                "justify-content": "center",
                "align-items": "center",
                "flex-direction": "column"
            });
            divBody2.attr({
                class: "divMain div" + i + " displayFlex"
            });

            divBody.append(divBody2);

        }
    };


    let i;
    let body = $('body');
    let html = $('html');
    let root = $('<div>').addClass("root");
    body.prepend(root);
    let divMainContainer = $('<div>').attr("id", "main-container").addClass("main-container");
    root.append(divMainContainer);
    let divContainer1 = $('<div>').attr("id", "container").addClass("container");
    divMainContainer.append(divContainer1);
    var h1 = $('<h1>');
    h1.attr("id", "main-title").text("RateAlert");
    divContainer1.append(h1);
    let navMenu = $('<div>');
    navMenu.addClass("nav-menu");
    divMainContainer.append(navMenu);
    let divContainer2 = $('<div>').addClass("container");
    navMenu.append(divContainer2);
    var divMenu = $('<div>');
    divMenu.attr("id", "menu").addClass("menu displayFlex");
    divContainer2.append(divMenu);
    var divMenu1 = $('<div>');
    divMenu1.addClass("menu-left displayFlex");
    divMenu.append(divMenu1);
    var arrayMenu = ["Top 12 Albums", "Top 12 Songs", "Top 12 Artists"];
    for (i = 0; i < 3; i++) {
        var divMenu2 = $('<div>');
        divMenu2.addClass("list" + (i + 1)).text(arrayMenu[i]);
        divMenu1.append(divMenu2)
    }
    var divMenu3 = $('<div>');
    divMenu3.addClass("menu-right search");
    divMenu.append(divMenu3);
    let inputField = $('<input>');
    inputField.attr({
        type: "text",
        placeholder: "Artist, Album, Track",
        class: "input-Field"
    });

    divMenu3.append(inputField);
    let inputSearch = $('<input>');
    inputSearch.attr({
        type: "button",
        value: "Search",
        class: "btn-search input-Search",
        id: "search"
    });
    divMenu3.append(inputSearch);
    let divContainer3 = $('<div>');
    divContainer3.addClass("container container-body");
    divMainContainer.append(divContainer3);
    let divBody = $('<div>');
    divBody.attr({
        id: "main-body",
        class: "main-body displayFlex"
    });
    divContainer3.append(divBody);
    createDivBody(9);

    //event listener
    inputField.on('click', (event) => {
        console.log("la1");
    });

    inputSearch.on('click', (event) => {
        console.log("la2");
    });
    var selMenuLeft = $('.menu-left');
    var selMainBodyDivs = $('.divMain');
    var selMainBody = $('#main-body');

    selMenuLeft.children().on('click', (event) => {
        selMenuLeft.css({
            cursor: "pointer"
        });
        console.log(event.target.textContent);
        if (event.target.textContent === "Top 12 Albums") {
            selMainBodyDivs.removeAttr('style');
            selMainBodyDivs.children().remove();
            selMainBody.children().remove();
            createDivBody(12);
            presentationObject.displayNAlbums(12);
        }
       else if(event.target.textContent === "Top 12 Songs"){
            selMainBodyDivs.removeAttr('style');
            selMainBodyDivs.children().remove();
            selMainBody.children().remove();
            createDivBody(12);
            console.log("good");
            presentationObject.displaySongs();

        }
       else if(event.target.textContent === "Top 12 Artists"){
            selMainBodyDivs.removeAttr('style');
            selMainBodyDivs.children().remove();
            selMainBody.children().remove();
            createDivBody(12);

       }
    });
}

main();
