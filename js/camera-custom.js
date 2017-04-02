jQuery(function(){
      
      jQuery('#camera_wrap_4').camera({
        height: '50%',
        minHeight: '300px',
        maxHeight: '800px',
        loader: 'bar',//pie.none,bar
        loaderColor: '#f33',
        loaderBgColor: '#fff',
        loaderPadding: 0,
        loaderStroke: 5,
        barPosition: 'bottom',//top
        pieDiameter: 38,
        piePosition: 'rightTop',//'rightTop', 'leftTop', 'leftBottom', 'rightBottom'
        portrait: false,
        pagination: false,
        playPause: false,
        thumbnails: false,
        hover: false,
        opacityOnGrid: true, 
        time: 1000,
        transPeriod: 3000,
        slideOn: 'random',
        navigation: true,
        navigationHover: false, 
        rows: 5,
        cols: 5,
        overlayer: true,
        slicedCols: 50,
        fx: 'scrollLeft',
        /*'random','simpleFade', 'curtainTopLeft', 'curtainTopRight', 'curtainBottomLeft', 'curtainBottomRight', 'curtainSliceLeft', 'curtainSliceRight', 'blindCurtainTopLeft', 'blindCurtainTopRight', 'blindCurtainBottomLeft', 'blindCurtainBottomRight', 'blindCurtainSliceBottom', 'blindCurtainSliceTop', 'stampede', 'mosaic', 'mosaicReverse', 'mosaicRandom', 'mosaicSpiral', 'mosaicSpiralReverse', 'topLeftBottomRight', 'bottomRightTopLeft', 'bottomLeftTopRight', 'bottomLeftTopRight', 'scrollLeft', 'scrollRight', 'scrollHorz', 'scrollBottom', 'scrollTop'*/
        mobileFx: '',//leave empty if you want to display the same effect.
        easing: 'easeInOutExpo',
        gridDifference: 10,
        alignment: 'center',
        imagePath: 'images/'
      });
      /**************/
 

    });
