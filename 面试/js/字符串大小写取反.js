let str = 'BBBBBgsdff'
str = str.replace(/[a-zA-Z]/g, content => {
    // content : 每一次正则匹配的结果
    return content.toUpperCase() === content ? content.toLowerCase() : content.toUpperCase()
})
console.log(str)