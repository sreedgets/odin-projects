const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  let female = total - male;

  // Add your code here
const catInfo = JSON.parse(catString);

for (let i = 0; i < catInfo.length; i++) {
  if (i + 1 === catInfo.length) {
    motherInfo += 'and ' + catInfo[i].name;
  } else {
    motherInfo += catInfo[i].name + ', ';
  }

  for (let j = 0; j < catInfo[i].kittens.length; j++) {
    total++;
    
    if (catInfo[i].kittens[j].gender === 'm') {
      male++;
    } else {
      female++
    }
  }
  kittenInfo = `There are ${total} cats. ${male} are male and ${female} are female.` 
}


// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    