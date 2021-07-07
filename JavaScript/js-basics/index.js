const _items = new WeakMap();
const _count = new WeakMap();

class Stack {
    constructor(){
        _items.set(this, []);
        _count.set(this, 0);
    }

    get count(){
        return _items.get(this).length;
    }

    push(item){
        this.stack.push(item);
    }
    pop(){
        if(_stack.get(this).length === 0)
            throw new Error('stack is empty');    
        return _stack.get(this).pop();
    }
    peek(){
        if(_stack.get(this).length == 0)
            throw new Error('stack is empty');    
        return _stack.get(this)[_stack.get(this).length - 1];
    }
}

const c = new Stack();