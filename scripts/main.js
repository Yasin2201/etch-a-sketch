const container = document.querySelector('#container')
container.style.backgroundColor = "white";

const options = document.querySelector('#options')

const reload = document.createElement('button');
reload.classList.add('resize')
reload.textContent = 'Re-Size'
options.appendChild(reload);

const colorful = document.createElement('button');
colorful.classList.add('rgb')
colorful.textContent = 'RGB'
options.appendChild(colorful);

const black = document.createElement('button');
black.classList.add('black')
black.textContent = 'Black'
options.appendChild(black);

const darken = document.createElement('button');
darken.classList.add('darken')
darken.textContent = 'Darken'
options.appendChild(darken);

//create grid size within container
let choice = prompt('Enter Grid Size between 1-100: ');
let gridSize = 500/choice;
let size = `${gridSize}px`
let grid = choice*choice;

//re-sizes grid and refreshes sketch board
function resize() {
    reload.addEventListener('click', () => {
        location.reload();
    });
}

//set default colour to black
function defaultChoice(cols) {
    cols.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'black';
    });
}

//gets a random rgb color
function randomRgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
//RGB button - random colors
function rgbaBtn(cols) {
    colorful.addEventListener('click', () => {
    cols.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = randomRgba();
    });
});
}

//BLACK button - revert color back to black
function blackBtn(cols) {
    black.addEventListener('click', () => {
    cols.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'black';
    });
});
}

//GRAY button - incremently darken darken color until black *not working*
function darkenBtn(cols) {
    darken.addEventListener('click', () => {
        let hsl = 100
	    cols.addEventListener("mouseover", function () {
			if (hsl >= 0) {
				this.style.backgroundColor = `hsl(0,0%,${(hsl -= 10)}%)`;
			} else if (hsl == 0) {
                this.style.backgroundColor = 'hsl(0,0%,0%)';
            }
		});
	});
}


/*You need to get the rgb() value of the square on mouseover and 
  THEN decrease it by 10%.  thats all going to go in the event 
  listener.  Since you need to get the value of the squares 
background color I added a console log to show what that would be.
Add this and see what it logs.*/

//Etch-A-Sketch Grid
function sketch() {
    resize()
    for (i = 0; i < grid; i++ ) {
        let cols = document.createElement('div')
        cols.classList.add('cols')
        cols.style.width = size ;
        cols.style.height = size ;
        container.appendChild(cols)

        defaultChoice(cols)
        darkenBtn(cols)
        rgbaBtn(cols)
        blackBtn(cols)

    }
}
sketch()

