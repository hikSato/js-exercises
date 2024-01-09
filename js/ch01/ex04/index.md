## 問題 1.4 🖋️

- 期待した実行結果。

```
{answer: 42}
{answer: 0}
```

- 開いた状態

```
{answer: 42}
{answer: 0}
```

- 閉じた状態

```
{answer: 0}
{answer: 0}
```

- 期待した結果を得るために、

```html
<!doctype html>
<html>
  <body>
    <script>
      const life = { answer: 42 };
      console.log(life);
      const life2 = { ...life };
      life2.answer = 0;
      console.log(life2);
    </script>
  </body>
</html>
```
