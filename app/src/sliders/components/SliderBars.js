import SliderBarsController from './SliderBarsController';

export default {
  name : 'sliderBars',
  config : {
    bindings         : {  selected: '<' },
    templateUrl      : 'src/sliders/components/SliderBars.tmpl.html',
    controller       : [ SliderBarsController ]
  }
};
