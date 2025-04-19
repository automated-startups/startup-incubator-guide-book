# Startup Incubator Guide Website - Local Setup Instructions

This package contains all the files needed to run the Startup Incubator Guide website locally on your computer. Follow the instructions below to get started.

## Contents

- `index.html` - The main HTML file for the website
- `css/` - Directory containing the CSS stylesheets
- `js/` - Directory containing JavaScript files
- `images/` - Directory containing image files (if any)

## How to Run Locally

### Method 1: Simple Double-Click (Easiest)

1. Extract all files from the ZIP archive to a folder on your computer
2. Navigate to the extracted folder
3. Double-click on the `index.html` file
4. The website should open in your default web browser

### Method 2: Using a Local Server (Recommended for Developers)

For the best experience, especially if you plan to modify the website, it's recommended to use a local server:

#### Using Python (Python must be installed on your computer)

1. Extract all files from the ZIP archive to a folder on your computer
2. Open a command prompt or terminal
3. Navigate to the extracted folder using the `cd` command
   ```
   cd path/to/extracted/folder
   ```
4. Run one of the following commands depending on your Python version:
   
   For Python 3:
   ```
   python -m http.server 8000
   ```
   
   For Python 2:
   ```
   python -m SimpleHTTPServer 8000
   ```
5. Open your web browser and go to: `http://localhost:8000`

#### Using Node.js (Node.js must be installed on your computer)

1. Extract all files from the ZIP archive to a folder on your computer
2. Open a command prompt or terminal
3. Install the `http-server` package globally (if not already installed):
   ```
   npm install -g http-server
   ```
4. Navigate to the extracted folder using the `cd` command
   ```
   cd path/to/extracted/folder
   ```
5. Run the server:
   ```
   http-server -p 8000
   ```
6. Open your web browser and go to: `http://localhost:8000`

## Browser Compatibility

The website is designed to work with modern browsers including:
- Google Chrome (recommended)
- Mozilla Firefox
- Microsoft Edge
- Safari

## Customization

You can customize the website by editing the following files:
- `index.html` - To modify content and structure
- `css/styles.css` - To change styles and appearance
- `js/main.js` - To modify interactive functionality

## Troubleshooting

If you encounter any issues:

1. Make sure all files are extracted properly and maintain the original folder structure
2. Try using a different web browser
3. If using a local server, ensure the port (8000 in the examples) is not being used by another application
4. Check your browser's console for any JavaScript errors

## Credits

This website was created based on the Startup Incubator Guide by Kalyanjit Hatibaruah, Flugelsoft Labs.
