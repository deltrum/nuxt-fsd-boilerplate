# Stylelint Setup & Best Practices

## Overview

This project uses [Stylelint](https://stylelint.io/) with the [stylelint-order](https://github.com/hudochenkov/stylelint-order) plugin to enforce consistent CSS property ordering across all `.css` and `.vue` files.

Properties are ordered by **logical grouping** (not alphabetically), following an outside-in mental model:

| Order | Group        | Examples                                          |
|-------|--------------|---------------------------------------------------|
| 1     | Positioning  | `position`, `top`, `right`, `z-index`             |
| 2     | Display      | `display`, `flex-direction`, `gap`, `grid-*`      |
| 3     | Box Model    | `width`, `height`, `margin`, `padding`, `overflow` |
| 4     | Typography   | `font-size`, `line-height`, `color`, `text-align` |
| 5     | Visual       | `background`, `border`, `border-radius`, `opacity` |
| 6     | Animation    | `transform`, `transition`, `animation`            |
| 7     | Misc         | `cursor`, `pointer-events`, `user-select`         |

This ordering makes CSS blocks scannable top-to-bottom: layout first, then sizing, then text, then decoration.

## VSCode Setup

### 1. Install the Extension

Install the official Stylelint extension:

- **Extension ID**: `stylelint.vscode-stylelint`
- Or search "Stylelint" in the Extensions panel (`Ctrl+Shift+X`)

> The project already recommends this in `.vscode/extensions.json`. VSCode should prompt you to install it when you open the project.

### 2. Workspace Settings (already configured)

The project includes `.vscode/settings.json` with:

```jsonc
{
  // Auto-fix property order on save
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "explicit"
  },
  // Lint both CSS files and Vue SFCs
  "stylelint.validate": ["css", "vue"],
  // Disable VSCode's built-in CSS validation (Stylelint handles it)
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false
}
```

With this config, every time you save a `.css` or `.vue` file, Stylelint will automatically reorder properties to match the logical grouping.

### 3. Verify It Works

1. Open any `.vue` file with a `<style>` block
2. Intentionally mis-order a property (e.g., put `color` before `display`)
3. Save the file — the property should snap to the correct position
4. If nothing happens, check the OUTPUT panel (`Ctrl+Shift+U`) and select "Stylelint" from the dropdown

## CLI Usage

```bash
# Check for violations
yarn lint:style

# Auto-fix all violations
yarn lint:style:fix

# Run ESLint + Stylelint together
yarn lint:all

# Auto-fix both
yarn lint:all:fix
```

## Writing CSS — Best Practices

### Follow the Property Order

Write properties in logical group order. Within each group, follow the order defined in `.stylelintrc.json`. If you're unsure, just write naturally and save — the auto-fixer will reorder for you.

```css
/* Good — logical grouping */
.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  padding: 2rem;
  font-size: 1rem;
  color: var(--color-text);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  transition: box-shadow 0.2s ease;
  cursor: pointer;
}
```

### Use CSS Custom Properties

Design tokens are defined in `app/styles/main.css`. Always prefer them over hard-coded values:

```css
/* Good */
.card {
  color: var(--color-text);
  background-color: var(--color-surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

/* Avoid */
.card {
  color: #1a1a2e;
  background-color: #fff;
  border-radius: 8px;
}
```

### Use Scoped Styles

Always use `<style scoped>` in Vue SFCs to prevent style leakage between components:

```vue
<style scoped>
.my-component {
  padding: 1rem;
}
</style>
```

### Use BEM Naming

Follow BEM convention for class names — `.block__element--modifier`:

```css
.card { }
.card__title { }
.card__title--highlighted { }
.card__body { }
```

### No Empty Lines Between Declarations

The config enforces `declaration-empty-line-before: never`. Keep declarations compact within a rule block:

```css
/* Good */
.card {
  display: flex;
  padding: 1rem;
  color: var(--color-text);
}

/* Bad */
.card {
  display: flex;

  padding: 1rem;

  color: var(--color-text);
}
```

## Customizing the Property Order

The full order is defined in `.stylelintrc.json` under `order/properties-order`. Each group has:

```jsonc
{
  "groupName": "display",          // Label for the group
  "emptyLineBefore": "never",      // No blank line before group
  "noEmptyLineBetween": true,      // No blank lines within group
  "properties": ["display", ...]   // Properties in this group
}
```

To add a new property, place it in the appropriate group at the position that makes sense contextually. Properties not listed in any group will be reported as unordered — add them to a group or they'll float to the end.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Extension not linting | Check "Stylelint" in OUTPUT panel for errors. Ensure `node_modules` is installed. |
| Auto-fix not working on save | Verify `source.fixAll.stylelint` is `"explicit"` in settings, not `"never"`. |
| Conflicts with Prettier | This project doesn't use Prettier. If you add it, put Stylelint's fix after Prettier in `codeActionsOnSave`. |
| Properties not reordering | The property might not be listed in `.stylelintrc.json`. Add it to the appropriate group. |
| Vue `<style>` not linted | Check that `"stylelint.validate"` includes `"vue"` in settings. |
