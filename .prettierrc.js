module.exports = {
  printWidth: 120, // 每行不能超过120个字符
  tabWidth: 2, // 指定每个tab缩进级别的空格数
  singleQuote: true, // 使用单引号，而不是双引号
  trailingComma: 'es5', // 多行时尽可能打印尾随逗号,在ES5中有效的结尾逗号(对象,数组等)
  bracketSpacing: true, // 在对象文字中的括号之间打印空格
  jsxBracketSameLine: true, // 将>多行JSX元素的放在最后一行的末尾，而不是一个人放在下一行(不适用自闭元素)
  arrowParens: 'always', // 在单独的箭头函数参数周围包括括号 (x) => x
  parser: 'typescript', // 指定要使用的解析器
  endOfLine: 'auto',
};
