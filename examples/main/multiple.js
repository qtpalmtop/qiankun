import { loadMicroApp } from '../../es';

let app;

function mount() {
  app = loadMicroApp(
    { name: 'purehtml', entry: '//localhost:7104', container: '#purehtml' },
    { sandbox: {  } },
  );
}

function unmount() {
  app.unmount();
}

document.querySelector('#mount').addEventListener('click', mount);
document.querySelector('#unmount').addEventListener('click', unmount);

loadMicroApp({ name: 'purehtml', entry: '//localhost:7104', container: '#purehtml' });
