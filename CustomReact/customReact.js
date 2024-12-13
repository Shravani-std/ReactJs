
function customRender(reactElement, container){
     
    //method-1
    /*const domEle = document.createElement(reactElement.type)

    domEle.textContent = reactElement.children
    domEle.setAttribute('href', reactElement.props.href)
    domEle.setAttribute('target', reactElement.props.target)

    container.appendChild(domEle); */

    //Method-2 Optimal
    const domElement = document.createElement( reactElement.type)
    domElement.innerHTML = reactElement.children
    for( prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute( prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement = {
    type : 'a',
    props:{
        href: 'http://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
const mainContainer = document.querySelector('.root')

customRender(reactElement,mainContainer);// ---- Method that reactElements will be render in mainContainer in root id
