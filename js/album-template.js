/*jshint esversion: 6 */

/**
 * ------------------------------------------------------------------------
 *  	Revealing Module Pattern
 *      functions and variables that begins with _ are private    
 * ------------------------------------------------------------------------
*/

/**
 * Album Template
 * 
 */
var albumTemplate = (function() {

	/**
	 * Template
	 * @return 
	 */   
	var list = (json) => {
		//console.log(json);
		return `
			<div class="album-list row">
			 ${json.map(albumItem => listItem({
			  albumItem,
			  cover: listCover(albumItem),
			  info: listHeader(albumItem)
			})).join('')}  
			</div>
		`;
	};	

	/**
	 * Template
	 * @param 
	 * @param 
	 * @return 
	 */
	var listItem = ({ albumItem, cover, info}) => {
  		return `
		 	<div class="album-list-item col-sm-6 col-lg-4 mb-2" data-id="${albumItem.id}" data-title="${albumItem.title}"> 
		 		<a class="album-detail-link" href="#" title="Oddjob - ${albumItem.title}">
			 		<div class="card">
							${cover}
							${info}			 	  	
			 	  	</div>
				</a>			 	  	
			</div>
		`;
	};

	/**
	 * Template
	 * @param 
	 * @return 
	 */
	var listCover = ({cover}) => {
		return `
		<div class="album-cover">
			<div class="album-cover-inner text-center">
 	  			<img class="img-fluid card-img-top " alt="" src="images/${cover}"/>
  			</div>
 	  	</div>	
		`;      
	};	

	/**
	 * Template
	 * @param 
	 * @return 
	 */
	var listHeader = ({title, year}) => {
		return `
		<div class="card-block">	
	  		<h3 class="album-title card-title mb-0">${title}</h3>
		  		<p class="card-text">
		  			<small class="album-year">${year}</small>
		  		</p>
		</div>  		
		`;      
	};	

	/**
	 * Template
	 * @return 
	 */   
	var albumItem = (albumData) => {
		console.log(albumData);
		return `
			<div class="album-detail row data-id="${albumData.id}">
				<div class="col-sm-10 push-sm-1 col-lg-8 push-lg-2 mb-5">
			 		<div class="card">
							${listCover(albumData)}
							${albumItemHeader(albumData)}			 	  	
			 	  	</div>				
			</div>
		`;
	};	

	/**
	 * Template
	 * @param 
	 * @return 
	 */
	var albumItemHeader = ({title, year, label}) => {
		return `
		<div class="card-block py-5">	
	  		<h3 class="album-title card-title mb-0">${title}</h3>
		  		<p class="card-text">
		  		<small>
		  			<span class="album-year">${year}</span>
		  			<span class="label">${label}</span>
		  		</small>	
		  		</p>	
		</div>  	
		<div class="tracks-container"></div>	
		`;      
	};	

	/**
	 * Template
	 * @return 
	 */
	var trackList = (trackData) => {
		//console.log(trackData);
		return `
			<ul class="track-list list-group">
				 ${trackData.map((track, index) => trackListItem({
				  track, index
				})).join('')}  			
			</ul>
		`;
	};

	/**
	 * Template
	 * @param 
	 * @param 
	 * @return 
	 */
	var trackListItem = ({ track, index }) => {
		console.log(track);
		let duration = track.duration > 0 || '' ? utils.secondsToMinutes(track.duration): '';
  		return `
		 	<li class="track-list-item list-group-item d-flex justify-content-start"> 	
		 		<div class="track-num">${index+1}</div> 	
	 			<div class="track-title">${track.name}</div>	
	 			<div class="duration ml-auto">${duration}</div>		
			</li>
		`;
	};	

	// Reveal public pointers to
    // private functions and properties
    return {
        list: list,
        albumItem: albumItem,
        trackList: trackList	
    };	
})();	