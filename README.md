# Business Manager Prototype System

A collaborative prototype environment for SFCC Business Manager that enables Product Managers to experiment with UX updates and design changes.

## Quick Start

### 1. Clone the Repository

```bash
git clone [repository-url]
cd bm-prototype
```

### 2. Open in Browser

Simply open `index.html` in your web browser. No build process or dependencies required!

```bash
# Mac
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### 3. Create Your Branch

```bash
# Create your personal branch
git checkout -b pm-yourname

# Example:
git checkout -b pm-luke
```

## Project Structure

```
bm-prototype/
├── index.html              # Landing page / navigation hub
├── assets/
│   ├── css/
│   │   ├── core.css       # Core SFCC styles (colors, typography, layout)
│   │   ├── components.css # Reusable UI components (buttons, cards, tables)
│   │   └── screens.css    # Screen-specific styles
│   ├── js/
│   │   ├── navigation.js  # Simple navigation utilities
│   │   └── interactions.js # Click handlers and basic interactions
│   ├── images/            # Screenshots, icons, logos
│   └── figma/             # Exported Figma assets
├── screens/
│   ├── dashboard.html
│   ├── orders.html
│   ├── products.html
│   └── customers.html
├── README.md
└── .gitignore
```

## Available Screens

- **Dashboard** (`screens/dashboard.html`) - Overview with key metrics and charts
- **Orders** (`screens/orders.html`) - Order management with filtering and search
- **Products** (`screens/products.html`) - Product catalog with grid view
- **Customers** (`screens/customers.html`) - Customer database and profiles

## Working with Claude Code

### Example Prompts

**Create a new screen:**
```
Create a new site preferences screen with tabs for General, Checkout, Email, and Payment settings. Use the existing design system.
```

**Modify existing screen:**
```
Update the dashboard to move the revenue chart to the top and make it twice as large.
```

**Add new component:**
```
Add a data export modal to the orders page with options for CSV, Excel, and PDF formats.
```

**Update styling:**
```
Change the primary blue color to #0070D2 across all screens.
```

**Extract from Figma:**
```
Here's a screenshot of the new product detail page design. Create the HTML/CSS to match this.
[attach screenshot]
```

## Collaboration Workflow

### Branch-Per-PM Strategy

Each PM works on their own branch for experimentation:

```bash
# Switch to your branch
git checkout pm-yourname

# Make changes and commit
git add .
git commit -m "Add filter bar to products page"

# Push to remote
git push origin pm-yourname
```

### Sharing Updates

When you're ready to share your work with the team:

```bash
# 1. Make sure your changes are committed
git status

# 2. Push your branch
git push origin pm-yourname

# 3. Create a Pull Request on GitHub/GitLab
# Go to the repository and click "New Pull Request"
# Select your branch (pm-yourname) to merge into main
# Add description of your changes
```

### Syncing with Main

Periodically sync your branch with main to get others' updates:

```bash
# Switch to main and pull latest
git checkout main
git pull origin main

# Switch back to your branch and merge
git checkout pm-yourname
git merge main

# Resolve any conflicts if they occur
# Then push the merged version
git push origin pm-yourname
```

## Design System

### Colors

The design system uses CSS custom properties defined in `assets/css/core.css`:

- Primary: `var(--bm-primary)` - #0176D3
- Success: `var(--bm-success)` - #2E844A
- Warning: `var(--bm-warning)` - #FFB75D
- Danger: `var(--bm-danger)` - #EA001E

### Typography

- Font Family: System fonts (Apple, Segoe UI, Roboto, etc.)
- Base Size: 14px
- Headings: Semibold weight

### Spacing Scale

- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px

### Components

All reusable components are in `assets/css/components.css`:

- Buttons: `.bm-button` (primary, secondary, danger variants)
- Cards: `.bm-card`
- Tables: `.bm-table`
- Forms: `.bm-form-field`, `.bm-form-label`
- Badges: `.bm-badge`
- Alerts: `.bm-alert`
- Modals: `.bm-modal`
- Tabs: `.bm-tabs`

## Adding Screenshots/Assets

1. Place images in `assets/images/`
2. Place Figma exports in `assets/figma/`
3. Reference in HTML:

```html
<img src="../assets/images/screenshot.png" alt="Description">
```

## Tips for PMs

### Testing Your Changes

1. Save your HTML/CSS files
2. Refresh the browser (Cmd+R or F5)
3. Changes appear immediately - no build process!

### Common Tasks

**Change a color globally:**
Edit the CSS variable in `assets/css/core.css`:
```css
--bm-primary: #0070D2;  /* Change this value */
```

**Add a new page:**
1. Copy an existing screen HTML file
2. Update the content
3. Add link to navigation in header

**Modify layout:**
Most layouts use CSS Grid or Flexbox. Ask Claude to help adjust grid columns or flex properties.

### Best Practices

- Always work on your own branch
- Commit frequently with descriptive messages
- Test in multiple browsers (Chrome, Firefox, Safari)
- Keep the design system consistent (use existing components)
- Document major changes in commit messages

## Troubleshooting

### Links not working
- Check that paths are correct (relative paths: `../assets/css/core.css`)
- Ensure you're opening from the project root

### Styles not loading
- Check browser console for errors (F12)
- Verify CSS file paths in `<link>` tags
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)

### Git conflicts
- Ask Claude Code to help resolve merge conflicts
- Or reach out to the team for assistance

## Technology Stack

- **HTML5** - Structure
- **CSS3** - Styling (with CSS Custom Properties)
- **Vanilla JavaScript** - Interactions
- **No build process** - Just open HTML files!

## Support

For questions or issues:
1. Check this README first
2. Ask Claude Code for help
3. Reach out to the PM team in your collaboration channel

## Contributing

When creating new screens or components:
1. Follow the existing design system
2. Reuse components from `components.css`
3. Keep code clean and well-organized
4. Test across different screen sizes
5. Document any new patterns or conventions

---

**Happy Prototyping!** 🎨
