const music = document.querySelector("audio");
    const img = document.querySelector("img");
    const play = document.getElementById("play");
    const artist = document.getElementById("artist");
    const title = document.getElementById("title");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    //arrry of an object we call object
    const songs = [
        {
            name:"music-1",
            title:"Harley Bird - Home",
            artist:"Jordan Scho",
        },
        {
            name:"music-2",
            title:"Ikson Anywhere",
            artist:"Ikson",
        },
        {
            name:"music-3",
            title:"Beauz & Jvna - Crazy",
            artist:"Beauz & Jvna",
        },
        {
            name:"music-4",
            title:"Hardwind - Want Me",
            artist:"Mike Archangelo",
        },
        {
            name:"music-5",
            title:"Jim - Sun Goes Down",
            artist:"Jim Yosef x Roy",
        },
        {
            name:"music-6",
            title:"Lost Sky - Vision NCS",
            artist:"NCS Releas",
        },
        {
            name:"music-7",
            title:"Man meri jaan",
            artist:"Saurabh Lokhande",
        },
    ];

    let isPlaying = false;
    //for play function
    const playMusic = () => {
      isPlaying = true;
      music.play();
      play.classList.replace("fa-play", "fa-pause");
      img.classList.add("anime");
    };
    
    // for pause function
   const pauseMusic = () => {
      isPlaying = false;
      music.pause();
      play.classList.replace("fa-pause", "fa-play");
      img.classList.remove("anime");
    };
    
  play.addEventListener("click", () => {
    //if(isPlaying){
    //    pauseMusic();
   // }else{
     //   playMusic();
    //}
    isPlaying ? pauseMusic() : playMusic();
  });
   
   // changing the music data

   const loadSong = (songs) => {
      title.textContent = songs.title;
      artist.textContent = songs.artist;
      music.src = "songs/" + songs.name + ".mp3";
      img.src = "images/" + songs.name + ".jpg";
   };

 songIndex =0;
 //loadSong(songs[6]);

 const nextSong = () => {
    songIndex= (songIndex + 1) % songs.length;
   loadSong(songs[songIndex]);
   playMusic();
 };

 const prevSong = () => {
    songIndex= (songIndex - 1 + songs.length) %songs.length;
   loadSong(songs[songIndex]);
   playMusic();
 };



 next.addEventListener("click", nextSong);
 prev.addEventListener("click", prevSong);
