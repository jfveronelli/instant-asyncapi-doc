# instant-asyncapi-doc
Instant AsynAPI 2.0 schema renderer.

This library is a wrapper around [asyncapi-react](https://github.com/asyncapi/asyncapi-react).
It lets you show your microservice AsyncAPI schema in a pretty web page by creating a very simple HTML page with a couple of tags.


## Usage

Just add the following parts to your HTML page:
- the script from the CDN: `https://cdn.jsdelivr.net/gh/jfveronelli/instant-asyncapi-doc/dist/index.js`
- the style sheet from the CDN: `https://cdn.jsdelivr.net/gh/jfveronelli/instant-asyncapi-doc/dist/index.css`
- a tag that will be used as container for the rendered documentation: `id="api-container"`
- the URL (absolute or relative) to the AsyncAPI yaml spec: `data-url="your_spec.yml"`

Or copy & paste this page:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jfveronelli/instant-asyncapi-doc/dist/index.css"/>
  </head>
  <body>
    <div id="api-container" data-url="specs/asyncapi.yml"></div>
    <script src="https://cdn.jsdelivr.net/gh/jfveronelli/instant-asyncapi-doc/dist/index.js"></script>
  </body>
</html>
```

An example is worth a thousand words, so go to [here](https://jfveronelli.github.io/instant-asyncapi-doc/), and then view the page source code.


## Development

In case that you want to customize the library, or make any contribution, you'll need to have nodejs installed.

To start a server in development mode and view a sample page:

``` bash
# npm run start
```

To build the distribution files:

``` bash
# npm run build
```
