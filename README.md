# Khmer Math Education Website

An educational website for math learners from Grade 7 to Grade 12.

## ✨ Features

- Fully responsive design
- Dedicated pages for each grade (7–12)
- Organized lessons and exercises
- Modern, clean UI
- Khmer language support (Kantumruy Pro font)
- Mobile-friendly responsive navbar
- Dropdown menu for grade navigation
- Floating chatbot at the bottom-right corner

## 🚀 Tech Stack

- **Frontend**:
  - HTML5, CSS3, JavaScript
  - Sass/SCSS for styling
  - Font Awesome for icons
  - Google Fonts (Kantumruy Pro)
- **Development Tools**:
  - Node.js & npm
  - Sass compiler
  - Live reload for development

## 🛠️ Getting Started

### Prerequisites

- Node.js v14+ (or newer)
- npm (bundled with Node.js)

### Installation

1) Clone the repository:
   ```bash
   git clone https://github.com/phanphoun/khmer-math-website-project.git
   cd khmer-math-website-project
   ```

2) Install dependencies:
   ```bash
   npm install
   ```

3) Build SCSS to CSS:
   ```bash
   npm run build-css
   ```

### Development

Start the dev workflow with auto-rebuild for SCSS:

```bash
npm start
```

This watches SCSS files and rebuilds CSS automatically.

## 📁 Project Structure

```
├── index.html          # Main entry page
├── main.css            # Compiled CSS
├── main.css.map        # Source map for CSS debugging
├── js/
│   ├── navbar.js       # Responsive navbar logic
│   └── chatbot.js      # Floating chatbot (toggle, messages, quick help)
├── styles/             # SCSS sources
│   ├── main.scss
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _header.scss
│   ├── _about-contact.scss
│   ├── _grade-pages.scss
│   └── components/
│       └── _navbar.scss
├── grade/              # Grade-specific pages
│   ├── grade7.html
│   ├── grade8.html
│   ├── grade9.html
│   ├── grade10.html
│   ├── grade11.html
│   └── grade12.html
└── package.json
```

## 🏗️ Production Build

Build CSS for production (minified via the configured script):

```bash
npm run build-css
```

## 💬 Chatbot

- Placement: bottom-right on home and grade pages
- Capabilities: open/close chat window, send messages, keyword-based quick replies
- Behavior:
  - Recognizes Khmer and English keywords for grades (7–12), e.g., “ថ្នាក់ទី៩”, “grade 9”
  - Points users to “Exercises” and “Contact” sections
- Implementation: fully client-side (no external services)

Extend later by wiring the submit handler in `js/chatbot.js` to an API or AI service.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 📞 Contact

- Email: [phanphoun855@gmail.com](mailto:phanphoun855@gmail.com)
- GitHub: [phanphoun](https://github.com/phanphoun)
