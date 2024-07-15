var arrayOfQuotes = [
   {
    'author': 'Wayne Gretzy',
    'quote': 'You miss 100% of the shots you dont take.'
   },
   {
    'author': 'Epictetus',
    'quote': 'It is not what happens to you, but how you react to it that matters.'
   },
   {
    'author': 'Frank Sinatra',
    'quote': 'The best revenge is massive success.'
   },
   {
    'author': 'Elbert Hubbard',
    'quote': 'Do not take life too seriously. You will not get out alive.'
   },
   {
    'author': 'Nelson Mandela',
    'quote': '"Resentment is like drinking poison and waiting for your enemies to die.'
   },
];

function generateQuoto() {
    var random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1)
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
}
