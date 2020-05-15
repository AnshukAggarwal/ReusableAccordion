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
