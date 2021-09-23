import React, { useState, useRef } from "react";

export function OnlineGameForm(props) {
  const [gameId, setGameId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.joinOnlineGame(gameId);
  };
  return (
    <div className="online-game-form">
      <button onClick={props.createOnlineGame}>Tạo phòng</button>
      <form onSubmit={handleSubmit}>
        Vào phòng:{" "}
        <input
          type="text"
          placeholder="Nhập mã phòng"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
        />{" "}
        <input type="submit" value="Vào phòng" />
      </form>
    </div>
  );
}

export function Square(props) {
  let disabled = props.value ? true : false;
  let color = "";
  if(props.value){
    color = props.value === "X" ? "color-x" : "color-o";
  }
  return (
    <button
      className={`${props.className}  ${color}`}
      disabled={disabled}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export function OnlineGameMessages(props) {
  let { playerX, playerO } = props.gameState;
  if (!!playerX && !playerO) {
    return (
      <div className="invite-prompt">
        "Bạn chơi [x]. Hãy mời thêm 1 bạn [o] cùng chơi!"
        <CopyTextArea textToCopy={props.gameUrl} />
      </div>
    );
  } else {
    return "";
  }
}

function CopyTextArea(props) {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Đã Copy!");
  }

  return (
    <div>
      {
        document.queryCommandSupported("copy") && (
          <div>
            <button onClick={copyToClipboard}>Click để copy</button>
            {copySuccess}
          </div>
        )
      }
      <form>
        <textarea readOnly ref={textAreaRef} value={props.textToCopy} />
      </form>
    </div>
  );
}

export function StatusMessages(props) {
  const isX = props?.uid === props.gameState?.playerX;
  const text = props.gameState.xIsNext && isX ? "Đến lượt bạn" : "Đến lượt Đối thủ";
  const announcement = props.gameState.winner
    ? "Người chiến thắng: " + props.gameState.winner
    : text;
  return <>
    {props?.uid === props.gameState?.playerO ? "Bạn chơi [o]" : "Bạn Chơi [x]"}
    {!props.gameState.playerO || !props.gameState.playerX ?
        <div className="game turn-announcement blink_me">Đang đợi người chơi!</div> :
        <div className="game turn-announcement blink_me">{announcement}</div>
    }
    {props.gameState.winner && <button onClick={()=>{props.createOnlineGame()}}>Chơi tiếp!</button> }
  </>;
}
