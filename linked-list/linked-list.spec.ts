import {LinkedList} from "./linked-list";

describe('LinkedList class', () => {
    describe('push function tests', () => {
        test('should head and tail have the same value when LinkedList length is 0', () => {
            const sut = new LinkedList(10)
            sut.pop()
            sut.push(10)
            expect(sut.getHead()).toStrictEqual(sut.getTail())
        })

        test('should update head and tail Nodes', () => {
            const sut = new LinkedList(10)
            sut.push(20)
            sut.push(30)
            const head = sut.getHead()
            const tail = sut.getTail()
            expect(head.value).toEqual(10)
            expect(head.next.value).toEqual(20)
            expect(head.next.next.value).toEqual(30)
            expect(tail.value).toEqual(30)
            expect(tail.next).toBeNull()
        })

        test('should update length after push', () => {
            const sut = new LinkedList(10)
            expect(sut.getLength()).toEqual(1)
            sut.push(20)
            expect(sut.getLength()).toEqual(2)
            sut.push(30)
            expect(sut.getLength()).toEqual(3)
        })
    })
})