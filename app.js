const inputText = document.querySelector('#inputText');
const submitBtn = document.querySelector('#submit-btn');
const items = document.querySelector('.items');

let dataTable = [];

submitBtn.addEventListener('click', getUser);

async function getUser(event) {
  event.preventDefault();
  const URL = 'https://randomuser.me/api/?nat=fr&results=20&inc=name,location,picture';
  const res = await fetch(URL);
  const data = await res.json();
  const r = data.results;
  dataTable = data.results;
  displayData();
}

const displayData = () => {
  const newTable = dataTable.filter((obj) =>
    obj.name.first.includes(inputText.value)
  );
 
  newTable.forEach((data) => {
    let fristName = data.name.first.toLowerCase();
    if (fristName.includes(inputText.value.toLowerCase())) {
      const userDiv = document.createElement('div');
      const div = document.createElement('div');
      userDiv.classList.add('user');
      const img = document.createElement('img');
      const name = document.createElement('p');
      name.classList.add('names');
      const location = document.createElement('p');
      location.classList.add('location')
      div.appendChild(name);
      div.appendChild(location);
      img.src = data.picture.large;
      userDiv.appendChild(img);
      userDiv.appendChild(div);
      name.innerText = `${data.name.first} ${data.name.last}`;
      location.innerText = `${data.location.city},${data.location.country}`;
      items.appendChild(userDiv);
      
    }
  });
};
