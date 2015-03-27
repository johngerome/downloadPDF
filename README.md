# downloadPDF
jQuery Plugin wrapper for jPDF that will convert html to pdf .

### Plugin Options
 - ```data-filename``` = Filename for the pdf file.
 -  ```data-container``` = Container of the pdf content you want to convert. must be an ID.

### Example
 - Html Markup
```html
<div id="pdfCon-hello-world">
   <img src="lorempixel.com/100/200" alt="example image">
   <p>Hello world, Hello Github.</p>
   <button class="js-download-pdf" data-filename="hello-world-1-0-0" data-container="pdfCon-hello-world">Download PDF Version</button>
</div>
```
 - Initialize Plugin
```javascript
$("#pdfCon-hello-world").downloadPdf();
```

