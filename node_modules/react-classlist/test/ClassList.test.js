const { ClassList } = require('../ClassList')

test('Empty ClassList', () => {
    const classes = new ClassList()
    expect(classes.toClassString()).toBe('')
})

test('Adding a class', () => {
    const classes = new ClassList()
    classes.add('a')
    expect(classes.toClassString()).toBe('a')
})

test('Adding a class conditionally', () => {
    const classes = new ClassList()
    classes.add('a', true)
    classes.add('b', false)
    expect(classes.toClassString()).toBe('a')
})

test('Adding multiple classes', () => {
    const classes = new ClassList()
    classes.add('a')
    classes.add('b')
    expect(classes.toClassString()).toBe('a b')
})

test('Adding a class via constructor', () => {
    const classes = new ClassList('a')
    expect(classes.toClassString()).toBe('a')
})

test('Adding multiple classes via constructor', () => {
    const classes = new ClassList('a b')
    expect(classes.toClassString()).toBe('a b')
})

test('Remove a class', () => {
    const classes = new ClassList('a b')
    classes.remove('b')
    expect(classes.toClassString()).toBe('a')
})

test('Remove a class conditionally', () => {
    const classes = new ClassList('a b c')
    classes.remove('b', true)
    classes.remove('c', false)
    expect(classes.toClassString()).toBe('a c')
})

test('Remove multiple classes', () => {
    const classes = new ClassList('a b c')
    classes.remove('b c')
    expect(classes.toClassString()).toBe('a')
})

test('Add classes using an object', () => {
    const classes = new ClassList()
    classes.add({
        a: false,
        b: true,
        c: true,
    })
    expect(classes.toClassString()).toBe('b c')
})

test('Remove classes using an object', () => {
    const classes = new ClassList('a b c')
    classes.remove({
        a: false,
        b: true,
        c: true,
    })
    expect(classes.toClassString()).toBe('a')
})

test('Add classes using an array', () => {
    const classes = new ClassList()
    classes.add(['a', 'b', 'c'])
    expect(classes.toClassString()).toBe('a b c')
})

test('Remove classes using an array', () => {
    const classes = new ClassList('a b c')
    classes.remove(['a', 'b'])
    expect(classes.toClassString()).toBe('c')
})

test('Remove classes using an array', () => {
    const classes = new ClassList('a b c')
    classes.remove(['a', 'b'])
    expect(classes.toClassString()).toBe('c')
})

test('Class string matches toString', () => {
    const classes = new ClassList('a b c')
    expect(classes.toClassString()).toBe(classes.toString())
})
