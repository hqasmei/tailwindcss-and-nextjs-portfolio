# Tailwind CSS and Next.js Portfolio

This is a template for creating a portfolio with Tailwind CSS and Next.js. Based on [Hosna Qasmei's portfolio](https://github.com/hqasmei/tailwindcss-and-nextjs-portfolio). This fork incorporates developing in Nix/NixOS plus customization. 

![Portfolio Demo](demo/demo.gif)

## How it works

Fork or download the repo and change whatever you need to change for your needs.

## Running Locally
Setup self-contained Nix Environment
```
nix-shell -p nodejs_21
npm install -D tailwindcss postcss autoprefixer
```

Can run the application in VS Code or a terminal and it will be available at `http://localhost:3000`.

```
npm run dev
```
