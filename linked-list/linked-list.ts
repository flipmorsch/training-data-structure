export class LinkedList<T = any> {
    private head: Node<T>
    private tail: Node<T>
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
}

class Node<T = any> {
    public value: T
    public next: Node<T> | null
    constructor (value: T) {
        this.value = value
        this.next = null
    }
}
