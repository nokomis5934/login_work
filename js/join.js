let idCheck = 0;
const sendIt = () => {
  const userName = document.joinForm.userName;
  const userId = document.joinForm.userId;
  const userPw = document.joinForm.userPw;
  const userPwCheck = document.joinForm.userpwcheck;
  const userAddr = document.joinForm.userAddress;
  const userPhone = document.joinForm.userPhone;
  const userEmail = document.joinForm.userEmail;
  const expNameText = /[가-힣-A-Za-z]+$/;
  const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
  const expEmailText = /^[A-Za-z0-9\.\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z0-9\.\-]+$/;

  if (userName.value == "") {
    alert("Please enter your Name!!!");
    userName.focus();
    return false;
  }
  if (!expNameText.test(userName.value)) {
    alert(
      "The format of the name is incorrect. Please enter in the correct format!!"
    );
    userName.focus();
    return false;
  }
  if (idCheck == 0) {
    alert("Please check ID duplicate!!");
    userId.focus();
    return false;
  }
  if (userPw.value == "") {
    alert("Please enter your Password!!!");
    userPw.focus();
    return false;
  }
  if (userPwCheck.value == "") {
    alert("Please enter password confirmation!!!");
    userPwCheck.focus();
    return false;
  }
  if (userPw.value.length < 6 || userPw.value.length > 20) {
    alert("Please enter a password between 6 and 20!!!");
    userPw.focus();
    return false;
  }
  if (userPw.value != userPwCheck.value) {
    alert("Your password is different. Please enter again!!!");
    userPwCheck.focus();
    return false;
  }
  if (!expHpText.test(userPhone.value)) {
    alert(
      "The cell phone number format is incorrect. Please enter in the correct format!!"
    );
    userPhone.focus();
    return false;
  }
  if (userEmail.value == "") {
    alert("Please enter your E-Mail!!!");
    userEmail.focus();
    return false;
  }
  if (!expEmailText.test(userEmail.value)) {
    alert("Please check the format your E-mail.");
    userEmail.focus();
    return false;
  }
  if (userAddr.value == "") {
    alert("Please enter your Address!!");
    userAddr.focus();
    return false;
  }
  return true;
};

const checkId = () => {
  const userId = document.joinForm.userId;
  const result = document.querySelector("#result");

  if (userId.value == "") {
    alert("Please enter your ID!!!");
    userId.focus();
    return false;
  }
  if (userId.value.length < 4 || userId.value.length > 12) {
    alert("Please enter your ID between 4 and 12 characters!!!");
    userId.focus();
    return false;
  }

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (xhr.status == 200) {
        let txt = xhr.responseText.trim();
        if (txt == "O") {
          idCheck = 1;
          result.style.display = "block";
          result.style.color = "green";
          result.innerHTML = "&nbsp;&nbsp;&nbsp;The ID can be used!!";
        } else {
          result.style.display = "block";
          result.style.color = "red";
          result.innerHTML = "&nbsp;&nbsp;&nbsp;This is a duplicate ID!!";
          userId.focus();
          userId.addEventListener("keydown", function () {
            result.style.display = "none";
          });
        }
      }
    }
  };
  xhr.open("GET", "checkid_ok.php?userId=" + userId.value, true);
  xhr.send();
};
