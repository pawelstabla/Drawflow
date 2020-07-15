const tiles = new Map();

tiles.set(
  'databaseInput',
  {
    name: 'db-input',
    inputs: 0,
    outputs: 1,
    classoverride: 'node-input',
    data: {},
    html: 
    `
      <div class="node-box">
          <i class="fa fa-database"></i>
      </div>
    `
  }
);

tiles.set(
  'scriptInput',
  {
    name: 'script-input',
    inputs: 0,
    outputs: 1,
    classoverride: 'node-input',
    data: {},
    html: 
    `
      <div class="node-box">
          <i class="far fa-file-code"></i>
      </div>
    `
  }
);


tiles.set(
  'excelInput',
  {
    name: 'excel-input',
    inputs: 0,
    outputs: 1,
    classoverride: 'node-input',
    data: {},
    html:
    `<div class="node-box"><i class="far fa-file-excel"></i></div>`
  }
);

tiles.set(
  'pythonMiddle',
  {
    name: 'python-midle',
    inputs: 1,
    outputs: 1,
    classoverride: 'node-middle',
    data: {},
    html: 
    `
      <div class="node-box">
          <i class="fab fa-python"></i>
      </div>
    `
  }
);

tiles.set(
  'pythonMiddleMultiple',
  {
    name: 'python-midle-multiple',
    inputs: 4,
    outputs: 4,
    classoverride: 'node-middle',
    data: {},
    html: 
    `
      <div class="node-box">
          <i class="fab fa-python"></i>
      </div>
    `
  }
);
