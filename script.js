/**
 * IIFE
 * 1) function to iterate through all the accordions in the HTML on script load
 * 2) function that will create or initialize one accordion. This function may or may not use other helper functions.
 *    Also this function will be exposed as an API to create a dynamic Accordion.
 * 3) Scope of Dynamic Accordion: There will be some HTML added to the page. The id of the HTML will be passed to one of our functions that will 
 *    inturn create the accordion. Same thing goes for the item.
 */

(function () {
    // gets all the accordions on the page
    function getAccordions() {
        document.querySelectorAll('.aaAccordion').forEach((accordion) => {
            //console.log(accordion);//this is the main div for the accordion.Line 10,33 from HTML
            createAccordion(accordion);
        });
    }

    // takes the accordion conatainer as input and creates an accordion.
    function createAccordion(accordionContainer) {
        accordionContainer.querySelectorAll('.aaCardHeader').forEach((cardHeader) => {
            //console.log(cardHeader);//this is the careheader we can click on. Eg. Line 12, 22 from HTML
            attachHeaderHandler(cardHeader,accordionContainer);
        })
    }

    function attachHeaderHandler(headerContainer, accordionContainer){
        headerContainer.addEventListener('click', headerClickHandler.bind(this, accordionContainer))
    }

    function headerClickHandler(accordionContainer, evt) {
        var containerId = evt.currentTarget.getAttribute('data-target');

        accordionContainer.querySelectorAll('.aaContent').forEach((aaContent) => {
            aaContent.classList.remove('aaShow');
            if (aaContent.getAttribute('id') === containerId) {
                aaContent.classList.add('aaShow');
            }
        });
    }

    getAccordions();

    window.aaAccordion = {
        createAccordion:createAccordion,
        addItem:attachHeaderHandler
    }
})();

function addAccordion(){
    var contentHTML = '<div class="aaCard"><div class="aaCardHeader cardHeader" data-target="content1">This is the heading 1 of the card.</div><div class="aaContent aaCollapse" id="content1">This is the content of the first card.</div></div><div class="aaCard"><div class="aaCardHeader cardHeader" data-target="content2">This is the heading 2 of the card.</div><div class="aaContent aaCollapse aaShow" id="content2">This is the content of the Second card.</div></div>';
    var container = document.createElement('div');
    container.setAttribute('class', 'aaAccordion');
    container.innerHTML = contentHTML
    document.body.appendChild(container);
    aaAccordion.createAccordion(container);

}
