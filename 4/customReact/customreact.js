function customRender(reactElement,container){

  /* 
    ///It is like version1 of OUR React
    /// The problem with this is when we have only one attribute(ex: only h1 or only div) or more than 2  

    const domElement = document.createElement
    (reactElement.type)
    ///adding content to element
    domElement.innerHTML=reactElement.children
    /// setting attributes
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    //adding element to container 
    container.appendChild(domElement)

  */  

    const domElement = document.createElement
    (reactElement.type)
   
    domElement.innerHTML=reactElement.children
    
    for(const prop in reactElement.props){
     if(prop==='children') continue;    // (earlier it was like this and we can ignore it)

      domElement.setAttribute(prop,reactElement.props
      [prop])
    }
   
    container.appendChild(domElement)
   



}


const reactElement = {

      type:'a',
      props: {
         href:'https://google.com',
         target:'_blank'
      },
      children: 'Click me to visit google' 


}


const mainContainer = document.querySelector('#root');

/// add element to root (a method to render element)
customRender(reactElement,mainContainer)