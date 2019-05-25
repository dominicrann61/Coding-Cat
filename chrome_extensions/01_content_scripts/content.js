
// we will see this log in the browser js console
console.log('Content Script Running');



// get all the paragraphs
 let p = document.getElementsByTagName('p');
    //loop through all those paragraphs
        for (p of p) {
        //set all the paragraphs background-color to purple
            p.style['background-color'] = '#A020F0';
        }
