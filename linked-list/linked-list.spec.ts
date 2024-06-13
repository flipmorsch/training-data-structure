import {LinkedList} from "./linked-list";

describe('LinkedList class', () => {
    describe('push function tests', () => {
        test('should head and tail have the same value when LinkedList length is 1', () => {
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

    describe('pop function tests', () => {
        test('should throw an error if LinkedList length is 0', () => {
            const sut = new LinkedList(10)
            sut.pop()
            expect(sut.getLength()).toEqual(0)
            expect(() => sut.pop()).toThrow('LinkedList::pop -> The list is empty')
        })

        test('should call emptyList() private method when LinkedList length is 1', () => {
            const sut = new LinkedList(10)
            const spyEmptyList = jest.spyOn(sut, 'emptyList' as any)
            sut.pop()
            expect(spyEmptyList).toHaveBeenCalledTimes(1)
        })

        test('should update length after pop', () => {
            const sut = new LinkedList(10)
            expect(sut.getLength()).toEqual(1)
            sut.pop()
            expect(sut.getLength()).toEqual(0)
        })

        test('should head and tail have the same value when LinkedList length is 0', () => {
            const sut = new LinkedList(10)
            sut.pop()
            expect(sut.getHead()).toStrictEqual(sut.getTail())
        })

        test('should update head and tail Nodes', () => {
            const sut = new LinkedList(10)
            expect(sut.getHead().value).toBe(10)
            expect(sut.getTail().value).toBe(10)
            sut.pop()
            expect(sut.getHead()).toBeNull()
            expect(sut.getTail()).toBeNull()
        })

        test('should return the deleted element', () => {
            const sut = new LinkedList(10)
            sut.push(20)
            const poppedNode = sut.pop()
            expect(poppedNode.value).toStrictEqual(20)
        })
    })

    describe('unshift function tests', () => {
        test('should head and tail have the same value when LinkedList length is 1', () => {
            const sut = new LinkedList(10)
            sut.pop()
            sut.unshift(10)
            expect(sut.getHead()).toStrictEqual(sut.getTail())
        })

        test('should update head and tail Nodes', () => {
            const sut = new LinkedList(10)
            sut.unshift(20)
            sut.unshift(30)
            const head = sut.getHead()
            const tail = sut.getTail()
            expect(head.value).toEqual(30)
            expect(head.next.value).toEqual(20)
            expect(head.next.next.value).toEqual(10)
            expect(tail.value).toEqual(10)
            expect(tail.next).toBeNull()
        })

        test('should update length after unshift', () => {
            const sut = new LinkedList(10)
            expect(sut.getLength()).toEqual(1)
            sut.push(20)
            expect(sut.getLength()).toEqual(2)
            sut.push(30)
            expect(sut.getLength()).toEqual(3)
        })
    })
})