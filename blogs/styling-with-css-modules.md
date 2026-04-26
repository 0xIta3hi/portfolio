---
title: Styling with CSS Modules
date: 2024-01-20
---

# Styling with CSS Modules

CSS Modules are a powerful way to style your React components with scoped CSS. Let's explore how to use them effectively in your Next.js projects.

## What are CSS Modules?

CSS Modules are CSS files where all class names and animation names are scoped locally by default. This prevents naming conflicts and makes styles more maintainable.

## Example Usage

Create a CSS Module file:

```css
/* Button.module.css */
.button {
  background-color: var(--text-color);
  color: var(--primary);
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: var(--secondary);
  transform: scale(1.05);
}
```

Then use it in your component:

```javascript
import styles from './Button.module.css';

export default function Button({ children }) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
}
```

## Benefits

1. **Scoped Styles** - No global namespace pollution
2. **Maintainability** - Easy to delete styles without affecting other components
3. **Performance** - Only required CSS is loaded
4. **Developer Experience** - Great IDE support and autocomplete

## Tips and Tricks

### Multiple Classes

```javascript
import styles from './Card.module.css';

export default function Card({ featured }) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      Content
    </div>
  );
}
```

### Combining with Tailwind

You can combine CSS Modules with Tailwind CSS for the best of both worlds!

## Conclusion

CSS Modules are a great choice for managing styles in React applications, especially when combined with Next.js. They provide a scalable and maintainable approach to styling.
