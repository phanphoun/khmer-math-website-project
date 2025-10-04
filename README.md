# Khmer Math Education Website

A comprehensive mathematics learning platform for Khmer students from grades 7 to 12.

## Features

- Responsive design that works on all devices
- Dedicated pages for each grade level (7-12)
- Organized lessons and exercises
- Clean and modern user interface
- Khmer language support

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Compile SCSS to CSS:
   ```bash
   npm run build-css
   ```

### Development

To start the development server with live reload:

```bash
npm start
```

This will watch for changes in your SCSS files and automatically recompile them.

## Project Structure

```
├── index.html          # Main entry point
├── main.css            # Compiled CSS
├── styles/             # SCSS source files
│   ├── main.scss       # Main stylesheet
│   ├── _variables.scss # Variables and settings
│   ├── _mixins.scss    # Mixins and functions
│   └── _grade-pages.scss # Styles for grade pages
├── grade/              # Grade-specific pages
│   ├── grade7.html
│   ├── grade8.html
│   └── ...
└── package.json        # Project configuration
```

## Building for Production

To create a production build with minified CSS:

```bash
npm run build-css
```

## License

This project is licensed under the MIT License.
