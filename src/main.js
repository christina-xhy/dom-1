
const div = dom.create("<div>newDiv</div>");
console.log(div);
dom.after(test,div);

const div3 = dom.create('<div3 id= "parent"></div>');
dom.wrap(test,div3)

const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test,'title','hi,I am frank');//增加元素的属性
const title = dom.attr(test,'title')//获取元素的属性值
console.log(`title:${title}`)

dom.text(test,'你好，这是新的内容')//修改了test的文本内容，之前是test。
// 同时html<div>test</div>中的段落也会一起被修改
dom.text(test)

dom.style(test,{border: '1px solid red',color: 'blue'})//如果是对象，就是设置
console.log(dom.style(test,'border'))//如果是字符串，获取这个值
dom.style(test,'border','1px solid black') //有可能设置，有可能读


dom.class.add(test,'red')
dom.class.add(test,'blue')
dom.class.remove(test,'blue')
console.log(dom.class.has(test,'blue'))//返回true false 布尔值

const fn = () =>{
    console.log('点击了')
}
dom.on(test,'click',fn)
dom.off(test,'click',fn)

const testDiv = dom.find('#test')[0]
 dom.find('.red',testDiv)//指定查看哪个范围的属性值
console.log(testDiv)
const test2 =dom.find('#test2')[0]
console.log(dom.find('.red',test2)[0])


console.log(dom.parent(test))

const s2 = dom.find('#s2')[0]
console.log(dom.siblings(s2))
console.log(dom.next(s2))
console.log(dom.previous(s2))

const t = dom.find('#travel')[0]
 dom.each(dom.children(t),(n)=>dom.style(n,'color','red'))
console.log(dom.index(s2))



