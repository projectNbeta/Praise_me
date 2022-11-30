let chatTemplate = `
  <div class="disp-flex">
    <div class="profile-img-frame">
      <img class="profile-img" src="./image/survivor/profile.png">
    </div>
    <div class="posted-chat-content">
      <span><b>{{name}}</b></span>&nbsp;&nbsp;<small>{{now}}</small>
      <p class="">{{content}}</p>
    </div>
  </div>
`;

// チャット送信処理
document.getElementsByClassName('chat-send-btn')[0].addEventListener("click", function() {
  let inputValue = document.getElementsByClassName('input-chat-text')[0].value;
  if (inputValue == '') {
    return;
  }

  let div = document.createElement('div');
  div.classList.add('posted-chat-frame');
  div.innerHTML = chatTemplate.replace('{{content}}', inputValue)
                              .replace('{{name}}', '4TH')
                              .replace('{{now}}', getTime());
  document.getElementsByClassName('posted-chat-list')[0].appendChild(div);

  document.body.scrollTop = document.body.scrollHeight;

  document.getElementsByClassName('input-chat-text')[0].value = '';
}, false);

// チャットルーム変更
const switchRoom = (n) => {
  // ルームのタイトル変更
  const title = n == 0 ? "ラクーンシテーPRJ" : "勤怠"
  document.getElementsByClassName('content-header-title')[0].innerHTML = title;

  // チャットの内容を変更
  const content = n == 0 ? rakuChatContents : kintaiChatContents
  document.getElementsByClassName('posted-chat-list')[0].innerHTML = content;
}

// チャンネル追加モーダル
const openModal = () => {
  document.getElementsByClassName('js-modal')[0].style.display = "block";
}
const addChannel = () => {
  alert("");
}
const closeModal = () => {
  document.getElementsByClassName('js-modal')[0].style.display = "none";
}

// ダイレクトメッセージ追加
const openDMModal = () => {
  document.getElementsByClassName('js-modal')[1].style.display = "block";
}
const addDMMember = () => {
  alert();
}
const closeDMModal = () => {
  document.getElementsByClassName('js-modal')[1].style.display = "none";
}

// メンバー招待
const openInviteMemberModal = () => {
  document.getElementsByClassName('js-modal')[2].style.display = "block";
}
const inviteMembetModal = () => {
  alert();
}
const closeInviteMemberModal = () => {
  document.getElementsByClassName('js-modal')[2].style.display = "none";
}

// 時間の取得
const getTime = () => {
  const now = new Date();
  return String(now.getHours()) + ':' + twoDigitsWithZero(now.getMinutes());
}

// 1桁の場合は0を前につけて2桁に揃える
const twoDigitsWithZero = (m) => {
  return m < 10 ? '0' + String(m) : m;
}