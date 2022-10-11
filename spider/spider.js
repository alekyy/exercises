const foundUrls = [];

function findUrls() {
    const anchorElements = document.querySelectorAll('a');

    anchorElements.forEach(el => {
        const elHref = el.getAttribute('href')
        if (elHref)
            foundUrls.push(el.getAttribute('href'))
    })
    
    console.log(foundUrls);
}

