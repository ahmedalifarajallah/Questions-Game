class ClassList {
    constructor(classString, condition) {
        this.classes = new Set()
        if (classString) {
            this.add(classString, condition)
        }
        return this
    }

    add(classString, condition = true) {
        if (classString instanceof Array) {
            classString.map((element) => this.add(element))
        } else if (classString instanceof Object) {
            const keys = Object.keys(classString)
            keys.map((key) => this.add(key, classString[key]))
        } else if (condition) {
            const classes = classString.split(' ')
            classes.map((c) => this.classes.add(c))
        }
        return this
    }

    remove(classString, condition = true) {
        if (classString instanceof Array) {
            classString.map((element) => this.remove(element))
        } else if (classString instanceof Object) {
            const keys = Object.keys(classString)
            keys.map((key) => this.remove(key, classString[key]))
        } else if (condition) {
            const classes = classString.split(' ')
            classes.map((c) => this.classes.delete(c))
        }
        return this
    }

    toClassString() {
        return Array.from(this.classes).join(' ')
    }

    toString() {
        return this.toClassString()
    }
}

module.exports.ClassList = ClassList
