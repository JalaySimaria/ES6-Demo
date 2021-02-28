import Controller from './common/controller';
import { $on } from './common/helpers';

import redCube from './examples/red';
import greenCube from './examples/green';
import blueCube from './examples/blue';

const controller = new Controller('#examples');

controller.registerComponent(redCube);
controller.registerComponent(greenCube);
controller.registerComponent(blueCube);

$on(window, 'load', controller.load.bind(controller));
