# mm-slane site development staging 

Repository for mm-slane project site development prototype staging (using hugo SSG based on reworking of victor-hugo, hosted on netlify).

## System Requirements

* [git](https://git-scm.com)
* [NodeJS](nodejs.org) 8 or greater
* [Hugo](https://gohugo.io/overview/installing/)

## Usage

Clone this repository and run:

```bash
npm install
npm run start
```

Then visit http://localhost:3000/ - BrowserSync will automatically reload CSS or
refresh the page when stylesheets or content changes.

To build your static output to the `/dist` folder, use:

```bash
npm run build
```

## License

[MIT](LICENSE)
