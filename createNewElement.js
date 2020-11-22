const createNewElement = (htmlString) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;

    return tempElement.firstElementChild;
};

export { createNewElement };
