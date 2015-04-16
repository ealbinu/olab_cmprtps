$(function(){

    if($('.rotador').length){
        $('.rotador').slideme({
            arrows: true,
            autoslide : true,
            autoslideHoverStop : true,
            loop : true,
            transition : 'zoom',
            interval : 5000,
            resizable: {
                width: 320,
                height: 210
            }
        });
    }
  
    if($('.tooltipExec').length>0){
        $('.tooltipExec').tooltipster({
            contentAsHTML: true,
            trigger: 'click',
            autoClose : false,
            position: 'top-right',
            functionBefore: function(origin, continueTooltip) {
                var selec = $(this).attr('data-tooltip');
                var contenidohtml = $(selec).html();
                 origin.tooltipster('content', contenidohtml);
                 continueTooltip(); 
                 $('.close').click(function(){
                  $('.tooltipExec').tooltipster('hide');

                });
            }
        });
    }
    
    
    
    
    
    
    if($('.modalwindow').length>0){
        $('.modalwindow .close').click(function(){
            $('.modalwindow').hide();
        });
    }
    
   /*
   if($('.profilebar').length>0){                                        
        //$('.profilebar').clone().addClass('p_clone').appendTo('.wrapperRegistered');
        $('.profilebar').simpleSidebar({
                settings: { 
                    opener: ".openProfileBar",
                    wrapper: ".fullDocument"
                },
                sidebar: {
                    align: "left",
                    width: 190,
                    closingLinks: "a.ocultar",
                    style: {
                        zIndex: 9999
                    }
                }
            });
    }
		*/
	
		if($('.profilebar').length>0){                                        
        $('.profilebar').clone().addClass('p_clone').appendTo('.wrapperRegistered');
        $('.p_clone').simpleSidebar({
						settings: { 
								opener: ".openProfileBar",
								wrapper: ".wrapperRegistered"
						},
						sidebar: {
								align: "left",
								width: 190,
								closingLinks: "a.closeProfileBar",
								style: {
										zIndex: 9999
								}
						}
				}, hiderseemore());
    }

});



function hiderseemore(){
	$('.hider').hide();
    
    $('.seemore').click(function(e){
      e.preventDefault();
      $(this).toggleClass('on');
      if($(this).is('.on')){
        $(this).text('Ver menos ');
      } else {
        $(this).text('Ver más ');
      }
      var tosee = $(this).attr('data-display');
      $(tosee).children('.hider').slideToggle();
    });
}