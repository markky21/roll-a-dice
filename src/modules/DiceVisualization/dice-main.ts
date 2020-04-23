import { $teal as $t } from './dice-three';

export function dice_initialize(container, config) {
  const defaultConfig = {
    idCanvas: 'canvas',
    idLabel: 'label',
    idSet: 'set',
    idSelectorDiv: 'selector_div',
    idControlPanel: 'control_panel',
    idInfoDiv: 'info_div',
    useTrueRandom: false,
    chromakey: false,
    useShadows: true,
    whiteDice: false,
    noresult: false,
    roll: false,
    diceThrow$: null,
    diceBeforeThrow$: null,
    diceAfterThrow$: null,
    requestNewThrow$: null,
  };

  const _config = Object.assign({}, defaultConfig, config);
  const containerBox = container.getBoundingClientRect();

  const canvas = $t.id(_config.idCanvas);
  canvas.style.width = containerBox.width - 1 + 'px';
  canvas.style.height = containerBox.height - 1 + 'px';

  $t.dice.use_true_random = _config.useTrueRandom;
  if (_config.chromakey) {
    $t.dice.desk_color = 0x00ff00;
  }
  $t.dice.use_shadows = _config.useShadows;
  if (_config.whiteDice) {
    $t.dice.dice_color = '#808080';
    $t.dice.label_color = '#202020';
  }

  const box = new $t.dice.dice_box(canvas, { w: containerBox.width, h: containerBox.height });
  box.animate_selector = false;

  $t.bind(window, 'resize', function() {
    canvas.style.width = container.innerWidth - 1 + 'px';
    canvas.style.height = container.innerHeight - 1 + 'px';
    box.reinit(canvas, { w: 500, h: 300 });
  });

  function show_selector() {
    box.draw_selector();
  }

  show_selector();

  box.bind_mouse_listener(container, function(vector, boost, dist) {
    _config.requestNewThrow$.next({ vectors: vector, boost: boost, dist: dist });
  });

  _config.diceThrow$.subscribe(function(throwConfig) {
    function notation_getter() {
      return $t.dice.parse_notation(prepareDiceSetToString(throwConfig.diceSet));
    }

    function before_roll(vectors, notation, callback) {
      _config.diceBeforeThrow$.next({ throwConfig: throwConfig });
      callback(prepareThrowResultToString(throwConfig.result));
    }

    function after_roll(notation, result) {
      _config.diceAfterThrow$.next({ throwConfig: throwConfig, result: result });
    }

    box.start_throw(
      notation_getter,
      before_roll,
      after_roll,
      throwConfig.diceThrowConfig.vectors,
      throwConfig.diceThrowConfig.boost,
      throwConfig.diceThrowConfig.dist
    );
  });

  return _config;
}

function prepareDiceSetToString(diceSet) {
  diceSet = objectSortByKeys(diceSet);
  let requestDiceSet = '';

  Object.keys(diceSet)
    .sort(compareDiceKey)
    .forEach(function(diceKey) {
      const amount = diceSet[diceKey];
      if (!amount) return;
      requestDiceSet = requestDiceSet + amount + diceKey + '+';
    });
  requestDiceSet = requestDiceSet.slice(0, -1);

  return requestDiceSet;
}

function prepareThrowResultToString(result) {
  result = objectSortByKeys(result);
  let requestResult = [];

  Object.keys(result)
    .sort(compareDiceKey)
    .forEach(function(diceKey) {
      requestResult = [...requestResult, ...result[diceKey]];
    });

  return requestResult;
}

function objectSortByKeys(obj) {
  const ordered = {};

  Object.keys(obj)
    .sort(compareDiceKey)
    .forEach(function(key) {
      ordered[key] = obj[key];
    });

  return ordered;
}

function compareDiceKey(a, b) {
  return parseInt(a.slice(1)) - parseInt(b.slice(1));
}
