export class LinkedList<T = any> {
    private head: Node<T> | null
    private tail: Node<T> | null
    private length: number
    constructor(value: Node<T> | T) {
        this.head = value instanceof Node ? value : new Node<T>(value)
        this.tail = this.head
        this.length = 1
    }

    getLength(): number {
        return this.length
    }

    getHead(): Node<T> {
        return this.head
    }

    getTail(): Node<T> {
        return this.tail
    }

    push(value: T): this {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(): Node {
        if (this.length === 0) {
            throw new Error('LinkedList::pop -> The list is empty')
        }
        if (this.length === 1) {
            const temp = this.tail
            this.emptyList()
            return temp
        }
        let temp = this.head
        let pre = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        return temp
    }

    unshift(value: T): this {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    shift(): Node {
        if (this.length === 0) {
            throw new Error('LinkedList::shift -> The list is empty')
        }
        if (this.length === 1) {
            const temp = this.tail
            this.emptyList()
            return temp
        }
        const temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        return temp
    }

    get(index: number): Node {
        if (index < 0 || index >= this.length) {
            throw new Error('LinkedList::get -> Index out of range')
        }
        let temp: Node = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }

    set(index: number, value: T) {
        if (this.length === 0) {
            throw new Error('LinkedList::set -> The list is empty')
        }
        let temp = this.get(index)
        temp.value = value
    }

    insert (index: number, value: T) {
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index >= this.length) {
            throw new Error('LinkedList::insert -> Index out of range')
        }
        const newNode = new Node(value)
        let temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return this
    }

    remove(index: number): Node {
        if (index < 0 || index >= this.length) {
            throw new Error('LinkedList::remove -> Index out of range')
        }
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        const before = this.get(index - 1)
        const temp = before.next
        before.next = temp.next
        temp.next = null
        this.length--
        return temp
    }

    reverse(): this {
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next = temp.next
        let prev = null
        for (let i= 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }

    private emptyList(): void {
        this.head = null
        this.tail = null
        this.length = 0
    }
}

class Node<T = any> {
    public value: T
    public next: Node<T> | null
    constructor (value: T) {
        this.value = value
        this.next = null
    }
}