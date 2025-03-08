const { artists, songs } = window;
console.log({ artists, songs }, "App Data");

function getArtists(id) {
  var Ele = document.getElementById("selected-artist");
  Ele.innerHTML = "";
  var artist = window.artists.find((Artist) => Artist.artistID === id);
  var text = document.createTextNode(artist.name);
  Ele.appendChild(text);
}

function getLink(id) {
  var linksContainer = document.getElementById("Links");
  linksContainer.innerHTML = "";
  var artist = window.artists.find((artist) => artist.artistID === id);

  if (artist) {
    artist.urls.forEach((link) => {
      var listItem = document.createElement("li");
      var anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.name;
      anchor.target = "_blank";
      listItem.appendChild(anchor);
      linksContainer.appendChild(listItem);
    });
  }
}

function MakeTable(id) {
  var Ele = document.getElementById("TableHeading");
  Ele.innerHTML = "";

  var artistId = id;

  var headerRow = document.createElement("tr");
  ["Song Name", "Year", "Duration", "Song Link"].forEach((headerText) => {
    var th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  Ele.appendChild(headerRow);

  var filteredSongs = window.songs.filter((song) => song.artistId === artistId);

  filteredSongs.forEach((song) => {
    if (song.explicit === false) {
      var row = document.createElement("tr");

      var nameCell = document.createElement("td");
      nameCell.textContent = song.title;
      row.appendChild(nameCell);

      var yearCell = document.createElement("td");
      yearCell.textContent = song.year;
      row.appendChild(yearCell);

      var durationCell = document.createElement("td");
      durationCell.textContent = formatDuration(song.duration);
      row.appendChild(durationCell);

      var linkCell = document.createElement("td");
      var link = document.createElement("a");
      link.href = song.url;
      link.textContent = "Listen";
      link.target = "_blank";
      linkCell.appendChild(link);
      row.appendChild(linkCell);

      Ele.appendChild(row);
    }
  });
}

function formatDuration(seconds) {
  var minutes = Math.floor(seconds / 60);
  var sec = seconds % 60;
  return `${minutes}:${sec.toString().padStart(2, "0")}`;
}

document.getElementById("btn1").onclick = function () {
  getArtists("AID-00001");
  getLink("AID-00001");
  MakeTable("AID-00001");
};

document.getElementById("btn2").onclick = function () {
  getArtists("AID-00002");
  getLink("AID-00002");
  MakeTable("AID-00002");
};

document.getElementById("btn3").onclick = function () {
  getArtists("AID-00003");
  getLink("AID-00003");
  MakeTable("AID-00003");
};

document.getElementById("btn4").onclick = function () {
  getArtists("AID-00004");
  getLink("AID-00004");
  MakeTable("AID-00004");
};
