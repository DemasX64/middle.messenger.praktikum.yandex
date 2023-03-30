import Block from "./Block";

const link = (page: Block) => {
  const root = document.querySelector('#app')!;
  
  if(root?.firstChild){
    root.firstChild.replaceWith(page.getContent()!);

    page.dispatchComponentDidMount();
  }
}

export default link;