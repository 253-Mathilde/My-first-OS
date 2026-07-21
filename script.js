function updateTime() {
  var currentTime = new Date().toLocaleString();
  var timeText = document.querySelector("#timeElement");
  timeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);






// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("journalWindow"));
dragElement(document.getElementById("musicWindow"));
dragElement(document.getElementById("mapWindow"));
dragElement(document.getElementById("galerieWindow"));
dragElement(document.getElementById("gameWindow"));
dragElement(document.getElementById("tvWindow"));



// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;
  

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = elementDrag;   // FIXED
  }

  // Step 9: Define the `elementDrag` function
  function elementDrag(e) {   // FIXED NAME
    e = e || window.event;
    e.preventDefault();
    
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;

    var newTop = element.offsetTop - currentY;
    var newLeft = element.offsetLeft - currentX;

    
    if (newTop < 50) {
      newTop = 50;
    }
    element.style.top = newTop + "px";
    element.style.left = newLeft + "px";
  }

  // Step 12: Define the `stopDragging` function
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


var journalWindow = document.querySelector("#journalWindow")
var journalClose = document.querySelector("#journalclose")
var journalOpen = document.querySelector("#journalopen")

journalClose.addEventListener("click", function() {
  closeWindow(journalWindow);
});

journalOpen.addEventListener("click", function() {
  openWindow(journalWindow);
});

var musicScreen = document.querySelector("#musicWindow")
var musicScreenClose = document.querySelector("#musicclose")
var musicScreenOpen = document.querySelector("#musicopen")

musicScreenClose.addEventListener("click", function() {
  closeWindow(musicScreen);
});

musicScreenOpen.addEventListener("click", function() {
  openWindow(musicScreen);
});

var mapScreen = document.querySelector("#mapWindow")
var mapScreenClose = document.querySelector("#mapclose")
var mapScreenOpen = document.querySelector("#mapopen")

mapScreenClose.addEventListener("click", function() {
  closeWindow(mapScreen);
});

mapScreenOpen.addEventListener("click", function() {
  openWindow(mapScreen);
});




var galerieScreen = document.querySelector("#galerieWindow")
var galerieScreenClose = document.querySelector("#galerieclose")
var galerieScreenOpen = document.querySelector("#galerieopen")

galerieScreenClose.addEventListener("click", function() {
  closeWindow(galerieScreen);
});

galerieScreenOpen.addEventListener("click", function() {
  openWindow(galerieScreen);
});



var gameScreen = document.querySelector("#gameWindow")
var gameScreenClose = document.querySelector("#gameclose")
var gameScreenOpen = document.querySelector("#gameopen")

gameScreenClose.addEventListener("click", function() {
  closeWindow(gameScreen);
});

gameScreenOpen.addEventListener("click", function() {
  openWindow(gameScreen);
});





var tvScreen = document.querySelector("#tvWindow")
var tvScreenClose = document.querySelector("#tvclose")
var tvScreenOpen = document.querySelector("#tvopen")

tvScreenClose.addEventListener("click", function() {
  closeWindow(tvScreen);
});

tvScreenOpen.addEventListener("click", function() {
  openWindow(tvScreen);
});




var welcomeScreen = document.querySelector("#welcome")
var welcomeScreenClose = document.querySelector("#welcomeclose")
var welcomeScreenOpen = document.querySelector("#welcomeopen")
function closeWindow(element) {
  element.style.display = "none"
}
function openWindow(element) {
  element.style.display = "flex"
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
 
  element.style.top = element.style.left = ""; 
  

    if(element.id === "journalWindow" && notes.length > 0){
    slideIndex[0] = 4;
    showDivs(slideIndex[0], 0);
  }
}

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});





var selectedIcon = undefined
function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
} 
function deselectIcon(element) {
  
  //  @nokira this is a little check, because when deselecting the icon when a window is clicked, if there is no selected icon, we just quit the function with an empty return
  
  if (!element) {
    return;
  }


  element.classList.remove("selected");
  selectedIcon = undefined
}

//  @nokira I added a parameter "window", you pass this function the div ID that you want to open. Check line 180 of index.html 
function handleIconTap(element, window) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(window)
  } else {
    selectIcon(element)
  }
}

var biggestIndex = 1;
function handleWindowTap(element) {
 if (parseInt(element.style.zIndex) < biggestIndex) {
    biggestIndex++;
    element.style.zIndex = biggestIndex;
    if (topBar) topBar.style.zIndex = biggestIndex + 1;
  }
  deselectIcon(selectedIcon);
}


