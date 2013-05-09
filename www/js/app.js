
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Zepto provides nice js and DOM methods (very similar to jQuery,
    // and a lot smaller):
    // http://zeptojs.com/
    var $ = require('zepto');
    var bookWidth = 116;
    var bookMargen = 10;
    var addBookButton = $(".icon-add").parent();
    var booksSize = $(".books a").length;

    // Need to verify receipts? This library is included by default.
    // https://github.com/mozilla/receiptverifier
    require('receiptverifier');

    // Want to install the app locally? This library hooks up the
    // installation button. See <button class="install-btn"> in
    // index.html
    require('./install-button');

    // Write your app here.
    var initBookList = function(){        
        $(".books").css("width",(booksSize*bookWidth+bookMargen));
    };

    var appendBook = function(book){
        var blob = book.blob;
        booksSize++;
        initBookList();
        $(".books").prepend('<a href="#"><img src="'+window.URL.createObjectURL(blob)+'"/></a>');
    };

    initBookList();

    addBookButton.click(function(event){
        var pickImg = new MozActivity({
            name: "pick",
            data: {
                
            }
        });
        pickImg.onsuccess = function () { 
            appendBook(this.result);
        };
    });

});

