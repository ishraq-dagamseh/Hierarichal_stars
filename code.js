function hierarical_stars(){
    let shape = "\n";

    for(var i=1; i <= 5; i++)
      {
       for(var j=1; j<=i; j++)
       {
        shape += '*'
     }
     shape += "\n";
 }
    /*console.log(shape);
    let star = "*";
    for (var i = 5; i >= 1; i--) {
        console.log(star.repeat(i));
    }*/
   for (var i = 5; i >= 1; i--) {
       for (var j = 1; j <= i; j++) {
           shape += '*';
       }
         shape += "\n";
}
    console.log(shape);
}

hierarical_stars();