function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}
addWindowTapHandling(document.getElementById("welcome"));
addWindowTapHandling(document.getElementById("journalWindow"));
addWindowTapHandling(document.getElementById("musicWindow"));
addWindowTapHandling(document.getElementById("mapWindow"));
addWindowTapHandling(document.getElementById("galerieWindow"));
addWindowTapHandling(document.getElementById("gameWindow"));
addWindowTapHandling(document.getElementById("tvWindow"));



var topBar = document.querySelector("#top")



function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon)
}




function initializeWindow(journal) {
  var screen = document.querySelector("#" + elementName)
  addWindowTapHandling(screen)
  makeClosable(elementName)
  dragElement(screen)
}


var slideIndex = [1,1];
var slideId = ["mySlides", "mySlides2"]
showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}


let notes =[]
let editingNoteId=null

function loadNotes(){
  const savedNotes=localStorage.getItem('quickNotes')
 return savedNotes ?JSON.parse(savedNotes):[]
}

function saveNote(event){
  event.preventDefault()
  const title = document.getElementById('noteTitle').value.trim();
  const content = document.getElementById('noteContent').value.trim();

  if(editingNoteId){
    // Update existing Note

    const noteIndex = notes.findIndex(note => note.id == editingNoteId)
    notes[noteIndex] = {
      ...notes[noteIndex],
      title:title,
      content:content
    }
  }else{
   // Add new Note
   notes.unshift({
    id:generateId(),
    title:title,
    content:content
  })
  }

  closeNoteDialog()
  saveNotes()
  renderNotes()
}
function generateId(){
  return Date.now().toString()
}

function saveNotes(){
  localStorage.setItem('quickNotes',JSON.stringify(notes))
}

function deleteNote(noteId){
  notes=notes.filter(note => note.id != noteId)
 saveNotes()
 renderNotes()
}

function renderNotes(){
  const notesContainer=document.getElementById('notesContainer');

  if(notes.length===0){
    notesContainer.innerHTML=`
  <div class="empty-state">
  
</div>`
return
}

notesContainer.innerHTML =notes.map(note=>`
  <div class="note-card">
  <h6 class="note-titel">${note.title}</h6>
  
  <button class="edit-btn" onclick="openNoteDialog('${note.id}')" title="Edit Note">

  </button>
   <button class="delete-btn" onclick="deleteNote('${note.id}')" title="Delete Note">
  
  </button>
  </div>

  `).join('')
}
function openNoteDialog(noteId = null){
  const dialog = document.getElementById('noteDialog');
  const titleInput = document.getElementById('noteTitle');
  const contentInput = document.getElementById('noteContent');
  if(noteId){
    //EditMode
    const noteToEdit = notes.find(note => note.id == noteId)
    editingNoteId = noteId
    document.getElementById('dialogTitle').textContent = 'Edit Note'
    titleInput.value = noteToEdit.title
    contentInput.value = noteToEdit.content
  }
    else{
    //Add Mode
    editingNoteId = null
    document.getElementById('dialogTitle').textContent = 'Add New Island'
    titleInput.value = ''
    contentInput.value = ''
  }
  dialog.showModal()
  titleInput.focus()
}
function closeNoteDialog(){
  document.getElementById('noteDialog').close()
}
 document.addEventListener('DOMContentLoaded',function(){
 notes=loadNotes();
  renderNotes()
  
  
  
  document.getElementById('noteForm').addEventListener('submit',saveNote)
  document.getElementById('noteDialog').addEventListener('click',function(event){
   if(event.target===this){closeNoteDialog()}
  })
 })


window.addEventListener("load",function(){
  const loader = document.querySelector(".loader");
  setTimeout(() => {
 loader.remove();
 }, 1000);
});

setInterval(function(){
document.getElementById("quotes").innerText = '"To live will be an awfully big adventure."';}
,10000);
setInterval(function(){
document.getElementById("quotes").innerText = '"What if I fall? Oh, my darling What if you fly?"';}
,20000);
setInterval(function(){
document.getElementById("quotes").innerText = '"Never break in somewhere unless you know the way out."';}
,30000);
setInterval(function(){
document.getElementById("quotes").innerText = '"It is so much easier to get people to hate something than to believe something."';}
,40000);
setInterval(function(){
document.getElementById("quotes").innerText = '"So come with me where dreams are born and time does not exist."';}
,50000);
setInterval(function(){
document.getElementById("quotes").innerText = '"I will hold you in my heart until I can hold you in my arms."';}
,60000);
setInterval(function(){
document.getElementById("quotes").innerText = '"Sometimes you have to take a leap of faith first and build your wings on the way down."';}
,70000);
setInterval(function(){
document.getElementById("quotes").innerText = 'Never say goodbye,because sayong goodbye means going away and going away means forgetting."';}
,80000);
setInterval(function(){
document.getElementById("quotes").innerText = 'And Peter pan chose this house because of the people there believed in him."';}
,90000);

