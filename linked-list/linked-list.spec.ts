import {LinkedList, Node} from "./linked-list";

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

    describe('shift function tests', () => {
        test('should throw an error if LinkedList length is 0', () => {
            const sut = new LinkedList(10)
            sut.shift()
            expect(sut.getLength()).toEqual(0)
            expect(() => sut.shift()).toThrow('LinkedList::shift -> The list is empty')
        })

        test('should call emptyList() private method when LinkedList length is 1', () => {
            const sut = new LinkedList(10)
            const spyEmptyList = jest.spyOn(sut, 'emptyList' as any)
            sut.shift()
            expect(spyEmptyList).toHaveBeenCalledTimes(1)
        })

        test('should update length after pop', () => {
            const sut = new LinkedList(10)
            expect(sut.getLength()).toEqual(1)
            sut.shift()
            expect(sut.getLength()).toEqual(0)
        })

        test('should head and tail have the same value when LinkedList length is 0', () => {
            const sut = new LinkedList(10)
            sut.shift()
            expect(sut.getHead()).toStrictEqual(sut.getTail())
        })

        test('should update head and tail Nodes', () => {
            const sut = new LinkedList(10)
            expect(sut.getHead().value).toBe(10)
            expect(sut.getTail().value).toBe(10)
            sut.shift()
            expect(sut.getHead()).toBeNull()
            expect(sut.getTail()).toBeNull()
        })

        test('should return the deleted element', () => {
            const sut = new LinkedList(10)
            sut.push(20)
            const shiftedNode = sut.shift()
            expect(shiftedNode.value).toStrictEqual(10)
        })
    })

    describe('get function tests', () => {
        test('should return the Node at the given index', () => {
            const sut = new LinkedList(10)
            sut.push(20)
            sut.push(30)
            sut.push(40)
            sut.push(50)
            expect(sut.get(0).value).toEqual(10)
            expect(sut.get(1).value).toEqual(20)
            expect(sut.get(2).value).toEqual(30)
            expect(sut.get(3).value).toEqual(40)
            expect(sut.get(4).value).toEqual(50)

        })

        test('should return null if the given index is out of bounds', () => {
            const sut = new LinkedList(10)
            expect(() => sut.get(1)).toThrow('LinkedList::get -> Index out of range')
        })
    })

    describe('set function tests', () => {
        test('should update the value of the Node at the given index', () => {
            const sut = new LinkedList(10)
            sut.push(20)
            sut.push(30)
            sut.push(40)
            sut.push(50)
            sut.set(2, 35)
            expect(sut.get(2).value).toEqual(35)
        })

        test('should throw an error if the LinkedList is empty', () => {
            const sut = new LinkedList(10)
            sut.pop()
            expect(() => sut.set(0, 10)).toThrow('LinkedList::set -> The list is empty')
        })

        test('should throw an error if the given index is out of bounds', () => {
            const sut = new LinkedList(10)
            expect(() => sut.set(1, 10)).toThrow('LinkedList::get -> Index out of range')
        })
    })

    describe('insert function tests', () => {
        test('should insert a new Node at the given index', () => {
            const sut = new LinkedList(10)
            sut.push(20)
            sut.push(30)
            sut.push(40)
            sut.push(50)
            sut.insert(2, 25)
            expect(sut.get(2).value).toEqual(25)
            expect(sut.get(3).value).toEqual(30)
        })

        test('should insert a new Node at the beginning of the LinkedList', () => {
            const sut = new LinkedList(10)
            sut.push(20)
            sut.push(30)
            sut.push(40)
            sut.push(50)
            sut.insert(0, 5)
            expect(sut.get(0).value).toEqual(5)
            expect(sut.get(1).value).toEqual(10)
        })

        test('should insert a new Node at the end of the LinkedList', () => {
            const sut = new LinkedList(10)
            sut.push(20)
            sut.push(30)
            sut.push(40)
            sut.push(50)
            sut.insert(5, 55)
            expect(sut.get(5).value).toEqual(55)
            expect(sut.get(4).value).toEqual(50)
        })

        test('should call unshift if linked list is empty', () => {
            const sut = new LinkedList(10)
            const spyUnshift = jest.spyOn(sut, 'unshift')
            sut.insert(0, 10)
            expect(spyUnshift).toHaveBeenCalledTimes(1)
        })

        test('should throw an error if the given index is out of bounds', () => {
            const sut = new LinkedList(10)
            expect(() => sut.insert(2, 10)).toThrow('LinkedList::insert -> Index out of range')
        })
    })

    describe('remove function tests', () => {
        test('should remove the Node at the given index', () => {
            const sut = new LinkedList(10)
            sut.push(20)
            sut.push(30)
            sut.push(40)
            sut.push(50)
            sut.remove(2)
            expect(sut.get(2).value).toEqual(40)
            expect(sut.get(1).value).toEqual(20)
        })

        test('should remove the first Node of the LinkedList', () => {
            const sut = new LinkedList(10)
            sut.push(20)
            sut.push(30)
            sut.push(40)
            sut.push(50)
            sut.remove(0)
            expect(sut.get(0).value).toEqual(20)
            expect(sut.get(1).value).toEqual(30)
        })

        test('should remove the last Node of the LinkedList', () => {
            const sut = new LinkedList(10)
            sut.push(20)
            sut.push(30)
            sut.push(40)
            sut.push(50)
            sut.remove(4)
            expect(sut.get(3).value).toEqual(40)
            expect(sut.getTail().next).toBeNull()
        })

        test('should throw an error if the given index is out of bounds', () => {
            const sut = new LinkedList(10)
            expect(() => sut.remove(1)).toThrow('LinkedList::remove -> Index out of range')
        })
    })

    describe('reverse function tests', () => {
        test('should reverse the LinkedList', () => {
            const sut = new LinkedList(10)
            sut.push(20)
            sut.push(30)
            sut.push(40)
            sut.push(50)
            sut.reverse()
            expect(sut.get(0).value).toEqual(50)
            expect(sut.get(1).value).toEqual(40)
            expect(sut.get(2).value).toEqual(30)
            expect(sut.get(3).value).toEqual(20)
            expect(sut.get(4).value).toEqual(10)
        })

        test('should update head and tail Nodes', () => {
            const sut = new LinkedList(10)
            sut.push(20)
            sut.push(30)
            sut.push(40)
            sut.push(50)
            sut.reverse()
            const head = sut.getHead()
            const tail = sut.getTail()
            expect(head.value).toEqual(50)
            expect(head.next.value).toEqual(40)
            expect(head.next.next.value).toEqual(30)
            expect(head.next.next.next.value).toEqual(20)
            expect(head.next.next.next.next.value).toEqual(10)
            expect(tail.value).toEqual(10)
            expect(tail.next).toBeNull()
        })
    })

    describe('constructor tests', () => {
        test('should instantiate a linked list when head and tail have the same value', () => {
            const sut = new LinkedList(10)
            expect(sut.getHead().value).toEqual(10)
            expect(sut.getTail().value).toEqual(10)
        })

        test('should have a length of 1', () => {
            const sut = new LinkedList(10)
            expect(sut.getLength()).toEqual(1)
        })

        test('should accept a node as a parameter', () => {
            const node = new Node(10)
            const sut = new LinkedList(node)
            expect(sut.getHead()).toStrictEqual(node)
            expect(sut.getTail()).toStrictEqual(node)
        })
    })
})