/**
 * The topmost tree nodes are available directly as document properties:

<html> = document.documentElement
The topmost document node is document.documentElement. That’s the DOM node of the <html> tag.

<body> = document.body
Another widely used DOM node is the <body> element – document.body.

<head> = document.head
The <head> tag is available as document.head.
 * 
 * 
 * 
 * Given a DOM node, we can go to its immediate neighbors using navigation properties.

There are two main sets of them:

For all nodes: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
For element nodes only: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.
 */

// NOTES: elem.firstChild => mengambil node pertama setelah elem, namun bukan selalu dalam bentuk element. Bisa text node, spasi, line baru, indentasi
