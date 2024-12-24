A responsive web application that provides real-time weather updates and displays the latest news articles. Users can search for weather in specific cities, view weather based on their current location using geolocation, and explore top news stories by categories or keywords.
 Features of the App.
 Weather Module:
Search for weather by city.
View weather updates based on the user's current location.
Displays temperature, weather conditions, humidity, and wind speed.
Weather icons based on conditions.

News Module:
Browse the latest news articles.
Explore news by categories like Technology, Business, and Health.
Search for custom topics and keywords.
Links to full articles.

Theme Switcher:
Toggle between Light, Dark, and Gray themes.

Hero Section:
A visually appealing introduction with a call-to-action button to explore the app.

Fully Responsive Design:
Built with Tailwind CSS for seamless viewing on all devices.

SETUP INSTRUCTIONS
.Clone Repository
.Install Dependencies
.Create Environment Variables
.Start the Development Server
.Build for Production

API Usage Details
OpenWeather API
Base URL: https://api.openweathermap.org/weather
Parameters:
City name (e.g., q=London)
Latitude for geolocation (e.g., lat=51.51)
Longitude for geolocation (e.g., lon=-0.13)
appid: Your API key.
units: Units of measurement (e.g., units=metric for Celsius).
NewsAPI
Base URL: https://newsapi.org/v2
Endpoints:
/top-headlines: Fetches top news headlines.
/everything: Fetches news articles based on keywords.
Parameters:
 Keywords or phrases (e.g.technology)
category: News category (e.g.category=business)
apiKey: Your API key.

Technologies Used
React.js: For building the user interface.
Tailwind CSS: For responsive and modern styling.
Axios: For API requests.
React Router: For page navigation.
OpenWeather API: For fetching weather data.
NewsAPI: For fetching news articles.
