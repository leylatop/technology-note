
## 对比分支整体差异
对比本地的 `feat/a`  和远程的 `origin/feat/a` 分支的差异：

```
git diff feat/a origin/feat/a
```


如果只想看差异文件，而不看差异文件的具体内容：

```
git diff feat/a origin/feat/a --stat
```

## 对比分支具体某个文件差异
对比本地的 `feat/a`  和远程的 `origin/feat/a` 分支的`package-lock.json` 的文件差异：
```
git diff feat/a origin/feat/a -- package-lock.json
```

如果只想看文件是否存在差异，而不想看文件差异的具体内容：

```
git diff feat/a origin/feat/a --stat -- package-lock.json
```