const btn = document.querySelector('button')
const timertext = document.querySelector("#timertext")
let counter;
let interval; 
const timer = () => {
  counter--
  timertext.innerText =counter;
  if( counter===0){
    clearInterval(interval)
   btn.disabled = false;
   timertext.innerText = '';
  }
}

btn.addEventListener('click',() =>{
  counter = timertext.innerText; 
  btn.disabled = true;
  interval = setInterval(timer,60000)
  
})








var colours=new Array("#a6f", "#60f", "#60f", "#a6f", "#ccc");
var bubbles=66;
var over_or_under="under";

var swide=800;
var shigh=600;
var bubb=new Array();
var bubbx=new Array();
var bubby=new Array();
var bubbs=new Array();
var boddie;
var ie_version=(navigator.appVersion.indexOf("MSIE")!=-1)?parseFloat(navigator.appVersion.split("MSIE")[1]):false;

function addLoadEvent(funky) {
  var oldonload=window.onload;
  if (typeof(oldonload)!='function') window.onload=funky;
  else window.onload=function() {
    if (oldonload) oldonload();
    funky();
  }
}

addLoadEvent(bubba);

function bubba() { if (document.getElementById) {
  var i, rats, div;
  boddie=document.createElement("div");
  boddie.style.position="fixed";
  boddie.style.top="0px";
  boddie.style.left="0px";
  boddie.style.overflow="visible";
  boddie.style.width="1px";
  boddie.style.height="1px";
  boddie.style.backgroundColor="transparent";
  boddie.style.zIndex="-1";
  document.body.appendChild(boddie);
  set_width();
  for (i=0; i<bubbles; i++) {
    rats=createDiv("3px", "3px");

    div=createDiv("auto", "auto");
    rats.appendChild(div);
    div=div.style;
    div.top="1px";
    div.left="0px";
    div.bottom="1px";
    div.right="0px";
    div.borderLeft="1px solid "+colours[3];
    div.borderRight="1px solid "+colours[1];

    div=createDiv("auto", "auto");
    rats.appendChild(div);
    div=div.style;
    div.top="0px";
    div.left="1px";
    div.right="1px";
    div.bottom="0px";   // FIXED SEMIKOLON
    div.borderTop="1px solid "+colours[0];
    div.borderBottom="1px solid "+colours[2];

    div=createDiv("auto", "auto");
    rats.appendChild(div);
    div=div.style;
    div.left="1px";
    div.right="1px";
    div.bottom="1px";
    div.top="1px";
    div.backgroundColor=colours[4];
    if (ie_version && ie_version<10) div.filter="alpha(opacity=50)";
    else div.opacity=0.5;

    boddie.appendChild(rats);
    bubb[i]=rats.style;
    bubb[i].zIndex=(over_or_under=="over")?"1001":"0";
  }
  bubble();
}}

function bubble() {
  var c;
  for (c=0; c<bubbles; c++) if (!bubby[c] && Math.random()<0.333) {
    bubb[c].left=(bubbx[c]=Math.floor(swide/6+Math.random()*swide/1.5)-10)+"px";
    bubb[c].top=(bubby[c]=shigh)+"px";
    bubb[c].width="3px";
    bubb[c].height="3px";   // FIXED SEMIKOLON
    bubb[c].visibility="visible";
    bubbs[c]=3;
    break;
  }
  for (c=0; c<bubbles; c++) if (bubby[c]) update_bubb(c);
  setTimeout("bubble()", 40);
}

function update_bubb(i) {
  if (bubby[i]) {
    bubby[i]-=bubbs[i]/2+i%2;
    bubbx[i]+=(i%5-2)/5;
    if (bubby[i]>0 && bubbx[i]>0 && bubbx[i]<swide) {
      if (Math.random()<bubbs[i]/shigh*2 && bubbs[i]++<8) {
        bubb[i].width=bubbs[i]+"px";
        bubb[i].height=bubbs[i]+"px";
      }
      bubb[i].top=bubby[i]+"px";
      bubb[i].left=bubbx[i]+"px";
    }
    else {
      bubb[i].visibility="hidden";
      bubby[i]=0;
      return;
    }
  }
}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)=='number' && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=800;
    sh_min=600;
  }
  swide=sw_min;
  shigh=sh_min;
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height;
  div.style.width=width;
  div.style.overflow="hidden";
  div.style.backgroundColor="transparent";
  return (div);
}