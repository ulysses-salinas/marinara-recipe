// hi - i am a comment

function marinaraSauce (cookName) {
    var two = /2/g;
    var oneFourth = '1/4';
    
    


      console.log('Hey,'  + cookName + '!' + 'This is my marinara sauce recipe!')
console.log('Heat a medium-large saucepan over medium heat.')
console.log('Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes'.replace(two, 'two'))
console.log('Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.'.replace(oneFourth, 'oneFourth').replace(two, 'two'))
console.log('Cover the post, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes')
console.log('Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.'.replace(oneFourth, 'oneFourth'))

}
var cookName = 'Adam';
marinaraSauce(cookName)
