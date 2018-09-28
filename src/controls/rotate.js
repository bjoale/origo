import cu from 'ceeu';
import olRotate from 'ol/control/rotate';

const Rotate = function Rotate(options = {}) {
  let {
    target
  } = options;

  const icon = cu.Icon({
    icon: '#origo-compass',
    cls: 'o-icon-compass'
  });

  let rotateControl;
  let viewer;

  return cu.Component({
    onAdd(evt) {
      viewer = evt.target;
      if (!target) target = `${viewer.getMain().getMiscTools().getId()}`;
      const label = document.createElement('span');
      label.innerHTML = icon.render();
      rotateControl = new olRotate({
        label,
        tipLabel: ' ',
        target
      });

      this.render();
    },
    render() {
      viewer.getMap().addControl(rotateControl);
      this.dispatch('render');
    }
  });
};

export default Rotate;
