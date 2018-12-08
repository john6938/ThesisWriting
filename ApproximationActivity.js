//Javascript for Andy`s Approximation Activity
//If you are reading this, Andy - THANKS!
<script
language="JavaScript">
var leftlist = new Array(); 
// the non-movable things in the left hand column
// change these when making a new exercise
leftlist[0] = '19.98%';
leftlist[1] = '101,997';
leftlist[2] = '26%';
leftlist[3] = '33.3333%';
leftlist[4] = '248,112';
leftlist[5] = '1,695,193';
leftlist[6] = '48.873%';
leftlist[7] = '97';
leftlist[8] = '7';
leftlist[9] = '74.25%';

var rightlist = new Array(); 
// the movable things in the right hand column
// change these when making a new exercise
rightlist[0] = 'about a fifth of';
rightlist[1] = 'about 100,000';
rightlist[2] = 'just over a quarter of';
rightlist[3] = 'a third of';
rightlist[4] = 'a quarter of a million';
rightlist[5] = 'about 1.7 million';
rightlist[6] = 'almost a half of';
rightlist[7] = 'just under a hundred';
rightlist[8] = 'several';
rightlist[9] = 'nearly three-quarters';

// change these
var leftcolumntitle = 'Statistics'; // change to a more accurate description of things in the left column
var rightcolumntitle = 'Approximations - move these'; // change to a more accurate description of things in the right column
var datereleased4students = '16 Nov 2018'; // change this to the date you make this exercise available to users

// dont change this
// to insert the movable things in the right hand column
var itemlist = ['','','','','','','','','','']; // do not change this

// populate the itemlist array
/*
var mixuplist = [3,4,8,6,7,9,1,0,5,2]; // <- change this to change the random order
for(mixcounter=0; mixcounter < itemlist.length; mixcounter++){
	itemlist[mixcounter] = rightlist[mixuplist[mixcounter]]
} // end for mixuplist 
*/

// populate the itemlist array
var mixuplist = [0,1,2,3,4,5,6,7,8,9]; // these get swopped around by the following code
var holding = 0; // to hold numbers while swapping
var this_rand = 0; // initialise random number variable
for(mixcounter=0; mixcounter < itemlist.length; mixcounter++){ // step through the mixuplist
	this_rand = Math.floor(Math.random() * leftlist.length); // generate a random number
	if(this_rand != mixcounter){ // so it doesn't replace itself
		holding = mixuplist[mixcounter]; // put this item in holding
		mixuplist[mixcounter] = mixuplist[this_rand];
		mixuplist[this_rand] = holding;
	} // end if to prevent replace self
} // end for mixuplist 

for(mixcounter2=0;mixcounter2<itemlist.length;mixcounter2++){
	itemlist[mixcounter2] = rightlist[mixuplist[mixcounter2]];
} // end for

</script>