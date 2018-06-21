# babel

## 1.脚手架
- babel-cli
- cnpm i babel-cli --save-dev

## 2.配置.babelrc文件
- 没有文件名，只有后缀名

```javascript
{
    "presets": [
           // -> 这里是一些依赖项
    ]
}
```

## 3.依赖项
- cnpm i babel-preset-latest --save-dev (已经成功发布的)
- cnpm i babel-preset-stage-2 --save-dev (在草案阶段)

## 4.命令
- babel -o
- babel -d
- babel -w