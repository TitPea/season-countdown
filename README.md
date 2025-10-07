# Season Countdown

A simple web app that displays the current season and shows a live countdown timer to the next seasonal change.  
It automatically detects the current date, determines the current season, and updates the background and display accordingly.

## Features

- **Automatic season detection** – determines the current season based on the system date and predefined start dates for Spring, Summer, Fall, and Winter.  
- **Live countdown timer** – displays days, hours, minutes, and seconds remaining until the next season begins.  
- **Dynamic backgrounds** – changes the background image depending on the current season for a more visual and engaging experience.  
- **Real-time updates** – continuously refreshes every second using JavaScript’s `setInterval` for smooth and accurate time tracking.  
- **Lightweight and fast** – runs entirely in the browser without any dependencies or server setup required.  

## How It Works

1. The app uses fixed seasonal start dates:  
   - Spring – March 20  
   - Summer – June 21  
   - Fall – September 22  
   - Winter – December 21  

2. On page load, the script:  
   - Checks the current date.  
   - Determines which season it currently is.  
   - Calculates the time remaining until the next seasonal change.  
   - Updates the page display and background accordingly.  

3. The countdown timer automatically updates every second.  
4. When the countdown reaches zero, the script switches to the new season and restarts the timer.  

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla JS, no frameworks)  

## License

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.
