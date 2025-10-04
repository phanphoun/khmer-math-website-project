# គេហទំព័រគណិតវិទ្យាជាភាសាខ្មែរ (Khmer Math Education Website)

គេហទំព័រសិក្សាគណិតវិទ្យាសម្រាប់សិស្សខ្មែរ ពីថ្នាក់ទី៧ ដល់ថ្នាក់ទី១២។

## ✨ លក្ខណៈពិសេស

- រចនាប័ទ្មឆ្លើយតបទៅនឹងអេក្រង់គ្រប់ប្រភេទ
- មានទំព័រសម្រាប់ថ្នាក់រៀននីមួយៗ (ពីថ្នាក់ទី៧ ដល់ទី១២)
- មេរៀន និងលំហាត់ដែលរៀបចំយ៉ាងសមរម្យ
- ចំណុចប្រទាក់អ្នកប្រើប្រាស់សម័យទំនើប
- គាំទ្រភាសាខ្មែរ
- របាររុករកដែលអាចបត់បែនបានសម្រាប់ឧបករណ៍ចល័ត
- ម៉ឺនុយធ្លាក់ចុះសម្រាប់ថ្នាក់រៀននីមួយៗ

## 🚀 បច្ចេកវិទ្យាដែលប្រើ

- **Frontend**:
  - HTML5, CSS3, JavaScript
  - Sass/SCSS for styling
  - Font Awesome for icons
  - Google Fonts (Kantumruy Pro) for Khmer typography
- **Development Tools**:
  - Node.js & npm
  - Sass compiler
  - Live reload for development

## 🛠️ ការចាប់ផ្តើម

### តម្រូវការមុនពេលដំឡើង

- Node.js (ជំនាន់ v14 ឬខ្ពស់ជាងនេះ)
- npm (មកជាមួយ Node.js)

### ការដំឡើង

1. ចម្លងឃ្លាំង៖
   ```bash
   git clone https://github.com/phanphoun/khmer-math-website-project.git
   cd khmer-math-website-project
   ```

2. ដំឡើងកញ្ចប់ដែលចាំបាច់៖
   ```bash
   npm install
   ```

3. ចម្លង SCSS ទៅ CSS៖
   ```bash
   npm run build-css
   ```

### ការអភិវឌ្ឍ

ដើម្បីចាប់ផ្តើមម៉ាស៊ីនបម្រើកំពុងអភិវឌ្ឍ ជាមួយនឹងការផ្ទុកឡើងវិញដោយស្វ័យប្រវត្តិ៖

```bash
npm start
```

នេះនឹងធ្វើឱ្យមានការតាមដានការផ្លាស់ប្តូរនៅក្នុងឯកសារ SCSS របស់អ្នក ហើយចម្លងវាឡើងវិញដោយស្វ័យប្រវត្តិ។

## 📁 រចនាសម្ព័ន្ធគម្រោង

```
├── index.html          # ចំណុចចូលសំខាន់
├── main.css            # CSS ដែលបានចម្លងហើយ
├── main.css.map        # Source map for CSS debugging
├── js/
│   └── navbar.js       # JavaScript for responsive navbar
├── styles/             # ឯកសារ SCSS
│   ├── main.scss       # Stylesheet សំខាន់
│   ├── _variables.scss # អថេរ និងការកំណត់
│   ├── _mixins.scss    # Mixins និង functions
│   ├── _header.scss    # Styles for header section
│   ├── _about-contact.scss # Styles for about and contact sections
│   ├── _grade-pages.scss # Styles for grade pages
│   └── components/     # Component styles
│       └── _navbar.scss # Navbar component styles
├── grade/              # ទំព័រសម្រាប់ថ្នាក់រៀននីមួយៗ
│   ├── grade7.html
│   ├── grade8.html
│   ├── grade9.html
│   ├── grade10.html
│   ├── grade11.html
│   └── grade12.html
└── package.json        # ការកំណត់រចនាសម្ព័ន្ធគម្រោង
```

## 🏗️ ការសាងសង់សម្រាប់ផលិតផល

ដើម្បីបង្កើតការសាងសង់សម្រាប់ផលិតផលជាមួយ CSS ដែលបានបង្រួម៖

```bash
npm run build-css
```

## 🤝 ការរួមចំណែក

ការរួមចំណែកគឺជាការគួរឱ្យស្វាគមន៍! សូមធ្វើ pull request ឬបើក issue ថ្មី ប្រសិនបើអ្នកមានគំនិត ឬរកឃើញបញ្ហា។

## 📄 អាជ្ញាប័ណ្ណ

គម្រោងនេះត្រូវបានអនុញ្ញាតឱ្យប្រើក្រោមអាជ្ញាប័ណ្ណ MIT - សូមមើលឯកសារ [LICENSE](LICENSE) សម្រាប់ព័ត៌មានលម្អិត។

## 📞 ទំនាក់ទំនង

ប្រសិនបើអ្នកមានសំណួរ ឬយោបល់ សូមទាក់ទងមកយើង៖
- អ៊ីមែល: [your-email@example.com](mailto:your-email@example.com)
- GitHub: [phanphoun](https://github.com/phanphoun)
