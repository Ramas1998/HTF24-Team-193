// Real-time updates mock data
const updates = [
    "Registration opened for Tech Innovators 2024!",
    "New team 'Code Warriors' registered!",
    "First challenge will be revealed soon!"
];

// Populate real-time updates
const updateFeed = document.getElementById('updateFeed');
updates.forEach(update => {
    const p = document.createElement('p');
    p.textContent = update;
    updateFeed.appendChild(p);
});

// Leaderboard mock data
const leaderboard = [
    { rank: 1, name: 'Team Codecraft', score: 150 },
    { rank: 2, name: 'John Doe', score: 140 },
    { rank: 3, name: 'Team Innovate', score: 130 },
];

// Populate leaderboard
const leaderboardBody = document.getElementById('leaderboardBody');
leaderboard.forEach(entry => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${entry.rank}</td>
        <td>${entry.name}</td>
        <td>${entry.score}</td>
    `;
    leaderboardBody.appendChild(row);
});
async function fetchLeaderboard() {
    try {
      const response = await fetch('http://localhost:5000/api/leaderboard');
      if (!response.ok) throw new Error('Failed to fetch leaderboard data');
      const leaderboardData = await response.json();
      displayLeaderboard(leaderboardData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  function displayLeaderboard(data) {
    const leaderboardContainer = document.getElementById('leaderboard');
    leaderboardContainer.innerHTML = ''; // Clear existing content
  
    data.forEach(player => {
      const entry = document.createElement('div');
      entry.textContent = `${player.name}: ${player.score}`;
      leaderboardContainer.appendChild(entry);
    });
  }
  
  // Fetch leaderboard when the page loads
  window.onload = fetchLeaderboard;