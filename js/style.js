var visible = true; //a state indicating it is awaiting droping
var AnimateHeight = 0; //this marks the initial dropdown height 
var unit = "px";
AnimateHeightMinus=150; ////this marks the initial foldup height

/*this function is created to show and start animation sequence of the dropdown navigation  */
function showMenu(){
	/*first hide overflow so as not to make the dropdown nav look mesy while in dropdown animation sequence */
	document.getElementById('dropdown').style.overflow="hidden";
	/*set the dopdown nav height to zero at first, this marks the initial point of height animation */
	document.getElementById('dropdown').style.height= 0+"px";
	/*the below condition shows or hide the dropdown nav upon the click on menu  icon */
	if(visible==true){
		/*set the dopdown nav height to zero at first, this marks the initial point of height animation */
		document.getElementById('dropdown').style.height= 0+"px";
		/*set the dropdown nav layout to flex*/
		document.getElementById('dropdown').style.display = "flex";
		/*set to a state indicating it is awaiting to be display=none i.e awaiting to foldoff upon next click */
		visible=false; 
		//exucute the dropdown animating function 
		animateExePlus(); 
		}else{
/*set the dopdown nav height to 150 at imidiate state of folding up, this marks the initial point of foldup animation */
			document.getElementById('dropdown').style.height= 150+"px";
/*set to a state indicating it is awaiting to be display=flex upon next click */
			visible=true;
			//exucute the foldup animating function
			animateExeMinus();
			}
}

/*function use to indicate present page to user on the medium/large screen  navigation bar*/
function indicatePage(){
	document.getElementById('me').style.background="#0CD7E8";
}

/*function use to create the dropdown animation*/
function animatePlus(){

	if(visible==false){
		if(AnimateHeight<=150){
			/*add 5 to the current height so as to mimick droping down */
			AnimateHeight+=5;
			/*set the height to new value*/
			document.getElementById('dropdown').style.height= AnimateHeight+"px"; 

		}else{
			/*stop the TimeInter sequence at which this function is running*/
			window.clearTimeout(Timer); 
			/*return the dropdown height to its initial value of 0 */
			AnimateHeight=0;
		}
	}
}

function animateExePlus(){
	/* execute the dropdown animating function at every 20ms*/
	Timer = window.setInterval(animatePlus,20);
}

/*function use to create the foldup animation*/
function animateMinus(){
		if(AnimateHeightMinus>=0){
			/*subtract 5 to the current height so as to mimick droping down */
			AnimateHeightMinus-=5;
			/*set the height to new value*/
			document.getElementById('dropdown').style.height= AnimateHeightMinus+"px";

		}else{
			/*stop the TimeInter sequence at which this function is running*/
			window.clearTimeout(Time); //stop the TimeInter sequence at which this function is running
			/*return the foldup height to its initial value of 150 */
			AnimateHeightMinus=150;
			/*finally make the disply=none for the dropdown menu which by now as folden up, this ensures complete foldup*/
			document.getElementById('dropdown').style.display = "none";
		}
	}

function animateExeMinus(){
	/* execute the dropdown animating function at every 20ms*/
	Time = setInterval(animateMinus,20);
}