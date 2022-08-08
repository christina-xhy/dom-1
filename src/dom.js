  window.dom = {
    create(string){
      const container = document.createElement('template');
    container.innerHTML = string.trim();
    console.log(container);
    return container.content.firstChild;
    },
    after(node,node2){
        node.parentNode.insertBefore(node2,node.nextSibling);
    },//在下一个节点的前面前面插入新的元素。新插入node2，加一个弟弟
    before(node,node2){
      node.parentNode.insertBefore(node2,node);//加一个哥哥
  },
  append(parent,node){
    parent.appendChild(node)
  },
   wrap(node,parent){
    dom.before(node,parent)//先把新的节点放在node的前面。
    dom.append(parent,node)//在给node加一个新的孩子。
   },
   remove(node){node.parentNode.removeChild(node)
   return  node
   },
   // 如果childNodes里面的元素被删除，length会产生变化。
   empty(node){
    // const childNodes = node.childNodes
    //const {childNodes} = node (上面和下面两种写法互换)
    const array =[]
    let x = node.firstChild
    while(x){
      array.push(dom.remove(node.firstChild))
      x = node.firstChild
    }
    return array
    /* for(let i=0;i<childNodes.length;i++){
      dom.remove(childNodes[i])
      array.push(childNodes[i])
    }
    return array
    //node.innerHTML = '' */
   },
   attr(node,name,value){//重载，通过参数的个数写不同的代码
    if (arguments.length === 3){
      node.setAttribute(name,value)//set
   }else if(arguments.length === 2){
      return node.getAttribute(name)//get
   }
  },
  text(node,string){ // 适配，判断这个node是否有innerText属性
    if(arguments.length === 2)
    if('innerText' in node){
      node.innerText = string //ie
    }else{
      node.textContent = string//firefox/chrome
    }else if(arguments.length === 1 ){
      if('innerText'in node){
        return node.innerText
      }else{
        return node.textContent
      }
    }
   },
   html(node,string){ // 重载
    if(arguments.length === 2){
      node.innerHTML = string
    }else if(arguments.length === 1){
      return node.innerHTML
    }
   },
    //下一行代码key //key：border/color
    //node.style.border = ...
    //node.style.color = ...

   /* style(node,object){
    for(let key in object){
      node.style[key]=object[key]//必须是中括号表示变量
    }
   } */

   style(node,name,value){
      if(arguments.length === 3){
    //dom.style(div,'color','red')
    node.style[name] = value
   }else if(arguments.length === 2){
    if (typeof name === 'string'){
    //dom.style(div,'color')
    return node.style[name]
    }else if(name instanceof Object){
      //dom.style(div,{name:'value'})
      const object = name
      for(let key in object){
        node.style[key]= object[key]
    }
   }
  }
 },
class:{
  add(node,className){
    node.classList.add(className)
  },
  remove(node,className){
    node.classList.remove(className)
  },
  has(node,className){
   return node.classList.contains(className)
  }
 },

on(node,eventName,fn){
  node.addEventListener(eventName,fn)
},
off(node,eventName,fn){
  node.removeEventListener(eventName,fn)
},
find(selector,scope){

  return (scope || document).querySelectorAll(selector)
},
parent(node){
  return node.parentNode
},
children(node){
  return node.children
},
siblings(node){
  return Array.from(node.parentNode.children)
  .filter(n=>n!=node)
},
next(node){
  let x = node.nextSibling
  while (x && x.nodeType === 3){
    x = x.nextSibling
  }
  return x
 },
 previous(node){
  let x = node.previousSibling
  while (x && x.nodeType === 3){
    x = x.previousSibling
  }
  return x
 },

 each(nodeList,fn){
  for(let i=0;i<nodeList.length;i++){
    fn.call(null,nodeList[i])
  }
 },
 index(node){
  const list= dom.children(node.parentNode)
  let i
  for (i=0;i<list.length;i++){
    if(list[i] === node){
      break
    }
 } 
      return i
 }
}