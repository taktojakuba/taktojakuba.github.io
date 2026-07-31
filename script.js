async function dc() {
  const status = document.getElementById("status");
  try {
    const response = await fetch(
      "https://api.lanyard.rest/v1/users/768727776323829790",
    );
    const data = await response.json();

    if (data.success) {
      const user = data.data.discord_user;
      const st = data.data.discord_status;
      status.innerHTML = `<p>${user.display_name} is ${st}</p>`;
    } else {
      status.innerHTML = "<p>offline</p>";
    }
  } catch (err) {
    console.error(err);
    status.innerHTML = "<p>offline</p>";
  }
}

dc();
