(function () {
    var scrollbarLink = document.createElement('link');
    scrollbarLink.rel = 'stylesheet';
    scrollbarLink.href = window.location.origin + '/css/scrollbar.css';

    var styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = window.location.origin + '/css/style.css';

    var docsstyleLink = document.createElement('link');
    docsstyleLink.rel = 'stylesheet';
    docsstyleLink.href = window.location.origin + '/css/docs.css';

    var bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css";

    var bootswatchLink = document.createElement('link');
    bootswatchLink.rel = 'stylesheet';
    bootswatchLink.href = "https://bootswatch.com/5/pulse/bootstrap.min.css";

    var gmiLink = document.createElement('link');
    gmiLink.rel = 'stylesheet';
    gmiLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0';

    var authorMeta = document.createElement('meta');
    authorMeta.name = 'author';
    authorMeta.content = 'Veillax';

    var ogTypeMeta = document.createElement('meta');
    ogTypeMeta.property = 'og:type';
    ogTypeMeta.content = 'website';

    var ogUrlMeta = document.createElement('meta');
    ogUrlMeta.property = 'og:url';
    ogUrlMeta.content = 'veillax.com';

    var ogDescMeta = document.createElement('meta');
    ogDescMeta.property = 'og:description';
    ogDescMeta.content = 'Now on https://veillax.com!';

    var iconLink = document.createElement('link');
    iconLink.rel = 'icon';
    iconLink.href = window.location.origin + '/img/favicon.ico';

    var appleTouchIconLink = document.createElement('link');
    appleTouchIconLink.rel = 'apple-touch-icon';
    appleTouchIconLink.href = window.location.origin + '/img/apple-touch-icon.png';

    var viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=1';
  
    const prismJSImport = document.createElement('div');
    prismJSImport.innerHTML = `<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/toolbar/prism-toolbar.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/show-language/prism-show-language.min.js"></script>`

    const prismCSSImport = document.createElement('div');
    prismCSSImport.innerHTML = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/toolbar/prism-toolbar.min.css">`

    document.head.appendChild(bootstrapLink);
    document.head.appendChild(bootswatchLink);
    document.head.appendChild(scrollbarLink);
    document.head.appendChild(styleLink);
    document.head.appendChild(docsstyleLink);
    document.head.appendChild(gmiLink);
    document.head.appendChild(authorMeta);
    document.head.appendChild(ogTypeMeta);
    document.head.appendChild(ogUrlMeta);
    document.head.appendChild(ogDescMeta);
    document.head.appendChild(iconLink);
    document.head.appendChild(appleTouchIconLink);
    document.head.appendChild(viewportMeta);
    document.head.appendChild(prismCSSImport);
    document.head.appendChild(prismJSImport);

    // Prisim


    var footer = document.getElementById('footer-div');
    if(typeof(element) != 'undefined' && element != null) {
    footer.innerHTML = `<footer id="footer" class="bg-dark text-center "><!-- Grid container --><div class="container p-4"></div><div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">Made with ♥ by Veillax</a></div></footer>`
    }
    var bootstrapScript = document.createElement('script');
    bootstrapScript.type = 'text/javascript';
    bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/js/bootstrap.bundle.min.js";

    var popperScript = document.createElement('script');
    popperScript.type = 'text/javascript';
    popperScript.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";

    document.body.appendChild(bootstrapScript);
    document.body.appendChild(popperScript);
})();
