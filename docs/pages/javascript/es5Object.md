### 扩展对象

    1.  `Object.preventExtensions` 阻止对象扩展，让一个对象变的不可扩展，也就是永远不能再添加新的属性
    2.  `Object.isExtensible` 判断一个对象是否可扩展，即是否可以给它添加新属性

### 密封对象

    1.  `Object.seal` 密封对象是指那些不能添加新的属性，不能删除已有属性，以及不能修改已有属性的可枚举性、可配置性、可写性，但可以修改已有属性的值的对象。
    2.  Object.isSealed

### 冻结对象

    1.  `Object.freeze` 冻结对象是指那些不能添加新的属性，不能修改已有属性的值，不能删除已有属性，以及不能修改已有属性的可枚举性、可配置性、可写性的对象。也就是说，这个对象永远是不可变的。
    2.  Object.isFrozen
