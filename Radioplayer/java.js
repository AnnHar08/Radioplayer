const channelsContainer = document.getElementById("channels-container");

// Hämta data från SR API
fetch("http://api.sr.se/api/v2/channels?format=json&size=100")
  .then((response) => response.json())
  .then((data) => {
    // Skapa kanalrutor baserat på datan från API
    data.channels.forEach((channel) => {
      const channelBox = document.createElement("div");
      channelBox.classList.add("channel-box");

      const channelName = document.createElement("h3");
      channelName.textContent = channel.name;

      const channelImage = document.createElement("img");
      channelImage.src = channel.image;
      channelImage.alt = channel.name;
      channelImage.style.width = "100px";
      channelImage.style.height = "100px";

      const audio = document.createElement("audio");
      audio.controls = true;

      const source = document.createElement("source");
      source.src = channel.liveaudio.url;
      source.type = "audio/mpeg";

      audio.appendChild(source);
      channelBox.appendChild(channelName);
      channelBox.appendChild(channelImage);
      channelBox.appendChild(audio);

      channelsContainer.appendChild(channelBox);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
