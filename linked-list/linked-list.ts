export class LinkedList<T = any> {
    private head: Node<T> | null
    private tail: Node<T> | null
    private length: number
    constructor(private readonly value: Node<T> | T) {
        this.head = value instanceof Node ? value : new Node<T>(value)
        this.tail = this.head
        this.length = 1
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
            throw new Error('The list is empty')
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
            throw new Error('The list is empty')
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
            throw new Error('Invalid index value')
        }
        let temp: Node = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
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
