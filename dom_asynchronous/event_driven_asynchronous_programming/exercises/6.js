document.addEventListener('DOMContentLoaded', () => {
  const clearBtn = document.getElementById('clear');
  const form = document.getElementById('selection-filters');
  const classifications = document.getElementById('animal-classifications');
  const animals = document.getElementById('animals');
  
  const classificationTable = {
    'Classifications': ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
    'Cold-blooded': ['Salmon', 'Turtle'],
    'Mammal': ['Bear', 'Whale'],
    'Bird': ['Ostrich']
  };
  const animalTable = {
    'Animals': ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird'],
    'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
    'Turtle': ['Vertebrate', 'Cold-blooded'],
    'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
    'Salmon': ['Vertebrate', 'Cold-blooded'],
    'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird']
  };
  
  function hideChildElements(key, element, table) {
    let array = [...element.children];
    let hidden = array.filter(child => !table[key].includes(child.value));
    let visible = array.filter(child => table[key].includes(child.value));
 
    hidden.forEach(child => child.setAttribute('hidden', true));
    visible.forEach(child => child.removeAttribute('hidden'));

    let first = visible[0];
    element.selectedIndex = array.indexOf(first);
  }
  
  clearBtn.addEventListener('click', event => {
    event.preventDefault();
    [...animals.children].forEach(child => child.removeAttribute('hidden'));
    [...classifications.children].forEach(child => child.removeAttribute('hidden'));
    form.reset();
  });
  
  classifications.addEventListener('change', event => {
    hideChildElements(event.target.value, animals, classificationTable);
  });
  
  animals.addEventListener('change', event => {
    hideChildElements(event.target.value, classifications, animalTable);
  });
});