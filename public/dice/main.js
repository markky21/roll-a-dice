'use strict';

function dice_initialize(container, config) {
  var _throwRequestResult;
  var _diceSet = 'd4+d6+d8+d10+d12+d20+d100';

  var defaultConfig = {
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
    diceThrowResult$: null,
    diceBeforeThrow$: null,
  };

  var _config = Object.assign({}, defaultConfig, config);
  var containerBox = container.getBoundingClientRect();

  var canvas = $t.id(_config.idCanvas);
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

  var box = new $t.dice.dice_box(canvas, { w: containerBox.width, h: containerBox.height });
  box.animate_selector = false;

  $t.bind(window, 'resize', function() {
    canvas.style.width = container.innerWidth - 1 + 'px';
    canvas.style.height = container.innerHeight - 1 + 'px';
    box.reinit(canvas, { w: 500, h: 300 });
  });

  function show_selector() {
    box.draw_selector();
  }

  function before_roll(vectors, notation, callback) {
    _config.diceBeforeThrow$.next({ vectors: vectors, notation: notation, throwRequestResult: _throwRequestResult });
    // do here rpc call or whatever to get your own result of throw.
    // then callback with array of your result, example:
    // callback([2, 2, 2, 2]); // for 4d6 where all dice values are 2.
    callback(_throwRequestResult);
  }

  function notation_getter() {
    return $t.dice.parse_notation(_diceSet);
  }

  function after_roll(notation, result) {
    _throwRequestResult = null;
    _config.diceThrowResult$.next({
      result: result,
      diceSet: _diceSet,
      emit: true,
    });
  }

  function after_roll_no_emit(notation, result) {
    _throwRequestResult = null;
    _config.diceThrowResult$.next({
      result: result,
      diceSet: _diceSet,
      emit: false,
    });
  }

  box.bind_mouse(container, notation_getter, before_roll, after_roll);

  show_selector();

  _config.diceThrow$.subscribe(function(throwConfig) {
    _throwRequestResult = throwConfig.result;
    _diceSet = throwConfig.diceSet;

    box.start_throw(notation_getter, before_roll, after_roll_no_emit);
  });

  return {
    diceThrowResult$: _config.diceThrowResult$,
  };
}
