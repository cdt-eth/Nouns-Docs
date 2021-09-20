---
sidebar_position: 11
---

# connected-react-router

Overview of package...

## Install

Build your site for a specific locale:

```bash
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```bash
npm run build
```

## Purpose

Modify `docusaurus.config.js` to add support for the `fr` locale:

```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
};
```

## Key Modules

Copy the `docs/intro.md` file to the `i18n/fr` folder:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Caution example

:::caution

In development, you can only use one locale at a same time.

:::

## Images

Image 1

![Locale Dropdown](/img/tutorial/localeDropdown.png)
