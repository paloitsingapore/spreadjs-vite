# SpreadjsVite

## Description

When building a Microfrontend React application importing '@mescius/spread-sheets-designer' using vite and vite-plugin-top-level-await plugin, the build fails.

### Why top-level-await

Remote applications can work with the federation as long as they use the vite federation and they await polyfill as described in their documentation for react.

https://github.com/originjs/vite-plugin-federation?tab=readme-ov-file#static-import

## Expected behavior

Build should succeed with top-level await plugin using vite.

## Code Reference

Refer update in files: package.json, vite.config.ts, app.tsx

Error encountered

```bash
x Build failed in 43.58s
error during build:
[vite-plugin-top-level-await] Failed to convert rust `String` into napi `string`
Error: Failed to convert rust `String` into napi `string`
Warning: command "vite build" exited with non-zero status code
```


### Start the application

Run `npx nx serve spreadjs-vite` to start the development server. Works fine.

### Build for production

Run `npx nx build spreadjs-vite` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed. This gives build error.
