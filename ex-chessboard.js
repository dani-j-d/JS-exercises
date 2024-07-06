
const boardGen = function(size = 8) {
    let board = "";
    let row = 1;

    for ( let i = 1; i <= ( size ); i++ ) {

        for ( let i = 1; i <= ( size ); i++ ) {
            
            // checks row number to either start with blanks or squares
            if ( row % 2 !== 0 ) {
                i % 2 === 0 ? board += "#" : board += " ";
            } else {
                i % 2 === 0 ? board += " " : board += "#";
            }
        }
        
        // checks for the end of the row and updates row number
        if ( size * size !== 0 ) {
            board += "\n";
            row++;
        }
    }
    
    console.log(board);
}
