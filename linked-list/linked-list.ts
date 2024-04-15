export class LinkedList<T = any> {
    private head: Node<T>
    private tail: Node<T>
    private length: number
    constructor(private readonly value: Node<T>) {
        this.head = value instanceof Node ? value : new Node<T>(value)
        this.tail = this.head
        this.length = 1
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
