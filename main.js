document.getElementById("fetchButton").addEventListener("click", function() {
    var url = document.getElementById("urlInput").value;
    if (url === "") {
        console.error("URL is empty");
        return;
      }
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // обработка полученных данных
      })
      .catch(error => {
        console.error("There was a problem with your fetch operation:", error);
      });
  });

document.getElementById("fetchNameGit").addEventListener("click", function() {
    var url = "https://api.github.com/users/" + document.getElementById("userName").value;
    if (url === "") {
        console.error("Name is empty!!!");
        return;
      }
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // обработка полученных данных
      })
      .catch(error => {
        console.error("There was a problem with your fetch operation:", error);
      });
  });  