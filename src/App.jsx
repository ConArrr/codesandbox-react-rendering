import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // アロー関数で書くと、子コンポーネントに渡す関数は毎回違う関数扱いになるため、
  // 親コンポーネントの再レンダリングが起こると
  // propsの内容が毎回変わる判定される
  // const onClickClose = () => setOpen(false);

  // useCallback : 同じものを使い回すって意味(関数のメモ化)
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // useMemo : 変数のメモ化
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
