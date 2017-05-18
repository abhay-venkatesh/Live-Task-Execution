import SliderBars from 'src/sliders/components/SliderBars';
import SlidersController from 'src/sliders/SlidersController';

export default angular
  .module("sliders", [ 'ngMaterial' ])
  .component(SliderBars.name, SliderBars.config)
  .controller("SlidersController", SlidersController);

