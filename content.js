console.log("Ad blocker extension is running!");

function removeAds() {
  // Try to find and remove the leaderboard ad
  const leaderboardAdContainer = document.getElementById('leaderboard-atf-ad');
  if (leaderboardAdContainer) {
    leaderboardAdContainer.remove();
    console.log("Removed ad container with ID 'leaderboard-atf-ad'");
  } else {
    console.log("Ad container with ID 'leaderboard-atf-ad' not found on this page.");
  }

  // Remove the sidebar ad
  const sidebarAdContainer = document.getElementById('sidebar-ad');
  if (sidebarAdContainer) {
    sidebarAdContainer.remove();
    console.log("Removed ad container with ID 'sidebar-ad'");
  } else {
    console.log("Ad container with ID 'sidebar-ad' not found on this page.");
  }

  // Remove the medium rectangle ad
  const rectangleAdContainer = document.getElementById('medium-rectangle-atf-ad');
  if (rectangleAdContainer) {
    rectangleAdContainer.remove();
    console.log("Removed ad container with ID 'medium-rectangle-atf-ad'");
  } else {
    console.log("Ad container with ID 'medium-rectangle-atf-ad' not found on this page.");
  }
}

window.onload = removeAds;