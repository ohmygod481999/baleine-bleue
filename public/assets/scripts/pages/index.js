jQuery.noConflict()(function($){
    var gridContainer = $('#cubeportfolio');
    gridContainer.imagesLoaded(function(){
        gridContainer.cubeportfolio({
            defaultFilter: '*',
            filters: '.vlt-portfolio-grid-filters',
            animationType: 'fadeOut',
            layoutMode: 'grid', //mosaic
                sortToPreventGaps: true,
            gapHorizontal: 30,
            gapVertical: 30,
            gridAdjustment: 'responsive',
            mediaQueries:
            [{
                width: 1170,
                cols: 3,
            }, {
                width: 991,
                cols: 3,
            }, {
                width: 767,
                cols: 2,
            }, {
                width: 575,
                cols: 1,
            }],
            displayType: 'default',
            displayTypeSpeed: 150,
        });
    });
});