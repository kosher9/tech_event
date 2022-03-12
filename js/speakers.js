let users = [
  {
    spkName: "Yochai Benkler",
    role: "Berkman Professor of Entrepreneurial Legal Studies of Havard Law School",
    img: "images/spk_1.jpg",
    desc: "Benkler studies commons-based peer production, and pubished his seminal book The Wealth of Networks in 2006.",
  },
  {
    spkName: "Kilman Chon",
    role: "Berkman Professor of Entrepreneurial Legal Studies of Havard Law School",
    img: "images/spk_2.jpg",
    desc: "Benkler studies commons-based peer production, and pubished his seminal book The Wealth of Networks in 2006.",
  },
  {
    spkName: "SohYeong Noh",
    role: "Berkman Professor of Entrepreneurial Legal Studies of Havard Law School",
    img: "images/spk_3.jpg",
    desc: "Benkler studies commons-based peer production, and pubished his seminal book The Wealth of Networks in 2006.",
  },
  {
    spkName: "Julia Leda",
    role: "Berkman Professor of Entrepreneurial Legal Studies of Havard Law School",
    img: "images/spk_4.jpg",
    desc: "Benkler studies commons-based peer production, and pubished his seminal book The Wealth of Networks in 2006.",
  },
  {
    spkName: "ila Tretikov",
    role: "Berkman Professor of Entrepreneurial Legal Studies of Havard Law School",
    img: "images/spk_5.jpg",
    desc: "Benkler studies commons-based peer production, and pubished his seminal book The Wealth of Networks in 2006.",
  },
  {
    spkName: "Ryan Merkley",
    role: "Berkman Professor of Entrepreneurial Legal Studies of Havard Law School",
    img: "images/spk_6.jpg",
    desc: "Benkler studies commons-based peer production, and pubished his seminal book The Wealth of Networks in 2006.",
  },
];

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function createDom() {
  let main = document.getElementById("spk-title-ctn");

  let bigContainer = document.createElement('div')
  bigContainer.className = "ctn-speakers-div"

  Object.keys(users).forEach((key) => {
    let speakerCtn = document.createElement("div");
  speakerCtn.className = "ctn-spk";

  let imgCtn = document.createElement("div");
  imgCtn.className = "spk-img-ctn";

  let img = document.createElement("img");
  img.className = "img-spk";

  let spkInfo = document.createElement("div");
  spkInfo.className = "ctn-spk-info";

  let spkName = document.createElement("h5");
  spkName.className = "spk-name";

  let spkRole = document.createElement("p");
  spkRole.className = "spk-role";

  let sp = document.createElement("span");
  sp.className = "sp";

  let spkDesc = document.createElement("p");
  spkDesc.className = "spk-desc";

  img.src = users[key].img;
  spkName.textContent = users[key].spkName;
  spkRole.textContent = users[key].role;
  spkDesc.textContent = users[key].desc;

  speakerCtn.appendChild(imgCtn);
  imgCtn.appendChild(img);
  speakerCtn.appendChild(spkInfo);
  spkInfo.appendChild(spkName);
  spkInfo.appendChild(spkRole);
  spkInfo.appendChild(sp);
  spkInfo.appendChild(spkDesc);

  bigContainer.appendChild(speakerCtn)
  })

  insertAfter(main, bigContainer);
}

window.addEventListener("load", () => {
  createDom();
});
