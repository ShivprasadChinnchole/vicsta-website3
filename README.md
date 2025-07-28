# VICSTA - Vishwakarma IOT Cyber Security Tech Association

Welcome to the official website of VICSTA (Vishwakarma IOT Cyber Security Tech Association), a premier technology club at Vishwakarma Institute of Technology.

## 🌐 Live Website

The website will be hosted on GitHub Pages: `https://yourusername.github.io/your-repository-name/`

## 🚀 Features

- **Modern Design**: Dark theme with beautiful gradients and animations
- **Responsive**: Works perfectly on all devices
- **Interactive**: Smooth scrolling, hover effects, and animations
- **GitHub Pages Ready**: Optimized for easy deployment on GitHub Pages
- **Gallery Section**: Showcases VICSTA activities and events
- **Achievement Showcase**: Highlights member accomplishments
- **Social Media Integration**: Links to official social media accounts

## 📁 Project Structure

```
HOD TASK/
├── index.html              # Main homepage
├── vicsta-gallery.html     # Activities gallery page
├── assets/                 # Images and documents
│   ├── VICSTA_logo_with_name.png
│   ├── hod-photo.jpg
│   ├── anish-france.png
│   ├── cyber-for-her-hackathon.png
│   ├── design-athon-iiit.png
│   ├── gian-innovation.png
│   ├── vishwactf-mini.png
│   ├── IOTVishwa_Newsletter.pdf
│   ├── Achievements_CSEIOTCSBT.pdf
│   └── vicsta-gallery/
│       ├── seminar1.jpg
│       ├── seminar3.jpg
│       └── vicsta1st.jpg
├── css/
│   └── styles.css          # Custom styles
├── js/
│   └── script.js           # JavaScript functionality
└── README.md               # This file
```

## 🚀 Deployment Instructions

### Method 1: GitHub Pages (Recommended)

1. **Create a new repository on GitHub:**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `vicsta-website` or `vicsta-club`
   - Make it public for free GitHub Pages hosting

2. **Upload your files:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: VICSTA website"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repository-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Update URLs in the code (Important!):**
   - Open `index.html`
   - Find the Open Graph meta tags (around line 15-20)
   - Replace `username` with your GitHub username
   - Replace `repository-name` with your actual repository name

## 🔧 Pre-Deployment Checklist

Before deploying, make sure to:

1. **Update Meta Tags in index.html:**
   ```html
   <!-- Replace these URLs with your actual GitHub Pages URL -->
   <meta property="og:url" content="https://yourusername.github.io/your-repo-name/">
   <meta property="og:image" content="https://yourusername.github.io/your-repo-name/assets/VICSTA_logo_with_name.png">
   ```

2. **Test Locally:**
   - Open `index.html` in a web browser
   - Check that all images load correctly
   - Verify all links work properly

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**© 2025 VICSTA. All rights reserved. | Designed with ❤️ by VICSTA Team**
├── assets/
│   ├── logo.png        # VICSTA logo (you need to add this)
│   ├── favicon.png     # Website favicon
│   └── achievement*.jpg # Achievement images (placeholder needed)
└── README.md          # This file
```

## 🖼️ Adding Images

You need to add the following images to the `assets/` folder:

### Required Images:
1. **logo.png** - The VICSTA logo you provided (convert from SVG to PNG)
2. **favicon.png** - A small version of the logo for browser tabs
3. **achievement1.jpg to achievement6.jpg** - Images for the achievements section

### Converting Your Logo:
1. Save the logo you provided as `logo.png` in the `assets/` folder
2. Create a smaller version (32x32 or 64x64) as `favicon.png`

### Achievement Images:
You can use placeholder images or real achievement photos. Each should be roughly 400x200 pixels.

## 🌐 GitHub Pages Deployment

This website is optimized for GitHub Pages deployment. Here's how to deploy:

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name it `vicsta-website` (or any name you prefer)
4. Make it public
5. Don't initialize with README (we already have files)

### Step 2: Upload Files
1. Upload all files to your repository:
   - `index.html`
   - `css/styles.css`
   - `js/script.js`
   - `assets/` folder with images
   - `README.md`

### Step 3: Enable GitHub Pages
1. Go to your repository settings
2. Scroll to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### Step 4: Access Your Website
Your website will be available at:
```
https://YOUR_GITHUB_USERNAME.github.io/vicsta-website
```

## 🎨 Customization

### Colors
The website uses a purple/blue gradient theme. You can modify colors in `css/styles.css`:

```css
/* Main gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Background colors */
background-color: #0a0a0a; /* Dark black */
background: #1a1a2e; /* Dark blue */
```

### Content
Update the content in `index.html`:

- **Hero Section**: Change title, description, and buttons
- **About Section**: Update club information and statistics
- **Achievements**: Add your real achievements with images
- **Events**: Update with your upcoming events
- **Contact**: Add your real contact information

### Images
Replace placeholder images in the `assets/` folder with real photos.

## 📱 Responsive Design

The website is fully responsive and works on:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones
- ✅ All modern browsers

## 🔧 Technical Details

### Technologies Used:
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: ES6+ for interactivity
- **Google Fonts**: Inter and JetBrains Mono
- **Font Awesome**: Icons

### Browser Support:
- Chrome/Edge/Safari (latest 2 versions)
- Firefox (latest 2 versions)
- Mobile browsers

### Performance:
- Optimized images
- Minified CSS/JS (you can add this later)
- Efficient animations
- Progressive loading

## 📋 TODO

Before going live, complete these tasks:

1. ✅ Add VICSTA logo (`assets/logo.png`)
2. ✅ Add favicon (`assets/favicon.png`)
3. ✅ Add achievement images (`assets/achievement1.jpg` to `achievement6.jpg`)
4. ✅ Update contact information with real details
5. ✅ Add real social media links
6. ✅ Test all forms and functionality
7. ✅ Deploy to GitHub Pages

## 🆘 Troubleshooting

### Images Not Loading
- Check file names match exactly (case-sensitive)
- Ensure images are in the `assets/` folder
- Verify file formats (PNG, JPG)

### GitHub Pages Not Working
- Check repository is public
- Verify branch name is correct
- Wait 5-10 minutes for deployment
- Check for any errors in repository settings

### Forms Not Working
- Forms currently show success messages (demo only)
- To make them functional, you need a backend server
- Consider using services like Formspree or Netlify Forms

## 📞 Support

If you need help with customization or deployment:
1. Check GitHub repository issues
2. Read GitHub Pages documentation
3. Test locally by opening `index.html` in your browser

## 🏆 Credits

Website designed and developed for VICSTA - Vishwakarma IOT Cyber Security Tech Association.

Built with ❤️ using modern web technologies.
